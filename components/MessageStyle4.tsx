import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'


// let myText = document.getElementById("my-message");
// let result = document.getElementById("text-limit");
// const limit = 50;
// result.textContent = 0 + "/" + limit;

// myText.addEventListener("input",function(){
//     var textLength = myText.value.length;
//     result.textContent = textLength + "/" + limit;

//     if(textLength > limit){
//         myText.style.borderColor = "#ff2851";
//         result.style.color = "#ff2851";
//     }
//     else{
//         myText.style.borderColor = "#31821b";
//         result.style.color = "#31821b";
//     }
// });

export default function MessageStyle4() {
    return (
        <div>
            <p className="text-gray-500 -mt-7">
                Please contact me directly at{" "}
                <a className="underline" href='mailto:example@gmail.com'>example@gmail.com</a>{" "}
                or through this form.
            </p>
            <form className='mt-10 flex flex-col'>
                <input 
                className='px-4 mb-5 h-14 rounded-lg border border-black/10' 
                type="email" 
                placeholder="Email"
                required
                maxLength={500}
                />

                    <textarea 
                    id="my-message"
                    className="p-4 h-52 rounded-lg border border-black/10 resize-none" 
                    placeholder="Message"
                    required
                    maxLength={500}
                    />
                    <p className="text-right" id="text-limit">50/100</p>

                <button 
                className="group flex items-center justify-center gap-2 
                h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full 
                outline-none transition-all hover:bg-gray-950 hover:scale-105 
                focus:scale-110 active:scale-105" 
                type="submit"
                >Submit{" "}
                <FaPaperPlane 
                className='text-xs opacity-70 transition-all group-hover:translate-x-1 
                group-hover:-translate-y-1'/>{" "}
                </button>
            </form>
        </div>
    )
}
