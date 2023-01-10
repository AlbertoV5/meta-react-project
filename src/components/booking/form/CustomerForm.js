import { InputLeftElement, } from '@chakra-ui/react'

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { Formik, Field, Form } from 'formik'

import { useBookingContext, schema } from '../BookingContext'
import SubmitButtom from './SubmitButtom'

import FormRow from './layout/FormRow'
import FormCol from './layout/FormCol'

import FieldInput from './field/FieldInput'
import FieldInputGroup from './field/FieldInputGroup'


const CustomerForm = ({handleTabChange}) => {
    const [booking, setBooking] = useBookingContext();

    return (
    <Formik
        initialValues={booking.customer}
        validationSchema={schema.customer}
        onSubmit={(values, actions) => {
          setBooking((prev) => ({
                    ...prev,
                    stage: {...prev.stage, details: true},
                    customer: values
                })
            );
            handleTabChange(2); // move to next tab index
        }}
    >
    {(props) => (
    <Form>
        <FormCol>
            <FormRow>
                <FieldInput type={"text"} name={"firstName"} label={"First Name"}/>
                <FieldInput type={"text"} name={"lastName"} label={"Last Name"}/>
            </FormRow>
            <FormRow>
                <FieldInputGroup type={"tel"} name={"phoneNumber"} label={"Phone Number"}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                    />
                </FieldInputGroup>
                <FieldInputGroup type={"email"} name={"email"} label={"Email Address"}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EmailIcon color='gray.300' />}
                    />
                </FieldInputGroup>
            </FormRow>
        </FormCol>
        <SubmitButtom>
            Continue
        </SubmitButtom>
    </Form>
    )}
    </Formik>
    )
}

export default CustomerForm