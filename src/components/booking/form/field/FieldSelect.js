import {
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
} from '@chakra-ui/react'

import React from 'react'
import { Field } from 'formik'
import FormWrapper from './FormWrapper'

const FieldSelect = ({name, label, placeholder, children}) => {
  return (
    <Field name={name}>
        {({field, form}) => (
        <FormWrapper form={form} name={name}>
            <FormLabel>{label}</FormLabel>
            <Select {...field} placeholder={placeholder}>
                {children}
            </Select>
            <FormErrorMessage display={"block"} textAlign={"right"}>{form.errors[name]}</FormErrorMessage>
        </FormWrapper>
        )}
    </Field>
  )
}

export default FieldSelect