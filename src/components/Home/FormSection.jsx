"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiSend } from "react-icons/fi";
import * as Yup from "yup";

const FormSection = () => {
  const formRef = useRef();

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    emailjs
      .send(
        "service_i4wp6qy", // ✅ Service ID
        "template_vs5elhs", // ✅ Template ID
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          phone: values.phone || "Not Provided",
          date: formattedDate,
          time: formattedTime,
        },
        "9mwVid_tCuHldp8gV" // ✅ Public key
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully!",
          text: "Thank you for reaching out. We will get back to you soon.",
          confirmButtonColor: "#013E5D",
        });
        resetForm();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: "Please try again later.",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <section
      id="contact"
      className="col-span-2 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-md h-full"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form ref={formRef} className="space-y-6 h-full flex flex-col">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#013E5D]"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#013E5D]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone (Optional)
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+90 555 123 4567"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#013E5D]"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <Field
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#013E5D]"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="space-y-1 flex-grow flex flex-col">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <Field
                id="message"
                name="message"
                as="textarea"
                rows={5}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#013E5D] flex-grow"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full cursor-pointer justify-center items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#013E5D] to-[#035182] hover:from-[#035182] hover:to-[#013E5D] transition flex-row-reverse"
            >
              <FiSend size={16} />
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormSection;
