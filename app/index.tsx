import { Text, View, StyleSheet, useColorScheme} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Index() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900";

  return (
    <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white,flex: 1,
    justifyContent: 'center',
    alignItems: 'center',}}>
      <Text style={[styles.textStyle,{color: isDarkMode? Colors.white : Colors.black}]}>Hello!<HelloWave/></Text>
      <Link href={'/(tabs)/about'} asChild>
        <Text style={{color: isDarkMode? Colors.white : Colors.black}}>Go to our about page.</Text> 
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 35,
  }
})