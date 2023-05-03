import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { apiConfig } from "../apiConfig";
import axios from "axios";

const ComicDetailsScreen = (props) => {
  const { itemId } = props.route.params;
  console.log('itemId: ', itemId);

  const [data, setData] = useState(null);
  console.log('data: ', data);

  const service = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiConfig.apiUrl}v1/public/comics/${itemId}?apikey=${apiConfig.apiKey}&hash=${apiConfig.hash}&ts=${apiConfig.ts}&limit=10`,
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        setData(response.data.data.results[0]);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    service();
  }, []);
  return (
    <View style={styles.container}>
      <Text>ComicDetailsScreen</Text>
      {data ?<Text>{data.title}</Text> :<Text>asda</Text>}

    </View>
  );
};

export default ComicDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
