import React from 'react';
import { Text, View, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
	// console.log('Title: ', title);

	return (
		<View>
			<Text>{title}</Text>
			<Image source={imageSource} />
			<Text>Image Score - {score}</Text>
		</View>
	);
};

export default ImageDetail;
