import Link from "next/link";

export default function Header(){
    return (<>
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold">
        <Link href="/">To-Do List App</Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link href="/About" className="text-gray-300 hover:text-white">About</Link>
      </div>
    </div>
  </nav>
    </>
);
}