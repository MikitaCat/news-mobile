import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={40} color="#0000ff" />
      <Text style={{ marginTop: 15 }}>Loading</Text>
    </View>
  );
};
