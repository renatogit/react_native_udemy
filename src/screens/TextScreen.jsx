import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
// Por padrão o Input vem sem nenhum style
// devemos add um sempre que usarmos o Input

const TextScreen = () => {
	const [password, setPassword] = useState('');
	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				// Por padrão o input já vem com algumas configurações
				// Para anular essas conigurações vamos add alguns atributos
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={newValue => {
					setPassword(newValue);
				}}
			/>
			{password.length < 4 ? (
				<Text style={styles.textError}>Password must be 4 characters!</Text>
			) : null}
		</View>
	);
};

const styles = {
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
	textError: {
		color: 'red',
	},
};

export default TextScreen;
