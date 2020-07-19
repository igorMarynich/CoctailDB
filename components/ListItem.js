import React, {useState} from 'react'
import { View, Text, CheckBox, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    checkbox: {
      alignSelf: "center",
    },
  });
  

const ListItem = ({list}) => {
    const [isSelected, setSelection] = useState(true);
    return (
        <View style={{ direction: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{margin: 35}}>{list.strCategory}</Text>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
            />
        </View>
    )
}

export default ListItem