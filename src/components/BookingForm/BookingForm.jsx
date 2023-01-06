import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/alertContext";

const onSubmit = () => {
  console.log("submitted");
};

const BookingForm = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      date: "",
      time: "17:00",
      no_of_guests: "1 - 2 persons",
      occasion: "Birthday",
      notes: "",
    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      Name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      notes: Yup.string()
        .min(10, "Must be 10 characters at minimum")
        .required("Required"),
      date: Yup.string().required("Please select reservation date"),
      time: Yup.string().required("Please select available time"),
      no_of_guests: Yup.string().required("Please select number of quests"),
      occasion: Yup.string().required("Please select occasion"),
    }),
    validateOnMount: true,
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") formik.resetForm();
    }
  }, [response]);

  console.log(formik, formik.errors);

  return (
    <div>
      <form
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
          margin: "10rem auto",
          border: "6px solid black",
          padding: "4rem",
          borderRadius: "2rem",
        }}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit("URL", formik.values);
        }}
      >
        <label htmlFor="res-name">Name</label>
        <input
          type="text"
          id="res-name"
          onChange={formik.handleChange}
          value={formik.values.Name}
        />
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={formik.handleChange}
          value={formik.values.date}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
