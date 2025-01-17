import { useId } from "react";
import css from "./AppointmentForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const AppointmentForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    booking: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long")
      .required("Required"),
    comment: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    booking: "",
    comment: "",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const bookingFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name*"
          />
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email*"
          />
          <Field
            className={css.field}
            type="text"
            name="booking"
            id={bookingFieldId}
            placeholder="Booking date*"
          />
          <Field
            as="textarea"
            name="comment"
            id={commentFieldId}
            cols="20"
            rows="5"
            className={css.textArea}
            placeholder="Comment"
          />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};
