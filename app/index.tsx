import React from 'react';
import { SafeAreaView, ScrollView, View, Image, StyleSheet, Text} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import images from '@/constants/images'; // Adjust the import as needed
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-orange-100 h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className="w-full justify-center items-center h-full">
            <Image source={images.openingImage} className='w-[280px] h-[250px] mb-5' resizeMode='contain'/>
            <View className='relative'>
              <Text className = 'font-psemibold text-lg text-center pl-2 pr-2'> Be wise, even with your smallest pennies.</Text> 
            </View>
            
            <CustomButton 
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="mt-10 w-full"
            />

          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor='#000000' style='dark' /> 
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});