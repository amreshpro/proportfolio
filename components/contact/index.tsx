"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Loading from "../loader";
import Button from "../ui/Button";

export default function Contact() {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    console.log(e);
    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsLoading(false);
          console.log("SUCCESS!");
          toast.success("Your message send successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Error:Something went wrong ");
        }
      );
  }

  if (isLoading) return <Loading />;
  return (
    <div className="p-2 w-full flex flex-col items-center">
      <h1
        id="contact"
        className="text-center text-3xl py-4 sm:text-2xl font-bold "
      >
        Contact
      </h1>
      <form
        ref={form}
        onSubmit={(e) => sendEmail(e)}
        className="flex flex-col justify-center items-center w-fit "
      >
        <div className="flex flex-col gap-4 px-2 sm:w-full w-80">
          <label>Name</label>
          <input
            required
            type="text"
            name="user_name"
            placeholder="Enter your name..."
            className="px-2 py-1 outline-none rounded-lg"
          />
          <label>Email</label>
          <input
            required={true}
            type="email"
            name="user_email"
            placeholder="Enter your email..."
            className="px-2 py-1 outline-none rounded-lg"
          />
          <label>Message</label>

          <textarea
            required
            name="message"
            placeholder="Type your message here."
            className="rounded-lg px-2"
          />
          <Button>

          <input
            type="submit"
            value="Send"
     
            />
            </Button>
        </div>
      </form>
    </div>
  );
}
