import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import BibleStudyScreen from "./screens/BibleStudyScreen";
import SermonNotesScreen from "./screens/SermonNotesScreen";
import PrayerWallScreen from "./screens/PrayerWallScreen";
import FaithQuestScreen from "./screens/FaithQuestScreen";
import EventsScreen from "./screens/EventsScreen";
import CommunitiesScreen from "./screens/CommunitiesScreen";
import MessagesScreen from "./screens/MessagesScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Bible Study" component={BibleStudyScreen} />
        <Drawer.Screen name="Sermon Notes" component={SermonNotesScreen} />
        <Drawer.Screen name="Prayer Wall" component={PrayerWallScreen} />
        <Drawer.Screen name="Faith Quest" component={FaithQuestScreen} />
        <Drawer.Screen name="Events" component={EventsScreen} />
        <Drawer.Screen name="Communities" component={CommunitiesScreen} />
        <Drawer.Screen name="Messages" component={MessagesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}