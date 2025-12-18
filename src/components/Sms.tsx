import { useState } from "react";

export default function SMS() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("Hello! This is a test message.");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:3000/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("📩 SMS Sent Successfully!");
      } else {
        setStatus("❌ Error: " + (data.error || "Failed to send"));
      }
    } catch (err) {
      setStatus("⚠️ Network Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
  <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
    <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
      Send SMS
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="+919876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-gray-300 text-black px-4 py-2 h-28 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2.5 rounded-lg text-white font-medium transition 
          ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
        `}
      >
        {loading ? "Sending..." : "Send SMS"}
      </button>
    </form>

    {status && (
      <p className="mt-4 text-center text-sm text-green-600 font-medium">
        {status}
      </p>
    )}
  </div>
</div>

  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fafafa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    minHeight: "80px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  status: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};
