
import React from 'react'
import { LiaLinkedin } from 'react-icons/lia'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
  <footer className='flex justify-between px-50 py-20 text-xl bg-[#1a193a] text-white'>
    <div>
        <h1>
            Quick Link
        </h1>

        <ul>
         <li>
<a href="/#">Home</a>
        </li>
         <li>
<a href="/#about">About us</a>

        </li>

         <li>
<a href="/#categories">Categories</a>

        </li>
        <li>
<a href="/#mission">Mission & Vision</a>

        </li>
         <li>
<a href="/nominate">Nominate</a>

        </li>
    </ul>
    </div>

   <div id='contact'>
        <h1 className='font-bold'>
            Contacts
        </h1>
<ul className='mt-5 flex gap-5 '>
  <li >
     <a href=""><MdEmail className='text-5xl'/></a>
  </li>
<li>
     <a href=""><LiaLinkedin className='text-5xl' /></a>
  </li>
</ul>
      
    </div>
  </footer>
  )
}

export default Footer