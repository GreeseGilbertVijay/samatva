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
        className="cursor-pointer"
        onClick={() => setPopup(true)}
        src="/lovable-uploads/sample.png"
        alt="popup-trigger"
      />

      {/* Popup */}
      {popup && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-start md:items-center z-[9999] p-2 md:p-6"
          onClick={() => setPopup(false)}
        >
          <div
            className="relative bg-orange-900 w-full max-w-5xl md:rounded-2xl rounded-xl border border-white/20 shadow-xl 
            p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-white hover:text-red-400 transition"
              onClick={() => setPopup(false)}
            >
              <X size={28} />
            </button>

            {/* Animation */}
            <div className="w-full md:w-[40%] flex justify-center">
              <Lottie animationData={mail} loop={true} className="w-52 sm:w-64 md:w-full" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full md:w-[60%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-transparent border border-white/30 rounded-full px-4 pr-12 text-white outline-none"
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
                    className="w-full h-12 bg-transparent border border-white/30 rounded-full px-4 pr-12 text-white outline-none"
                  />
                  <Phone className="absolute right-4 top-3 text-white" size={22} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-transparent border border-white/30 rounded-full px-4 pr-12 text-white outline-none"
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
                    className="w-full h-12 bg-transparent border border-white/30 rounded-full px-4 pr-12 text-white outline-none"
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
                  className={`text-center font-medium ${
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
