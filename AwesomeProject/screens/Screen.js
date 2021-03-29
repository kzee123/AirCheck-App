import React from 'react'
import {Voew, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {FrontAwesome5} from '@exp/vector-icons'


export default class Screen extends React.Component {
	render() {
		return (
			<View Style = {styles.container}>
				<SafeAreaView style={{flex: 1}}>
					<TouchableOpacity style = {{alignItems: "flex-end", margin: 16}} onPress = {this.props.navigation.openDrawer}>
					<FrontAwesome5 name = "bars" size = {24} color = "#161924" />
					</TouchableOpacity>
				</SafeAreaView>	
			</View style = {{flex: 1, alignItems: "center", justifyCOntent: "center"}}>
			<Text style = {styles.text}>{this.props.name} Screen </Text>
		)
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text: {
  	color: "#161924",
  	fontSize: 20,
  	fontWeight: "500"
  }
})