import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'

const FieldTextArea = ({name, label, placeholder, helper, children}) => {
  return (
    <Field name={name}>
        {({field, form}) => (
            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                <FormLabel>{label}</FormLabel>
                <Textarea 
                  {...field} 
                  placeholder={placeholder?placeholder:label}
                  height={"100px"}
                  textAlign={"start"}
                  justify={"left"}
                  zIndex={0}
                ></Textarea>
                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                <FormHelperText>{helper}</FormHelperText>
            </FormControl>
        )}
    </Field>
  )
}

export default FieldTextArea