import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const CounterDetail = () => {
	const [counter, setCounter] = useState(0);

	return (
		<View>
			<Button
				title="Increment"
				onPress={() => {
					setCounter(counter + 1);
				}}
			/>
			<Button
				title="Decrement"
				onPress={() => {
					setCounter(counter - 1);
				}}
			/>
			<Text>Current Count: {counter}</Text>
		</View>
	);
};

export default CounterDetail;
