'use client'
import { deletetask } from "@/actions/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Delete({ params }: { params: { id: string } }) {

    const router = useRouter();

    const handleDelete = async (id: string) => {
    await deletetask(id);
    router.push('/'); // Redirect to the tasks page or handle state update
    router.refresh();// Redirect or refresh the page after deletion
    console.log("Task is deleted");
    
};
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-lg font-bold">Are you sure?</h2>
                    <p className="mt-2">Do you really want to delete this task?</p>
                    <div className="mt-4 flex justify-end space-x-4">
                        <button
                            onClick={() => handleDelete(params.id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                        >
                        Yes
                        </button>
                        <Link href={'/'} ><button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded"
                        >
                        No
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
