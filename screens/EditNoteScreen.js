import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Context from '../context/context';
import HTMLView from "react-native-htmlview";

export default class EditNoteScreen extends React.Component {
  static contextType = Context;

  deleteNote = () => {
    const { note } = this.props.route.params;
    this.context.deleteNote(note.id);
    this.props.navigation.navigate('Notes');
  }

  render() {
    const { note } = this.props.route.params;
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateNote', { note: note })}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.deleteNote}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.fullNote}>
            <HTMLView value={note.body} stylesheet={styles} />
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  fullNote: {
    marginTop: '4%',
    padding: '5%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#622AD3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    borderRadius: 10,
    margin: '2%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
