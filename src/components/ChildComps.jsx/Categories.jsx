// import React from 'react'
// import { BiAward, BiMedal, BiRocket, BiTrophy } from 'react-icons/bi'
// import { motion } from 'framer-motion'
// import { ImWoman } from 'react-icons/im'
// import { FaLandmark } from 'react-icons/fa6'


// const cardVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// }

// function Categories() {
//   return (
//     <section className='bg-[#4ac2f0] mt-[-80px]'>
//           <motion.h1
//                    initial={{ opacity: 0, y: 50 }}
//                    whileInView={{ opacity: 1, y: 0 }}
//                    viewport={{ once: true }}
//                    transition={{ duration: 0.7, ease: 'easeOut' }} 
//                    id='categories'         
//           className="text-4xl text-[#1a193a] text-center mt-20 sm:text-5xl font-bold md:text-6xl lg:text-6xl leading-tight"
//         >
//             Recognition Categories 
//         </ motion.h1>

//         <motion.p
//                  initial={{ opacity: 0, y: 40 }}
//                  whileInView={{ opacity: 1, y: 0 }}
//                  viewport={{ once: true }}
//                  transition={{ duration: 0.7, delay: 0.15 }} className="text-base sm:text-lg md:text-2xl text-[#1a193a] text-center mt-5  font-medium">Each year, one outstanding recipient is highlighted in each of the following digital 
// showcases</motion.p>

//         <section  className='grid grid-cols-3 items-center gap-10 px-30 justify-center mt-20 mb-20'>
// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col items-start text-start  rounded-xl  p-10  justify-left bg-[#1a193a] text-white shadow-black space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300  '>
//     <div className="text-start w-fit text-[#1a193a] bg-gradient-to-br mb-5 from-[#4ac2f0] to-[#1c94fc] p-5 rounded-2xl text-3xl shadow-md">
//                   <BiAward/>
//                 </div>
//     <h1 className='text-2xl font-bold mb-5'>
//         The Lab Leader of the Year
//     </h1>
//     <p className='text-xl'>
//          Our highest digital honor for a leader who has fundamentally 
// reshaped a global industry
//     </p>
// </motion.div>

// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col items-start text-start  rounded-xl  p-10  justify-left bg-[#1a193a] text-white shadow-black space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300  '>
//     <div className="text-start w-fit text-[#1a193a] bg-gradient-to-br mb-5 from-[#4ac2f0] to-[#1c94fc] p-5 rounded-2xl text-3xl shadow-md">
//                   <BiRocket/>
//                 </div>
//     <h1 className='text-2xl font-bold mb-5'>
//         Product Innovation Pioneer
//     </h1>
//     <p className='text-xl'>
//          Recognizing breakthrough development that has driven 
// significant technological adoption
//     </p>
// </motion.div>


// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col items-start text-start  rounded-xl  p-10  justify-left bg-[#1a193a] text-white shadow-black space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300  '>
//     <div className="text-start w-fit text-[#1a193a] bg-gradient-to-br mb-5 from-[#4ac2f0] to-[#1c94fc] p-5 rounded-2xl text-3xl shadow-md">
//                   <BiMedal/>
//                 </div>
//     <h1 className='text-2xl font-bold mb-5'>
//         Emerging Product Pioneer
//     </h1>
//     <p className='text-xl'>
//          Spotlighting a rising leader demonstrating exceptional promise 
// and early global impact
//     </p>
// </motion.div>


// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col items-start text-start  rounded-xl  p-10  justify-left bg-[#1a193a] text-white shadow-black space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300  '>
//     <div className="text-start w-fit text-[#1a193a] bg-gradient-to-br mb-5 from-[#4ac2f0] to-[#1c94fc] p-5 rounded-2xl text-3xl shadow-md">
//                   <ImWoman/>
//                 </div>
//     <h1 className='text-2xl font-bold mb-5'>
//         Women in Product Leadership
//     </h1>
//     <p className='text-xl'>
//          Celebrating a woman whose innovation has transformed 
// industries and expanded opportunities
//     </p>
// </motion.div>

// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col items-start text-start  rounded-xl  p-10  justify-left bg-[#1a193a] text-white shadow-black space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300  '>
//     <div className="text-start w-fit text-[#1a193a] bg-gradient-to-br mb-5 from-[#4ac2f0] to-[#1c94fc] p-5 rounded-2xl text-3xl shadow-md">
//                   <FaLandmark/>
//                 </div>
//     <h1 className='text-2xl font-bold mb-5'>
//        Public Sector & Policy Pioneer
//     </h1>
//     <p className='text-xl'>
//          Recognizing leadership in governance or public service that 
// enables industry growth
//     </p>
// </motion.div>


// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col items-start text-start  rounded-xl  p-10  justify-left bg-[#1a193a] text-white shadow-black space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300 '>

//     <div className=" text-start w-fit text-[#1a193a] bg-gradient-to-br mb-5 from-[#4ac2f0] to-[#1c94fc] p-5 rounded-2xl text-3xl shadow-md">
//                   <BiTrophy/>
//                 </div>
//     <h1 className='text-2xl font-bold mb-5'>
//         Lifetime Product Excellence
//     </h1>
//     <p className='text-xl'>
//           A featured retrospective on a career of extraordinary 
// contribution and enduring influence
//     </p>
// </motion.div>

//         </section>


//         {/* selection and Evaluation */}

//         <section
//         id='evaluation'
//          className='bg-white pt-20 pb-30 flex flex-col items-center justify-center '>

// <motion.h1
//                    initial={{ opacity: 0, y: 50 }}
//                    whileInView={{ opacity: 1, y: 0 }}
//                    viewport={{ once: true }}
//                    transition={{ duration: 0.7, ease: 'easeOut' }}          
//           className="text-4xl text-[#1a193a] text-center mt-20 sm:text-5xl font-bold md:text-6xl lg:text-6xl leading-tight"
//         > Selection & Evaluation </motion.h1>

//          <span className="mt-4 text-lg text-center md:text-xl bg-[#f3f3f5] px-5 py-2 rounded-full text-[#1a193a] font-light inline-block">
//            A Merit-Based Digital Spotlight.
//         </span>

//   <motion.p
//                         initial={{ opacity: 0, y: 40 }}
//                  whileInView={{ opacity: 1, y: 0 }}
//                  viewport={{ once: true }}
//                  transition={{ duration: 0.7, delay: 0.15 }} className="text-base  sm:text-lg md:text-2xl text-[#1a193a] text-center mt-5  font-medium">
                            
//           Our recognition process is transparent and independent, focusing on four key pillars: 
//           </motion.p>
          
//          <section  className='grid grid-cols-3 items-center gap-10 px-30 justify-center mt-20 mb-20'>

// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col rounded-xl  p-5 text-center justify-left h-40 text-[#1a193a] space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300 '>

    
//     <h1 className='text-2xl font-bold mb-5'>
//       Industry Impact (40%)
//     </h1>
//     <p className='text-xl'>
//          Proven leadership and measurable market change
//     </p>
// </motion.div>

// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col rounded-xl  p-5 text-center justify-left h-40 text-[#1a193a] space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300 '>

    
//     <h1 className='text-2xl font-bold mb-5'>
//       Innovation & Originality (30%) 
//     </h1>
//     <p className='text-xl'>
//          Pioneering contributions and unique problem-solving
//     </p>
// </motion.div>

// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col rounded-xl  p-5 text-center h-40 justify-left text-[#1a193a] space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300 '>

    
//     <h1 className='text-2xl font-bold mb-5'>
//      Governance & Ethics (20%)
//     </h1>
//     <p className='text-xl'>
//       Responsible leadership practices
//     </p>
// </motion.div>

