import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanCalc from '@/components/LoanCalc';
import Sample from '@/components/sample';
import { TrendingUp, Clock, Target, CheckCircle} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LoanSlider1 from '@/components/LoanSlider1';
import LoanSlider2 from '@/components/LoanSlider2';

const imageList = [
  '/lovable-uploads/entity.png',
  '/lovable-uploads/score.png',
  '/lovable-uploads/interest.png',
  '/lovable-uploads/fee.png',
];

const imageTexts = [
  'Regulated Entity ',
  'Credit Score',
  'Interest Rate',
  'Processing Fees',
];

// Second slider images and texts
const imageList2 = [
  '/lovable-uploads/lender.png',
  '/lovable-uploads/loan.png',
  '/lovable-uploads/tenure.png',
  '/lovable-uploads/repayment.png',
];
const imageTexts2 = [
  'Credibility of Lender',
  'Purpose of loan',
  'Loan Tenure',
  'Repayment Flexibility',
];

const Impact = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [activeLoanType, setActiveLoanType] = useState('home');

  // Update defaults when loan type changes
  useEffect(() => {
    if (activeLoanType === 'home') {
      setLoanAmount(5000000);
      setLoanTenure(20);
    } else if (activeLoanType === 'auto' || activeLoanType === 'personal') {
      setLoanAmount(1500000);
      setLoanTenure(60);
    }
  }, [activeLoanType]);

  const calculateEMI = (principal: number, rate: number, tenure: number) => {
    const monthlyRate = rate / (12 * 100);
    // For home loans, tenure is in years, for auto/personal loans it's in months
    const totalMonths = activeLoanType === 'home' ? tenure * 12 : tenure;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  };

  const loanData = {
    low: { rate: 16, eligible: 'Housing Finance Companies (HFC)' },
    moderate: { rate: 14, eligible: 'Small Private / Finance Banks' },
    high: { rate: 9, eligible: 'Top Private Sector Banks' }
  };

  const lowEMI = calculateEMI(loanAmount, loanData.low.rate, loanTenure);
  const moderateEMI = calculateEMI(loanAmount, loanData.moderate.rate, loanTenure);
  const highEMI = calculateEMI(loanAmount, loanData.high.rate, loanTenure);

  // Calculate total months for interest calculation
  const totalMonths = activeLoanType === 'home' ? loanTenure * 12 : loanTenure;
  const lowTotal = lowEMI * totalMonths;
  const moderateTotal = moderateEMI * totalMonths;
  const highTotal = highEMI * totalMonths;

  const lowInterest = lowTotal - loanAmount;
  const moderateInterest = moderateTotal - loanAmount;
  const highInterest = highTotal - loanAmount;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  const getTenureLabel = () => {
    if (activeLoanType === 'home') {
      return 'Loan Tenure (Years)';
    }
    return 'Loan Tenure (Months)';
  };

  const getTenureMinMax = () => {
    if (activeLoanType === 'home') {
      return { min: '1 yr', max: '30 yrs' };
    }
    return { min: '12 mo', max: '84 mo' };
  };

  const tenureMinMax = getTenureMinMax();

  return (
    <div className="min-h-screen bg-gray-50 font-raleway">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }

        @media (max-width: 1920px) {
          .container {
            max-width: 1920px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          h1 { font-size: 52px; }
          h2 { font-size: 48px; }
          h3 { font-size: 36px; }
          h4 { font-size: 28px; }
           h6 { font-size: 20px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 40px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 28px; }
          [lang]:not([lang="en"]) h4 { font-size: 24px; }
          [lang]:not([lang="en"]) h6 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 1440px) {
          .container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          h1 { font-size: 48px; line-height: 1em; }
          h2 { font-size: 40px; }
          h3 { font-size: 32px; }
          h4 { font-size: 28px; }
          h6 { font-size: 16px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h4 { font-size: 22px; }
          [lang]:not([lang="en"]) h6 { font-size: 18px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 780px) {
          .container {
            max-width: 780px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 28px; }
          h6 { font-size: 16px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 20px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 480px) {
          .container {
            max-width: 480px;
          }
          h1 { font-size: 26px; }
          h2 { font-size: 24px; }
          h3 { font-size: 22px; }
          h4 { font-size: 20px; }
          h5 { font-size: 18px; }
          h6 { font-size: 16px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 26px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 22px; }
          [lang]:not([lang="en"]) h4 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 18px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 14px; }
        }

        @keyframes slideInTop {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .slide-in-top {
          animation: slideInTop 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative text-black overflow-hidden">
        <div className="container flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 md:gap-12">
          {/* Left Slider */}
          <LoanSlider1 imageList={imageList} imageTexts={imageTexts} className="flex-shrink-0 flex items-center justify-center w-full md:w-auto md:justify-start" />
          {/* Centered Heading and description */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="font-bold text-orange-500 dark:text-black">
              Interactive Loan Calculator / Comparison
            </h2>
            <p className="text-black">
              Compare loan options across different credit scores and see potential savings in real-time
            </p>
          </div>
          {/* Right Slider */}
          <LoanSlider2 imageList={imageList2} imageTexts={imageTexts2} className="flex-shrink-0 flex items-center justify-center w-full md:w-auto md:justify-end" />
        </div>
      </section>
      <LoanCalc />
     {/* The Good News About Credit Scores */}
      <section className="py-4 bg-white dark:bg-slate-900">
        <div className='max-w-6xl mx-auto p-4'>
        <div className="max-w-6xl mx-auto p-4 container">
          <div className="text-center mb-16">
            <h2 className="font-bold text-orange-600 dark:text-white mb-6">
              The Good News About Credit Scores
            </h2>
            <p className="text-black dark:text-white max-w-3xl mx-auto">
              Your credit journey is full of opportunities for improvement and financial growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h4 className=" font-bold mb-4 text-orange-500 dark:text-gray-900">Not Permanent</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                The good news is that a poor credit score is not permanent. With the right strategies and consistent effort, you can transform your financial profile.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="text-white" size={40} />
              </div>
              <h4 className=" font-bold mb-4 text-orange-500 dark:text-gray-900">Always Improvable</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                You can always improve your credit score by taking appropriate steps. Every positive financial decision moves you closer to better opportunities.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="text-white" size={40} />
              </div>
              <h4 className=" font-bold mb-4 text-orange-500 dark:text-gray-900">Worth the Investment</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                Although it may take some time, improving your score before applying for a new loan can save you lakhs of rupees in interest payments.
              </p>
            </Card>
          </div>
        </div>
        </div>
      </section>


      {/* Timeline for Improvement */}
      <section className="py-4 bg-gradient-to-br from-gray-100 to-blue-100">
        <div className='max-w-6xl mx-auto p-4'>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-bold text-gray-900 mb-6">
              Timeline for Improvement
            </h2>
            <p className=" text-gray-600 max-w-3xl mx-auto">
              Understanding the journey to better credit scores and financial opportunities
            </p>
          </div>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <Clock className="text-white" size={48} />
                </div>
                <div>
                  <h3 className=" font-bold text-orange-500 dark:text-gray-900 mb-2">6 to 12 Months</h3>
                  <p className=" text-gray-600">Duration to improve your credit score significantly</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <Card className="border-l-4 border-l-blue-600 bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-blue-500 p-6">
                  <h4 className="font-bold text-orange-600 dark:text-white mb-3">Method</h4>
                  <p className="text-black dark:text-white leading-relaxed">
                    Based on the timely repayment of new loans that you avail. Consistent payment history is the most important factor in credit score improvement.
                  </p>
                </Card>
                
                <Card className="border-l-4 border-l-blue-600 bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-blue-500 p-6">
                  <h4 className="font-bold text-orange-600 dark:text-white mb-3">Strategy</h4>
                  <p className="text-black dark:text-white leading-relaxed">
                    Getting a loan with a poor credit score is difficult, so it's always a good idea to improve your credit score before applying. This strategic approach can save you significant money in the long run.
                  </p>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
