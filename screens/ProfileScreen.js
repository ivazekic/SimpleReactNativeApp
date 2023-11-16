import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const ProfileScreen = () => {
  const firstName = "Iva";
  const lastName = "Zekić";
  const profileImage = require("../assets/profile_image.png");

  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.name}> {firstName} </Text>
      <Text style={styles.name}> {lastName} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Half of the width/height to make it a circle
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
