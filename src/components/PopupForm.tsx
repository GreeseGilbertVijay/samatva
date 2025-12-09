import { useState } from "react";
import axios from "axios";
import { User, Phone, MapPin, MapPinHouse, X } from "lucide-react";
import Lottie from "lottie-react";
import mail from "../lottie/mail.json";

const PopupForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [popup, setPopup] = useState(false);

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

      setMessage("✔ Form Submitted Successfully!");
      setMessageType("success");
      setFormData({ fname: "", phone: "", state: "", pincode: "" });
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
      {/* Popup Trigger Image */}
      <img
        className="absolute top-0 left-0 w-[100%] cursor-pointer z-49"
        onClick={() => setPopup(true)}
        src="/lovable-uploads/sample.png"
        alt="popup-trigger"
      />

      {/* Popup */}
      {popup && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          onClick={() => setPopup(false)} // click outside to close
        >
          <div
            className="relative max-w-5xl w-full bg-orange-600 dark:bg-white/30 flex flex-col md:flex-row gap-10 items-center border border-white/20 shadow-xl rounded-2xl p-10"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside card
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white dark:text-red-500 hover:text-red-400 transition"
              onClick={() => setPopup(false)}
            >
              <X size={28} />
            </button>

            {/* Animation */}
            <div className="w-full md:w-[40%] flex justify-center">
              <Lottie animationData={mail} loop={true} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:w-[60%]">
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
                    onChange={handleChange}
                    required
                    maxLength={10}
                    className="w-full h-12 bg-transparent border border-white placeholder-white rounded-full px-4 pr-12 text-white outline-none"
                  />
                  <Phone className="absolute right-4 top-3 text-white" size={22} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-transparent border border-white placeholder-white rounded-full px-4 pr-12 text-white outline-none"
                  />
                  <MapPinHouse className="absolute right-4 top-3 text-white" size={22} />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    maxLength={6}
                    className="w-full h-12 bg-transparent border border-white placeholder-white rounded-full px-4 pr-12 text-white outline-none"
                  />
                  <MapPin className="absolute right-4 top-3 text-white" size={22} />
                </div>
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
        </div>
      )}
    </>
  );
};

export default PopupForm;
