import 'tailwindcss/tailwind.css'
import aboutbox1 from '../images/aboutbox1.svg'
import aboutbox2 from '../images/aboutbox2new.png.jpg'
import aboutbox3 from '../images/aboutbox3.svg'
import './About.css'


import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  AOS.init();
  return (
    <div className='lg:grid grid-cols-2 bg-transparent pt-5' id="about"
     data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div  className='w-full'>
        <img src={aboutbox1} alt="gtg" className='mx-auto w-full lg:p-16 p-12'/>  
      </div>
      <div className='grid w-full'>
        <div>
          <img src={aboutbox2} alt="gdg" className=' mx-auto lg:px-40 lg:block hidden lg:pt-14 '/>
        </div>
        <div>
          <img src={aboutbox3} alt="gdgdz" className='mx-auto w-full lg:px-20 px-12'/>
        </div>
      </div>
    </div>
  )
}

export default About
