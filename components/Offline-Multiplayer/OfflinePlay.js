import { View, Text, StyleSheet, TextInput, Dimensions, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputList from './InputList';
import WarningMessage from '../Warning/Warning';
const windowHeight = Dimensions.get('window').height;

const OfflinePlay = ({ navigation, route }) => {

    const [gameScreenHeight, setGameScreenHeight] = useState(5 * windowHeight / 8); // Adjust the initial height as needed

    // Function to handle keyboard events
    const handleKeyboardWillShow = () => {
        setGameScreenHeight(2 * windowHeight / 8); // Adjust the height when the keyboard is shown
    };

    const handleKeyboardWillHide = () => {
        setGameScreenHeight(5 * windowHeight / 8); // Restore the original height when the keyboard is hidden
    }

    useEffect(() => {
        const keyboardWillShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardWillShow);
        const keyboardWillHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardWillHide);

        // Remove listeners when the component is unmounted
        return () => {
            keyboardWillShowListener.remove();
            keyboardWillHideListener.remove();
        };
    }, []);

    const { p1, p2, moveDuration } = route.params;
    const [timer1, setTimer1] = useState(moveDuration)
    const [timer2, setTimer2] = useState(moveDuration)

    const [turnP1, setTurnP1] = useState(true)
    const [turnP2, setTurnP2] = useState(false)

    const [DATA, setDATA] = useState([])
    const [input, setInput] = useState("")

    const [warning, setWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState("Something went very wrong");

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (turnP1) {
                if (timer1 > 0) {
                    setTimer1(timer1 - 1);
                } else {
                    setWarningMessage(p2.toUpperCase() + " WON THE GAME !!!");
                    setWarning(true);
                }
            } else if (turnP2) {
                if (timer2 > 0) {
                    setTimer2(timer2 - 1);
                } else {
                    setWarningMessage(p1.toUpperCase() + " WON THE GAME !!!");
                    setWarning(true);
                }
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timer1, timer2, turnP1, turnP2]);

    const hideWarning = function () {
        setWarning(false);
        if (turnP1 && timer1 === 0) {
            navigation.goBack();
        }
        if (turnP2 && timer2 === 0) {
            navigation.goBack();
        }
    }

    const validInput = () => {
        const entry = input.toUpperCase().trim();
        if (DATA.length && DATA[0].data[0][DATA[0].data[0].length - 1] !== entry[0]) {
            setWarningMessage("Word must start with the same character previous word ended with.");
            setWarning(true);
            return false;
        }
        else if (DATA.some(item => item.data[0] === entry)) {
            setInput("");
            setWarningMessage("Already used");
            setWarning(true);
            return false;
        }
        return true;
    }

    const handleUserInput = () => {

        if (!validInput()) return;

        setDATA([{ index: DATA.length, data: [input.toUpperCase().trim()] }, ...DATA]);
        setInput("");
        if (turnP1) setTimer1(timer1 + moveDuration);
        else setTimer2(timer2 + moveDuration);
        setTurnP1(!turnP1);
        setTurnP2(!turnP2);
    }

    return (
        <View style={styles.fullScreen}>
            {/* Top Players Bar */}
            <View style={styles.players}>
                <View style={styles.player}>
                    <View style={styles.playerName}>
                        <Text style={styles.text}>🦹‍♀️ {p1}</Text>
                        {turnP1 && <Text style={styles.turn}> 🪄</Text>}
                    </View>
                    <View style={styles.playerTime}>
                        <Text style={[styles.text, styles.timer]}> {timer1}</Text>
                    </View>
                </View>
                <View style={styles.player}>
                    <View style={styles.playerName}>
                        <Text style={styles.text}>🧙‍♀️ {p2}</Text>
                        {turnP2 && <Text style={styles.turn}> 🪄</Text>}
                    </View>
                    <View style={styles.playerTime}>
                        <Text style={[styles.text, styles.timer]}> {timer2}</Text>
                    </View>
                </View>
            </View>


            {/* Middle Game Screen */}
            <View style={[styles.gameScreen, { height: gameScreenHeight }]}>
                <InputList data={DATA} />
            </View>

            <WarningMessage message={warningMessage} warning={warning} hideWarning={hideWarning} />

            {/* Input Box */}
            <View style={styles.inputScreen}>
                <TextInput
                    style={[styles.inputBox, { flex: 2 }]}
                    placeholder={turnP1 ? p1 + "'s turn" : p2 + "'s turn"}
                    placeholderTextColor={'#1d1d1d'}
                    value={input}
                    onChangeText={text => setInput(text)}
                />
                <TouchableOpacity onPress={handleUserInput} style={{ flex: 1, backgroundColor: 'aqua', justifyContent: 'center', height: '100%' }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    players: {
        height: windowHeight / 6,
        backgroundColor: 'aqua',
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15
    },
    player: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#1d1d1d',
        padding: 2,
        margin: 1,
    },
    playerName: {
        flex: 3,
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 20,
        justifyContent: 'left',
        flexDirection: 'row'
    },
    playerTime: {
        flex: 1
    },
    gameScreen: {
        backgroundColor: '#1d1d1d',
        margin: 20,
        borderRadius: 50,
        overflow: 'hidden',
        padding: 30
    },
    inputScreen: {
        height: windowHeight / 12,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    text: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '900',
        paddingLeft: 15,
    },
    timer: {
        fontSize: 35,
        paddingLeft: 0,
        textAlign: 'right',
        paddingRight: 10
    },
    turn: {
        flex: 1,
        textAlign: 'right',
        fontSize: 25,
        paddingRight: 10
    },
    inputBox: {
        flex: 1,
        borderWidth: 10,
        borderRadius: 100,
        borderColor: 'red',
        paddingLeft: 30,
        color: '#1d1d1d',
        backgroundColor: 'white',
        fontSize: 20,
        fontWeight: '700'
    },
})

export default OfflinePlay