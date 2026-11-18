"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addGoal, toggleCompleted, toggleImportance, toggleTopPriority } from "../services/goals"
import { uploadImage } from "../lib/storage"

export const createGoal = async (formData: FormData) => {
    const content = formData.get("content") as string
    const category = formData.get("category") as string
    const targetDateValue = formData.get("target_date")
    const image = formData.get("image") as File

    const targetDate = typeof targetDateValue === "string" &&
        targetDateValue !== "" ? targetDateValue : null

    const imageUrl = await uploadImage(image)

    await addGoal(content, category, imageUrl, targetDate)

    revalidatePath("/")
    redirect("/")

}

export const toggleCompletedAction = async (id: number, is_completed: boolean) => {
    toggleCompleted(id, is_completed)

    revalidatePath("/")
}

export const toggleTopPriorityAction = async (id: number, is_top_priority: boolean) => {
    toggleTopPriority(id, is_top_priority)

    revalidatePath("/")
}

export const toggleGoalImportance = async (formData: FormData) => {
    const id = Number(formData.get("id"))
    toggleImportance(id)
    revalidatePath(`/goals/${id}`)
    revalidatePath("/goals")
}