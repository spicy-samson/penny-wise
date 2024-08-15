import { View, Text, GestureResponderEvent} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React from 'react'

interface CustomButtonProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles?: string; // Tailwind style string
  textStyles?: string; // Tailwind style string
  isLoading?: boolean;
}

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
    
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-green-600 rounded-xl pl-14 pr-14 min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': '' }`} disabled= {isLoading}
    >
        <Text className='text-white font-psemibold text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}



export default CustomButton