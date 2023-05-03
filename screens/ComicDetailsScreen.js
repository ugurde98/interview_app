import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComicDetailsScreen = (props) => {
    const {itemId}=props.route.params
    console.log('itemId: ', itemId);
  return (
    <View>
      <Text>ComicDetailsScreen</Text>
    </View>
  )
}

export default ComicDetailsScreen

const styles = StyleSheet.create({})