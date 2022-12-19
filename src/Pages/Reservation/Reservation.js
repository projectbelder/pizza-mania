import React from 'react';
import Haldi from '../../Assets/Haldi 1.png'
import Clover from '../../Assets/Clover 1.png'
import Capsicum from '../../Assets/Capcicum 1.png'
import Gobi from '../../Assets/Gobi 1.png'

import './Reservation.css'


const Reservation = () => {
    return (
        <div className='relative flex justify-between mx-auto py-8 mt-5'>
            <div>
                <img className='ml-24 Clover w-[380px]' src={Clover} alt="Clover" />
                <img className='haldi w-[380px]' src={Haldi} alt="Haldi" />
                <img className='Capsicum w-[380px]' src={Capsicum} alt="Capsicum" />
                <img className='Gobi w-[380px]' src={Gobi} alt="Gobi" />


            </div>
            <div className='f wh p-10 mr-12 for'>
                <div className='text-center '>
                    <h2 className='text text-3xl'>Reservation</h2>
                    <p>Book online or give us a call on +91 1111 222 333</p>
                    <p>Between 9:30 am - 10:00 pm</p>
                </div>
                <form noValidate='' action='' className=' space-y-12 ng-untouched ng-pristine ng-valid'>
                    <div className='space-y-4 bg-transparent mt-8'>
                        <div className=' mb-2'>
                            <label htmlFor='email' className='block mb-2 text-sm text-start'>
                                Name:
                            </label>
                            <input type='text' name='name' id='name' className=' bg w-[300px] px-3 py-2 border-none outline-none  rounded-md  text-black' data-temp-mail-org='0' />
                        </div>
                        <div className=' mb-2'>
                            <label htmlFor='email' className='block mb-2 text-sm text-start'>
                                Email:
                            </label>
                            <input type='email' name='email' id='email' className=' bg w-[300px] px-3 py-2 border-none outline-none rounded-md text-black' data-temp-mail-org='0' />
                        </div>
                        <div className=' mb-2'>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='phonenumber' className='text-sm text-start'>
                                    Phone Number:
                                </label>
                            </div>
                            <input type='number' name='phonenumber' id='phonenumber' className=' bg w-[300px] px-3 py-2 outline-none border-none rounded-md text-black' />
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='w-[150px] t font-fold rounded-md py-3'>
                                Submit
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reservation;