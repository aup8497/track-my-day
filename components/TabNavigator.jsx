import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
// import { Redirect } from "expo-router";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { SettingsScreen, HomeScreen } from "../screens/Feed.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const myIcon = <Icon name="plus" size={30} color="#900" />;

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          tabBarStyle: "relative",
          headerShown: false,
          tabBarStyle: { height: 100 },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="equal-box"
                color={color}
                size={size}
              />
            ),
          }}
          name="Feed"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Calendar"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-month-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <SafeAreaView style={styles.createButton}>{myIcon}</SafeAreaView>
            ),
          }}
          component={SettingsScreen}
        />
        <Tab.Screen
          name="Overview"
          component={SettingsScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="google-analytics"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={SettingsScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  createButton: {
    height: 68,
    width: 68,
    borderRadius: 68,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
});
