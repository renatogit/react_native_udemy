import React from 'react';
import { Text, View } from 'react-native';

const ComponentsScreens = () => {
	const name = 'Stephen';
	return (
		<View>
			<Text style={styles.textStyles}> ComponentsScreens </Text>
			<Text style={styles.subHeaderStyle}>My name is {name}</Text>
		</View>
	);
};

const styles = {
	textStyles: {
		fontSize: 30,
	},
	subHeaderStyle: {
		fontSize: 20,
	},
};

export default ComponentsScreens;
