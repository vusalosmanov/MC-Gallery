import React, { useState } from "react";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [surname, setsurName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [notification, setNotification] = useState("");
  const [notificationn, setNotificationn] = useState("");
  const [notificationnn, setNotificationnn] = useState("");
  const [notificationnnn, setNotificationnnn] = useState("");
  const [notificationnnnn, setNotificationnnnn] = useState("");
  const [notificationnnnnn, setNotificationnnnnn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification("");
    setNotificationn("");
    setNotificationnn("");
    setNotificationnnn("");
    setNotificationnnnn("");
    setNotificationnnnnn("")

    if (!name) {
      setNotification("Adınız 3 ilə 32 simvol arasında olmalıdır!");
      
    }
    if (!surname) {
      setNotificationn("Soyad 3 ilə 32 simvol arasında olmalıdır!");
    }

    if (!email) {
      setNotificationnn("E-mail ünvanı doğru deyil!");
    }
    if (!number) {
      setNotificationnnn("Telefon 10 ilə 32 simvol arası olmalıdır!");
    }
    if (!location) {
      setNotificationnnnn("Ünvan 3 ilə 128 simvol arası olmalıdır!");
    }
    if (!country) {
      setNotificationnnnnn("Şəhəri  seçin!");
    }

    if (name && surname && email && number && location && country) {
      setName("");
      setsurName("");
      setEmail("");
      setNumber("");
      setLocation("");
      setCountry("");
    }
  };

  const Alert = () => {
    if (name || surname || email || number || location || country) {
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
      <form onSubmit={handleSubmit} className="pt-[30px] ">
        <h1 className="pb-[20px] ">Şəxsi məlumatlar</h1>
        <hr />
        <div className="mb-[15px] text-right mt-[20px]">
          <label htmlFor="name">* Ad </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
            placeholder="Ad"
          />
          {notification && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notification}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right">
          <label htmlFor="surname">* Soyad </label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setsurName(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
            placeholder="Soyad"
          />
          {notificationn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationn}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right">
          <label htmlFor="email">*E-mail </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none p-[10px]"
            placeholder="E-mail"
          />
          {notificationnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationnn}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right">
          <label htmlFor="number">*Telefon </label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none p-[10px]"
            placeholder="Telefon"
          />
          {notificationnnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationnnn}
            </p>
          )}
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <h1 className="pb-[20px]">Ünvan</h1>
        <hr />
        <div className="mb-[15px] text-right mt-[20px]">
          <label htmlFor="location">* Ünvan </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
            placeholder="Ünvan"
          />
          {notificationnnnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationnnnn}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right mt-[20px]">
          <label htmlFor="country">* Şəhər </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
            placeholder="Şəhər"
          />
          {notificationnnnnn && (
            <p className="text-start ml-[195px] text-[#f15803] text-xs">
              {notificationnnnnn}
            </p>
          )}
        </div>
        <div className="mb-[15px] text-right mt-[20px]">
          <label htmlFor="country">* Ölkə </label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border-[1px] w-[83%] h-[40px] focus:outline-none text-[#7d7d8d] p-[10px]">
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
          </select>
        </div>
        <div className="w-[100%] flex justify-end mt-[30px]">
          <button
            onClick={Alert}
            type="submit"
            className="border-[1px] p-[6px] bg-[#f15803] text-white mt-[-16px]"
          >
            Təstiqlə
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
