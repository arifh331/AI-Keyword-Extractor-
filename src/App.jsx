import React from 'react'
import {useState} from 'react'
import { Container, Box } from '@chakra-ui/react'
import Footer from './components/Footer'
import Header from './components/Header'
import TextInput from './components/TextInput'


const App = () => {

  const [keywords,setKeywords] = useState('')
  const [isOpen,setIsOpen] = useState(false)
  const [isLoading,setIsLoading] = useState(false)

  const extractKeyWords = async (text)=>{
    setIsLoading(true)
    setIsOpen(true)

    const option ={
      method:'POST',
      headers:{'Content-Type':'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    
    },
    body:JSON.stringify({
      model: `text-davinci-003`,
      prompt: 'Extract keywords from this text. Make sure to make the first letter from each word uppercase and seperate with commas\n\n'
       + text + '', 
       temperature:0.6,
       max_tokens:60,
       frequency_penalty:0.8

    })
    }
    const response = await 
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