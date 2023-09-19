

import { Text, View } from 'react-native';
import React from 'react'
import { withExpoSnack } from 'nativewind';

import { StyledComponent } from 'nativewind'
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Home() {
  return (
    <StyledView className="flex flex-row h-screen items-center space-x-2">
        <Text className="text-2xl text-red-500">Home Again</Text>
    </StyledView>
  )
}