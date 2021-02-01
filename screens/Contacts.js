import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Colors from '../utils/colors';
import ContactListItem from '../components/contactListItem'
const contacts =[
    {id:'1',name:'Aqida',phone:'079544322',email:'aqida@gmail.com'},
    {id:'2',name:'Sodabeh',phone:'07954445',email:'sodabeh@gmail.com'},
    {id:'3',name:'Naman',phone:'079544678',email:'naman@gmail.com'},
    {id:'4',name:'Atefah',phone:'07978990',email:'atefah@gmail.com'},
    {id:'5',name:'Fatemah',phone:'079568982',email:'fatemah@gmail.com'},
    {id:'6',name:'Lila',phone:'0795799992',email:'lila@gmail.com'},
    {id:'7',name:'Fareshteh',phone:'0795480002',email:'fareshteh@gmail.com'},
    {id:'8',name:'Froza',phone:'079544322',email:'frozan@gmail.com'},
    {id:'9',name:'Nahid',phone:'0795799322',email:'nahid@gmail.com'},
]

export default function Contacts(){
    return (
      <FlatList 
        data={contacts}
        keyExtractor={(item)=>{item.id}}
        renderItem={({item}) =>{
            return <ContactListItem name={item.name} phone={item.phone }/>
        }}
      />

    )

}
const styles =StyleSheet.create({
    
    
})