import { View, Text } from 'react-native'
import React from 'react'
import WelcomeScreen from './screens/WelcomeScreen'
import ViewImageScreen from './screens/ViewImageScreen'
import AppButton from './components/AppButton'
import Card from './components/Card'
import ListingDetailsScreen from './screens/ListingDetailsScreen'

export default function index() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <View style={{padding: 20, paddingTop: 50, backgroundColor: "#eaeaea"}}>
    //   <Card title={"Red jacket cheap!"} image={require("./assets/images/jacket.jpg")} subTitle='$200' avatar={require("./assets/images/mario.png")} author='Mario Andolini' postsInfo='2 posts this week'/>
    //   <Card title={"Comfortable couch!"} image={require("./assets/images/couch.jpg")} subTitle='$50'/>
    // </View>
    <ListingDetailsScreen />
  )
}