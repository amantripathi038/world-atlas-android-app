import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './../../styles'
import { Audio } from 'expo-av'
import ModalComponent from '../Modal/modal'
import ModalComponent2 from '../Modal/modal2'
import ModalComponent3 from '../Modal/modal3'

const HomeButton = ({ text, navigation }) => {

    const [sound, setSound] = React.useState();

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('./../../assets/sounds/buttonClick.mp3'));
        setSound(sound);
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        playSound();
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
        playSound();
    };

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={showModal}>
                <Text style={styles.buttonText}>{text}</Text>
                {text == "Online Multiplayer" && <ModalComponent modalVisible={modalVisible} hideModal={hideModal} text={text} />}
                {text == "Offline Multiplayer" && <ModalComponent2 modalVisible={modalVisible} hideModal={hideModal} text={text} navigation={navigation} />}
                {text == "Online Random" && <ModalComponent3 modalVisible={modalVisible} hideModal={hideModal} text={text} />}
            </TouchableOpacity>
        </View>
    )
}

export default HomeButton