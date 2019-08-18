import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
// Por padrão o Input vem sem nenhum style
// devemos add um sempre que usarmos o Input

const TextScreen = () => {
	const [name, setName] = useState('');
	return (
		<View>
			<Text>Enter Name:</Text>
			<TextInput
				// Por padrão o input já vem com algumas configurações
				// Para anular essas conigurações vamos add alguns atributos
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={name}
				onChangeText={newValue => {
					setName(newValue);
				}}
			/>
			<Text>My name is {name}</Text>
		</View>
	);
};

const styles = {
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
};

export default TextScreen;
