import React from 'react';
import { Text, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ id: '1', name: 'Friend #1', age: 10 },
		{ id: '2', name: 'Friend #2', age: 20 },
		{ id: '3', name: 'Friend #3', age: 30 },
		{ id: '4', name: 'Friend #4', age: 40 },
		{ id: '5', name: 'Friend #5', age: 50 },
		{ id: '6', name: 'Friend #6', age: 60 },
		{ id: '7', name: 'Friend #7', age: 70 },
		{ id: '8', name: 'Friend #8', age: 80 },
		{ id: '9', name: 'Friend #9', age: 90 },
	];
	return (
		<FlatList
			// horizontal
			// showsHorizontalScrollIndicator={true}
			keyExtractor={todo => todo.id}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = {
	textStyle: {
		marginVertical: 50,
	},
};

export default ListScreen;
