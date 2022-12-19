import React from 'react';
import MenuLogo from '../../Assets/10219 1.png'
import './Menu.css'

const Menu = () => {
    return (
        <div className='flex justify-between text mt-16'>
            <div>
                <img className='w-[360px]' src={MenuLogo} alt="MenuPic" />
            </div>
            <div className='w-full'>
                <h2 className='fontt text text-center text-6xl'>Menu</h2>
                <div className='flex flex-row justify-around mt-7'>
                    <div className='w-full'>
                        <h3 className='text-4xl text-center'>Pizza by the slice</h3>
                        <div className='text-2xl text-center leading-10 mt-5'>
                            <p>Pizza style  .......................................  $4.2</p>
                            <p>Pizza style  .......................................  $4.2</p>
                            <p>Pizza style  .......................................  $4.2</p>
                            <p>Pizza style  .......................................  $4.2</p>

                        </div>
                        <div className='py-8'>
                            <h3 className='text-4xl text-center'>Pizza by the slice</h3>
                            <div className='text-2xl text-center leading-10 mt-5'>
                                <p>Pizza style  .......................................  $4.2</p>
                                <p>Pizza style  .......................................  $4.2</p>
                                <p>Pizza style  .......................................  $4.2</p>
                                <p>Pizza style  .......................................  $4.2</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h3 className='text-4xl text-center'>Gourmet Pizza </h3>
                        <div className='w-full text-2xl'>
                            <div className='my-5'>
                                <div className="flex flex-row justify-between text-start">
                                    <p>Classic Pizza </p>
                                    <p className='mr-[40px]'>$19.9</p>
                                </div>
                                <p className='w-[15em] text-xl'>Pizza comes with all tapping that you describe in this section</p>
                            </div>
                            <div className='my-5'>
                                <div className="flex flex-row justify-between text-start">
                                    <p>Classic Pizza </p>
                                    <p className='mr-[40px]'>$19.9</p>
                                </div>
                                <p className='w-[15em] text-xl'>Pizza comes with all tapping that you describe in this section</p>

                            </div>
                            <div className='my-5'>
                                <div className="flex flex-row justify-between text-start">
                                    <p>Classic Pizza </p>
                                    <p className='mr-[40px]'>$19.9</p>
                                </div>
                                <p className='w-[15em] text-xl'>Pizza comes with all tapping that you describe in this section</p>

                            </div>
                            <div className=''>
                                <div className="flex flex-row justify-between text-start">
                                    <p>Classic Pizza </p>
                                    <p className='mr-[40px]'>$19.9</p>
                                </div>
                                <p className='w-[15em] text-xl'>Pizza comes with all tapping that you describe in this section</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;