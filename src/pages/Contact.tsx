import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 font-raleway">
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
          h6 { font-size: 20px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 44px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h5 { font-size: 22px; }
          [lang]:not([lang="en"]) h6 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }
        @media (max-width: 1440px) {
          h1 { font-size: 48px; line-height: 1em; }
          h2 { font-size: 40px; }
          h3 { font-size: 32px; }
          h4 { font-size: 22px; }
          h5 { font-size: 20px; }
          h6 { font-size: 16px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h4 { font-size: 22px; }
          [lang]:not([lang="en"]) h5 { font-size: 20px; }
          [lang]:not([lang="en"]) h6 { font-size: 18px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 780px) {
          h1 { font-size: 32px; }
          h2 { font-size: 28px; }
          h3 { font-size: 28px; }
          h4 { font-size: 22px; }
          h5 { font-size: 18px; }
          h6 { font-size: 16px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 32px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 16px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 20px; }
          h5 { font-size: 20px; }
          h6 { font-size: 16px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 20px; }
          [lang]:not([lang="en"]) h3 { font-size: 18px; }
          [lang]:not([lang="en"]) h4 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 16px; }
          [lang]:not([lang="en"]) h6 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 14px; }
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-blue-500 text-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold mb-8 text-orange-500 dark:text-white leading-tight animate-slide-in-right">
            {t('contact.title')}
          </h1>
          <p className="font-bold text-black dark:text-white">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>
    
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
          .roboto-contact-info p {
            font-family: 'Roboto', sans-serif !important;
          }
        `}</style>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 roboto-contact-info">
            
            {/* Contact Details */}
            <div>
              <h3 className=" font-bold text-gray-900 mb-8">{t('contact.contactInfo')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h5 className=" font-semibold text-gray-900">{t('contact.email')}</h5>
                    <p className="text-gray-600"><a href="mailto:support@samatvaawareness.in" className="hover:underline">support@samatvaawareness.in</a></p>
                    <p className=" text-gray-500">{t('contact.emailDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h5 className=" font-semibold text-gray-900">{t('contact.call')}</h5>
                    <p className="text-gray-600"><a href="tel:+916382097967" className="hover:underline">+91 63820 97967</a></p>
                    <p className=" text-gray-500">{t('contact.callDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h5 className=" font-semibold text-gray-900">{t('contact.hours')}</h5>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h3 className="font-bold text-gray-900 mb-6">{t('contact.serviceAreas')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-200 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-900">{t('contact.box1')}</h6>
                  </div>
                  <div className="bg-green-200 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-900">{t('contact.box2')}</h6>
                  </div>
                  <div className="bg-purple-200 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-900">{t('contact.box3')}</h6>
                  </div>
                  <div className="bg-orange-200 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-900">{t('contact.box4')}</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className=" font-bold text-gray-900 mb-8">{t('contact.nextSteps')}</h3>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: t('contact.step1'), description: t('contact.step1Desc'), color: "bg-blue-600" },
                  { step: 2, title: t('contact.step2'), description: t('contact.step2Desc'), color: "bg-green-600" },
                  { step: 3, title: t('contact.step3'), description: t('contact.step3Desc'), color: "bg-purple-600" },
                  { step: 4, title: t('contact.step4'), description: t('contact.step4Desc'), color: "bg-orange-600" },
                  { step: 5, title: t('contact.step5'), description: t('contact.step5Desc'), color: "bg-red-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${item.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{item.title}</h5>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('contact.whyQuest')}</h3>
                <div className="space-y-3">
                  {[t('contact.whyAns1'), t('contact.whyAns2'), t('contact.whyAns3'), t('contact.whyAns4')].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.987187456456!2d80.2342!3d13.0475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52689a3a3a3a3a%3A0x3a3a3a3a3a3a3a3a!2sVyasar%20St%2C%20T.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600017!5e0!3m2!1sen!2sin!4v1647881234567!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Samatva Awareness Location - T. Nagar, Chennai"
        ></iframe>
      </section>

      {/* CTA Section */}
      <section className="pt-16 pb-12 bg-white dark:bg-gradient-to-br dark:from-blue-400 dark:via-slate-900 dark:to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-orange-500 dark:text-white mb-4">
            {t('contact.takeFirstStep')}
          </h2>
          <p className="text-black dark:text-white mb-8">
          {t('contact.takeFirstStepDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@samatvaawareness.in" className="border-2 border-orange-600 text-white bg-orange-500 hover:text-orange-500 hover:bg-white px-8 py-4 rounded-lg font-semibold  transition-colors">
              {t('contact.startConsultation')}
            </a>
            <a href="tel:+916382097967" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold  transition-colors">
              {t('contact.callNow')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
