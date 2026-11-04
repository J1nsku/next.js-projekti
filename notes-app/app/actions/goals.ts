"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addGoal, toggleImportance } from "../services/goals"

export const createGoal = async (formData: FormData) => {
    const content = formData.get("content") as string
    const url = formData.get("url") as string
    addGoal(content, url)

    revalidatePath("/")
    redirect("/")
}

export const toggleGoalImportance = async (formData: FormData) => {
    const id = Number(formData.get("id"))
    toggleImportance(id)
    revalidatePath(`/goals/${id}`)
    revalidatePath("/goals")
}