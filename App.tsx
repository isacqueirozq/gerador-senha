import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Appearance, useColorScheme, } from 'react-native';
import  Home  from "./src/screen/Home/Home";

export default function App() {
  const colorScheme = useColorScheme();

  const themeTextStyle = 
      colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeTextStyle2 = 
      colorScheme === 'light' ? styles.lightThemeText2 : styles.darkThemeText2;
  const themeContainerStyle =
      colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  const themeIconStyle =
      colorScheme === 'light' ? '#242c40' : '#d0d0c0';

  return ( 
    <View style={[styles.conteiner, themeContainerStyle]}>
      <Home 
        styleText={themeTextStyle} 
        styleText2={themeTextStyle2}
        styleIcon={themeIconStyle} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  conteiner:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 12,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
  lightThemeText2: {
    color: '#d0d0c0',
  },
  darkThemeText2: {
    color: '#eead73',
  }
});
