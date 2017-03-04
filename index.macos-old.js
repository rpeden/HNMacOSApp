/**
 * Sample React Native macOS App
 * https://github.com/ptmt/react-native-macos
 */
 import React from 'react';
 import ReactNative from 'react-native-macos';
 const {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Button,
   WebView,
 } = ReactNative;

const testRNmacOS = React.createClass({
  getInitialState() {
    return {
      html: "nothing yet"
    }
  },
  getHtml() {
    fetch("https://news.ycombinator.com")
      .then((response) => response.text())
      .then((text) => this.setState({
        html: "length: " + text.length
      }))
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native macOS!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.macos.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Or use Developer Menu
        </Text>
        <View style={styles.darkView}>
          <Text style={styles.lightText}>Hi there</Text>
        </View>
        <Button text="Click Me" onClick={this.getHtml}/>
        <Text>{this.state.html || "nothing yet"}</Text>
      </View>
    );
  }
});

/*
<WebView
  source={{uri: 'http://cnn.com'}}
  style={{marginTop: 20, height: 200, width: 500}}
/>
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  darkView: {
    backgroundColor: "#666",
    padding: 10
  },
  lightText: {
    color: "white"
  }
});

AppRegistry.registerComponent('testRNmacOS', () => testRNmacOS);
