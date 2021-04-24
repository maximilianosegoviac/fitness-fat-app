import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'

//db
import { rutinas } from '../data/rutina';
import Card from '../components/Card'
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function Detalle({ route, navigation }) {

    const { params } = route
    const { id } = params
    

    const mostrarInfo = () => {
        const currentData = rutinas.find(({ id:idData }) => id === idData)
        
        return {
            fristData: currentData,
            secondData: currentData.exercises
        }
    }
    
    const { fristData, secondData } = mostrarInfo()

    const { title } = fristData

    useEffect(() => {
        if(id !== 0)
            navigation.setOptions({title: title !== '' ? title : 'Fitness Fat'})
    }, [])


    return (
        <View style={styles.container}>
            
            <View  
                style={styles.contentCard}>

                <FlatList
                    showsVerticalScrollIndicator ={false}
                    showsHorizontalScrollIndicator={false}
                    data={secondData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <Card 
                        item={ item } 
                        navigation={navigation}
                        /> }
                />

            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',

    },
  
    
   
})