import Welcome from '../Small_Components/Welcome'
import './About.css'
import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div id="about-section" ref={ref} className='About'>
      <div className="text">
        <Welcome text="ABOUT US" />

        <p className='first'>At Money Matters IIITNR, our mission is to simplify the complexities of personal finance and investing. We provide a collaborative platform where students can access educational resources and apply them to real-world financial scenarios.</p>
        <p className='first'>Our goal is to foster financial literacy and build a community of like-minded individuals passionate about achieving <b>'Financial Independence'</b> and success. Financial independence, which means having enough money saved or invested so that you can pay for your living expenses without needing to work. This allows you to maintain your current lifestyle without relying on a job for income. Financial freedom is not the same as retirement. When you achieve financial freedom, you can still work, but not for money anymore... This lets you follow your passion instead of just working for your finance. So, Join us and be the part of a community that helps you reach financial freedom! </p>

        <div className="grp">
          <img src="/group.jpg" alt="Group Photo" />
        </div>
      </div>
    </div>
  )
});

export default About