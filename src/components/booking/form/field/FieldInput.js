import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Text
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'

import FormWrapper from './FormWrapper'

const FieldInput = ({type, name, label, placeholder, children}) => {
  return (
    <Field name={name}>
        {({field, form}) => (
          <FormWrapper form={form} name={name}>
              <FormLabel>{label}</FormLabel>
              <Input type={type} {...field} placeholder={placeholder?placeholder:label}></Input>
              <FormErrorMessage display={"block"} textAlign={"right"}>
                  {form.errors[name]}
              </FormErrorMessage>
          </FormWrapper>
        )}
    </Field>
  )
}

export default FieldInput