import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/redux';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/routes';
import { ThemeColors, ThemeStyles } from './src/theme';

StatusBar.setBackgroundColor(ThemeColors.red);
StatusBar.setBarStyle('light-content');

const App = () => {
  return (
    <SafeAreaView style={ThemeStyles.safeArea}>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaView>
  );
};

export default App;
