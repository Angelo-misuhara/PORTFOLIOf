

const Footer = () => {
  return (
    <>
          <div>
               <footer className="p-4 lg:mt-[10rem]  sm:p-6 ">
    <div className="mx-auto ">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                    <img src="/images/LOGO.png" className="mr-3 h-8" alt="FlowBite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">@gelssante</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                    <ul className="text-gray-600">
                        <li className="mb-4">
                            <a href="https://react.dev/" className="hover:underline">React</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Connect with me!</h2>
                    <ul className="text-gray-600">
                        <li className="mb-4">
                            <a href="https://github.com/Angelo-misuhara/" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/angelo-yocor-0885aa254/" className="hover:underline">Linkedin</a>
                        </li>
                    </ul>
                </div>
              
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">© 2024 @gelssante. All Rights Reserved.
            </span>
           
        </div>
    </div>
</footer>
    </div>
    </>
  )
}

export default Footer