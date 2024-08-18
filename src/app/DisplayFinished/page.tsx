import prisma from "@/lib/db";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Link from "next/link";

export default async function FinishedTasks() {
  const finishedTasks = await prisma.task.findMany({
    where: { finished: true },
  });

  return (
    <>
      <Header />
      <div className="mt-20 p-8 max-w-2xl mx-auto bg-white rounded-lg shadow-md mb-10">
        <h1 className="text-3xl font-bold text-center mb-6">Finished Tasks</h1>
        {finishedTasks.length === 0 ? (
          <p className="text-center text-gray-600">No finished tasks yet.</p>
        ) : (
          <ul className="space-y-4">
            {finishedTasks.map((task) => (
              <li key={task.id} className="border-b pb-2">
                <h3 className="font-bold">{task.name}</h3>
                <p className="font-semibold">{task.title}</p>
                <p className="text-gray-600">{task.description}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Back to Active Tasks
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}