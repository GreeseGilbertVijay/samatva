import { useState } from "react";
import axios from "axios";
import { User, Phone, MapPin, MapPinHouse } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import Lottie from "lottie-react";
import mail from "../lottie/mail.json";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fname: "",
    phone: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://form-be.vercel.app/send-mail", formData);
      setPopup(true);
      setFormData({
        fname: "",
        phone: "",
        state: "",
        pincode: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center dark:bg-gradient-to-br dark:from-blue-900 dark:via-slate-800 dark:to-slate-900 text-white">
      <div className="max-w-7xl w-full px-4 sm:px-8 py-8 flex flex-col md:flex-row gap-12 items-center">

        {/* Animation */}
        <div className="w-[75%] sm:w-[50%] md:w-[35%] flex items-center justify-center mx-auto mb-6 md:mb-0">
          <Lottie animationData={mail} loop={true} />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-orange-500 dark:bg-white/10 flex flex-col gap-6 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl 
          w-full max-w-lg mx-auto px-6 sm:px-8 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
                className="w-full h-12 bg-transparent border border-white/30 rounded-full px-4 pr-12 text-white placeholder-white outline-none"
              />
              <User className="absolute right-4 top-3 text-white" size={24} />
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full h-12 bg-transparent border border-white/30 rounded-full px-4 pr-12 text-white placeholder-white outline-none"
              />
              <Phone className="absolute right-4 top-3 text-white" size={24} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* State */}
            <div className="relative">
              <input
                type="text"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full h-12 bg-transparent border border-white/30 rounded-full px-4 pr-12 text-white placeholder-white outline-none"
              />
              <MapPinHouse className="absolute right-4 top-3 text-white" size={24} />
            </div>

            {/* Pincode */}
            <div className="relative">
              <input
                type="number"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="w-full h-12 bg-transparent border border-white/30 rounded-full px-4 pr-12 text-white placeholder-white outline-none"
              />
              <MapPin className="absolute right-4 top-3 text-white" size={24} />
            </div>
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md flex flex-col items-center gap-4">
            <h2 className="text-xl sm:text-2xl text-center font-bold">Form Submitted</h2>
            <p className="text-center text-sm sm:text-base">Your details have been received successfully.</p>
            <button
              className="mt-2 px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
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
