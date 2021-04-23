import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem/index";
import styles from "../CarList/styles";
import cars from "./cars";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height - 15}
      />
    </View>
  );
};

export default CarsList;
