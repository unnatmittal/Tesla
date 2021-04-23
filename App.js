import React from "react";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarList/index";
import Header from "./components/Header";

export default function App() {
  console.log("done ho gya");
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      {/* <CarItem
        name={"Model S"}
        tagline={"Order Online for"}
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/ModelS.jpeg")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
