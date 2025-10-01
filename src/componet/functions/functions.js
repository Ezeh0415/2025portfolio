import { useState } from "react";
import { useProjects } from "../contex-file/ProjectContex";

export const useProjectActions = () => {
  // home page and project page mix up
  const { projects, setPeojects, techIcons } = useProjects();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  // from contact page
  const [formSuccess, setFormSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [randomMessage, setRandomMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // form contact page
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all fields.");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    } else if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    } else {
      setError(false);
      setFormSuccess(true);
      setRandomMessage("you will be redirected to WhatsApp in 3 seconds");
      // Simulate a delay before redirecting
      setTimeout(() => {
        // Handle form submission logic here
        const whatsappUrl = `https://wa.me/2349063810310?text=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
        )}`;
        window.open(whatsappUrl, "_blank");
        setFormSuccess(false);
      }, 3000);
    }

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // home page function

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("Ezeanwechigozie@gmail.com");
    setMessage("Email copied to clipboard!");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "Ezeanwe Chigozie Godwin Resume.docx";
    link.download = "Ezeanwe Chigozie Godwin Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMessage("CV download started!");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return {
    projects,
    success,
    message,
    handleEmailCopy,
    handleResumeDownload,
    handleChange,
    handleSubmit,
    formSuccess,
    error,
    randomMessage,
    errorMessage,
    formData,
    techIcons,
  };
};
