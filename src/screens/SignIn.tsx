import { VStack, Image } from 'native-base' 

import backGroundImg from '@assets/background.png'

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
       <Image 
          source={backGroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
       />
    </VStack>
  )
}