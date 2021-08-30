import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesScreen from './screens/NotesScreen';
import CreateNoteScreen from './screens/CreateNoteScreen';
import EditNoteScreen from './screens/EditNoteScreen';
import GlobalState  from './context/GlobalState';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Notes">
          <Stack.Screen name="Notes" component={NotesScreen} />
          <Stack.Screen name="CreateNote" component={CreateNoteScreen} />
          <Stack.Screen name="EditNote" component={EditNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
