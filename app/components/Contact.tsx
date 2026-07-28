import { Button } from "@/components/ui/button";
import { LocationEditIcon, Mail, PhoneIcon, Send } from "lucide-react";
import { motion, Variants } from "framer-motion";

export const Contact = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };
  return (
    <section className="px-6 sm:px-10 lg:px-[100px] mt-16 md:mt-20 w-full pb-20">
      <div className="max-full flex flex-col mx-0 sm:mx-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center rounded-full p-3 border-2 border-khuns-green bg-white/90 mb-6 w-[150px]"
        >
          <h1 className="font-bold text-xl text-khuns-green">Contact</h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col lg:flex-row justify-between lg:items-center gap-4"
        >
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-[50px]">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-base sm:text-[18px] text-gray-600">
            <h1>
              Please contact our team if you have any questions or see a future
              opportunity to work together.
            </h1>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="w-full lg:w-[40%] flex flex-col gap-6"
          >
            <a href="mailto:info@khunsgroup.mn">
              <motion.div
                variants={fadeUp}
                className="bg-gray-200 border-2 border-khuns-green rounded-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-6 h-6 text-khuns-green mb-2" />
                <h3 className="text-xl font-bold text-khuns-green">Email</h3>
                <p className="text-gray-600 mt-2 text-center break-all">
                  info@khunsgroup.mn
                </p>
              </motion.div>
            </a>

            <a href="tel:9803-2222">
              <motion.div
                variants={fadeUp}
                className="bg-gray-200 border-2 border-khuns-green rounded-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <PhoneIcon className="w-6 h-6 text-khuns-green mb-2" />
                <h3 className="text-xl font-bold text-khuns-green">Phone</h3>
                <p className="text-gray-600 mt-2 text-center">9803-2222</p>
              </motion.div>
            </a>

            <motion.div
              variants={fadeUp}
              className="bg-gray-200 border-2 border-khuns-green rounded-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <LocationEditIcon className="w-6 h-6 text-khuns-green mb-2" />
              <h3 className="text-xl font-bold text-khuns-green">Location</h3>
              <p className="text-gray-600 mt-2 text-center">
                Ulaanbaatar, Mongolia
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="w-full lg:w-[60%]"
          >
            <div className="w-full h-auto rounded-lg overflow-hidden bg-gray-200 p-4 sm:p-5 border-2 border-khuns-green">
              <div className="w-full flex flex-col sm:flex-row justify-evenly gap-4 mb-5">
                <div className="flex flex-col w-full sm:w-1/2">
                  <h1>Name</h1>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-2 border-khuns-green w-full rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <h1>Phone</h1>
                  <input
                    type="text"
                    placeholder="9900-0000"
                    className="border-2 border-khuns-green w-full rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col sm:flex-row justify-evenly gap-4 mb-5">
                <div className="flex flex-col w-full sm:w-1/2">
                  <h1>Email</h1>
                  <input
                    type="text"
                    placeholder="Email@company.mn"
                    className="border-2 border-khuns-green w-full rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <h1>Company</h1>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border-2 border-khuns-green w-full rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col mb-5">
                <h1>Message</h1>
                <textarea
                  placeholder="Write your message or suggestions here..."
                  className="border-2 border-khuns-green w-full rounded-lg p-2"
                  rows={4}
                />
              </div>

              <div className="w-full flex justify-center">
                <Button className="bg-khuns-green text-white w-full p-5 sm:p-7 rounded-2xl flex items-center justify-center gap-2 font-medium hover:bg-khuns-green/90">
                  <h1>Send Message</h1>
                  <Send />
                </Button>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.034780906708!2d106.91183241175628!3d47.91636447109996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969245919f9f71%3A0xcc41a25f7448166c!2sEco%20International%20Tower!5e0!3m2!1sen!2smn!4v1785177902155!5m2!1sen!2smn"
              className="w-full h-[250px] sm:h-[350px] lg:h-[450px] border-0 rounded-lg mt-5"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
