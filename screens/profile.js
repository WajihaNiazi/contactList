import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../utils/colors';
import ContactThumbnail from '../components/contactThumbnail';
import DetailListItem from '../components/DetailListItem';
export default function Profile({name,phone,email}){
    return (
        <View style={styles.container} >
            <View style={styles.thumbnailSection}>
                <ContactThumbnail name={name} phone={phone}/>
            </View>
            <View style={styles.detailSection}>
                <DetailListItem icon="email" title="Email" subTitle={email} />
                <DetailListItem icon="phone" title="Work" subTitle={phone} />
            </View>
        </View>

    )

}
const styles =StyleSheet.create({
    container:{
        flex:1
    },
    thumbnailSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.primary,
        borderBottomWidth:1,
        borderBottomColor:Colors.secondary
    },
    detailSection:{
        flex:1,
        paddingTop:10
    }
})