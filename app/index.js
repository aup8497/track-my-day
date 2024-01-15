import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { create } from "../screens/create.js";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import styled from "styled-components";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={SettingsScreen} />
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "relative",
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="add-circle-outline" color="grey" size={68} />
            </View>
          ),
        }}
        component={SettingsScreen}
      />
      <Tab.Screen name="Favorite" component={SettingsScreen} />
      <Tab.Screen name="random" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const index = () => {
  return <TabNavigator />;
};

export default index;

const styles = StyleSheet.create({});

// -> "/"
