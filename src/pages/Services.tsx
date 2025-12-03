import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users,CheckCircle, HeartHandshake, UserCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { t, currentLanguage } = useLanguage();
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  // Get advantages with fallback to empty array
  const advantages = Array.isArray(t('about.whyChoose.advantages')) ? t('about.whyChoose.advantages') : [];

  return (
    <div className="min-h-screen bg-gray-50 font-raleway" lang={currentLanguage}>
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
          h5 { font-size: 24px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 44px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h5 { font-size: 22px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 1440px) {
          h1 { font-size: 48px; line-height: 1em; }
          h2 { font-size: 40px; }
          h3 { font-size: 32px; }
          h4 { font-size: 24px; }
          h5 { font-size: 20px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h4 { font-size: 22px; }
          [lang]:not([lang="en"]) h5 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 780px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 28px; }
          h5 { font-size: 18px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 32px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 20px; }
          h5 { font-size: 20px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 32px; }
          [lang]:not([lang="en"]) h2 { font-size: 20px; }
          [lang]:not([lang="en"]) h3 { font-size: 18px; }
          [lang]:not([lang="en"]) h4 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 14px; }
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pl-2 pr-2 relative bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-blue-500 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold mb-8 text-orange-500 dark:text-white leading-tight animate-slide-in-right">
            {t('services.title')}
          </h1>
          <p className="text-black dark:text-white">
            {t('services.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="pt-12 pb-12 pl-2 pr-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
        {/* Free Consultation */}
        <div className="bg-gradient-to-br from-blue-100 to-green-200 p-8 rounded-lg shadow-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="text-white" size={32} />
              </div>
              <h5 className=" font-semibold mb-4 text-orange-500">{t('services.freeConsultation.title')}</h5>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.freeConsultation.noFees')}</h6>
                    <p className="text-gray-600 ">{t('services.freeConsultation.noFeesDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.freeConsultation.guidance')}</h6>
                    <p className="text-gray-600 ">{t('services.freeConsultation.guidanceDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.freeConsultation.plans')}</h6>
                    <p className="text-gray-600 ">{t('services.freeConsultation.plansDesc')}</p>
                  </div>
                </div>
              </div>
        </div>

        {/* Settlement Account Support */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h5 className=" font-semibold mb-4 text-orange-500">{t('services.settlementSupport.title')}</h5>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.settlementSupport.eligibility')}</h6>
                    <p className="text-gray-600 ">{t('services.settlementSupport.eligibilityDesc')} <span className='text-orange-500'>
                      {t('services.settlementSupport.eligibilityDesc1')}</span></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.settlementSupport.funding')}</h6>
                    <p className="text-gray-600 ">{t('services.settlementSupport.fundingDesc')} <span className='text-orange-500'> 
                      {t('services.settlementSupport.fundingDesc1')}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.settlementSupport.improvement')}</h6>
                    <p className="text-gray-600 ">{t('services.settlementSupport.improvementDesc')}</p>
                  </div>
                </div>
              </div>
        </div>

        {/* Target Audience */}
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-lg shadow-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="text-white" size={32} />
              </div>
              <h5 className=" font-semibold mb-4 text-orange-500">{t('services.targetAudience.title')}</h5>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.targetAudience.employment')}</h6>
                    <p className="text-gray-600 ">{t('services.targetAudience.employmentDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.targetAudience.income')}</h6>
                    <p className="text-gray-600 ">{t('services.targetAudience.incomeDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h6 className="font-semibold text-gray-900">{t('services.targetAudience.commitment')}</h6>
                    <p className="text-gray-600 ">{t('services.targetAudience.commitmentDesc')}</p>
                  </div>
                </div>
              </div>
        </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pt-16 pb-12 pl-2 pr-2 bg-white dark:bg-slate-900">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="font-bold text-orange-500 dark:text-white mb-6">
              {t('services.process')} 
        </h2>
        <p className="text-black dark:text-white mx-auto">
              {t('services.processDesc')}
        </p>
      </div>      
      <div className="space-y-6 max-w-4xl mx-auto px-4">
        {[
          { step: 1, title: t('services.processSteps.0.title'), description: t('services.processSteps.0.description'), color: "from-blue-500 to-blue-600" },
          { step: 2, title: t('services.processSteps.1.title'), description: t('services.processSteps.1.description'), color: "from-green-500 to-green-600" },
          { step: 3, title: t('services.processSteps.2.title'), description: t('services.processSteps.2.description'), color: "from-purple-500 to-purple-600" },
          { step: 4, title: t('services.processSteps.3.title'), description: t('services.processSteps.3.description'), color: "from-orange-500 to-orange-600" },
          { step: 5, title: t('services.processSteps.4.title'), description: t('services.processSteps.4.description'), color: "from-red-500 to-red-600" }
        ].map((item, index) => (
          <div key={index} className="flex items-center  bg-white rounded-3xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className={`bg-gradient-to-r ${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-md`}>
              {item.step}
            </div>
            <div className="ml-6">
              <h5 className="font-semibold text-orange-500 text-xl mb-2">{item.title}</h5>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

   {/* CTA Section */}
   <section className="pt-16 pb-12 bg-white dark:bg-gradient-to-br dark:from-blue-400 dark:via-slate-900 dark:to-blue-500">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold mb-6 text-orange-500 dark:text-white animate-fade-in">
        {t('services.readyToStart')}
        </h2>
        <p className="mb-10 text-black dark:text-white max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
        {t('services.readyDesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/Contact" onClick={scrollToTop} className="w-full sm:w-auto border-2 border-orange-600 text-orange-600 hover:bg-blue-800 hover:text-orange-500 px-8 py-4 rounded-lg font-semibold transition-colors">
            {t('services.scheduleConsultation')}
          </Link>
        </div>
      </div>
   </section>
   

      <Footer />
    </div>
  );
};

export default About;
