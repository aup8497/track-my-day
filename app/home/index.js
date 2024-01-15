import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Link href="/home/create">About</Link>
      {/* ...other links */}
      <Link href="/home/create">View user</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
