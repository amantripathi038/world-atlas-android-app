import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import WarningMessage from '../Warning/Warning';

const ModalComponent = ({ modalVisible, hideModal, text, navigation }) => {
    const [warning, setWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState("Something went very wrong");
    const hideWarning = function () {
        setWarning(false);
    }

    const [p1, setP1] = useState("")
    const [p2, setP2] = useState("")
    const [moveDuration, setMoveDuration] = useState("")

    const handleP1Change = (text) => {
        setP1(text);
    };

    const handleP2Change = (text) => {
        setP2(text);
    };

    const handleMoveDurationChange = (text) => {
        const flag = !isNaN(text)
        if (flag) setMoveDuration(text);
        else {
            setMoveDuration("")
        };
    };

    const handleLetsPlay = () => {
        if (!p1) {
            setWarningMessage("Player 1 can't be empty.");
            setWarning(true);
            return;
        }
        if (!p2) {
            setWarningMessage("Player 2 can't be empty.");
            setWarning(true);
            return;
        }
        if (!moveDuration) {
            setWarningMessage("Move duration can't be empty.");
            setWarning(true);
            return;
        }
        if (isNaN(moveDuration)) {
            setWarningMessage("Move duration must be a number.");
            setWarning(true);
            return;
        }
        if (parseInt(moveDuration) < 10 || parseInt(moveDuration) > 120) {
            setWarningMessage("Must be between 10-120.");
            setWarning(true);
            return;
        }
        const game = {
            p1: p1, p2: p2, moveDuration: parseInt(moveDuration)
        }
        navigation.navigate('Offline Multiplayer', game)
        hideModal();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={hideModal}
        >
            <WarningMessage message={warningMessage} warning={warning} hideWarning={hideWarning} />
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={hideModal} style={{ alignSelf: 'flex-end', marginTop: -10, borderWidth: 2, borderColor: 'white', width: 35, height: 35, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>❌</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text, { marginBottom: '10%' }]}>{text}</Text>
                    <View style={{ flex: 2, width: '100%' }}>
                        <TextInput
                            style={[styles.inputBox, { marginBottom: '5%' }]}
                            placeholder="Player 1"
                            placeholderTextColor={'white'}
                            value={p1}
                            onChangeText={handleP1Change}
                        />
                        <TextInput
                            style={[styles.inputBox, { marginBottom: '5%' }]}
                            placeholder="Player 2"
                            placeholderTextColor={'white'}
                            value={p2}
                            onChangeText={handleP2Change}
                        />
                        <TextInput
                            style={[styles.inputBox, { marginBottom: '5%' }]}
                            placeholder="Enter duration per move"
                            placeholderTextColor={'white'}
                            value={moveDuration}
                            onChangeText={handleMoveDurationChange}
                        />
                        <TouchableOpacity style={[styles.button, { height: 55, width: '80%', alignSelf: 'center' }]} onPress={handleLetsPlay}>
                            <Text style={{ fontSize: 15, fontWeight: '900' }}>Let's Play !</Text>
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
        height: 435,
        width: 320,
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
        marginRight: 10,
        color: 'white'
    },
    button: {
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ModalComponent;