'use client'
import Link from "next/link";
import { finishtask } from "@/actions/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Finish({ params }: { params: { id: string } }) {
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleFinish = async () => {
        try {
            await finishtask(params.id);
            router.push('/');
            router.refresh();
        } catch (error) {
            setErrorMessage('Failed to finish and delete the task.');
            console.error("Error finishing and deleting task:", error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-lg font-bold">Are you sure?</h2>
                <p className="mt-2">This will mark the task as finished.</p>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                <div className="mt-4 flex justify-end space-x-4">
                    <button
                        onClick={handleFinish}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
                    >
                        Finish
                    </button>
                    <Link href='/'>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded"
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}