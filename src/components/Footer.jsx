import {Box, Image, Text, Flex} from '@chakra-ui/react'
import logo from '../assets/openai.png'

const Footer = () => {
  return (
    <Box marginTop='50px'>
        <Flex justifyContent='center' alignItems='center'> 
          <Image src={logo} marginRight={1} />

          <Text>
            Powered by OpenAI
          </Text>

        </Flex>
    </Box>
  )
}

export default Footer