import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/BottomNavigator';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  );
}

export default App;
