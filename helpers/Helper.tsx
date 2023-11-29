import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

async function Helper({ formRef, tesing }: any) {
  if (tesing) {
    formRef.current.reset();
    toast.warn("Message Not Sent!, Welcome to WittyLoop Technologies! 😎");
    return;
  }
  const formData: any = {
    name: formRef.current?.elements["name"].value,
    email:
      formRef.current?.elements["email"]?.value || "Message from home page",
    subject: formRef.current?.elements["subject"].value,
    message: formRef.current?.elements["message"].value,
    telephone: formRef.current?.elements["telephone"].value,
  };

  try {
    const res = await emailjs.send(
      "service_y32q6x4",
      "template_0t0bowh",
      formData,
      "ZePcsPDii57VPhcc6"
    );

    formRef.current.reset();
    toast.success("Message successfully sent! 💃", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error: any) {
    formRef.current.reset();
    toast.error("Fail sending message! 🤦‍♀️", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

export default Helper;
