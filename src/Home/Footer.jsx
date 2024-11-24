import Welcome from '../Small components/Welcome'
import Insta from '../Small components/Icons/insta'
import LinkedIn from '../Small components/Icons/LinkedIn'
import './Footer.css'
import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
    return (
        <footer id='footer-section' >
            <Welcome text="CONTACT US" />

            <div className="content">
                <div className="part1">
                    <div className="mail">
                        <h2>Mail ID</h2>
                        <a href="mailto:">moneymatters@iiitnr.edu.in</a>
                    </div>

                    <div className="links">
                        <h2>Social Links</h2>

                        <Insta Link="https://www.instagram.com/moneymatters_iiitnr/" />
                        <LinkedIn Link="https://www.linkedin.com/company/nnnnchdskjhdsjhfdsjkh097/posts/?feedView=all" />
                    </div>
                </div>

                <div className="part2">
                    <h2>Address</h2>

                    <p>IIIT Naya Raipur, Plot No. 7,</p>
                    <p>Sector 24, Near Purkhoti Muktangan</p>
                    <p>Atal Nagar-493661, Chhattisgarh</p>
                </div>

                <iframe className='part3' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4688.930373299446!2d81.76451912210946!3d21.12825872924271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1726359787706!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        
            <div className="line"></div>

            <div className="copyright">
                <h2>Copyright© 2024 All Rights reserved by Money Matters, IIITNR.</h2>
            </div>
        </footer>
    )
});

export default Footer