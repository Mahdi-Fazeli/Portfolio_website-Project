import React, { useState } from 'react'
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast'



export default function MessageStyle1() {
    
const [senderEmail, setSenderEmail] = useState('');
const [message, setMessage] = useState('');

const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {setMessage(event.target.value)};

const handleClick = () => {setMessage(""), setSenderEmail("")};


    return (
        <div>
            <p className="text-gray-500 -mt-7 dark:text-white/60">
                Please contact me directly at{" "}
                <a className="underline" href='mailto:example@gmail.com'>example@gmail.com</a>{" "}
                or through this form.
            </p>
            <form className='mt-10 flex flex-col  dark:text-black' 
            action={async (formData) => {
                const {data, error} = await sendEmail(formData)
                if (error) {
                    toast.error(error);
                    return;
                }
                toast.success("Email has been sent successfully");
            }}
                
            >
                <input 
                className='px-4 mb-5 h-14 rounded-lg border border-black/10 dark:bg-gray-300 dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
                name="senderEmail"
                type="email" 
                placeholder="Email"
                required
                maxLength={25}
                onChange={handleChange}
                />

                <textarea 
                className="p-4 mb-5 h-52 rounded-lg border border-black/10 resize-none dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:bg-gray-300" 
                name="message"
                placeholder="Message"
                required
                maxLength={100}
                onChange={handleChange}
                />
                <SubmitBtn/>
            </form>
        </div>
    )
}
