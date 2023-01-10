import React from 'react'

import { HStack } from '@chakra-ui/react'

const FormRow = ({children}) => {
  return (
    <HStack width={'100%'} spacing={"4"} align={"start"} height={"100px"}>
        {children}
    </HStack>
  )
}

export default FormRow