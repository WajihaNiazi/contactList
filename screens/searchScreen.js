import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';
import Colors from '../utils/colors';
import * as SQLite from "expo-sqlite";
import ContactListItem from "../components/contactListItem";
const db = SQLite.openDatabase('contacts.db');

export default function SearchScreen(){
    const [allContacts,setAllContacts] = useState([]);
    const [filteredContacts,setFilteredContacts] = useState([]);
    useEffect(()=>{
        db.transaction(tx =>{
            tx.executeSql('select * from contact',[],(tx,{rows})=>{
                var data = [];
                for (let i = 0; i < rows.length; i++) {
                    data.push(rows[i]);
                }
                setAllContacts(data);
            })
        })
    })
    const searchContacts = (text)=>{
        const filtertext= text.toLowerCase()
        const newContacts = allContacts.filter((contact)=>{
            const item = contact.name.toLowerCase();
            return item.indexOf(filterText) > -1
        })
        setFilteredContacts(newContacts);
        if (text.length <1) {
            setFilteredContacts([])
        }
    }
    return (
        <View>
            <View  style={styles.searchContainer}>
            <TextInput placeholder="Search...." style={styles.searchInput} onChangeText={(text)=> searchContacts(text)}/>
            </View>
            {filteredContacts.length >0 ? <FlatList 
                data={filteredContacts}
                keyExtractor={(item)=>{item.id}}
                renderItem={({item}) =>{
                    return <ContactListItem name={item.name} phone={item.phone }  onPress={()=> navigation.navigate('Profile',{item:item})} onDeleteContact={()=>{deleteContact(item.id)}}/>
                }}
            /> : <View><Text>Noting to display</Text></View>}
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