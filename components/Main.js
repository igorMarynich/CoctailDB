import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Image, ActivityIndicator, Header, Button } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 101,
    height: 100,
    margin: 20,
  },
  textWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    padding: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    textAlignVertical: 'center',
    color: '#7E7E7E',
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

function Main({ navigation }) {
    const [fetchData, setFetchData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

  useEffect( ()=> {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink`)
    .then(res => {
      const persons = res.data;
      setFetchData(persons.drinks)
    })
  }, [fetchData])
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Filters"
          onPress={() => navigation.navigate('Filter')}
        />
         <SafeAreaView>
      <ScrollView
        onScrollBeginDrag={() => setIsLoading(true)}
        onScrollEndDrag={() => setIsLoading(false)}>
        {isLoading && <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#00ff00" />
              </View>}
        {fetchData.map( data => (
            <View style={styles.card} key={data.idDrink}>
              <Image source={{ uri: data.strDrinkThumb}} style={styles.image} />
              <View style={styles.textWrap}>
                <Text style={styles.title}>{data.strDrink}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
      </View>
    );
  }

export default Main;
