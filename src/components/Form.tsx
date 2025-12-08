import { useState } from "react";
import axios from "axios";
import { User,Phone , Mail, MapPin, MapPinHouse } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import Lottie from "lottie-react";
import mail from "../lottie/mail.json";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false); 
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    employmentType: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://form-be-qswg.vercel.app/send-mail", formData);
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        dob: "",
        employmentType: "",
        address: "",
        pincode: "",
      });
    } catch (error) {
      console.error(error);
      setPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center dark:bg-gradient-to-br dark:from-blue-900 dark:via-slate-800 dark:to-slate-900 dark:text-white" >
      <div className="max-w-7xl p-12 flex flex-row gap-24 items-center">
        <div className="w-[30%] flex items-center justify-center mx-auto">
        <Lottie animationData={mail} loop={true} />
        </div>
      
       <form onSubmit={handleSubmit} className="bg-white/10 flex flex-col gap-6 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl px-8 py-10" >

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div className="relative">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full h-12 bg-transparent border border-orange-500 dark:border-white/30 rounded-full px-4 pr-12 text-black dark:text-white dark:placeholder-white/80 outline-none"
            />
            <User className="absolute right-4 top-3 text-orange-500 dark:text-white" size={24} />
          </div>

          {/* Last Name */}
        <div className="relative">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full h-12 bg-transparent border border-orange-500 dark:border-white/30 rounded-full px-4 pr-12 text-black dark:text-white dark:placeholder-white/80 outline-none"
            />
            <User className="absolute right-4 top-3 text-orange-500 dark:text-white" size={24} />
        </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {/* Phone Number */}
         <div className="relative">
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full h-12 bg-transparent border border-orange-500 dark:border-white/30 rounded-full px-4 pr-12 text-black dark:text-white dark:placeholder-white/80 outline-none"
            />
            <Phone className="absolute right-4 top-3 text-orange-500 dark:text-white" size={24} />
         </div>

          {/* Email */}
         <div className="relative">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-12 bg-transparent border border-orange-500 dark:border-white/30 rounded-full px-4 pr-12 text-black dark:text-white dark:placeholder-white/80 outline-none"
            />
            <Mail className="absolute right-4 top-3 text-orange-500 dark:text-white" size={24} />
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date Of Birth */}
          <div className="relative">
          <input
            type="date"
            className="date-input w-full h-12 bg-transparent border border-orange-500 dark:border-white/30 rounded-full px-4 pr-3 text-black dark:text-white outline-none"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          </div>

        {/* Employment Type */}
          <div className="relative">
          <select
            className="select-input w-full h-12 bg-transparent border border-orange-500 dark:border-white/30 rounded-full px-4 pr-10 text-black dark:text-white outline-none"
            required
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
          >
            <option className="text-black" value="">Employment Type</option>
            <option className="text-black" value="Salaried">Salaried</option>
            <option className="text-black" value="Self Employed">Self Employed</option>
          </select>
            {/* If you prefer icons based on selection, these are placeholders */}
          </div>
       </div>

       <div className="relative">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full h-12 bg-transparent border border-orange-500 dark:border-white/30 rounded-full px-4 pr-12 text-black dark:text-white text-gray-800 dark:placeholder-white/80 outline-none"
            />
            <MapPinHouse className="absolute right-4 top-3 text-orange-500 dark:text-white" size={24} />
       </div>

       <div className="relative">
            <input
              type="number"
              placeholder="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="w-full h-12 bg-transparent border border-orange-500 dark:border-white/30 rounded-full px-4 pr-12 text-black dark:text-white dark:placeholder-white/80 outline-none"
            />
            <MapPin className="absolute right-4 top-3 text-orange-500 dark:text-white" size={24} />
       </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-white text-blue-900 font-semibold rounded-full hover:opacity-90 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        </form>
      </div>
      {/* Popup */}
      {popup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-8 rounded-2xl shadow-2xl w-96 flex flex-col items-center gap-4">
            <h2 className="text-2xl text-center font-bold">Form Submitted</h2>
            <p className="text-center">Your details have been received successfully.</p>
            <button
              className="mt-4 px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              onClick={() => setPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
