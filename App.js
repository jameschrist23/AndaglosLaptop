import React, {Component} from 'React';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      statement: '',
    }
  }

  render() {
    let hasil = JSON.parse(this.state.statement);

    return(
      <View style={styles.container}>
        <Text>Kakulator</Text>
        <TextInput 
          onChangeText={(text) => this.setState({statement: JSON.stringify(text)})}
          styles={{fontSize: 20}}
        />
        <Text>{hasil}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
