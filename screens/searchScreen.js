import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Colors from '../utils/colors';
export default function SearchScreen(){
    return (
        <View  style={styles.searchContainer}>
           <TextInput placeholder="Search...." style={styles.searchInput}/>
        </View>
    )

}
const styles =StyleSheet.create({
   searchContainer:{
       backgroundColor:Colors.secondary,
   },
   searchInput:{
       paddingHorizontal:20,
       paddingVertical:10,
       margin:20,
       backgroundColor:Colors.white,
       borderRadius:10
   }
   
})