import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';
import { apiConfig } from '../apiConfig';

const HomeScreen = () => {
    const service=() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiConfig.apiUrl}v1/public/comics?apikey=${apiConfig.apiKey}&hash=${apiConfig.hash}&ts=${apiConfig.ts}&limit=1`,
            headers: { }
          };
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
    }
    useEffect(() => {
        service()
    }, [])
    
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})