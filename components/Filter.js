import React, {useEffect, useState} from 'react'
import { View, Text, Button, CheckBox, StyleSheet, ScrollView} from 'react-native'
import axios from 'axios';
import ListItem from './ListItem'



const Filter = ({ navigation }) => {
    const [fetchDataList, setFetchDataList] = useState([])
    useEffect( ()=> {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then(res => {
          const list = res.data;
          setFetchDataList(list.drinks)
        })
      }, [fetchDataList])
      
    return (
        <ScrollView>
            {fetchDataList.map( list => (
                <View style={{ direction: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <ListItem list={list} />
                </View>
            ))}
            <Button
                title="Apply"
                onPress={() => navigation.push('Main')}
            />
        </ScrollView>
      );
}

export default Filter
