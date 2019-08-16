import { createStackNavigator, createAppContainer } from 'react-navigation';
// SCREENS
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreens from './src/screens/ComponentsScreens';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreens,
		List: ListScreen,
		Image: ImageScreen,
		Counter: CounterScreen,
		Color: ColorScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'App',
		},
	},
);

export default createAppContainer(navigator);
