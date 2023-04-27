import React from 'react'
import { useState } from 'react'
import { Textarea, Button, useToast } from '@chakra-ui/react'

const TextInput = ({extractKeyWords}) => {
    const [text,setText] = useState('')

    const toast = useToast()
    
    function submitText(){
        if (text == '') {
            toast({
                title:'The Text field is empty',
                description: 'Please enter some text to extract keywords',
                status:'error',
                duration:5000,
                isClosable:false
            })
        }else [
            extractKeyWords(text) 
        ]
    }

  return (
    <>

    <Textarea bg='blue.300' color='white'  padding='4px' marginTop={6} height='200px' value={text}
    onChange={(e)=>{
        setText(e.target.value)
    }}
    />

    <Button
    bg='blue.400' color='white' marginTop='4px' width='100%' _hover={{bg: 'blue.700'}}
    onClick={submitText}
    >
        Extract Keywords

    </Button>

    
    </>
  )
}

export default TextInput