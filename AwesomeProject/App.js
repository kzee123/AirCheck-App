import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FAB, Divider, Button, Title,Paragraph, Card, Drawer, Appbar, DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View >
      <Card>
      
    <Card.Cover source={require('./assets/cover.jpg')} />
  </Card> 
  <Divider />
  <Card>
  <Card.Content>
  <Title>Welcome</Title>
      <Paragraph>Air Check will leverage Internet of Things power to sense these two particles (PM2.5 and PM10) and send it to cloud storage in real time with sensor location.</Paragraph>
    </Card.Content>
  <Card.Actions>
      <Button>Visit Air Check.</Button>
    </Card.Actions>

  </Card>
    </View>

  );
}

function AboutScreen({ navigation }) {
  return (
    <View >
      <Card>
  <Card.Content>
  <Title>About</Title>
      <Paragraph>Air pollution is the largest environmental and public health challenge in the world today. Air pollution leads to adverse effects on human health, climate, and ecosystem. Air is getting polluted because of the release of Toxic gases by industries, vehicular emissions, and increased concentration of harmful gases and particulate matter in the atmosphere. Particulate matter is one of the most important parameters having a significant contribution to the increase in air pollution. This creates a need for measurement and analysis of real-time air quality monitoring so that appropriate decisions can be taken in a timely period. This final year project will present a real-time standalone air quality monitoring system that specifically detects: PM 2.5, PM10.</Paragraph>
      <Paragraph>Internet of Things is nowadays finding profound use in each and every sector, plays a key role in our air quality monitoring system too. Internet of Things converging with cloud computing offers a novel technique for better management of data coming from different sensors, collected and transmitted by low power, low-cost ARM-based minicomputer Raspberry pi. </Paragraph>
      <Paragraph>This system will be tested in Peshawar and will log data into Azure Cloud Services. More information at Air Check Logs.</Paragraph>
    </Card.Content>
  <Card.Actions>
      <Button>Visit Air Check Logs.</Button>
    </Card.Actions>

  </Card>
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View>
       <Card>
            <Card.Content>
                <Title>Contact</Title>
                <Paragraph>This is Contact.</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Visit Air Check.</Button>
            </Card.Actions>

        </Card>
    </View>
  );
}

function HelpScreen({ navigation }) {
  return (
    <View>
       <Card>
            <Card.Content>
                <Title>Help</Title>
                <Paragraph>This is Help.</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Visit Air Check.</Button>
            </Card.Actions>

        </Card>
    </View>
  );
}

const Drawers = createDrawerNavigator();

export default function App({ navigation }) {
  console.log("App Executed");

  return (
    <PaperProvider theme={theme}>


    <Appbar.Header style={{ backgroundColor: '#31AFC2' }}>
      <Appbar.Action icon="menu" />
       <Appbar.Content title="Air check." subtitle={'Breath healthy and be healthy'}  />

    </Appbar.Header>

    <NavigationContainer>
    
      <Drawers.Navigator initialRouteName="Home">
        <Drawers.Screen name="Home" component={HomeScreen} />
        <Drawers.Screen name="About" component={AboutScreen} />
        <Drawers.Screen name="Contact" component={ContactScreen} />
        <Drawers.Screen name="Help" component={HelpScreen} />
      </Drawers.Navigator>

      <FAB
    style={styles.fab}
    large
    icon={require('./assets/tic.png')}
    onPress={() => console.log('Pressed')}
  />
    </NavigationContainer>

    </PaperProvider>
  );
}


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fab: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    margin: 16,
    right: 20,
    bottom: 40,
  },
});

