"use client"

import { useState, useEffect, ChangeEvent } from "react"
import { createGoal } from "../actions/goals"
import type { Bucket } from "./BucketList"

const NewGoal = ({ onClose, buckets }: {
    onClose: () => void
    buckets: Bucket[]
}) => {

    const [imageUrl, setImageUrl] = useState<string | null>(null)

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            setImageUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    return (
        <div>
            <h2> Create new goal </h2>
            <form action={createGoal}>
                <div>
                    <label className="border">
                        What do you want to achieve?
                        <input type="text" id="content" name="content" required
                            placeholder="Visit Japan, read 20 books..." />
                    </label>
                </div>
                <div>
                    <label htmlFor="category" className="border">
                        Bucket
                        <select name="category" id="category">
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
                </div>
                <div>
                    <label className="border">
                        Picture
                        <input type="file"
                            name="image"
                            accept="image/*" required
                            onChange={handleImageChange} />
                        {imageUrl && <img src={imageUrl} alt="Uploaded image"
                            width={200} height={200} />}
                    </label>
                </div>
                <div className="flex gap-4">
                    <button type="submit" className="border">
                        Create
                    </button>

                    <button className="border" onClick={() => onClose()}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewGoal