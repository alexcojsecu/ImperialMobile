"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const headerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${window.location.origin}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex justify-center py-12 bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-2xl px-6 py-6"
      >
        <div className="relative inline-block w-full text-center">
          <Link href="/contactpage">
            <motion.h2
              variants={headerVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="text-6xl font-bold text-gray-900 relative cursor-pointer"
            >
              Contact Us
              {/* Animated Underline with smaller width */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="absolute bottom-[-14px] left-1/4 w-1/2 h-[3px] bg-gray-900 origin-left"
              />
            </motion.h2>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-gray-100 border-none rounded-lg text-lg py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Subject Input */}
          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-gray-100 border-none rounded-lg text-lg py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-gray-100 border-none rounded-lg text-lg py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none h-32"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success & Error Messages */}
        {success && (
          <p className="text-green-500 text-center mt-4">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
