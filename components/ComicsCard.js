import { StyleSheet ,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';


const {height, width} = Dimensions.get('window');
const ComicsCard = ({item}) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ComicDetails",{itemId:item.item.id})}>

    <Card style={styles.card}>
    <Card.Cover source={{ uri: item.item.thumbnail.path+"."+item.item.thumbnail.extension }} />
    <Card.Content>
      <Text numberOfLines={2} variant="titleLarge">{item.item.title} </Text>
      <Text numberOfLines={3} variant="bodyMedium">{item.item.description ?item.item.description :"Description Not Found"}</Text>
    </Card.Content>
  </Card>
    </TouchableOpacity>
  )
}

export default ComicsCard

const styles = StyleSheet.create({
    card:{
        width:width*0.48,
        height:height*0.35 ,
        margin:width*0.01
    }
})