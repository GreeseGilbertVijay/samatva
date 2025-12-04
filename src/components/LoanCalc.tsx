import { Calculator } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';

const Impact = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [activeLoanType, setActiveLoanType] = useState('home');

  // Update defaults when loan type changes
  useEffect(() => {
    if (activeLoanType === 'home') {
      setLoanAmount(5000000);
      setLoanTenure(25);
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
      home: {
        low: { rate: 16 },
        moderate: { rate: 14 },
        high: { rate: 8.5 }
      },
      auto: {
        low: { rate: 18 },
        moderate: { rate: 14 },
        high: { rate: 9 }
      },
      personal: {
        low: { rate: 24 },
        moderate: { rate: 18 },
        high: { rate: 11 }
      }
    };


  const lowEMI = calculateEMI(loanAmount, loanData[activeLoanType as keyof typeof loanData].low.rate, loanTenure);
  const moderateEMI = calculateEMI(loanAmount, loanData[activeLoanType as keyof typeof loanData].moderate.rate, loanTenure);
  const highEMI = calculateEMI(loanAmount, loanData[activeLoanType as keyof typeof loanData].high.rate, loanTenure);

  // Calculate total months for interest calculation
  const totalMonths = activeLoanType === 'home' ? loanTenure * 12 : loanTenure;
  const lowTotal = lowEMI * totalMonths;
  const moderateTotal = moderateEMI * totalMonths;
  const highTotal = highEMI * totalMonths;

  const lowInterest = lowTotal - loanAmount;
  const moderateInterest = moderateTotal - loanAmount;
  const highInterest = highTotal - loanAmount;

  const moderateSavings = lowInterest - moderateInterest;
  const highSavings = lowInterest - highInterest;

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

  const getLoanImage = () => {
    switch (activeLoanType) {
      case 'home':
        return '/lovable-uploads/home-loan-image.png';
      case 'auto':
        return '/lovable-uploads/car-loan-image.png';
      case 'personal':
        return '/lovable-uploads/personal-loan-image.png';
      default:
        return '/lovable-uploads/home-loan-image.png';
    }
  };

  const tenureMinMax = getTenureMinMax();

  return (
    <div className="min-h-screen bg-gray-50 font-raleway">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }

        .font-roboto {
          font-family: 'Roboto', sans-serif;
        }

        .number-field {
          font-family: 'Roboto', sans-serif;
        }

        @media (max-width: 1920px) {
          .container {
            max-width: 1920px;
          }
          h1 { font-size: 48px; }
          h2 { font-size: 36px; }
          h3 { font-size: 32px; }
          h4 { font-size: 24px; }
          h5 { font-size: 22px; }
          h6 { font-size: 16px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 48px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 28px; }
          [lang]:not([lang="en"]) h4 { font-size: 24px; }
          [lang]:not([lang="en"]) h5 { font-size: 22px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 1440px) {
          .container {
            max-width: 1440px;
          }
          h1 { font-size: 44px; line-height: 1em; }
          h2 { font-size: 36px; }
          h3 { font-size: 32px; }
          h4 { font-size: 28px; }
          h5 { font-size: 20px; }
          h6 { font-size: 16px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 44px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 32px; }
          [lang]:not([lang="en"]) h4 { font-size: 28px; }
          [lang]:not([lang="en"]) h5 { font-size: 20px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 780px) {
          .container {
            max-width: 780px;
          }
          h1 { font-size: 36px; }
          h2 { font-size: 24px; }
          h3 { font-size: 22px; }
          h4 { font-size: 20px; }
          h5 { font-size: 18px; }
          h6 { font-size: 16px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 22px; }
          [lang]:not([lang="en"]) h3 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 18px; }
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
      `}</style>    

      {/* Loan Calculator Section */}
      <section className="p-2 pt-6 pb-2 bg-white relative">
        <div className='max-w-7xl mx-auto '>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="container relative z-10">
          {/* Two Container Layout */}
          <div className="grid grid-cols-1 lg:flex gap-8">
            {/* Left Container */}
            <div className="lg:w-[30%] space-y-4">
              {/* Loan Type Tabs */}
              <div>
                <Tabs value={activeLoanType} onValueChange={setActiveLoanType} className="w-full">
                  <TabsList className="grid grid-cols-3 h-14 bg-white border-2 border-blue-100">
                    <TabsTrigger value="home" className="flex items-center gap-1 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                      <h6>Home Loan</h6>
                    </TabsTrigger>
                    <TabsTrigger value="auto" className="flex items-center gap-1 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                      <h6>Auto Loan</h6>
                    </TabsTrigger>
                    <TabsTrigger value="personal" className="flex items-center gap-1 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                      <h6>Personal Loan</h6>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Loan Type Image */}
              <div className="flex justify-center mb-2">
                <div className="relative w-full max-w-sm">
                  <img 
                    src={getLoanImage()} 
                    alt={`${activeLoanType.charAt(0).toUpperCase() + activeLoanType.slice(1)} Loan`}
                    className="w-full h-auto rounded-lg object-contain bg-transparent"
                    style={{ maxHeight: '120px' }}
                  />
                </div>
              </div>

              {/* Calculator Card */}
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 ">
                    <Calculator size={20} />
                    <h5>{activeLoanType.charAt(0).toUpperCase() + activeLoanType.slice(1)} Loan Calculator</h5>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 gap-4 mb-0">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="loanAmount" className="text-base font-semibold text-gray-700">
                          Loan Amount
                        </Label>
                        <span className="text-lg font-semibold text-blue-600 number-field">{formatCurrency(loanAmount)}</span>
                      </div>
                      <Slider
                        id="loanAmount"
                        min={100000}
                        max={50000000}
                        step={100000}
                        value={[loanAmount]}
                        onValueChange={(value) => setLoanAmount(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-gray-500">
                        <span>Min: ₹1L</span>
                        <span>Max: ₹5Cr</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="loanTenure" className="text-base font-semibold text-gray-700">
                          {getTenureLabel()}
                        </Label>
                        <span className="text-base font-semibold text-blue-600 number-field">
                          {activeLoanType === 'home' ? `${loanTenure} years` : `${loanTenure} months`}
                        </span>
                      </div>
                      <Slider
                        id="loanTenure"
                        min={activeLoanType === 'home' ? 1 : 12}
                        max={activeLoanType === 'home' ? 30 : 84}
                        step={1}
                        value={[loanTenure]}
                        onValueChange={(value) => setLoanTenure(value[0])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-gray-500">
                        <span>Min: {tenureMinMax.min}</span>
                        <span>Max: {tenureMinMax.max}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Container */}
            <div className="lg:w-[70%]">              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Low Credit Score Card */}
                <div className="group relative">
                  <Card className="h-full bg-gradient-to-br from-red-50 via-red-100 to-red-200 border-red-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-2 pt-2 pb-2">
                      <div className="text-center mb-2">
                        <div className="relative inline-block">
                          <img 
                            className="w-28 h-28 rounded-full object-cover border-4 border-red-200 shadow-md" 
                            src="/lovable-uploads/sad-face-loan.jpg" 
                            alt="Low Credit Score"
                          />
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            Poor
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-2">
                        <h4 className="text-lg font-bold text-gray-800">Low Credit Score</h4>
                        <p className="text-sm text-gray-600">Limited options available</p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-600">Principal</span>
                            <span className="text-sm font-bold text-gray-800 number-field">{formatCurrency(loanAmount)}</span>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Interest Rate</span>
                            <span className="text-lg font-bold text-red-600 number-field">{loanData[activeLoanType as keyof typeof loanData].low.rate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full transition-all duration-300" style={{width: `${(loanData[activeLoanType as keyof typeof loanData].low.rate/100)*100}%`}}></div>
                          </div>
                        </div>

                        {/* Monthly EMI - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Monthly EMI</span>
                            <span className="text-lg font-bold text-gray-800 number-field">{formatCurrency(lowEMI)}</span>
                          </div>
                        </div>

                        {/* Total Repayment - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Total Repayment</span>
                            <span className="text-lg font-bold text-gray-800 number-field">{formatCurrency(lowTotal)}</span>
                          </div>
                        </div>

                        {/* Total Interest - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Total Interest</span>
                            <span className="text-lg font-bold text-red-600 number-field">{formatCurrency(lowInterest)}</span>
                          </div>
                        </div>
                      </div>  
                    </CardContent>
                  </Card>
                </div>

                {/* Moderate Credit Score Card */}
                <div className="group relative">
                  <Card className="h-full bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-2 pt-2 pb-2">
                      <div className="text-center mb-2">
                        <div className="relative inline-block">
                          <img 
                            className="w-28 h-28 rounded-full object-cover border-4 border-orange-200 shadow-md" 
                            src="/lovable-uploads/thought-face-loan.jpg" 
                            alt="Moderate Credit Score"
                          />
                          <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            Fair
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-2">
                        <h4 className="text-lg font-bold text-gray-800">Moderate Credit Score</h4>
                        <p className="text-sm text-gray-600">Better options available</p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-600">Principal</span>
                            <span className="text-sm font-bold text-gray-800 number-field">{formatCurrency(loanAmount)}</span>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Interest Rate</span>
                            <span className="text-lg font-bold text-orange-600 number-field">{loanData[activeLoanType as keyof typeof loanData].moderate.rate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full transition-all duration-300" style={{width: `${(loanData[activeLoanType as keyof typeof loanData].moderate.rate/100)*100}%`}}></div>
                          </div>
                        </div>

                        {/* Monthly EMI - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Monthly EMI</span>
                            <span className="text-lg font-bold text-gray-800 number-field">{formatCurrency(moderateEMI)}</span>
                          </div>
                        </div>

                        {/* Total Repayment - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Total Repayment</span>
                            <span className="text-lg font-bold text-gray-800 number-field">{formatCurrency(moderateTotal)}</span>
                          </div>
                        </div>

                        {/* Total Interest - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Total Interest</span>
                            <span className="text-lg font-bold text-orange-600 number-field">{formatCurrency(moderateInterest)}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* High Credit Score Card */}
                <div className="group relative">
                  <Card className="h-full bg-gradient-to-br from-green-50 via-green-100 to-green-200 border-green-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-2 pt-2 pb-2">
                      <div className="text-center mb-2">
                        <div className="relative inline-block">
                          <img 
                            className="w-28 h-28 rounded-full object-cover border-4 border-green-200 shadow-md" 
                            src="/lovable-uploads/happy-face-loan.jpg" 
                            alt="High Credit Score"
                          />
                          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                            Excellent
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-2">
                        <h4 className="text-lg font-bold text-gray-800">High Credit Score</h4>
                        <p className="text-sm text-gray-600">Best rates available</p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-600">Principal</span>
                            <span className="text-sm font-bold text-gray-800 number-field">{formatCurrency(loanAmount)}</span>
                          </div>
                        </div>

                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Interest Rate</span>
                            <span className="text-lg font-bold text-green-600 number-field">{loanData[activeLoanType as keyof typeof loanData].high.rate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full transition-all duration-300" style={{width: `${(loanData[activeLoanType as keyof typeof loanData].high.rate/100)*100}%`}}></div>
                          </div>
                        </div>

                        {/* Monthly EMI - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Monthly EMI</span>
                            <span className="text-lg font-bold text-gray-800 number-field">{formatCurrency(highEMI)}</span>
                          </div>
                        </div>

                        {/* Total Repayment - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Total Repayment</span>
                            <span className="text-lg font-bold text-gray-800 number-field">{formatCurrency(highTotal)}</span>
                          </div>
                        </div>

                        {/* Total Interest - single line */}
                        <div className="bg-white bg-opacity-70 rounded-lg p-3 shadow-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Total Interest</span>
                            <span className="text-lg font-bold text-green-600 number-field">{formatCurrency(highInterest)}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className='py-4 pt-2 pb-2 relative'>
        {/* Blinking and Waves Styles */}
        <style>{`
          @keyframes pulse-blink {
            0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3); }
            70% { box-shadow: 0 0 0 50px rgba(99, 102, 241, 0); }
           
          }
          .blinking-container {
            animation: pulse-blink 2s infinite;
            position: relative;
            z-index: 1;
          }
          .wave-container {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 60px;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
          }
          .wave-svg {
            width: 100%;
            height: 100%;
            display: block;
          }
          .potential-savings-section {
            position: relative;
            z-index: 2;
          }
        `}</style>
        <div className='max-w-6xl mx-auto p-2 potential-savings-section'>
        {/* Potential Savings Card with blinking effect */}
       <div className="blinking-container bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <h4 className="text-lg font-bold text-gray-900">₹ Potential Savings</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Moderate vs Low Credit</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">Save</span>
                    </div>
                    <div className="text-xl font-bold text-orange-600 number-field">{formatCurrency(moderateSavings)}</div>
                    <p className="text-xs text-gray-500 mt-1">Potential savings by improving credit score</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">High vs Low Credit</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Save</span>
                    </div>
                    <div className="text-xl font-bold text-green-600 number-field">{formatCurrency(highSavings)}</div>
                    <p className="text-xs text-gray-500 mt-1">Maximum potential savings</p>
                  </div>
                </div>
        </div>
        {/* Animated SVG Waves at the bottom of the section */}
        <div className="wave-container">
          <svg className="wave-svg" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366f1" stopOpacity="0.2" />
                <stop offset="1" stopColor="#a78bfa" stopOpacity="0.2" />
              </linearGradient>
              <animateTransform attributeName="gradientTransform" type="translate" from="0,0" to="100,0" dur="6s" repeatCount="indefinite" />
            </defs>
            <path fill="url(#waveGradient)">
              <animate attributeName="d" dur="6s" repeatCount="indefinite"
                values="M0,30 Q360,60 720,30 T1440,30 V60 H0 Z;
                        M0,40 Q360,10 720,40 T1440,40 V60 H0 Z;
                        M0,30 Q360,60 720,30 T1440,30 V60 H0 Z"/>
            </path>
          </svg>
        </div>
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white  font-bold">!</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Disclaimer</h4>
                  <p className="text-gray-700  leading-relaxed">
                    The above comparison is for illustrative purposes only. Actual loan eligibility, interest rates, EMIs, and terms are determined by individual lenders based on the applicant's credit profile, income, employer category, and other underwriting criteria. All loan disbursals are subject to the lender's policies and applicable regulations as prescribed by the Reserve Bank of India (RBI).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impact;
