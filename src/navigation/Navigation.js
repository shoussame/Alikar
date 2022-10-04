import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../components/Home/Home';
import QuestionView from '../components/QuestionView/QuestionView';
import ScoreView from '../components/ScoreView/ScoreView';

const mainStackNavigator = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <mainStackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <mainStackNavigator.Screen name="Home" component={Home} />
        <mainStackNavigator.Screen
          name="QuestionView"
          component={QuestionView}
        />
        <mainStackNavigator.Screen name="ScoreView" component={ScoreView} />
      </mainStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
