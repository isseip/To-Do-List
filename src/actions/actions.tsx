'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/dist/server/api-utils";

export async function createtask (formData:FormData){
    await prisma.task.create ({
        data :{
         name:formData.get("name") as string,
         title:formData.get("title") as string,
         description:formData.get("description") as string,
        },
       });
       revalidatePath("/")
    
}

export const deletetask = async (id:string) => {
    try {
      await prisma.task.delete({
        where: { id },
      });
      revalidatePath('/');
    } catch (error) {
      console.error('Failed to delete post:', error);
      throw new Error('Failed to delete post');
    }
}



export async function updatetask(formData: FormData, id: string) {
  const name = formData.get("name") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!name || !title || !description) {
    throw new Error("Invalid form data");
  }

  try {
    await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        name,
        title,
        description,
        
      },
    });
    console.log("The task has been updated");
    revalidatePath("/");
  } catch (error) {
    console.error("Failed to update the task:", error);
    throw new Error("Failed to update the task");
  }
}

export async function finishtask(id: string) {
  try {
    // Move the task to a 'finished_tasks' table or add a 'finished' field
    const finishedTask = await prisma.task.update({
      where: { id },
      data: { finished: true },
    });

    console.log("Task marked as finished:", finishedTask);
    revalidatePath("/");
    revalidatePath("/finished-tasks");
  } catch (error) {
    console.error("Failed to finish the task:", error);
    throw new Error("Failed to finish the task");
  }
}
