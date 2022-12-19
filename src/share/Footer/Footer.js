import React from 'react';
import footer from '../../Assets/10219 2.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src={footer} alt="" />
                    <p><span className='font-bold'> SRJR Group  Mission Ltd.</span><br />Providing reliable tech since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='https://www.linkedin.com/in/md-khalid-hassan-sagor-81a428258/' className="link link-hover">Branding</a>
                    <a href='https://www.linkedin.com/in/raju-talukdar/' className="link link-hover">Design</a>
                    <a href='https://www.linkedin.com/in/mohammadjion/' className="link link-hover">Marketing</a>
                    <a href='https://www.linkedin.com/in/ishtiaq-robin/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='https://www.linkedin.com/in/md-khalid-hassan-sagor-81a428258/' className="link link-hover">About us</a>
                    <a href='https://www.linkedin.com/in/raju-talukdar/' className="link link-hover">Contact</a>
                    <a href='https://www.linkedin.com/in/mohammadjion/' className="link link-hover">Jobs</a>
                    <a href='https://www.linkedin.com/in/ishtiaq-robin/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='https://www.linkedin.com/in/md-khalid-hassan-sagor-81a428258/' className="link link-hover">Terms of use</a>
                    <a href='https://www.linkedin.com/in/raju-talukdar/' className="link link-hover">Privacy policy</a>
                    <a href='https://www.linkedin.com/in/mohammadjion/' className="link link-hover">Cookie policy</a>
                    <a href='https://www.linkedin.com/in/ishtiaq-robin/' className="link link-hover">Security policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;