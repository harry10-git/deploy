import { Input } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomeNav from '../components/HomeNav'
import QRimg from '../images/QRimg.jpeg'
import icon from '../images/Vector.svg'
import formbg from '../images/reg-form-bg.png'
import registraionNote from '../images/registration-page-note.svg'
import regformtimeline from '../images/reg-timeline.svg'

import AuroraText from '../assets/AURORA-24.svg'

export default function RegisterForm() {
  const styles = {
    backgroundImage: `url(${formbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '', // Adjust the height as needed
  }

  const submissionProgress = () => {
    toast.info('Submission in Progress...', {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }

  const notify = () => {
    toast.success('Successfully Registered, Login again to continue', {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }

  const alreadyRegistered = () => {
    toast.success('Already Registered!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  const [googleData, setGoogleData] = useState({})
  // const [userData, setUserData] = useState({});

  // console.log("response googleData", googleData)
  const navigate = useNavigate()

  const logout = () => {
    window.open('/logout', '_self')
  }

  const getGoogleData = async () => {
    try {
      const response = await axios.get('/login/success', {
        withCredentials: true,
      })
      //console.log("response axios", response)
      setGoogleData(response.data.user)
      setFormData({ email: response.data.user.email })

      // setGoogleData(response.data.user)
      //console.log(googleData)

      if (response.data.user.registered === true) {
        alreadyRegistered()
        setTimeout(() => {
          navigate('/')
        }, 2000)
      }
    } catch (error) {
      console.log('axios error: ', error)
      navigate('/*')
    }
  }

  useEffect(() => {
    getGoogleData()
  }, [])

  useEffect(() => {
    //console.log(googleData)
  }, [googleData])

  const [formData, setFormData] = useState({
    email: 'null',
    name: 'null',
    phoneNo: 0,
    regNo: 0,
    branch: 'null',
    learnerid: 'null',
    upiID: 'null',
    txnID: 'null',
    workshops: [],
  })

  const [image, setImage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.screenshot) {
      return
    }
    // console.log(formData);

    try {
      submissionProgress()
      await registerUser()
      try {
        const response = await fetch(`/update-google-data/${googleData._id}`, {
          method: 'PATCH',
          body: JSON.stringify({ registered: true }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        // const json = await response.json()
        //console.log("Response JSON: ", json);
      } catch (error) {
        console.error('Error updating data:', error.message)
      }
    } catch (error) {
      console.log('Error during form submission: ', error)
      navigate('/*')
    }
    notify()
    setTimeout(() => {
      logout()
    }, 5000)
  }

  useEffect(() => {
    uploadScreenshot()
  }, [image])

  const uploadScreenshot = async () => {
    // e.preventDefault()
    if (!image) return

    const uploadbg = document.getElementById('upload-box')
    if (uploadbg) {
      uploadbg.innerHTML =
        "<div className='uploaded-image' style='display: flex; justify-content: center; align-items: center; color: white; font-size: 1.5rem;'>Uploading...</div>"
    }

    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'Aurora')
    data.append('cloud_name', 'days7d2mj')

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/days7d2mj/image/upload',
        {
          method: 'POST',
          body: data,
        }
      )

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const result = await response.json()
      //console.log(result);

      // Update the screenshot field in the form data
      setFormData({ ...formData, screenshot: result.secure_url })
    } catch (error) {
      console.error('Error uploading image:', error)
      throw error // Propagate the error to the calling function
    }
  }

  useEffect(() => {
    const uploadbg = document.getElementById('upload-box')
    if (uploadbg && formData.screenshot) {
      uploadbg.innerText = 'Uploaded'
      uploadbg.innerHTML = `<div className='uploaded-image' style='display: flex; justify-content: center; align-items: center; color: white; font-size: 1.5rem;'><img src=${formData.screenshot} alt="hduh"="df" /></div>`
    }
  }, [formData.screenshot])

  // Define the asynchronous function
  const registerUser = async () => {
    try {
      const response = await fetch(`/register-user`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json = await response.json()
      //console.log("Response JSON: ", json);
    } catch (error) {
      console.error('Error updating data:', error)
      // Handle the error as needed
    }
  }

  return (
    // <div>
    //   <div className='bg-black pb-4'>
    //   <HomeNav/>
    //   </div>
    //   <div
    //     className="lg:grid lg:grid-cols-5 flex-col bg-[#000F21] text-white"
    //     style={{ height: '', overflowY: 'auto', overflowX: 'hidden' }}
    //   >
    //     <div className="grid-rows-4 grid-cols-2 col-span-3 bg-[#000F21] lg:px-10">
    //       <form onSubmit={handleSubmit}>
    //         <div className="grid col-span-2 grid-rows-2 pl-10 lg:pl-14 pt-24">
    //           <div className="text-[40px] font-normal font-['Inter'] leading-normal text-blue-500 p">
    //             Registration Form
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-2 grid-rows-5 pl-10 lg:pl-14">
    //           <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
    //             Personal Information
    //           </div>

    //           <div
    //             key="underlined"
    //             className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0 pb-10"
    //           >
    //             <Input
    //               onChange={handleChange}
    //               isRequired
    //               type="text"
    //               variant="underlined"
    //               label="Name"
    //               name="name"
    //               id="name"
    //               style={{ color: 'white' }}
    //             />
    //           </div>

    //           <div
    //             key="underlined"
    //             className="flex w-full flex-wrap pr-8 lg:pr-20 md:flex-nowrap mb-6 md:mb-0 pb-10"
    //           >
    //             <Input
    //               onChange={handleChange}
    //               isRequired
    //               type="number"
    //               variant="underlined"
    //               label="Registration Number"
    //               name="regNo"
    //               id="regNo"
    //               style={{ color: 'white' }}
    //             />
    //           </div>

    //           <div
    //             key="underlined"
    //             className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0 pb-10"
    //           >
    //             <Input
    //               onChange={handleChange}
    //               isRequired
    //               type="number"
    //               variant="underlined"
    //               label="Phone Number"
    //               name="phoneNo"
    //               id="phoneNo"
    //               style={{ color: 'white' }}
    //             />
    //           </div>

    //           <div
    //             key="underlined"
    //             className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-8 lg:pr-20"
    //           >
    //             <Input
    //               onChange={handleChange}
    //               isRequired
    //               type="email"
    //               variant="underlined"
    //               label="Learner ID"
    //               name="learnerid"
    //               id="learnerid"
    //               style={{ color: 'white' }}
    //             />
    //           </div>

    //           <div
    //             key="underlined"
    //             className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
    //           >
    //             <Input
    //               onChange={handleChange}
    //               isRequired
    //               type="number"
    //               variant="underlined"
    //               label="Year of Study"
    //               name="year"
    //               id="year"
    //               style={{ color: 'white' }}
    //             />
    //           </div>

    //           <div
    //             key="underlined"
    //             className="flex w-full flex-wrap pr-8 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
    //           >
    //             <Input
    //               onChange={handleChange}
    //               isRequired
    //               type="text"
    //               variant="underlined"
    //               label="Branch"
    //               name="branch"
    //               id="branch"
    //               style={{ color: 'white' }}
    //             />
    //           </div>

    //           <div
    //             key="underlined"
    //             className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
    //           >
    //             <Input
    //               onChange={handleChange}
    //               isRequired
    //               type="text"
    //               variant="underlined"
    //               label="UPI ID"
    //               name="upiID"
    //               id="upiID"
    //               style={{ color: 'white' }}
    //             />
    //           </div>

    //           <div
    //             key="underlined"
    //             className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
    //           >
    //             <Input
    //               onChange={handleChange}
    //               isRequired
    //               type="text"
    //               variant="underlined"
    //               label="Transaction ID"
    //               name="txnID"
    //               id="txnID"
    //               style={{ color: 'white' }}
    //             />
    //           </div>
    //         </div>

    //         <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-3 pl-10 h-60 pt-14">
    //           <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal h-5 ">
    //             Payment Information
    //           </div>

    //           <div className=" text-blue-500 text-xl lg:text-2xl font-normal font-['Inter'] leading-normal h-8">
    //             Payment Address
    //           </div>
    //           <div className=" text-blue-500 text-xl lg:text-2xl font-normal font-['Inter'] leading-normal pl-10">
    //             Payment Screenshot Upload
    //           </div>

    //           <div className="h-40 pt-5">
    //             <img
    //               src={QRimg}
    //               alt="Description of the image"
    //               className="rounded-lg shadow-lg pr-5 max-w-full lg:h-60 h-28"
    //             />
    //           </div>
    //           <form
    //             onClick={() => document.querySelector('.input-field').click()}
    //             className="pl-12"
    //           >
    //             <input
    //               isRequired
    //               id="file-upload"
    //               name="screenshot"
    //               type="file"
    //               accept="image/*"
    //               className="input-field"
    //               hidden
    //               onChange={(e) => {
    //                 setImage(e.target.files[0])
    //               }}
    //             />
    //             <div
    //               id="upload-box"
    //               className="lg:w-60 w-32 h-28 lg:h-60 border-dashed border-2 border-radius:1rem mt-5 flex align-middle justify-center"
    //             >
    //               <MdCloudUpload
    //                 color="#ffffff"
    //                 size={10}
    //                 className="lg:w-16 w-8 h-auto align-middle justify-center"
    //               />
    //             </div>
    //           </form>
    //         </div>
                  
    //         <div className=" h-80 pt-40 lg:pt-60 submit-btn">
            
    //         <div className='flex items-center justify-center'>
    //         <button type='submit'
    //           className=' px-4 py-2 rounded-xl border-2 border-blue-600 text-blue-600 font-medium font-["Inter"] leading-normal hover:bg-blue-600 hover:text-white transition'
    //         >
    //               Register
    //         </button>
    //         </div>
    //           {/* <button
    //             type="submit"
    //             className="w-24 h-12 rounded-xl border-2 border-blue-600  items-center gap-3 ml-12 inline-flex "
    //           >
    //             <div className="text-blue-600 text-base font-medium font-['Inter'] leading-normal pl-5">
    //               Register
    //             </div>
    //           </button> */}
    //           <img src={registraionNote} className='px-5 py-5 lg:py-7' alt="" />
    //         </div>
    //       </form>
        
    //     </div>
    //     <div
    //       style={styles}
    //       className="style={styles} grid-rows-4 row-span-5 block w-full  col-span-2 left-[-3px]  border border-white border-opacity-10"
    //     >
         
    //       <img className='scale-80 lg:mt-4' src={AuroraText} alt="Aurora" />

        

    //       <div className="flex justify-center text-center text-white text-[25.26px] font-medium font-['Inter'] pt-16">
    //         <img src={icon} alt="dghh" />
    //         02 Feb 2024 - 09 Feb 2024
    //       </div>

    //       <div className="lg:pl-10 pt-16 mb-10 pb-10 pl-8 pt-">
    //         <img src={regformtimeline} className="w-5/6 h:auto" alt='timeline' />
    //       </div>
    //     </div>

    //     <ToastContainer
    //       position="top-right"
    //       autoClose={5000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="colored"
    //     />

    //     <ToastContainer
    //       position="top-right"
    //       autoClose={2000}
    //       hideProgressBar={true}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss
    //       draggable
    //       pauseOnHover
    //       theme="light"
    //     />
    //     <ToastContainer />
    //   </div>
    // </div>
    <div className='flex justify-center items-center'>
      <h2 className='text-white text-2xl'>Registrations are closed now !!</h2>
    </div>
  )
}
