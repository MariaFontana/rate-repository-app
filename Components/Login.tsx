import React, { useEffect, useState } from "react";
import {styles} from './LoginFormStyle'; 
import { Text, View } from "react-native";
import {  useDispatch, useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import { ILogin } from "./ILogin";
import { TextInput, Button } from 'react-native-paper';
import { setName, setPassword } from "./Redux/userReducers";




// Define la interfaz para las propiedades del componente

const Login : React.FC=(props) =>  
{
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
 const storeName=useSelector((state:RootState)=>state.name)
 const storePassword=useSelector((state:RootState)=>state.password)
 const dispatch = useDispatch();

  useEffect(() => {
    console.log(name)
   
  }, []); 

  const handleUsernameChange = (text:string) => {
    setName(text);
   // Actualiza el estado local del nombre de usuario
    dispatch({ type: 'setName', payload: text }); // Despacha la acción setUsername para actualizar el estado de Redux
  };

  const handlePasswordChange = (text:string) => {
    setPassword(text);
    dispatch({ type: 'setPassword', payload: text }); 
    // Actualiza el estado local del nombre de usuario
      // Despacha la acción setUsername para actualizar el estado de Redux
   };
 
    return (
     
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput
        label="Usuario"
        value={name}
        onChangeText={handleUsernameChange}
        style={{ marginBottom: 20,width: '80%'  }} // Espacio debajo de este TextInput
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
        style={{ marginBottom: 20, width: '80%' }} // Espacio debajo de este TextInput
       
      />
      <Button mode="contained"  >
        Iniciar sesión
      </Button>
    </View>      
    
    );

}
export default Login