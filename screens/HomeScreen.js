import {  FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import axios from "axios";
import { apiConfig } from "../apiConfig";
import ComicsCard from "../components/ComicsCard";


const HomeScreen = () => {
  const [data, setData] = useState(null);
  const service = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiConfig.apiUrl}v1/public/comics?apikey=${apiConfig.apiKey}&hash=${apiConfig.hash}&ts=${apiConfig.ts}&limit=30`,
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        setData(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    service();
  }, []);

  return (
    // <ComicsCard/>
    <View style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          renderItem={(item) => <ComicsCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      ) : (
        <ActivityIndicator animating={true} color={MD2Colors.red800} type="large" />

      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    marginTop:10
  }
});
