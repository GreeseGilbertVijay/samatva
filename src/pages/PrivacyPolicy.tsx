import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const PrivacyPolicy = () => {


  return (
    <div>
    
      <Navbar/>
      {/* Banner Section */}
      <section className="relative bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-blue-500 text-white py-20 overflow-hidden">
        <div className="w-[95%] mx-auto text-center">
          <h1 className="font-bold mb-8 text-4xl md:text-5xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
            Privacy Policy
          </h1>
        </div>
      </section>

    {/* Content Section */}
    <section className="pt-16 pb-12 pl-4 text-lg pr-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto ">
        <div className="space-y-2">
          <p className="animate-fade-in text-black font-base dark:text-white" 
             style={{ animationDelay: '0.3s' }}>
           Welcome to Samatva Awareness Solutions (“Company”, “We”, “Us”, “Our”). </p>
          <p className="animate-fade-in text-black font-base dark:text-white" 
             style={{ animationDelay: '0.3s' }}>
           We respect the privacy of our customers (“You”, “Your”, “User”). This Privacy Policy explains how we collect, use, store, process, and safeguard your information while you use:
          </p>
          <ol className="animate-fade-in text-black ml-8 font-base list-decimal dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li> our website: <a
                    href="/privacy-policy"
                    className="text-blue-600 underline hover:text-blue-800"
                    rel="noopener noreferrer"
                  >
                    https://samatvaawareness.in/privacy-policy </a>
                   (“Website”);
                </li>
                <li>our services (“Services”);</li>
                <li>our mobile applications (“App”).</li>
          </ol>
          <p className="animate-fade-in text-black font-base dark:text-white" 
             style={{ animationDelay: '0.3s' }}>
           Together, Website and App are called the “Platform”. 
          </p>
          <p className="animate-fade-in text-black font-base dark:text-white" 
             style={{ animationDelay: '0.3s' }}>
           By using our Platform or Services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree, please stop using our Platform immediately. 
          </p>
          {/* 1 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              1. Information We Collect
          </h2>
          <h2 className="font-semibold pl-2 mb-8 text-lg text-black/80 dark:text-white leading-tight animate-slide-in-right">
            Data Collection Commitment We value your privacy. We at Samatva will not access your phone contacts, photos, or email contents under any circumstances. 
          </h2>
          {/* 1.1 */}
          <h3 className="font-bold pl-2 mb-8 pt-4 text-xl text-black dark:text-white leading-tight animate-slide-in-right">
              1.1 Personal Information
          </h3>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white" 
             style={{ animationDelay: '0.3s' }}>
             When you create an account or interact with us, we may collect: 
          </p>
          <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li>Name, Gender, Address, Date of birth, Marital status, Email address, Mobile number, Location, Any information you share voluntarily (chat, comments, survey responses) </li>
          </ul>

          {/* 1.2 */}
          <h3 className="font-bold mb-8 pl-2 pt-4 text-xl text-black dark:text-white leading-tight animate-slide-in-right">
             1.2 Sensitive Personal Data
          </h3>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white" 
             style={{ animationDelay: '0.3s' }}>
             When you use our Services, we may also collect: 
          </p>
          <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li>Credit Card / Loan Details</li>
                <li>Photograph</li>
                <li>Signature</li>
                <li>Credit Score</li>
                <li>KYC documents (PAN, etc.)</li>
          </ul>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white" 
             style={{ animationDelay: '0.3s' }}>
             These together are called “Personal Information”. 
          </p>

          {/* 1.3 */}
          <h3 className="font-bold pl-2 mb-8 pt-4 text-xl text-black dark:text-white leading-tight animate-slide-in-right">
             1.3 Additional Information
          </h3>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white" 
             style={{ animationDelay: '0.3s' }}>
             We may request additional details for compliance or enhanced services.  
          </p>

          {/* 2 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             2. Your Consent
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
            By providing your information, you consent to its collection and processing for the purposes described here. You may withdraw consent anytime by contacting{" "}
            <a
              href="mailto:support@samatvaawareness.in"
              className="text-blue-600 underline hover:text-blue-800"
            >
              support@samatvaawareness.in
            </a>.
          </p>

          {/* 3 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
            3. How We Use Your Information
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
             We use your information to:
          </p>
          <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li>Provide and Improve Our Services</li>
                <li>Conduct KYC Checks</li>
                <li>Process Applications</li>
                <li>Communicate Important Updates</li>
                <li>Prevent Fraud</li>
                <li>Enhance User Experience</li>
                <li>Comply with Applicable Law</li>
                <li>Provide Customer Support </li>
          </ul>

          {/* 4 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             4. Sharing Your Information
          </h2>
          <p className="animate-fade-in pl-2 text-black font-base dark:text-white"
            style={{ animationDelay: "0.3s" }}>
             We may share your information with: 
          </p>
          <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li>Third-Party Service Providers</li>
                <li>Business Partners</li>
                <li>Government Authorities (as Required by Law)</li>
                <li>Successor Entities in Case of Merger or Acquisition</li>
          </ul>
          <p className="animate-fade-in pl-2 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
             We do NOT sell your personal data.  
          </p>

          {/* 5 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             5. Storage & Retention
          </h2>
          <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li>Information is stored only in India. </li>
                <li>We retain data for up to 10 years or as legally required. </li>
                <li>You may request deletion, subject to legal obligations.</li>
          </ul>

          {/* 6 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             6. Cookies & Tracking Technologies 
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
             We use cookies, web beacons, and similar tools to improve user experience and analyze usage. 
          </p>

          {/* 7 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             7. Your Rights 
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
             You may: 
          </p>
          <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li>Access your Information</li>
                <li>Correct Inaccurate Data</li>
                <li>Request Deletion</li>
                <li>Withdraw Consent</li>
                <li>Close your Account</li>
                <li>Nominate Another Person for Data Rights (as per Law)</li>
          </ul>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
            You can reach us by mail for any changes in your data Contact: <a
              href="mailto:support@samatvaawareness.in"
              className="text-blue-600 underline hover:text-blue-800" >
              support@samatvaawareness.in
            </a>.
          </p>

          {/* 8 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             8. Your Responsibilities 
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
             You must:
          </p>
          <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li>Provide Accurate Information</li>
                <li>Not Impersonate Others</li>
                <li>Not File False Complaints</li>
          </ul>

          {/* 9 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
            9. Data Security  
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
             We implement industry-standard security measures to protect your data, including
             encryption, restricted access, and periodic audits.
          </p>

          {/* 10 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             10. Age Requirement
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
             The Platform is only for users aged above 21. If you find any user below 21, notify us.
          </p>

          {/* 11 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             11. Changes to This Policy
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
             We may update this Privacy Policy at any time. Changes take effect when posted on the Website. 
          </p>

          {/* 12 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             12. Contact for Privacy Queries
          </h2>
          <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white"
              style={{ animationDelay: "0.3s" }}>
                <li>Compliance Officer: Mr. Venkat</li>
                <li>Email: support@samatvaawareness.in</li>
                <li>Phone: +91 63820 97967</li>
                <li>Address: No. 25, Shanthi Apartments, Flat No. 3, 1st Floor, Vyasar Street,
                T. Nagar, Chennai – 60</li>
          </ul>

          {/* 13 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             13. Withdrawal of Consent
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
              You may withdraw consent anytime by writing to our compliance officer. Withdrawal may affect your ability to use our Services. 
          </p>

          {/* 14 */}
          <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
             14. Dispute Resolution
          </h2>
          <p className="animate-fade-in pl-4 text-black font-base dark:text-white"
             style={{ animationDelay: "0.3s" }}>
              The courts in Chennai, India shall have exclusive jurisdiction over any disputes arising from this Privacy Policy 
          </p>

        </div>
      </div>
    </section>

    <Footer/>    
    </div>
  );
};

export default PrivacyPolicy;