import React, { useState} from "react";
import Swal from "sweetalert2";
import "../assets/styles/components/Accordion.scss";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [letter, setLetter] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationn, setNotificationn] = useState("");
  const [notificationnn, setNotificationnn] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification("");
    setNotificationn("");
    setNotificationnn("");

    if (!name) {
      setNotification("Adınız 3 ilə 32 simvol arasında olmalıdır!");
      
    }
    if (!email) {
      setNotificationn("E-mail ünvanı doğru deyil!");
    }

    if (name &&  email && letter) {
      setName("");
      setEmail("");
      setLetter("")
    }
  };

  const Alert = () => {
    if (name || letter || email ) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Form təstiqləndi",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/vusal.osmanov66@gmail.com"
        method="POST"
      >
        <div className="mb-[15px] text-right">
          <label htmlFor="name">* Adınız: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px] input"
          />
          {notification && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notification}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right">
          <label htmlFor="email">*E-mail ünvanı: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none input"
          />
          {notificationn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationn}
            </p>
          )}
        </div>
        <div className=" mb-[15px] text-right flex justify-end  flex-wrap">
          <div className="mr-[5px]">
            <label htmlFor="letter  ">*Mektup: </label>
          </div>
          <textarea
            id="letter"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            className="w-[83%] h-[60px] border-[1px] focus:outline-none input"
          ></textarea>
          {notificationnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs pt-[10px] pr-[700px]   ">
              {notificationnn}
            </p>
          )}
        </div>
        <div className="w-[100%] flex justify-end">
          <button
            type="submit"
            className="border-[1px] p-[6px] bg-[#f15803] text-white "
            onClick={Alert}
          >
            Təstiqlə
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
