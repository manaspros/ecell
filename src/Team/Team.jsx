import './Team.css'
import Member from '../Small components/Member.jsx'
// import Member from 'src\Small Components\Member.jsx'
import Welcome from '../Small components/Welcome.jsx'
import React, { forwardRef } from "react";

const Team = forwardRef((props, ref) => {
  return (
    <div id="team-section" ref={ref} className='Team'>
      <Welcome text="TEAM" className="heading" />

      <div className="members">
        <Member
          source="/pranjal.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Pranjal Sharma" position="Head"
          insta="https://www.instagram.com/pranjal.s_18?utm_source=qr&igsh=MWVveW5jYWllcnVwZw==" LinkedIn="https://www.linkedin.com/in/pranjal-sharma-479a12276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
        <Member
          source="/sujal.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Sujal Goel" position="Vice Head"
          insta="https://www.instagram.com/simply_sujall?igsh=MTVnOGthbXhpcGxrZA%3D%3D&utm_source=qr" LinkedIn="https://www.linkedin.com/in/sujal-goel-2806161aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        />
        <Member
          source="/aryan.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Aryan Bramhe" position="Co-ordinator"
          LinkedIn="https://www.linkedin.com/in/aryan-bramhe-100979211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
        <Member
          source="/karthik.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Karthik Pandey" position="Team Lead"
          insta="" LinkedIn=""
        />
        <Member
          source="/kaushal.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Kaushal Ranjan" position="Design & Documentation"
          insta="" LinkedIn=""
        />
        {/* <Member 
            source="/garv.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Garv Bajaj" position="" 
            insta="" LinkedIn=""
            /> */}
        <Member
          source="chetan.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Chetankumar S Majjagi" position="Developer"
          insta="https://www.instagram.com/chetansmajjagi/" LinkedIn="https://www.linkedin.com/in/chetankumarsm/"
        />
        <Member
          source="vatsal.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Vatsal Shah" position="Developer"
          insta="https://www.instagram.com/vatsal_shah__/" LinkedIn="https://www.linkedin.com/in/vatsal-shah-40194527b/"
        />
        <Member
          source="/aggarwal.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Pranjal Aggarwal" position="Developer"
          insta="https://www.instagram.com/pranjal.agr_/" LinkedIn="https://www.linkedin.com/in/pranjal-agrawal-97502a283/"
        />
        <Member
          source="/shrey.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Shrey Omar" position="Developer"
          insta="" LinkedIn=""
        />
        <Member
          source="/srijan.jpg"
          // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Srijan" position="Developer"
          insta="" LinkedIn=""
        />
      </div>
    </div>
  )
});

export default Team
