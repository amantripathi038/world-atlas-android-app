import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';

const ModalComponent = ({ modalVisible, hideModal, text }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={hideModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={hideModal} style={{ alignSelf: 'flex-end', marginTop: -10, borderWidth: 2, borderColor: 'white', width: 35, height: 35, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>❌</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{text}</Text>
                    <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Game ID"
                            placeholderTextColor={'white'}
                        />
                        <TouchableOpacity style={[styles.button, { flex: 1 }]}>
                            <Text style={{ fontSize: 15, fontWeight: '900' }}>Join Game</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'aqua', margin: '4%', fontSize: 18, fontWeight: '900' }}> OR </Text>
                    <View style={{ flex: 2, width: '100%' }}>
                        <TextInput
                            style={[styles.inputBox, { marginBottom: '2%' }]}
                            placeholder="Enter you name"
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={[styles.inputBox, { marginBottom: '2%' }]}
                            placeholder="Enter duration per move"
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={[styles.inputBox, { marginBottom: '2%' }]}
                            placeholder="Enter number of players"
                            placeholderTextColor={'white'}
                        />
                        <TouchableOpacity style={[styles.button, { height: 55, width: '80%', alignSelf: 'center' }]}>
                            <Text style={{ fontSize: 15, fontWeight: '900' }}>Create Game</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        height: 450,
        width: 350,
        padding: 20,
        backgroundColor: 'rgba(29, 29, 29, 1)',
        borderRadius: 10,
        alignItems: 'center'
    },
    text: {
        color: 'aqua',
        fontSize: 25,
        marginTop: 5,
        fontWeight: 'bold'
    },
    inputBox: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 10
    },
    button: {
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ModalComponent;
