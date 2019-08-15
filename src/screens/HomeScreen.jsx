import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => (
	<View>
		<Text style={styles.textStyles}> This isthe components screens </Text>
	</View>
);

const styles = {
	textStyles: {
		fontSize: 30
	}
};

export default HomeScreen;
