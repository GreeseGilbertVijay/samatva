import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { User, Phone, MapPin, MapPinHouse, CreditCard, X } from "lucide-react";
import Lottie from "lottie-react";
import mail from "../lottie/mail.json";
import { useLanguage } from '@/contexts/LanguageContext';

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal",
  "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman & Diu",
  "Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
];

const PopupForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { t, currentLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [popup, setPopup] = useState(false);

  const [formData, setFormData] = useState({
    fname: "",
    phone: "",
    state: "",
    pincode: "",
    pan: "",
  });

  // Select Field
  const filtered = indianStates.filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  const chooseState = (state) => {
    setFormData({ ...formData, state });
    setSearch(state);
    setOpen(false);
  };

  // Lock page scroll while popup is open
  useEffect(() => {
    if (!popup) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [popup]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://form-be.vercel.app/send-mail", formData);

      setMessage("✔ Thanks Our Employee Will Call You Shortly!");
      setMessageType("success");
      setFormData({ fname: "", phone: "", state: "", pincode: "", pan: "" });
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong. Try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 4000);
    }
  };

  return (
    <>
      {/* Popup Text and Button */}
     <div className="absolute top-0 left-0 cursor-pointer z-49">
        <h3 className="text-base font-bold text-orange-500 dark:text-white"
        style={
          ["ta", "hi", "te", "kn"].includes(currentLanguage)
            ? { fontSize: "12px" }
            : {}
        }>{t('home.hero.popup1')}</h3>
        <h3 className="text-base mt-1 font-bold text-orange-500 dark:text-white"
        style={
          ["ta", "hi", "te", "kn"].includes(currentLanguage)
            ? { fontSize: "12px" }
            : {}
        }>{t('home.hero.popup2')}</h3>
        <button className="blink-element sm:w-auto bg-blue-900 dark:bg-white text-white dark:text-orange-600 hover:bg-orange-600 dark:hover:bg-orange-50
        px-6 sm:px-10 py-0 sm:py-1 mt-2 rounded-full font-bold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3 shadow-xl animate-scale-in text-xs sm:text-lg" style={
          ["ta", "hi", "te", "kn"].includes(currentLanguage)
            ? { fontSize: "12px" }
            : {}
        } onClick={() => setPopup(true)}>{t('home.hero.popupbutton')}</button>
     </div>
     
      {/* Popup */}
      {popup && createPortal(
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[1000] px-4"
          onClick={() => setPopup(false)} // click outside to close
        >
          <div
            className="relative max-w-5xl w-full bg-orange-600 dark:bg-slate-900 flex flex-col md:flex-row md:gap-10 items-center border border-white/20 shadow-xl rounded-2xl
                 p-6 pt-12 sm:p-8 sm:pt-12 md:p-10
                 mx-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside card
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close"
              className="absolute top-3 right-3 text-white hover:text-red-300 transition"
              onClick={() => setPopup(false)}
            >
              <X size={28} />
            </button>

            {/* Animation */}
            <div className="hidden sm:flex w-full md:w-[40%] justify-center max-w-[260px] md:max-w-none">
              <Lottie animationData={mail} loop={true} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full sm:w-[85%] md:w-[60%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-transparent border border-white placeholder-white  rounded-full px-4 pr-12  text-white outline-none"
                  />
                  <User className="absolute right-4 top-3 text-white" size={22} />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const numeric = e.target.value.replace(/\D/g, "").slice(0, 10); // digits only, max 6
                      handleChange({ target: { name: "phone", value: numeric } });
                    }}
                    required
                    maxLength={10}
                    className="w-full h-12 bg-transparent border border-white placeholder-white rounded-full px-4 pr-12 text-white outline-none"
                  />
                  <Phone className="absolute right-4 top-3 text-white" size={22} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
               {/* searchable select box */}
               <input
                 type="text"
                 placeholder="Select state"
                 value={search}
                 onChange={(e) => {
                   setSearch(e.target.value);
                   setOpen(true);
                 }}
                 onClick={() => setOpen(true)}
                 required
                 className="w-full h-12 bg-transparent border border-white placeholder-white rounded-full px-4 text-white outline-none"
               />
                  {/* Dropdown options */}
                  {open && (
                    <ul
                      className="absolute top-full mt-1 w-full max-h-48 overflow-y-auto bg-black/85 border border-white rounded-xl text-white z-20"
                      
                    >
                      {filtered.length > 0 ? (
                        filtered.map((state) => (
                          <li
                            key={state}
                            className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer"
                            onClick={() => chooseState(state)}
                          >
                            {state}
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2 text-gray-400">No state found</li>
                      )}
                    </ul>
                  )}
              </div>

                <div className="relative">
                <input
                   type="tel"
                   placeholder="Pincode"
                   name="pincode"
                   value={formData.pincode}
                   onChange={(e) => {
                     const numeric = e.target.value.replace(/\D/g, "").slice(0, 6); // digits only, max 6
                     handleChange({ target: { name: "pincode", value: numeric } });
                   }}
                   required
                   maxLength={6}
                   inputMode="numeric"
                   className="w-full h-12 bg-transparent border border-white placeholder-white rounded-full px-4 pr-12 text-white outline-none"
                 />
                 <MapPin className="absolute right-4 top-3 text-white" size={22} />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="PAN Number (Optional)"
                  name="pan"
                  value={formData.pan}
                  onChange={(e) => {
                    const pan = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 10); // alphanumeric, uppercase, max 10
                    handleChange({ target: { name: "pan", value: pan } });
                  }}
                  maxLength={10}
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]"
                  title="Enter a valid 10-character PAN (e.g. ABCDE1234F)"
                  className="w-full h-12 bg-transparent border border-white placeholder-white rounded-full px-4 pr-12 text-white outline-none"
                />
                <CreditCard className="absolute right-4 top-3 text-white" size={22} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-white text-blue-900 font-semibold rounded-full hover:opacity-90 transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {message && (
                <p
                  className={`text-center font-medium mt-2 ${
                    messageType === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default PopupForm;
