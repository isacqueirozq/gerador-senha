import React, { useState } from "react";
import {Text, TouchableOpacity, View,ToastAndroid} from 'react-native';
import { styles } from "../Home/Styles";
import { MaterialIcons } from '@expo/vector-icons';
import GeneratorPass from "../../services/passwordService";
import * as Clipboard from 'expo-clipboard';


export default function App({styleText, styleText2, styleIcon}:any) {
    const[pass, setPass] = useState('')
    function GenerateButton() {
        let token = GeneratorPass()
        setPass(token)
    }
    function CopyClipboard() {
        Clipboard.setStringAsync(pass)
        ToastAndroid.show('Copiado!', ToastAndroid.SHORT);
    }
    
    return(
        <View>
        <TouchableOpacity style={styles.content} onPress={GenerateButton}>
            <MaterialIcons name="auto-fix-high" size={50} color={styleIcon} />
            <Text style={[styles.text, styleText]}>
                Gerar uma Senha 
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.content} onPress={CopyClipboard}>
            <Text style={[styles.text, styleText2]}>
                {pass}
            </Text>
        </TouchableOpacity>
        </View>
    )
}