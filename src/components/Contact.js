import React from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser"
import { useRef } from 'react'
import { useState } from 'react'

import gh from "./images/GH.png"
import githublogo from "./images/githublogo.png"
import ln from "./images/linkedin.png"

const Contact = ()=>{
    const ref = useRef()

    const [success,setSuccess] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()

        emailjs
      .sendForm(
        "service_7tat96p",
        "template_b47tesh",
        ref.current,
        "TkQPg4iRQ6CGT-Md2")
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
                console.log(error.text);
                setSuccess(false)
        });
    }
    return(
        <div className='ContactBackground'>
            {console.log(document.documentElement.clientHeight)}
            <div className='ContactContainer'>
                <div className='ContactLeft'>
                    <form ref={ref} action='august.zilakovs@gmail.com' className='ContactForm'>
                        <h1 className='ContactTitle'>
                            Contact Me!
                        </h1>
                        <input placeHolder='Name' name='name' className='NameInput'></input>
                        <input placeholder='Email' className='EmailInput' name='email'></input>
                        <textarea placeholder='Message Here' className='Email' rows={10} name='message'></textarea>
                        <button className='SendEmail' onClick={handleSubmit}>Send</button>
                        {success ? <p className='Success'>Your message has been sent</p>:<div></div>}
                    </form>
                </div>
                <div className='ContactRight'>
                    <div className='ContactGridBox'>

                            <a href='https://github.com/Term-AZ' target="_blank"> <img className='gridImage'src={githublogo}></img></a>
                            <a href='https://www.linkedin.com/in/augusts-zilakovs-118083187/' target="_blank"> <img className='gridImage'src={ln}></img></a>
                    </div>
                </div>    
            </div>
        </div>
    )

}

export default Contact