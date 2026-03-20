


import React from 'react'
import { BiAward, BiMedal, BiRocket, BiTrophy } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { ImWoman } from 'react-icons/im'
import { FaLandmark } from 'react-icons/fa6'
import { image, img } from 'framer-motion/client'

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

function Categories() {
  return (
    <section className=" pt-16 sm:pt-20 lg:pt-35">

      {/* ================= HEADER ================= */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        id="categories"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a193a] text-center font-bold px-4"
      >
        Recognition Categories
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1a193a] text-center mt-10 px-4 max-w-3xl mx-auto font-medium"
      >
        Each year, one outstanding recipient is highlighted in each of the following digital showcases
      </motion.p>

      {/* ================= CATEGORY CARDS ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-20 mt-20 mb-16">

        {[
          { image:<img src="bgimg2.png" alt="" className='w-100'/> ,
            bg:"#f3c062",
             title: "The Lab Leader of the Year", desc: "Our highest digital honor for a leader who has fundamentally reshaped a global industry"},
          { image:<img src="bgimg1.png" alt="" className='w-100'/> ,bg:'#68c2aa', title: "Product Innovation Pioneer", desc: "Recognizing breakthrough development that has driven significant technological adoption" },
          { image:<img src="bgimg4.png" alt="" className='w-100'/> , bg:'#6dbfde', title: "Emerging Product Pioneer", desc: "Spotlighting a rising leader demonstrating exceptional promise and early global impact" },
          { image:<img src="bgimg3.png" alt="" className='w-100'/> , bg:'#0b0a0a',  title: "Women in Product Leadership", desc: "Celebrating a woman whose innovation has transformed industries and expanded opportunities" },
          { image:<img src="bgimg2.png" alt="" className='w-100'/> ,bg:'#f3bf63',  title: "Public Sector & Policy Pioneer", desc: "Recognizing leadership in governance or public service that enables industry growth" },
          { image:<img src="bgimg1.png" alt="" className='w-100'/> ,bg:'#66c1a9',  title: "Lifetime Product Excellence", desc: "A featured retrospective on a career of extraordinary contribution and enduring influence" },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="flex flex-col items-start text-left   text-[#1a193a] space-y-4 shadow-lg hover:shadow-2xl transition"
          >
           <div
  style={{ backgroundColor: item.bg }}
  className="w-full sm:h-50 md:h-70 lg:h-80 flex items-center justify-center text-2xl text-[#1a193a]"
>
           {item.image}
            </div>

            <h1 className="text-lg sm:text-xl md:text-4xl p-5 font-bold">
              {item.title}
            </h1>

            <p className="text-md sm:text-lg p-5 md:text-xl">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </section>

      {/* ================= EVALUATION ================= */}
      <section id="evaluation" className="bg-white py-16 sm:py-20 flex flex-col items-center">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a193a] text-center font-bold px-4"
        >
          Selection & Evaluation
        </motion.h1>

        <span className="mt-4 text-sm sm:text-base md:text-lg bg-[#f3f3f5] px-4 py-2 rounded-full text-[#1a193a] font-light text-center">
          A Merit-Based Digital Spotlight.
        </span>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg text-[#1a193a] text-center mt-4 px-4 max-w-3xl font-medium"
        >
          Our recognition process is transparent and independent, focusing on four key pillars:
        </motion.p>

        {/* Evaluation Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-20 mt-10 w-full">

          {[
            { title: "Industry Impact (40%)", desc: "Proven leadership and measurable market change" },
            { title: "Innovation & Originality (30%)", desc: "Pioneering contributions and unique problem-solving" },
            { title: "Governance & Ethics (20%)", desc: "Responsible leadership practices" },
            { title: "Global Reach (10%)", desc: "Cross-border influence and sustainability" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="flex flex-col rounded-xl p-5 sm:p-6 text-center text-[#1a193a] space-y-3 shadow-lg hover:shadow-2xl transition bg-white"
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                {item.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </section>

      </section>

      {/* ================= COMMUNITY ================= */}
      <div className="relative bg-[url('/city.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-end min-h-[60vh] sm:min-h-[70vh] px-4 sm:px-8 lg:px-16 py-12">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-[#1a193a] p-10 max-w-3xl w-full bg-white flex flex-col  ">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl mb-5 lg:text-6xl font-bold"
          >
            Community & Engagement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-md md:text-xl lg:text-2xl mt-4 font-medium leading-relaxed"
          >
            A Platform for Influence. The Lab Leader is more than a mention; it is a gateway to a professional ecosystem:
            Global Recognition backed by a credible evaluation process, an elite network of pioneers, and exclusive digital showcases.
          </motion.p>

        </div>
      </div>

    </section>
  )
}

export default Categories