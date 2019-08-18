import React, { useReducer } from 'react';
import { Text, View, Button } from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case 'handle_increment':
			return { ...state, counter: state.counter + action.payload };
		case 'handle_decrement':
			return { ...state, counter: state.counter - action.payload };
		default:
			return;
	}
};

const CounterDetail = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });
	const { counter } = state;

	return (
		<View>
			<Button
				title="Increment"
				onPress={() => {
					dispatch({ type: 'handle_increment', payload: 1 });
				}}
			/>
			<Button
				title="Decrement"
				onPress={() => {
					dispatch({ type: 'handle_decrement', payload: 1 });
				}}
			/>
			<Text>Current Count: {counter}</Text>
		</View>
	);
};

export default CounterDetail;
