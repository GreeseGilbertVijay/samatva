import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Clock, Target, CheckCircle, AlertTriangle, Shield, Award } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useLanguage } from '@/contexts/LanguageContext';

const CreditHealth = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }

        @media (max-width: 1920px) {
          h1 { font-size: 56px; }
          h2 { font-size: 48px; }
          h3 { font-size: 36px; }
          h4 { font-size: 28px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 44px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 1440px) {
          h1 { font-size: 48px; line-height: 1em; }
          h2 { font-size: 40px; }
          h3 { font-size: 32px; }
          h4 { font-size: 28px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h4 { font-size: 22px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 780px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 28px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 20px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 20px; }
          [lang]:not([lang="en"]) h3 { font-size: 18px; }
          [lang]:not([lang="en"]) h4 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 14px; }
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-blue-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 mr-2 text-black dark:text-orange-400" />
            <span className="text-black dark:text-orange-300 font-medium">Credit Worthiness Indicator</span>
          </div>
          <h1 className="font-bold mb-8 text-orange-500 dark:text-white leading-tight animate-slide-in-right">
          Master Your Credit Score
          </h1>
          <p className="text-black dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Understanding your credit score is the first step towards financial freedom. Learn how to build, maintain, and leverage a powerful credit profile
          </p>
        </div>
      </section>

      {/* What is Credit Score Section */}
      <section className="py-12  bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-bold text-gray-900 mb-4 md:mb-6 text-2xl md:text-4xl">
            What Is a Credit Score?
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-sm md:text-base">
            Your credit score is a three-digit number that represents your creditworthiness - essentially how well you manage credit cards, loans, and other financial obligations.
            </p>
          </div>
          
          {/* Enhanced Credit Score Gauge */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-4 md:p-12 mb-8 md:mb-16 shadow-xl border border-gray-200">
            <div className="text-center">
              <div className="relative inline-block mb-4 md:mb-8">
                <svg width="100%" height="auto" viewBox="0 0 400 250" className="mx-auto drop-shadow-lg max-w-[300px] md:max-w-[400px]">
                  {/* Background semi-circle */}
                  <path d="M 50 200 A 150 150 0 0 1 350 200" fill="none" stroke="#f3f4f6" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Poor Section (300-550) - Red */}
                  <path d="M 50 200 A 150 150 0 0 1 125 75" fill="none" stroke="#dc2626" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Average Section (550-680) - Orange */}
                  <path d="M 125 75 A 150 150 0 0 1 200 50" fill="none" stroke="#ea580c" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Good Section (680-730) - Yellow */}
                  <path d="M 200 50 A 150 150 0 0 1 275 75" fill="none" stroke="#eab308" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Very Good Section (730-780) - Green */}
                  <path d="M 275 75 A 150 150 0 0 1 350 200" fill="none" stroke="#16a34a" strokeWidth="20" strokeLinecap="round" />
                  
                  {/* Score Labels */}
                  <text x="90" y="150" textAnchor="middle" className="text-xs md:text-sm font-bold fill-red-600">POOR</text>
                  <text x="90" y="165" textAnchor="middle" className="text-xs md:text-sm fill-red-500">300-550</text>
                  
                  <text x="160" y="90" textAnchor="middle" className="text-xs md:text-sm font-bold fill-orange-600">AVERAGE</text>
                  <text x="160" y="105" textAnchor="middle" className="text-xs md:text-sm fill-orange-500">550-680</text>
                  
                  <text x="240" y="90" textAnchor="middle" className="text-xs md:text-sm font-bold fill-yellow-600">GOOD</text>
                  <text x="240" y="105" textAnchor="middle" className="text-xs md:text-sm fill-yellow-500">680-730</text>
                  
                  <text x="310" y="150" textAnchor="middle" className="text-xs md:text-sm font-bold fill-green-600">VERY GOOD</text>
                  <text x="310" y="165" textAnchor="middle" className="text-xs md:text-sm fill-green-500">730-780</text>
                  
                  {/* Needle pointing to 620 (Average section) */}
                  <line x1="200" y1="200" x2="160" y2="110" stroke="#1f2937" strokeWidth="4" strokeLinecap="round" className="drop-shadow-md" />
                  <circle cx="200" cy="200" r="8" fill="#1f2937" className="drop-shadow-lg" />
                  <circle cx="200" cy="200" r="4" fill="#ffffff" />
                  
                  {/* Current Score Display */}
                  <text x="200" y="230" textAnchor="middle" className="text-2xl md:text-3xl font-bold fill-gray-900">620</text>
                  <text x="200" y="245" textAnchor="middle" className="text-xs md:text-sm fill-gray-600">Current Score</text>
                </svg>
              </div>
              
              {/* Score Impact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
                <Card className="border-red-200 bg-red-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-3 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-3">
                      <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                    </div>
                    <CardTitle className="text-base md:text-lg text-red-800">{t('creditHealth.ratings.poor')} (300-550)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-red-700 text-center">{t('creditHealth.ratings.poorDesc')}</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-3 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-3">
                      <Clock className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-base md:text-lg text-orange-800">{t('creditHealth.ratings.average')} (550-680)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-orange-700 text-center">{t('creditHealth.ratings.averageDesc')}</p>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-yellow-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-3 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mb-3">
                      <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                    </div>
                    <CardTitle className="text-base md:text-lg text-yellow-800">{t('creditHealth.ratings.good')} (680-730)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-yellow-700 text-center">{t('creditHealth.ratings.goodDesc')}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2 md:pb-3 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3">
                      <Award className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-base md:text-lg text-green-800">{t('creditHealth.ratings.excellent')} (730+)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-green-700 text-center">{t('creditHealth.ratings.excellentDesc')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIBIL Ratings Table */}
      <section className="pt-12 pb-12 bg-white dark:bg-slate-900 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-700 dark:text-white mb-4">{t('creditHealth.ratings.title')}</h2>
            <p className="text-xl text-black dark:text-white">{t('creditHealth.ratings.subtitle')}</p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl border-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-orange-500 to-orange-600">
                  <TableHead className="text-white font-bold text-lg py-6 text-center">Credit Rating</TableHead>
                  <TableHead className="text-white font-bold text-lg text-center">Score Range</TableHead>
                  <TableHead className="text-white font-bold text-lg text-center">Loan Approval Chances</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-red-50 border-l-4 border-red-500 hover:bg-red-100 transition-colors">
                  <TableCell className="font-semibold text-red-800 py-6">{t('creditHealth.ratings.poor')}</TableCell>
                  <TableCell className="text-red-700">{t('creditHealth.ratings.poorRange')}</TableCell>
                  <TableCell className="text-red-700">{t('creditHealth.ratings.poorDesc')}</TableCell>
                </TableRow>
                <TableRow className="bg-orange-50 border-l-4 border-orange-500 hover:bg-orange-100 transition-colors">
                  <TableCell className="font-semibold text-orange-800 py-6">{t('creditHealth.ratings.average')}</TableCell>
                  <TableCell className="text-orange-700">{t('creditHealth.ratings.averageRange')}</TableCell>
                  <TableCell className="text-orange-700">{t('creditHealth.ratings.averageDesc')}</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-50 border-l-4 border-yellow-500 hover:bg-yellow-100 transition-colors">
                  <TableCell className="font-semibold text-yellow-800 py-6">{t('creditHealth.ratings.good')}</TableCell>
                  <TableCell className="text-yellow-700">{t('creditHealth.ratings.goodRange')}</TableCell>
                  <TableCell className="text-yellow-700">{t('creditHealth.ratings.goodDesc')}</TableCell>
                </TableRow>
                <TableRow className="bg-green-50 border-l-4 border-green-500 hover:bg-green-100 transition-colors">
                  <TableCell className="font-semibold text-green-800 py-6">{t('creditHealth.ratings.veryGood')}</TableCell>
                  <TableCell className="text-green-700">{t('creditHealth.ratings.veryGoodRange')}</TableCell>
                  <TableCell className="text-green-700">{t('creditHealth.ratings.veryGoodDesc')}</TableCell>
                </TableRow>
                <TableRow className="bg-emerald-50 border-l-4 border-emerald-500 hover:bg-emerald-100 transition-colors">
                  <TableCell className="font-semibold text-emerald-800 py-6">{t('creditHealth.ratings.excellent')}</TableCell>
                  <TableCell className="text-emerald-700">{t('creditHealth.ratings.excellentRange')}</TableCell>
                  <TableCell className="text-emerald-700">{t('creditHealth.ratings.excellentDesc')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Credit Score Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('creditHealth.factors.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('creditHealth.factors.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('creditHealth.factors.paymentHistory'),
                percentage: 35,
                description: t('creditHealth.factors.paymentHistoryDesc')
              },
              {
                title: t('creditHealth.factors.creditUtilization'),
                percentage: 30,
                description: t('creditHealth.factors.creditUtilizationDesc')
              },
              {
                title: t('creditHealth.factors.creditLength'),
                percentage: 15,
                description: t('creditHealth.factors.creditLengthDesc')
              },
              {
                title: t('creditHealth.factors.creditMix'),
                percentage: 10,
                description: t('creditHealth.factors.creditMixDesc')
              },
              {
                title: t('creditHealth.factors.newCredit'),
                percentage: 10,
                description: t('creditHealth.factors.newCreditDesc')
              }
            ].map((factor, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{factor.title}</CardTitle>
                  <CardDescription className="text-gray-600">{factor.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className=" font-medium text-gray-700">Impact</span>
                      <span className="text-2xl font-bold text-gray-900">{factor.percentage}%</span>
                    </div>
                    <Progress value={factor.percentage} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-gray-900 mb-6">Credit Improvement Timeline</h2>
            <p className="text-gray-600">Patience and consistency are key to building excellent credit</p>
          </div>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-orange-50 to-orange-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="text-white w-10 h-10" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('creditHealth.timeline.duration')}</h3>
                <p className="text-xl text-gray-700 mb-8">{t('creditHealth.timeline.description')}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('creditHealth.timeline.quickWins')}</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>{t('creditHealth.timeline.quickWin1')}</li>
                      <li>{t('creditHealth.timeline.quickWin2')}</li>
                      <li>{t('creditHealth.timeline.quickWin3')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('creditHealth.timeline.longTerm')}</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>{t('creditHealth.timeline.longTerm1')}</li>
                      <li>{t('creditHealth.timeline.longTerm2')}</li>
                      <li>{t('creditHealth.timeline.longTerm3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditHealth;
