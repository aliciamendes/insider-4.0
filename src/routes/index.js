import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Movies from "../pages/Movies";
import StackRoutes from "./stackRoutes";

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#090a0e',
                    padding: 20
                },
                drawerActiveBackgroundColor: '#e72f49',
                drawerActiveTintColor: '#ffffff',
                drawerInactiveTintColor: '#ffffff'
            }}
        >

            <Drawer.Screen
                name="HomeDrawer"
                component={StackRoutes}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? "movie-open" : "movie-outline"}
                            color={color}
                            size={size}
                        />
                    )
                }}

            />

            <Drawer.Screen
                name="Movies"
                component={Movies}
                options={{
                    title: 'Movies',
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? "archive" : "archive-outline"}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

        </Drawer.Navigator>
    )
}

