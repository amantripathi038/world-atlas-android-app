import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const WarningMessage = ({ message, warning, hideWarning }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            hideWarning();
        }, 5000); // Auto close after 5 seconds

        return () => {
            clearTimeout(timer); // Clear the timer if the component unmounts
        };
    }, []);

    return (
        <Modal
            transparent
            animationType="fade"
            visible={warning}
            onRequestClose={() => {
                hideWarning();
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.container}>
                    <Text style={styles.heading}>{"Warning"}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => {
                            hideWarning();
                        }}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        height: '35%',
        width: '80%'
    },
    message: {
        flex: 4,
        color: 'black',
        fontSize: 18,
        textAlign: 'left'
    },
    closeButton: {
        padding: 12,
        backgroundColor: 'red',
        borderRadius: 8,
        alignSelf: 'center'
    },
    closeButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    heading: {
        flex: 2,
        textAlign: 'center',
        fontSize: 30,
        color: 'goldenrod',
        fontWeight: '900'
    }
});

export default WarningMessage;