import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [userName, setUserName] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {};
    if (!formData.name.trim()) newError.name = "Name is required";
    if (!formData.email.trim()) newError.email = "Email is required";
    if (!formData.message.trim()) {
      newError.message = "Message is required";
    }
    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      setSubmitted(false)
    } else {
        setUserName(formData.name);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
    console.log(formData);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className={submitted ? "hideForm" : ""}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="">Message:</label>
        <textarea
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        <button className="submitBtn">Submit</button>
      </form>
      {submitted && <p>Thank you, {userName}</p>}
    </div>
  );
};

export default ContactForm;
