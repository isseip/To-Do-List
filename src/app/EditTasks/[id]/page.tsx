'use client'
import { updatetask } from "@/actions/actions";
import Link from "next/link";
import Header from "@/app/components/header";
import { FormEvent, useState } from "react";
import Footer from "@/app/components/footer";
import { useRouter } from "next/navigation";
export default function Update({ params }: { params: { id: string } }) {
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleUpdate = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        const formData = new FormData(event.currentTarget);
        
        try {
            await updatetask(formData, params.id);
           router.push('/');
           router.refresh();
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('An error occurred while updating the task.');
            }
            console.error("Error updating task:", error);
        }
    };

    return (
        <>
        <Header/>
        <form onSubmit={handleUpdate} className="mt-20 p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mb-10">
            {errorMessage && (
                <div className="mb-4 text-red-500 text-center font-bold">
                    {errorMessage}
                </div>
            )}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Edit Task Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter the task name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Edit Task Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter the task title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Edit Task Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    placeholder="Enter the task description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Save Changes
            </button>
            <div className="mt-4 text-center">
                <Link href="/" className="text-blue-500 hover:text-blue-700">
                    To view tasks
                </Link>
            </div>
        </form>
        <Footer/>
        </>
    );
}