import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Context from '../context/context';
import HTMLView from "react-native-htmlview";

function Note({note, navigation}) {
  return (
    <View style={styles.note}>
      <TouchableOpacity onPress={() => navigation.navigate('EditNote', { note: note })}>
        <HTMLView value={note.body.substring(0, 200)} stylesheet={styles} />
      </TouchableOpacity>
    </View>
  );
};

export default class NotesScreen extends React.Component {
  static contextType = Context;

  render() {
    let notes = this.context.notes;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('CreateNote')}>
          <Text style={styles.buttonText}>Add New Note</Text>
        </TouchableOpacity>
        <ScrollView>
          { notes.map((note, index) => (
            <Note
              key={index}
              note={note}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  note: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingBottom: '3%',
    paddingHorizontal: '4%',
  },
  noteText: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 10,
    color: '#622AD3',
  },
  buttonContainer: {
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
