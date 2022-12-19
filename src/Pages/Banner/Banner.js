import React from 'react';
import banner_img from '../../assets/banner/banner_img.png'
import victor_img from '../../assets/banner/Vector.png'

const Banner = () => {
    return (
        <div className='mx-5'>
            <div className=''>
                <div className="hero">
                    <div className="hero-content flex-col p-0 lg:flex-row-reverse">
                        <img src={banner_img} className="rounded-lg w-[973px] h-[697.16px]" alt='' />
                        <div>
                            <h1 className="text-8xl font-semibold quicksand text-[#FF5B00]">Pizza
                                Family</h1>
                            <p className="pt-16 text-3xl font-semibold quicksand text-[#7B3000]">People
                                Disappoint, But <br />
                                Pizza Never Does.</p>
                            <input type="text" placeholder="" className="mt-16 rounded border-4 border-[#FF5B00] h-12 w-[283.5px] bg-transparent outline-none focus:border-[#FF5B00]" />
                            <br />
                            <button className='btn btn-[#FF5B00] mt-8'>Try Now</button>
                        </div>
                    </div>
                </div>
                <img className="" src={victor_img} alt="" />
            </div>
        </div>
    );
};

export default Banner;