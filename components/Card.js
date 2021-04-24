import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function Card({item}) {

    return (
        <TouchableOpacity 
            style={styles.card}>
                <Image
                    style={styles.img}
                    source={item.img}
                />
                <Text style={styles.titleEj}>{item.title}</Text>
                <Text  style={styles.desc} >{item.description}</Text>

                <View style={styles.info}>
                    <Text style={styles.textInfo}>Series: {item.series}</Text>
                    <Text style={styles.textInfo}>Repeticiones: {item.repetitions}</Text>
                     
                </View>

                <View style={styles.play}>
                   
                    <Text style={styles.time}>{item.time} min</Text>
                </View>
    </TouchableOpacity > 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',

    },
    contentTitle: {
        marginTop:  20,

        width: 200
    },

    title:{
        fontWeight:'bold',
        fontSize: 30,
        color: 'black',
    },

    /* contentCard */
    contentCard: {
        marginTop: 20,

    },

    card:{
        position: 'relative',
        height: 180,
        marginBottom: 20,
        borderRadius: 20,
        width: '100%',
    },

    img:{
        width: '100%',
        borderRadius: 20,
        height: '100%',
    },
    play:{
        position: 'absolute',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#ffff',
        height: 40,
        bottom: 20,
        left: 20,
        width: 60,

    },

    titleEj: {
        position: 'absolute',
        color: '#fff',
        fontWeight: 'bold',
        top: 20,
        left: 20,
        fontSize: 22
    },

    desc: {
        position: 'absolute',
        color: '#fff',
        top: 50,
        left: 20,
        fontSize: 18
    },

    time: {
        fontWeight: 'bold',
        fontSize: 15
    },

    info:{
        position: 'absolute',
        top: 48,
        left: 20,
    },
    textInfo:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 'bold',

    }
})