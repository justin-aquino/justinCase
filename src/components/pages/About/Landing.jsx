import React from 'react'
import ReactTyped from 'react-typed'
import "./About.css"

const Landing = () => {
  return (
    <div className='intro tats'>
        <section>
            <img src="justin.png" alt="justin"/>
        </section>
  
        <section  className='typed-text'>
            <ReactTyped 
                strings={[
                    "Hello Visitor!",
                    "I'm Justin!",
                    "I'm a fullstack engineer.",
                    "Welcome to my website!",
                    "Unfortunately this site is still under construction...",
                    "But feel free to look around and check my projects!",
                    "  ",
                    "  "
                ]}
                typeSpeed={50}
                backSpeed={20}
                loop
            />
            </section>
        </div>
  )
}

export default Landing