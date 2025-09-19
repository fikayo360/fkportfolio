import './contact.css'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [success,setSucess] = useState(false)
    const [notification,setNot] = useState('')
    const form = useRef();
    
    const clear = () => {
        setTimeout(()=>{
            setNot('')
        },5000)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_rmhtq3i', 'template_xbmg67d', form.current, '-s6cbcgwAZ_RR88P3')
        .then((result) => {
            console.log(result.text);
            setSucess(!success)
            setNot('email sent successfully')
            form.current.reset();
            clear()  

        }, (error) => {
            console.log(error.text);
            setSucess(false)
        });
    }

    return (
        <div id="contact">
            <div id='cWrap'>
            
            <form ref={form} onSubmit={handleSubmit}>
                <h1 id='cHead'>Contact</h1>
                <input placeholder="your name" name='name'/>
                <textarea placeholder="what do you want to get done" name='message' />
                <button> contact </button>
            </form>
            <p id='not'> {notification} </p>
            </div>
        </div>
    )
}