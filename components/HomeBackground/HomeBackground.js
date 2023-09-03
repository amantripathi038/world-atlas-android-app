import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, View, AppState, Animated, Easing, StyleSheet } from 'react-native';
import styles from './../../styles'
import HomeButton from '../HomeButton/HomeButton';
const source = require("./Home.jpg")
import { Audio } from 'expo-av';

const TITLE = "World Atlas";

const HomeBackground = ({ navigation }) => {
    const sound = useRef(null);

    useEffect(() => {
        async function loadAndPlaySound() {
            if (sound.current) return;
            sound.current = new Audio.Sound();

            try {
                await sound.current.loadAsync(
                    require('./../../assets/sounds/homeSound.mp3')
                );
                await sound.current.playAsync();
                sound.current.setOnPlaybackStatusUpdate(async (status) => {
                    if (status.didJustFinish) {
                        await sound.current.replayAsync();
                    }
                });
            } catch (error) { }
        }

        async function unloadSound() {
            if (sound.current) {
                await sound.current.stopAsync();
                await sound.current.unloadAsync();
                sound.current = null;
            }
        }

        async function handleAppStateChange(nextAppState) {
            if (nextAppState === 'active') {
                await loadAndPlaySound();
            } else {
                await unloadSound();
            }
        }
        AppState.addEventListener('change', handleAppStateChange);
        return async () => {
            if (sound.current) {
                await sound.current.stopAsync();
                await sound.current.unloadAsync();
                sound.current = null;
            }
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    const [fontSize] = useState(new Animated.Value(40));

    useEffect(() => {
        const animateText = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(fontSize, {
                        toValue: 55,
                        duration: 1000,
                        easing: Easing.bounce,
                        useNativeDriver: false,
                    }),
                    Animated.timing(fontSize, {
                        toValue: 40,
                        duration: 1000,
                        easing: Easing.bounce,
                        useNativeDriver: false,
                    }),
                ])
            ).start();
        };

        animateText();
    }, [fontSize]);

    return (
        <View style={styles.container}>
            <Image source={source} style={styles.homeImage} />

            <Animated.Text style={[style.text, { fontSize: fontSize }]}>{TITLE}</Animated.Text>
            <View style={{ flex: 5 }}>
                <HomeButton text="Online Multiplayer" navigation={navigation} />
                <HomeButton text="Offline Multiplayer" navigation={navigation} />
                <HomeButton text="Online Random" navigation={navigation} />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    text: {
        flex: 4,
        textAlignVertical: 'center',
        fontWeight: '900',
        marginTop: 50,
        marginBottom: -50,
        color: '#1d1d1d'
    }
});


export default HomeBackground;