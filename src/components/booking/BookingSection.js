import { 
    Heading, HStack, Text, VStack, Image, Spacer,
    Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button,
    Progress
} from '@chakra-ui/react'
import React, { useState } from 'react'

import SectionBase from '../section/SectionBase'
import BookingForm from "./form/BookingForm"
import CustomerForm from './form/CustomerForm'
import DetailsForm from './form/DetailsForm'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useBookingContext } from './BookingContext'


const BookingSection = () => {
    const [formProgress, setFormProgress] = useState(0);
    const [booking, setBooking] = useBookingContext();
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (i) => {
        setFormProgress((p) => (i)*33)
        setTabIndex(i)
    }

    return (
        <SectionBase id="booking-section">
            <HStack width={{
                base:"100vw",
                md:"100vw"
            }}>
                <Spacer></Spacer>
                <VStack
                    id="booking-header"
                    spacing={"4"}
                    align={"stretch"}
                    width={{
                        base:"100%",
                        md:"70%"
                    }}
                    py={"4"}
                    justify={"center"}
                >
                    <Heading textAlign={"left"} size="2xl">Little Lemon</Heading>
                    <Heading textAlign={"left"} size="md">Chicago</Heading>
                    <Text fontSize={"lg"}>Find a table for any ocassion.</Text>
                    <Progress value={formProgress} colorScheme={"purple"} size="sm"/>
                    <Tabs 
                        index={tabIndex}
                        onChange={handleTabChange}
                        variant={"enclosed"}
                        colorScheme={"purple"}
                    >
                        <TabList>
                            <Tab isDisabled={!booking.stage.table}>Table</Tab>
                            <Tab isDisabled={!booking.stage.customer}>Customer</Tab>
                            <Tab isDisabled={!booking.stage.details}>Confirm</Tab>
                            <Tab isDisabled={!booking.stage.confirm}>Done</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <BookingForm handleTabChange={handleTabChange}></BookingForm>
                            </TabPanel>
                            <TabPanel>
                                <CustomerForm handleTabChange={handleTabChange}></CustomerForm>
                            </TabPanel>
                            <TabPanel>
                                <DetailsForm handleTabChange={handleTabChange}></DetailsForm>
                            </TabPanel>
                            <TabPanel>
                                Done
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
                <Spacer></Spacer>
            </HStack>
        </SectionBase>
    )
}

export default BookingSection