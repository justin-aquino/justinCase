import React from 'react'
import ReactTyped from 'react-typed'
import "./About.css"

const Landing = () => {
  return (

        <div className='intro'>
        <img src="justin.png" alt="justin"/>
            <section>
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
                    backSpeed={50}
                    loop
                    className='typed-text'
                />
            </section>

        </div>

  )
}

export default Landing