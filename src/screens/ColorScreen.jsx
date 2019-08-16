import React from 'react';
import { Text, View, Button } from 'react-native';

const ColorScreen = () => {
	return (
		<View>
			<Button title="Add a Color" />
			<View style={styles.defaultColor} />
			<View style={styles.random} />
		</View>
	);
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red},${green},${blue})`;
};

const styles = {
	defaultColor: {
		height: 100,
		width: 100,
		backgroundColor: 'rgb(0, 255, 0)',
	},
	random: {
		height: 100,
		width: 100,
		backgroundColor: randomRgb(),
	},
};

export default ColorScreen;
