import React from 'react'
import ReactTyped from 'react-typed'
import "./About.css"

const About = () => {
  return (

        <div className=' intro'>
        <img src="justin.png" alt="justin"/>
            <section>
                <ReactTyped 
                    strings={[
                        "Hello Visitor!",
                        "Thanks for visiting my website.",
                        "I'm a software engineer",
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

export default About