import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Loading from "./ui/Loading";

export default function Contact() {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  async function sendEmail(e: Event) {
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
    <form
      ref={form}
      onSubmit={(e: any) => sendEmail(e)}
      className="flex flex-col gap-4 text-gray-600 outline-none "
    >
      <label>Name</label>
      <input
        required
        type="text"
        name="user_name"
        placeholder="Enter your name..."
        className="px-2 py-1 bg-slate-700 text-white outline-none rounded-lg"
      />
      <label>Email</label>
      <input
        required
        type="email"
        name="user_email"
        placeholder="Enter your email..."
        className="px-2 py-1 bg-slate-700 text-white outline-none rounded-lg"
      />
      <label>Message</label>
      <textarea
        required
        name="message"
        placeholder="Enter your email..."
        className="px-2 py-1 bg-slate-700 text-white outline-none rounded-lg"
      />
      <input
        type="submit"
        value="Send"
        className=" btn bg-blue-500 text-white px-4 py-2 rounded-lg"
      />
    </form>
  );
}
