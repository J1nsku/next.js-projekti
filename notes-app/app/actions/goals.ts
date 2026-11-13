"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addGoal, toggleImportance } from "../services/goals"
import { uploadImage } from "../lib/storage"

export const createGoal = async (formData: FormData) => {
    const content = formData.get("content") as string
    const category = formData.get("category") as string
    const image = formData.get("image") as File

    const imageUrl = await uploadImage(image)
    await addGoal(content, category, imageUrl)

    revalidatePath("/")
    redirect("/")

}

export const toggleGoalImportance = async (formData: FormData) => {
    const id = Number(formData.get("id"))
    toggleImportance(id)
    revalidatePath(`/goals/${id}`)
    revalidatePath("/goals")
}