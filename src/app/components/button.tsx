import Link from "next/link";
export default function NewTask() {
    return (
      <>
  <main className="flex-grow">
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] space-y-4">
      <Link href='/AddTasks'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48">
          Add some tasks
        </button>
      </Link>
      <Link href='/DisplayFinished'>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-48">
          View Finished Tasks
        </button>
      </Link>
    </div>
  </main>
</>
    );
  }
  