import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsandConditions = () => {
  return (
    <div>
      <Navbar/>
      {/* Banner Section */}
      <section className="relative bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-blue-500 text-white py-12 overflow-hidden">
        <div className="w-[95%] mx-auto text-center">
          <h1 className="font-bold mb-8 text-4xl md:text-5xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
            Terms & Conditions 
          </h1>
        </div>
      </section>

      <section className="pt-16 pb-12 pl-4 text-lg pr-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto ">
          <div className="space-y-2">
            <p className="animate-fade-in text-black font-base dark:text-white" style={{ animationDelay: '0.3s' }}>
               Samatva Awareness Solutions
            </p>
            <p className="animate-fade-in text-black font-base dark:text-white" style={{ animationDelay: '0.3s' }}>
               Effective Date: 8th December 2025
            </p>

            {/* SECTION 1 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
               1. Introduction
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: '0.3s' }}>
               Welcome to Samatva Awareness Solutions (“Company”, “We”, “Us”, “Our”). 
            </p>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: '0.3s' }}>
              By accessing or using our website, services, mobile applications, or any digital platform (“Platform”), you (“You”, “Your”, “User”) agree to comply with and be bound by these Terms & Conditions (“Terms”).
            </p>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: '0.3s' }}>
              If You do not agree with these Terms, please stop using our Platform immediately. 
            </p>

            {/* 2 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              2. Nature of Services
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              Samatva Awareness Solutions is a Debt Counselling & Credit Improvement Assistance Company. 
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
              <li>Debt Counselling</li>
              <li>Credit Report Analysis</li>
              <li>Credit Score Improvement Guidance</li>
              <li>Settlement Advisory</li>
              <li>Support in Communication with Banks/NBFCs</li>
              <li>General Financial Awareness Services</li>
              <li>We do NOT Provide Loans, Line of Credit or any type of Financing. </li>
            </ul>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              We are not a bank, NBFC, or lending institution however we will share the Data to NBFC’s for the eligible customers. 
            </p>

            {/* 3 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              3. Eligibility
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              To use our Platform or Services, you must:  
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
               <li>Be at least 21 years of age</li>
               <li>Be legally competent to enter into a contract</li>
               <li>Use the Platform for lawful, personal purposes only</li>
            </ul>

            {/* 4 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              4. User Responsibilities
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              By using our Platform, you agree that you will:  
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
               <li>Provide accurate, complete, and truthful information.</li>
               <li>Not impersonate any person or entity.</li>
               <li>Not misrepresent your identity or financial information</li>
               <li>Not use the Platform for any fraudulent or unlawful purpose.</li>
               <li>Not upload harmful, abusive, or malicious content.</li>
            </ul>

            {/* 5 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              5. No Guarantee of Loan Approval
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              While we assist you with credit counselling:  
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
               <li>We do not guarantee loan approval</li>
               <li>We do not influence banks/ NBFCs for loan decisions </li>
               <li>Final approval or rejection is solely at the discretion of the financial institution</li>
            </ul>

            {/* 6 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              6. No Legal, Tax, or Financial Advisory
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              All information provided by Samatva Awareness Solutions is: 
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
               <li>For educational and informational purposes</li>
               <li>Should not be treated as legal, tax, or investment advice</li>
               <li>Users must consult appropriate licensed professionals when required. </li>
            </ul>

            {/* 7 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              7. Fees & Payments
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              Samatva provides all services at no cost; there are no fees involved. 
            </p>

            {/* 8 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              8. Third-Party Links & Services
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
               Our Platform may contain links to third-party websites or services 
            </p>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
               We do not control or endorse these third parties and are not responsible for:
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
               <li>Their Content</li>
               <li>Their Privacy Practices </li>
               <li>Their Service Quality</li>
               <li>You Access Third-Party Services at your Own Risk.</li>
            </ul>

            {/* 9 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              9. Data Privacy
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
               Your use of the Platform is also governed by our Privacy Policy, available at: <a
                    href="/privacy-policy"
                    className="text-blue-600 underline hover:text-blue-800"
                    rel="noopener noreferrer"
                  >
                    https://samatvaawareness.in/privacy-policy </a>
            </p>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              We strictly follow data protection guidelines and do not access your phone contacts, photos, or email contents. 
            </p>

            {/* 10 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              10. Communication Consent
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              By using our Platform, you consent to receiving communication via:  
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
               <li>Phone Calls</li>
               <li>SMS</li>
               <li>WhatsApp</li>
               <li>Email</li>
            </ul>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
               These are sent for service updates, reminders, verification, and support.
            </p>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
               You may opt-out anytime by contacting support
            </p>

             {/* 11 */}
             <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              11. Limitation of Liability
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
               Samatva Awareness Solutions is not liable for:  
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
              <li>Loan Rejection by Lenders</li>
              <li>Delay, Inaccuracies, or Errors in Credit Reporting Agencies </li>
              <li>Loss of Data Caused by Third-Party Systems</li>
              <li>Any Financial Loss Based on your Decisions</li>
              <li>Our Services are Advisory in Nature.</li>
              <li>All Final Financial Decisions Remain your Sole Responsibility.</li>
            </ul>

            {/* 12 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              12. Indemnification
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
              You agree to indemnify and hold harmless the Company, its employees, partners, and directors from:  
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
               <li>Claims</li>
               <li>Losses</li>
               <li>Damages</li>
               <li>Legal Costs</li>
               <li>Arising from your Misuse of the Platform or Violation of these Terms.</li>
            </ul>

            {/* 13 */}
            <h2 className="font-bold mb-8 pt-8 text-2xl text-orange-500 dark:text-white leading-tight animate-slide-in-right">
              13. Intellectual Property 
            </h2>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
               All content on our Platform, including:   
            </p>
            <ul className="animate-fade-in pl-4 text-black ml-8 font-base list-disc dark:text-white" style={{ animationDelay: "0.3s" }}>
               <li>Logos</li>
               <li>Text</li>
               <li>Images</li>
               <li>Graphics</li>
               <li>Software</li>
               <li>is the property of Samatva Awareness Solutions.</li>
            </ul>
            <p className="animate-fade-in pl-4 text-black font-base dark:text-white" style={{ animationDelay: "0.3s" }}>
             Copying, reproducing, or distributing any material without permission is prohibited.  
            </p>
                       
            
          </div>
        </div>    
      </section>
      <Footer/>
    </div>
  );    
};

export default TermsandConditions;