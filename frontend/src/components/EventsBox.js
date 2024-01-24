import { Button } from '@nextui-org/react'
import React from 'react'
import trophycup from '../images/whitetrophy.svg'

export default function EventsBox() {

    return (
        <div className='relative lg:top-[-25rem] top-[-22rem] h-[25rem] lg:px-24 px-10'>
            <div className='border-[#11A8E4] border-solid border-3 lg:rounded-[3rem] rounded-2xl w-full h-full mx-auto m-10 flex justify-center items-center'>
                <div className='text-center text-white'>
                    <h4 className='p-5 text-[#11A8E4] font-semibold lg:text-[3rem]'>For more information on the Events & Workshops:</h4>
                    <h4 className='p-5 font-bold lg:text-[2rem]'>Click below for AURORA's Ultimate Experience!</h4>
                    <Button color="primary" size="lg" variant="shadow"
                        className="lg:w-[15rem] m-5"
                    >
                        <a href="/events" className='flex gap-4'>
                            <img src={trophycup} alt="" />
                            Events
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
