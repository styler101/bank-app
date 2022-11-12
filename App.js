import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
import useErrors from './hooks/Errors/useError'

export default function App() {
  const [ form, setForm] = useState({
    name: '',
    age: '',
    sexo:'',
    limit: 0.00,
   })
  const [initialValue, setInitialValue] = useState(form)
 
  function handleChangeValue(e, name){
    setForm((prev) => {
      prev[name] = e;
      return {...prev}
    })
  }

  let formatLimit= form.limit;

  function handleSubmit(){
    Alert.alert(
      "Notificação",
      `O usuário ${form.name} foi criado com successo!`)
      setForm({
          name: '',
          age: '',
          sexo: '',
          limit:0
   })
  }
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}> Banco Sujeito</Text>

          <View style={styles.formGroup}>
            <Text style={styles.formGroupLabel}> Nome </Text>
            <TextInput
              style={styles.formGroupInput}
              value={form.name}
              placeholder="Informe o seu nome"
              placeholderTextColor="#c8c8c8"
              onChangeText={(e) => handleChangeValue(e, 'name')}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formGroupLabel}> Idade </Text>
            <TextInput
              style={styles.formGroupInput}
              value={form.age}
              placeholder="Informe o sua idade"
              placeholderTextColor="#c8c8c8"
              keyboardAppearance='light'
              keyboardType='numeric'
              autoCorrect={false}
              maxLength={3}
              onChangeText={(e) => handleChangeValue(e, 'age')}
            />
          </View>

          <View style={styles.formGroup}>
          <Text style={styles.formGroupLabel}> Sexo </Text>
          <Picker  
            selectedValue={form.sexo} 
            itemStyle={{  height: 42, backgroundColor:'blue', borderRadius: 4 }}
            onValueChange={(itemValue) => handleChangeValue(itemValue, 'sexo')}>
            <Picker.Item label="Masculino" value="M" style={styles.dropDown}/>
            <Picker.Item label="Feminino" value="F"/>
          </Picker>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.formGroupLabel}> Limite </Text>
            <Slider 
              minimumValue={0}
              maximumValue={1000} 
              maximumTrackImage="#ED4F1C"
              onValueChange={(e) => handleChangeValue(e, 'limit')}/>
            <Text style={styles.limitText}> R${formatLimit.toFixed(2)}</Text>
          </View>
          <TouchableOpacity 
            disabled={JSON.stringify(initialValue) === JSON.stringify(form)} 
            style={{ ...styles.submitButton,
            backgroundColor: JSON.stringify(initialValue) === JSON.stringify(form) ? '#ccc' : 'red'}}
            onPress={handleSubmit}
            > 
            <Text style={styles.submitLabel}> Criar Conta </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form:{
    flex: 1,
    justifyContent: 'center'
  },

  title:{
    fontSize:20,
    color: '#1a1a1d',
    fontWeight: 'bold',
    marginHorizontal: 8,
    textAlign: 'center'
  },
  
  formGroup:{
    marginVertical: 8,
    flexDirection:'column',
   
    width: 300,

  },

  formGroupLabel:{
    fontSize:16,
    color:'#c8c8c8',
    marginBottom: 7,
    padding:0,
    width:300,
  },

  formGroupInput:{
    width:300,
    height:42,
    borderColor:"#ccc",
    borderWidth: 1,
    borderStyle: 'solid',
    paddingLeft: 8,
    borderRadius: 4,
    color: '#ccc'
  },

   limitText:{
    fontSize: 16,
    color: '#c8c8c8', 
    textAlign: 'center'
   },

   submitButton:{
    width:300,
    height:42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:4,
    marginTop:8
   },
   
   submitLabel:{
    fontSize: 15,
    color: '#fff',
    
   }
});
