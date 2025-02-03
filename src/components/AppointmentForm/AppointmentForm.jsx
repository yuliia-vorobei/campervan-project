import { useEffect, useId, useState } from "react";
import Modal from "react-modal";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./AppointmentForm.module.css";
import { CalendarModal } from "../CalendarModal/CalendarModal";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export const AppointmentForm = () => {
  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // Modal.setAppElement("#root");

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
    toast.success("Your form was successfully sent!");
  };

  // useEffect(() => {
  //   if (modalIsOpen) {
  //     document.body.style.overflow = "hidden"; // Disable scrolling
  //   } else {
  //     document.body.style.overflow = ""; // Re-enable scrolling
  //   }

  //   return () => {
  //     document.body.style.overflow = ""; // Cleanup when component unmounts
  //   };
  // }, [modalIsOpen]);

  return (
    <div className={css.container}>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 6000,
          style: {
            background: "#F2F4F7",
            color: "#101828",
          },
        }}
      />
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
          <ErrorMessage name="name" component="div" className={css.error} />
          <Field
            className={css.field}
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email*"
          />
          <ErrorMessage name="email" component="div" className={css.error} />

          <Field
            className={css.field}
            type="date"
            name="booking"
            id={bookingFieldId}
            placeholder="Booking date*"
            // onClick={openModal}
          />
          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={css.Modal}
            overlayClassName={css.Overlay}
            contentLabel="Calendar"
          >
            {modalIsOpen && <CalendarModal closeModal={closeModal} />}
          </Modal> */}
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