// <motion.div
//   custom={0}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             whileHover={{ y: -10, scale: 1.03 }}
//  className='flex flex-col rounded-xl  p-5 text-center h-40 justify-left text-[#1a193a]  space-y-6 shadow-lg hover:shadow-2xl transition-transform duration-300 '>

    
//     <h1 className='text-2xl font-bold mb-5'>
//       Global Reach (10%)
//     </h1>
//     <p className='text-xl'>
//         Cross-border influence and sustainability
//     </p>
// </motion.div>


//           </section>

//         </section>

//          <div className="relative bg-[url('/city.jpg')] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-start min-h-[70vh] rounded-b-lg px-4 sm:px-10 py-6">
//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

//       <div className='z-10 text-white w-[60%] pl-50'>
//          <motion.h1
//                    initial={{ opacity: 0, y: 50 }}
//                    whileInView={{ opacity: 1, y: 0 }}
//                    viewport={{ once: true }}
//                    transition={{ duration: 0.7, ease: 'easeOut' }}          
//           className="text-4xl mt-20 sm:text-5xl font-bold md:text-6xl lg:text-6xl leading-tight"
//         >  Community & Engagement  </motion.h1>
//          <motion.p
//                         initial={{ opacity: 0, y: 40 }}
//                  whileInView={{ opacity: 1, y: 0 }}
//                  viewport={{ once: true }}
//                  transition={{ duration: 0.7, delay: 0.15 }} className="text-base sm:text-lg md:text-2xl  mt-5  font-medium">
                            
//          A Platform for Influence 
// The Lab Leader is more than a mention; it is a gateway to a professional ecosystem: 
// Global Recognition: Backed by a credible, independent evaluation process. 
// Elite Network: Recipients join a growing global network of pioneers. 
// Digital Showcase: Exclusive features on the website, LinkedIn, and community-specific 
// media. 
//           </motion.p>

//       </div>
//         </div>

//     </section>
//   )
// }

// export default Categories



import React from 'react'
import { BiAward, BiMedal, BiRocket, BiTrophy } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { ImWoman } from 'react-icons/im'
import { FaLandmark } from 'react-icons/fa6'

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
    <section className="bg-[#4ac2f0] pt-16 sm:pt-20 lg:pt-24">

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
        className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1a193a] text-center mt-4 px-4 max-w-3xl mx-auto font-medium"
      >
        Each year, one outstanding recipient is highlighted in each of the following digital showcases
      </motion.p>

      {/* ================= CATEGORY CARDS ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-20 mt-12 mb-16">

        {[
          { icon: <BiAward />, title: "The Lab Leader of the Year", desc: "Our highest digital honor for a leader who has fundamentally reshaped a global industry" },
          { icon: <BiRocket />, title: "Product Innovation Pioneer", desc: "Recognizing breakthrough development that has driven significant technological adoption" },
          { icon: <BiMedal />, title: "Emerging Product Pioneer", desc: "Spotlighting a rising leader demonstrating exceptional promise and early global impact" },
          { icon: <ImWoman />, title: "Women in Product Leadership", desc: "Celebrating a woman whose innovation has transformed industries and expanded opportunities" },
          { icon: <FaLandmark />, title: "Public Sector & Policy Pioneer", desc: "Recognizing leadership in governance or public service that enables industry growth" },
          { icon: <BiTrophy />, title: "Lifetime Product Excellence", desc: "A featured retrospective on a career of extraordinary contribution and enduring influence" },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="flex flex-col items-start text-left rounded-xl p-6 sm:p-8 bg-[#1a193a] text-white space-y-4 shadow-lg hover:shadow-2xl transition"
          >
            <div className="bg-gradient-to-br from-[#4ac2f0] to-[#1c94fc] p-4 rounded-xl text-2xl text-[#1a193a]">
              {item.icon}
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              {item.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg">
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
      <div className="relative bg-[url('/city.jpg')] bg-cover bg-center bg-no-repeat flex items-center min-h-[60vh] sm:min-h-[70vh] px-4 sm:px-8 lg:px-16 py-12">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-white max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Community & Engagement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 font-medium leading-relaxed"
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