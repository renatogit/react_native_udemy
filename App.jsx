import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreens from './src/screens/ComponentsScreens';
import ListScreen from './src/screens/ListScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreens,
    List: ListScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
