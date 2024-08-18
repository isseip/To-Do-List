import Link from "next/link";

export default function Footer(){
    return (
     <>
     <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 mt-30" >
    <div className="flex flex-wrap justify-between">
     
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <h5 className="text-2xl font-bold">My To-Do List</h5>
        <p className="text-gray-400 mt-2">Stay organized and productive with our intuitive to-do list application.</p>
      </div>

    
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <nav className="flex flex-col space-y-2">
          <Link href="/About" className="hover:text-gray-300">About</Link>
          <Link href="" className="hover:text-gray-300">Contact</Link>
        </nav>
      </div>


      <div className="w-full md:w-1/3 flex flex-col items-start md:items-end">
        <p className="text-gray-400 mb-2">Follow Us</p>
        <div className="flex space-x-4">
          <Link href="" className="hover:text-gray-300">
          <span className="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 320 512">
    <path
      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
  </svg>
</span>
          </Link>
          <Link href="" className="hover:text-gray-300">
          <span className="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512">
    <path
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
</span>
          </Link>
          <Link href="" className="hover:text-gray-300">
          <span className="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512">
    <path
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
</span>

          </Link>
        </div>
      </div>
    </div>


    <div className="flex justify-center mt-8">
      <Link href="" className="text-gray-400 hover:text-white">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l-8 8h6v8h4v-8h6z"/>
        </svg>
        Back to Top
      </Link>
    </div>

    <div className="mt-8 border-t border-gray-700 pt-4">
      <p className="text-center text-gray-400">© 2024 My To-Do List. All rights reserved.</p>
    </div>
  </div>
</footer>
     </>
    );
}