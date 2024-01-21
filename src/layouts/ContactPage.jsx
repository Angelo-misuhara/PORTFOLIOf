import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ft57pue', 'template_cu8f3ip', form.current, 'p2-vt0Wj7pbAIZbn_')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
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
            </div>
          </form>
          <div className=''>
            <h1 className='lg:text-2xl text-1xl text-justify'>
              If you're on the lookout for a skilled developer, feel free to reach out through Gmail at yocorangelo18@gmail.com, connect on <span className='text-[#D24545]'><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/angelo-yocor-0885aa254/">Linkedin</a></span>, or catch up with my projects and insights on <span className='text-[#D24545]'><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gelssante/">Instagram</a></span>. Excited to discuss potential collaborations and how my expertise can benefit your endeavors!!</h1>
          </div>
        </div>
        
      </div>
     
    </>
  )
}
// ref={form} onSubmit={sendEmail}
export default ContactPage