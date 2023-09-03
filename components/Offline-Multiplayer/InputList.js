import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList
} from 'react-native';

const InputList = ({ data }) => {
    return (
        <SafeAreaView style={styles.container}>
            {data && <FlatList
                data={data}
                renderItem={(props) => {
                    return (
                        <View style={styles.item}>
                            <Text style={props.item.index % 2 ? styles.title2 : styles.title1}>{props.item.data}</Text>
                        </View>
                    )
                }}
            />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 1,
        marginVertical: 8
    },
    title1: {
        alignSelf: 'flex-end',
        fontSize: 24,
        textAlign: 'right',
        paddingRight: 20,
        backgroundColor: 'aqua',
        borderRadius: 25,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: '65%'
    },
    title2: {
        fontSize: 24,
        color: 'white',
        textAlign: 'left',
        paddingLeft: 20,
        backgroundColor: 'green',
        borderRadius: 25,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: '65%'
    }
});

export default InputList;