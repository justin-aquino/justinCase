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
                        "Thanks for visiting my website.",
                        "Unfortunately this site is still under construction...",
                        "Come visit again next time!",
                        "  ",
                        "  "
                    ]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                   
                />
            </section>

        </div>

  )
}

export default Landing