import React, { useRef, useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import Context from '../context/context';

export default class CreateNoteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.richText = React.createRef();
    this.actions = ["bold", "unorderedList"];
    const params = this.props.route.params || {};
    this.note = params.note || { body: "" };
    console.log(this.note.body)
    this.state = { body: this.note.body };
  };

  static contextType = Context;

  createNote = () => {
    if(this.note.id) {
      this.context.editNote({ body: this.state.body, id: this.note.id });
    } else {
      const note = { id: Date.now(), body: this.state.body };
      this.context.addNote(note);
    };
    this.props.navigation.navigate('Notes');
  };

  render() {
    return (
      <React.Fragment>
        { this.state.body !== "" && <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.createNote}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity> }
        <ScrollView style={styles.container}>
          <RichToolbar
            style={[styles.richBar]}
            editor={this.richText}
            disabled={false}
            iconTint={"purple"}
            selectedIconTint={"pink"}
            disabledIconTint={"purple"}
            iconSize={30}
            actions={this.actions}
          />
          <RichEditor
            disabled={false}
            containerStyle={styles.editor}
            ref={this.richText}
            style={styles.rich}
            placeholder={"Add Note here!!"}
            onChange={(text) =>  this.setState({ body: text })}
            initialContentHTML={this.state.body}
            pasteAsPlainText
          />
        </ScrollView>
      </React.Fragment>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  editor: {
    backgroundColor: "black",
  },
  rich: {
    minHeight: '90%',
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tib: {
    textAlign: "center",
    color: "white",
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
