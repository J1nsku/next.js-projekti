"use client"

import { useState, useEffect, ChangeEvent } from "react"
import { createGoal } from "../actions/goals"
import type { Bucket } from "./BucketList"

const NewGoal = ({ onClose, buckets }: {
    onClose: () => void
    buckets: Bucket[]
}) => {

    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const [targetDate, setTargetDate] = useState<string | null>(null)

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImageUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleTargetDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetDate(e.target.value)
    }

    return (
        <div>
            <form action={createGoal} className="modal-panel w-full max-w-[500px] rounded-[12px] border border-[#a88b7c]/25 bg-[#fffdfb] p-7 shadow-[0_22px_70px_rgba(65,42,32,0.2)]">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#a37b68]">
                            Add to your dreams
                        </p>
                        <h2 id="new-goal-title" className="font-display text-3xl font-semibold text-[#8f624c]">
                            Create new goal
                        </h2>
                    </div>
                    <button type="button" className="grid h-8 w-8 place-items-center rounded-full bg-[#f3edeb] text-[#806a60]"
                        onClick={() => onClose()}>
                        X
                    </button>
                </div>

                <label className="mb-4 block">
                    <span className="mb-1.5 block font-serif text-sm">Goal title</span>
                    <input required placeholder="What would you love to do?" type="text" id="content" name="content"
                        className="w-full rounded-md border border-[#9c8275]/30 bg-white px-4 py-3 font-serif text-sm outline-none focus:border-[#9e6a52]" />
                </label>

                <label className="mb-4 block">
                    <span className="mb-1.5 block font-serif text-sm">A little detail</span>
                    <textarea rows={3} placeholder="Why does this dream matter?" className="w-full resize-none rounded-md border border-[#9c8275]/30 bg-white px-4 py-3 font-serif text-sm outline-none focus:border-[#9e6a52]">
                    </textarea>
                </label>

                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                    <label htmlFor="category">
                        <span className="mb-1.5 block font-serif text-sm">Bucket</span>
                        <select name="category" id="category" className="w-full rounded-md border border-[#9c8275]/30 bg-white px-4 py-3 font-serif text-sm outline-none">
                            {buckets.map((bucket) => (
                                <option key={bucket.id} value={bucket.name}>
                                    {bucket.name}
                                </option>
                            ))}
                            {/* 
                            <option value="Travel">Travel</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Personal Growth">Personal Growth</option>
                            <option value="Learning">Learning</option>
                            <option value="Healt & Fitness">Health & Fitness</option>
                            <option value="Food">Food</option>
                            <option value="Other">Other</option> */}
                        </select>
                    </label>
                    <label className="flex cursor-pointer items-end">
                        <span className="flex h-[45px] w-full items-center gap-3 rounded-md bg-[#f5efec] px-4 font-serif text-sm">
                            <input className="accent-[#9c6b54]" type="checkbox"></input>
                            Top Priority
                        </span>
                    </label>
                </div>


                <label className="mb-4 block">
                    <span className="mb-1.5 block font-serif text-sm">Target Date</span>
                    <input type="date"
                        name="target_date"
                        onChange={handleTargetDateChange}
                        className="w-full rounded-md border border-[#9c8275]/30 bg-white px-4 py-3 font-serif text-sm outline-none"
                    />
                </label>

                <label className="mb-4 block">
                    <span className="mb-1.5 block font-serif text-sm">Picture</span>
                    <input type="file"
                        name="image"
                        accept="image/*" required
                        onChange={handleImageChange}
                        className="w-full rounded-md border border-[#9c8275]/30 bg-white px-4 py-3 font-serif text-sm outline-none"
                    />
                    {imageUrl && <img src={imageUrl} alt="Uploaded image"
                        width={200} height={200} />}
                </label>

                <div className="flex gap-4">
                    <button type="submit" className="w-full rounded-md bg-[#9c6b54] py-3 font-serif text-sm text-white transition hover:bg-[#855844]">
                        Add to My Lifelist
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewGoal