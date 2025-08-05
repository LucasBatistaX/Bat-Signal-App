import React from "react";
import { View, Image, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { styles } from "./BatFormStyle";
import logo  from "../../../assets/logotipo-do-batman.png";
import seta from "../../../assets/seta-esquerda.png"

export function BatForm() {
  function setShowForm(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <KeyboardAvoidingView behavior ={"padding"} keyboardVerticalOffset={10} style={styles.container} >
    <ScrollView>
      
      <View style={styles.topo}>
        <TouchableOpacity onPress={() => setShowForm(true)}>
          <Image
          style={styles.seta}
          source={seta}
        />
        </TouchableOpacity>
        <Image 
          style={styles.logo}
          source={logo}
        />
      </View>

      <View style={styles.forms}>
        <Text style={styles.title}>Nome</Text>
        <TextInput inputMode='text' placeholder="nome" style={styles.textInput}> 
          
        </TextInput>
        <Text style={styles.title}>Telefone</Text>
        <TextInput inputMode='tel' placeholder="telefone" style={styles.textInput}>
          
        </TextInput>
        <Text style={styles.title}>E-mail</Text>
        <TextInput inputMode='email' placeholder="e-mail" style={styles.textInput}>
          
        </TextInput>
        <Text style={styles.title}>Motivo do chamado:</Text>
        <TextInput inputMode='text' placeholder="motivo" style={styles.textInputMotivo}>
          
        </TextInput>
        
        
      </View>
      
      <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>
              Enviar
            </Text>
        </TouchableOpacity>


    </ScrollView>
    </KeyboardAvoidingView>
    
  );
}
