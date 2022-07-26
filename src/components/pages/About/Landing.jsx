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
                    "I'm a fullstack engineer based in Los Angeles, CA.",
                    "Welcome to my website!",
                    "Thank you for visiting!",
                    "Feel free to look around and check my projects!",
                    "  ",
                    "  ",
                    "  "
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
            />
            </section>
        </div>
  )
}

export default Landing