import React from 'react';
import { Text, View } from 'react-native';
import ImageDetail from './components/ImageDetail';

// const Moch = [
// 	{ key: '1', require: require('../assets/Img/beach.jpg'), title: 'Beach' },
// 	{ key: '2', require: require('../assets/Img/forest.jpg'), title: 'Forest' },
// 	{
// 		key: '3',
// 		require: require('../assets/Img/mountain.jpg'),
// 		title: 'Mountain',
// 	},
// ];

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title="Forest"
				imageSource={require('../assets/Img/forest.jpg')}
				score={9}
			/>
			<ImageDetail
				title="Beach"
				imageSource={require('../assets/Img/beach.jpg')}
				score={7}
			/>
			<ImageDetail
				title="Mountain"
				imageSource={require('../assets/Img/mountain.jpg')}
				score={4}
			/>
		</View>
	);
};

export default ImageScreen;
