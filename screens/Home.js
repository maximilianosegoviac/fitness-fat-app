import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

//data
import { rutinas } from '../data/rutina'


export default function Home({navigation}) {
    const abrirDetalle = id => {
        navigation.navigate('Detalle', {id})
    }

    const renderCard = ({ item }) => <TouchableOpacity 
        key={item.id} 
        onPress={() => abrirDetalle(item.id)}
        style={styles.card}>
        <Image
            style={styles.img}
            source={item.img}
        />
        <Text style={styles.titleEj}>{item.title}</Text>
        <Text  style={styles.desc} >{item.description}</Text>

        <View style={styles.play}>
            <Icon
                name='play'
                type='font-awesome'
                color='#0F0F0F'
            />
    
            <Text style={styles.time}>{item.time} min</Text>
        </View>
    </TouchableOpacity > 

    return (
        <View style={styles.container}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>
                    Selecciona una rutina
                </Text>
            </View>

            <View 
                /* showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}  */
                style={styles.contentCard}>

                  <FlatList
                  showsVerticalScrollIndicator ={false}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}

                    data={rutinas}
                    renderItem={renderCard}
                />

            </View>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 90,
        backgroundColor: '#FFFFFF',

    },
    contentTitle: {
        marginTop:  20,

        width: 200
    },

    title:{
        fontWeight:'bold',
        fontSize: 30,
        color: 'black'
        
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
        width: 95,

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
    }
})