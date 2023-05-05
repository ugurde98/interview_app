import { Image, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { apiConfig } from "../apiConfig";
import axios from "axios";
import {
  ActivityIndicator,
  Divider,
  MD2Colors,
  Text,
} from "react-native-paper";
import Moment from "moment";

const { height, width } = Dimensions.get("window");

const ComicDetailsScreen = (props) => {
  const { itemId } = props.route.params;
  console.log("itemId: ", itemId);

  const [data, setData] = useState(null);
  //   const [charData, setCharData] = useState(null);

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
  //   const charService = () => {
  //     let config = {
  //       method: "get",
  //       maxBodyLength: Infinity,
  //       url: `${apiConfig.apiUrl}v1/public/comics/${itemId}/characters?apikey=${apiConfig.apiKey}&hash=${apiConfig.hash}&ts=${apiConfig.ts}`,
  //       headers: {},
  //     };
  //     axios
  //       .request(config)
  //       .then((response) => {
  //         setCharData(response.data);
  //         console.log('response.data.: ', response.data);
  //       })
  //       .catch((error) => {});

  //   };
  //   useEffect(() => {
  //     charService()
  //   }, []);

  const DetailComponent = ({ data }) => {
    // console.log("data: ", data.dates);
    return (
      <ScrollView>
        <Text style={{ margin: 10 }} variant="headlineMedium">
          {data.title}
        </Text>
        <Divider />
        <View style={{ flexDirection: "row" }}>
          <Image
            resizeMode="stretch"
            source={{
              uri: data.thumbnail.path + "." + data.thumbnail.extension,
            }}
            style={{
              width: width * 0.5,
              height: width * 0.64,
              marginTop: 10,
              marginLeft: 5,
            }}
          />
          <View style={{ margin: 10, width: width * 0.46 }}>
            {data.dates.map((item, index) => (
              <View style={{ marginVertical: 5 }} key={index}>
                <Text variant="titleMedium">
                  {item.type.charAt(0).toUpperCase() +
                    item.type
                      .slice(1)
                      .replace(/[A-Z]/g, (match) => ` ${match.toUpperCase()}`)}
                </Text>
                <Text variant="titleMedium">
                  {Moment(item.date).format("ll")}
                </Text>
                <Divider />
              </View>
            ))}
          </View>
        </View>
        <Divider style={{ marginTop: 10 }} />

        <View style={{ padding: 10 }}>
          <Text style={{ margin: 10 }} variant="headlineSmall">
            Description
          </Text>
          <Divider />
          {data.textObjects.map((item) => (
            <View>
              <Text variant="labelLarge">{item.text}</Text>
              <Divider />
            </View>
          ))}
          <ScrollView horizontal>
            {data.images.map((item) => (
              <Image
                resizeMode="stretch"
                source={{
                  uri: item.path + "." + item.extension,
                }}
                style={{
                  width: width * 0.95,
                  height: height * 0.3,
                  marginTop: 10,
                  marginLeft: 5,
                }}
              />
            ))}
          </ScrollView>
        </View>
        <Text style={{ marginTop: 10, marginLeft: 10 }} variant="headlineSmall">
          Creators
        </Text>
        <Divider style={{ marginTop: 10 }} />

        {data.creators.items.map((item, index) => (
          <Text style={{ marginLeft: 10 }} key={index} variant="titleMedium">
            {item.name} :{" "}
            {item.role.charAt(0).toUpperCase() +
              item.role
                .slice(1)
                .replace(/[A-Z]/g, (match) => ` ${match.toUpperCase()}`)}
          </Text>
        ))}
        <Divider style={{ marginTop: 10 }} />
        <View>
          <Text
            style={{ marginTop: 10, marginLeft: 10 }}
            variant="headlineSmall"
          >
            Characters
          </Text>
          <Divider style={{ marginTop: 10 }} />
          {data.characters.items.map((item) => (
            <Text style={{ marginLeft: 10 }} variant="titleMedium">
              {item.name}
            </Text>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {data ? (
        <DetailComponent data={data} />
      ) : (
        <ActivityIndicator
          animating={true}
          color={MD2Colors.red800}
          type="large"
        />
      )}
    </View>
  );
};

export default ComicDetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
});
