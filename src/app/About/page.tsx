import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
       <>
      <Header />
      <div className="mt-20 p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">About To-Do List</h1>
        
        <p className="text-gray-700 mb-4">
          Welcome to the To-Do List application, developed by Isseip. This application is designed to help you stay organized and productive by allowing you to manage your tasks efficiently.
        </p>
        
        <p className="text-gray-700 mb-4">
          Our intuitive interface makes it easy to create, edit, and delete tasks. You can prioritize your tasks and keep track of your progress to ensure you stay on top of your responsibilities.
        </p>
        
        <p className="text-gray-700 mb-4">
          Whether you&apos;re a student, professional, or anyone who wants to improve their productivity, our To-Do List application is here to help you achieve your goals.
        </p>
        
        <h2 className="text-2xl font-bold mt-6 mb-4">Features</h2>
        
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Create and manage tasks effortlessly</li>
          <li>Set priorities for your tasks</li>
          <li>Track your progress</li>
          <li>Simple and user-friendly interface</li>
        </ul>
        
        <p className="text-gray-700 mb-4">
          We hope you find this application useful and that it helps you stay organized and productive. If you have any feedback or suggestions, feel free to reach out to us.
        </p>
        
        <p className="text-gray-700 text-center font-bold">Made with ❤️ by Isseip</p>
      </div>
      <Footer />
    </>
    </>
  );
}
