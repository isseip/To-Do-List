
import prisma from "@/lib/db";
import Link
 from "next/link";
async function Display() {
  const tasks = await prisma.task.findMany();
  const no = await prisma.task.count();
  

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">The number of Tasks: {no}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between px-5 py-2 mb-3 border rounded shadow-sm">
            <div>
              <h2 className="text-xl font-semibold">{task.name}</h2>
              <p className="text-gray-600">{task.title}</p>
              <p className="text-gray-600">{task.description}</p>
            </div>
            <div className="flex gap-4">
    <Link href={`/Finsish/${task.id}`}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
            Finish
        </button>
    </Link>          
    <Link href={`/delete/${task.id}`}>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
            Delete
        </button>
    </Link>
    <Link href={`/EditTasks/${task.id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            Edit
        </button>
    </Link>
</div>

        </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
