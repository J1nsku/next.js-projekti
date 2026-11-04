"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addBucket, toggleImportance } from "../services/buckets"

export const createBucket = async (formData: FormData) => {
    const content = formData.get("content") as string
    addBucket(content)

    revalidatePath("/")
    redirect("/")
}

export const toggleBucketImportance = async (formData: FormData) => {
    const id = Number(formData.get("id"))
    toggleImportance(id)
    revalidatePath(`/buckets/${id}`)
    revalidatePath("/buckets")
}