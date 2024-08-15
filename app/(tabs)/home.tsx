import { Text, View, StyleSheet, useColorScheme} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Index() {

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className = 'text-3xl text-center font-pblack'>Hi!<HelloWave/></Text>
      <Link href={'/(tabs)/profile'} asChild>
        <Text> Welcome to our home page.</Text> 
      </Link>
    </View>
  );
}

