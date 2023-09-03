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
                    <Text style={[styles.text, { marginBottom: '10%' }]}>{text}</Text>
                    <View style={{ flex: 2, width: '100%' }}>
                        <View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
                            <TouchableOpacity style={[styles.button, { flex: 1, height: 120, width: 120, alignSelf: 'center', borderRadius: 100, margin: '5%' }]}>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}> 2 Players</Text>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}> 30 seconds</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { flex: 1, height: 120, width: 120, alignSelf: 'center', borderRadius: 100, margin: '5%', }]}>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}> 2 Players</Text>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}> 60 seconds</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
                            <TouchableOpacity style={[styles.button, { flex: 1, height: 120, width: 120, alignSelf: 'center', borderRadius: 100, margin: '5%' }]}>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}> 4 Players</Text>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}> 30 seconds</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { flex: 1, height: 120, width: 120, alignSelf: 'center', borderRadius: 100, margin: '5%', }]}>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}> 4 Players</Text>
                                <Text style={{ fontSize: 15, fontWeight: '900' }}> 60 seconds</Text>
                            </TouchableOpacity>
                        </View>
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