import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/alertContext";

const BookingForm = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      time: "17;00",
      no_of_guests: "1-2 persons",
      occasion: "Birthday",
      notes: "",
    },
    onSubmit: (value) => {
      submit("#reservation", value);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      notes: Yup.string()
        .min(10, "Must be 10 characters at minimum")
        .required("Required"),
      date: Yup.string().required("Please select reservation date"),
      time: Yup.string().required("Please select available time"),
      no_of_guests: Yup.string().required("Please select number of quests"),
      occasion: Yup.string().required("Please select occasion"),
    }),
  });

  useEffect(() => {
    // console.log(response);
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") formik.resetForm();
    }
  }, [response]);

  console.log(formik.errors);

  return (
    <Box justifyContent="center" alignItems="flex-start" display="flex">
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="Reservation">
          Reservations
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit("URL", formik.values);
            }}
          >
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.name && formik.errors.name}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.date && formik.touched.date}
              >
                <FormLabel htmlFor="datepicker">Choose date</FormLabel>
                <input
                  type="date"
                  id="res-date"
                  name="date"
                  mindate={new Date()}
                  {...formik.getFieldProps("date")}
                  required
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.time && formik.touched.time}
              >
                <FormLabel htmlFor="timepicker">Choose time</FormLabel>
                <Select
                  id="res-time"
                  name="time"
                  w="60%"
                  {...formik.getFieldProps("time")}
                  required
                >
                  <option disabled>--select time--</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </Select>
                <FormErrorMessage>{formik.errors.time},</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={
                  !!formik.errors.no_of_guests && formik.touched.no_of_guests
                }
              >
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Select
                  id="guests"
                  name="no_of_guests"
                  w="60%"
                  {...formik.getFieldProps("no_of_guests")}
                  required
                >
                  <option disabled>--select no of guests--</option>
                  <option>1 - 2 persons</option>
                  <option>3 - 4 persons</option>
                  <option>5 - 6 persons</option>
                  <option>7 - 8 persons</option>
                  <option>9 - 10 persons</option>
                  <option>more than 11 persons</option>
                  <FormErrorMessage>
                    {formik.errors.no_of_guests}
                  </FormErrorMessage>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.occasion && formik.touched.occasion}
              >
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select
                  id="occasion"
                  name="occasion"
                  w="60%"
                  {...formik.getFieldProps("occasion")}
                  required
                >
                  <option disabled>--select occasion--</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Engagement</option>
                  <option>Family Gathering</option>
                  <option>Corporate event</option>
                  <option>Other</option>
                  <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.notes && formik.touched.notes}
              >
                <FormLabel htmlFor="notes">Notes</FormLabel>
                <Textarea
                  id="notes"
                  name="notes"
                  height={100}
                  {...formik.getFieldProps("notes")}
                />
                <FormErrorMessage>{formik.errors.notes}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                colorScheme="yellow"
                width="full"
                isLoading={isLoading}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default BookingForm;
