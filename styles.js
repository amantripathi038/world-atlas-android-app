import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        opacity: 0.9
    },
    button: {
        backgroundColor: 'rgba(29, 29, 29, 1)', // You can customize the button's appearance here
        padding: 15,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        width: 300,
        marginBottom: 25
    },
    buttonText: {
        color: 'aqua', // You can customize the text color here
        fontSize: 26,
        fontWeight: 'bold'
    },
});

module.exports = styles;