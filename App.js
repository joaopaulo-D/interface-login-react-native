import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export default function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  return(
    <View style={styles.container}>

      <TextInput 
        style={styles.Input}
        placeholder="Digite seu nome..."
        onChangeText={text=>setName(text)}
      />
      <TextInput
        style={styles.Input}
        placeholder="Digite seu email..."
        onChangeText={text=>setEmail(text)}
      />
      <TextInput
        style={styles.Input}
        placeholder="Digite sua senha..."
        onChangeText={text=>setPassword(text)}
      />
      
      <TouchableOpacity style={styles.cadastro}>
        <Text style={{ color: 'white' }}>CADASTRA-SE</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  Input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },
  cadastro: {
    width: '100%',
    height: 40,
    backgroundColor: '#7b42f5',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
    justifyContent:'center',
    alignItems: 'center'
  }
})