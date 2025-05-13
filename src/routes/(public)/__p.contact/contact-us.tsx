import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import ContactSectionOne from '@/components/user/contact/contact-section-one';
import { Facebook, Youtube } from 'lucide-react';

export const Route = createFileRoute(
  '/(public)/__p/contact/contact-us',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <section className='text-cyan-900 relative h-[220vh]'>
        <div className='bg-white'>
          <motion.div
              className="w-full h-[700px] max-lg:h-[500px] relative bg-cover bg-center"
              style={{
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('/img-assets/contact-us/contact-us-4193523__340.jpg')`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
          >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="font-extrabold text-center text-[80px] max-lg:text-4xl text-white drop-shadow-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Contact Us
                  <div className='flex flex-col items-center justify-center mt-4 gap-y-5'>
                      <Separator className='w-full data-[orientation=horizontal]:h-[5px] rounded-full bg-green-700' />
                      <Separator className='data-[orientation=horizontal]:w-3/4 data-[orientation=horizontal]:h-[5px] rounded-full bg-[#F4A03A]' />
                      <Separator className='data-[orientation=horizontal]:w-2/4 data-[orientation=horizontal]:h-[5px] rounded-full bg-white' />
                  </div>
              </div>
          </motion.div>
          <div className="container mx-auto flex flex-col items-center justify-center mt-20 mb-32 bg-light ">
              <div className="w-full flex-col max-lg:w-full flex items-center justify-center mt-10">
                  <ContactSectionOne />
              </div>
          </div>
          <div className='relative bg-white mt-96 border-b border-gray-200'>
            <div className='container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className="flex flex-col md:flex-row gap-[1.5px]">
                {/* Contact Information */}
                <div className="w-full md:w-1/2 bg-[#F4A03A] p-8 md:p-12 rounded-tl-lg max-lg:rounded-tl-none">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Contact</h2>
                    <div className="w-12 h-0.5 bg-white mb-6"></div>
                    <p className="text-lg mb-1">(+632) 8552-4729</p>
                    <p className="text-lg mb-6">pmd@cfo.gov.ph</p>

                    <div className="flex space-x-2">
                        <a
                            href="https://www.facebook.com/CFOGovPH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-black p-2 hover:bg-orange-600 transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://www.youtube.com/c/CommissiononFilipinosOverseas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-black p-2 hover:bg-orange-600 transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube size={20} />
                        </a>
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div className="w-full md:w-1/2 bg-[#F4A03A] p-8 md:p-12 rounded-tr-lg max-lg:rounded-tr-none">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">Location</h2>
                    <div className="w-12 h-0.5 bg-white mb-6"></div>
                    <p className="text-lg mb-1">20th and 21st Floors</p>
                    <p className="text-lg mb-1">The Upper Class Tower</p>
                    <p className="text-lg mb-1">Quezon Ave. cor. Scout Reyes St.,</p>
                    <p className="text-lg mb-1">Brgy. Paligsahan, Diliman,</p>
                    <p className="text-lg mb-1">Quezon City 1103</p>
                    <p className="text-lg mb-6">Metro Manila, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[300px] md:h-[400px] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7720.660355389397!2d121.02255085725783!3d14.637189505888745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7fa170028d9%3A0x4bd7e78a8dcad9ea!2sThe%20Upper%20Class%20Tower!5e0!3m2!1sen!2sph!4v1745558987132!5m2!1sen!2sph"
                    className="w-full h-full absolute top-0 left-0"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CFO Office Location Map"
                ></iframe>

                <div className="absolute bottom-2 left-2 bg-white p-1 rounded shadow-sm text-xs">
                  <a
                      href="https://www.google.com/maps/place/The+Upper+Class+Tower,+Quezon+Ave,+Quezon+City,+Metro+Manila/@14.6347941,121.0372224,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                  >
                      View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white p-6 bottom-0 absolute w-full'></div>
      </section>
      <img className='fixed -z-50 bottom-0 w-full object-cover object-center max-h-screen overflow-hidden' src='/img-assets/contact-us/contact-cfo.jpg'/>
      <div className='fixed -z-50 inset-0 bottom-0 w-full bg-black/50'></div>
    </>
  )
}