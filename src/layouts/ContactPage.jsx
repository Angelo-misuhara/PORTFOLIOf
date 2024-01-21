import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const [oke,setOke] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ft57pue', 'template_cu8f3ip', form.current, 'p2-vt0Wj7pbAIZbn_')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        setOke(true)
      }, (error) => {
        console.log(error.text);
      });
  };
  const closeModal = () => {
    setOke(false)
  }
  return (
    <>
      <div className='h-screen flex flex-col  ' id='ContactPage'>
        <div className='flex flex-row justify-between lg:mt-[15rem] mt-[9rem] pb-9' id='ProjectPage'>
          <h1 className='lg:text-9xl text-[3.2rem] font-bold italic text-[#D24545]'>
            CONTACT
          </h1>
          <h1 className='lg:text-9xl text-[3.2rem] font-bold italic text-[#D24545]'>
            04
          </h1>
        </div>
        <div className='lg:px-11 lg:grid lg:grid-cols-2  flex flex-col gap-5'>
        
          <form className="max-w-sm " ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 font-bold text-sm  text-gray-900 ">Your Name:</label>
              <input type="text" id="email" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Juan dela cruz" required />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block font-bold mb-2 text-sm  text-gray-900 ">Your password</label>
              <input type="email" placeholder="Juandelacruz@gmail.com" name="user_email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div className="flex items-start mb-5">

              <label htmlFor="message" className="block font-bold mb-2 text-sm  text-gray-900 ">Message: </label>
              <textarea id="message" name="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Send me a message!"></textarea>

            </div>
            <div className=' flex justify-end'>
              <button type="submit" className="text-white  bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/55 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send</button>
              <h1></h1>
            </div>
          </form>
          <div className=''>
            <h1 className='lg:text-2xl text-1xl text-justify'>
              If you're on the lookout for a skilled developer, feel free to reach out through Gmail at yocorangelo18@gmail.com, connect on <span className='text-[#D24545]'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/angelo-yocor-0885aa254/">Linkedin</a></span>, or catch up with my projects and insights on <span className='text-[#D24545]'><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gelssante/">Instagram</a></span>. Excited to discuss potential collaborations and how my expertise can benefit your endeavors!!</h1>
          </div>
        </div>
        
      </div>
      {oke && <div id="popup-modal" tabIndex="-1" className=" overflow-y-auto overflow-x-hidden flex fixed top-0  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" onClick={closeModal} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <div className='flex justify-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
</svg>
              </div>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Successfully send!</h3>
              
            </div>
        </div>
    </div>
</div>}
     
    </>
  )
}
// ref={form} onSubmit={sendEmail}
export default ContactPage