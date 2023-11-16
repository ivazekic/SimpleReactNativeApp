import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/BottomNavigator';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <BottomNavigator/>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
