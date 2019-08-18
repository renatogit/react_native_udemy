import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation: { navigate } }) => {
	// console.log(navigation);
	return (
		<View>
			<Text style={styles.textStyles}> This is the components screens </Text>
			<Button
				onPress={() => navigate('Components')}
				title="Go to Components Demo"
			/>
			<Button onPress={() => navigate('List')} title="Go to List Demo" />
			<Button onPress={() => navigate('Image')} title="Go to Image Demo" />
			<Button onPress={() => navigate('Counter')} title="Go to Counter Demo" />
			<Button onPress={() => navigate('Color')} title="Go to Color Demo" />
			<Button onPress={() => navigate('Square')} title="Go to Square Demo" />
			<Button onPress={() => navigate('Text')} title="Go to Text Demo" />
		</View>
	);
};

const styles = {
	textStyles: {
		fontSize: 30,
	},
};

export default HomeScreen;
