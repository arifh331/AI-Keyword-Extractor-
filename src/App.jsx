import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import Footer from './components/Footer'
import Header from './components/Header'
import TextInput from './components/TextInput'
const App = () => {
  const extractKeyWords = (text)=>{
    console.log(text)
  }



  return (
   <Box bg='blue.500' height='100vh' color='white' paddingTop='130px'>
       
       <Container maxW='3xl' centerContent>
       
       <h1>Hello </h1>

       <Header />
       <TextInput extractKeyWords={extractKeyWords}/>
       <Footer />
       
       </Container>
   
   </Box>
  )
}

export default App