


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
        className="text-2xl md:text-3xl lg:text-4xl text-[#1a193a] text-center font-semibold px-4"
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
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-20 mt-20 mb-30">

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
  className="w-full sm:h-50 md:h-70  flex items-center justify-center text-2xl text-[#1a193a]"
>
           {item.image}
            </div>



            <h1 className="text-lg sm:text-xl px-5 md:text-2xl  font-semibold">
              {item.title}
            </h1>

            <p className="text-md  sm:text-lg px-5 mt-2 mb-10  md:text-xl">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </section>

      {/* ================= EVALUATION ================= */}
      <section id="evaluation" className="grid  bg-gray-100 grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-20 py-30 mt-10 w-full">
<div className="col-span-2">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl flex flex-col justify-center items-center md:text-3xl lg:text-4xl text-[#1a193a] text-center font-semibold "
          >
          Selection & Evaluation
        </motion.h1>

        <span className="mt-4 flex self-center justify-center text-sm sm:text-base md:text-lg  py-2 rounded-full text-[#1a193a] font-light text-center">
          A Merit-Based Digital Spotlight.
        </span>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm sm:text-xl md:text-2xl text-[#1a193a] text-center mt-4 px-4 max-w-3xl "
          >
          Our recognition process is transparent and independent, focusing on four key pillars:
        </motion.p>
          </div>

        {/* Evaluation Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 col-span-3  px-4 sm:px-8 lg:px-5">

          {[
            { title: "Industry Impact (40%)", desc: "Proven leadership and measurable market change" },
            { title: "Innovation & Originality (30%)", desc: "Pioneering contributions and unique problem-solving" },
            { title: "Governance & Ethics (20%)", desc: "Responsible leadership practices" },
            { title: "Global Reach (10%)", desc: "Cross-border influence and sustainability" },
          ].map((item, i) => (
            <div
              
              className="flex flex-col  p-5 sm:p-4 text-center text-[#1a193a] space-y-3 shadow-lg  transition bg-white border border-gray-200  "
            >
              <h1 className="text-lg sm:text-xl mb-10 md:text-2xl font-semibold">
                {item.title}
              </h1>

              <p className="text-md sm:text-lg md:text-xl">
                {item.desc}
              </p>
            </div>
          ))}

        </section>

      </section>

      {/* ================= COMMUNITY ================= */}
      <div className="relative bg-[url('/community.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-end min-h-[60vh] sm:min-h-[90vh] px-4 sm:px-8 lg:px-16 py-12">

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/70"></div> */}

        <div className="relative z-10 text-[#1a193a]  p-10 max-w-3xl w-150 bg-white flex flex-col  ">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl mb-5 lg:text-4xl font-semibold"
          >
            Community & Engagement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-md lg:text-xl mt-4 font-medium leading-relaxed"
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