
import { useState } from "react"
import { createBucket } from "@/app/actions/buckets"

const NewBucket = ({ onClose }: {
    onClose: () => void
}) => {
    return (
        <div>
            <h2> Create new bucket </h2>
            <form action={createBucket}>
                <div>
                    <label>
                        Bucket name:
                        <input className="border border-[#9c745f]" type="text" name="content" required />
                    </label>
                </div>
                <div className="flex gap-4">
                    <button type="submit" className="border border-[#9c745f]">
                        Create
                    </button>

                    <button className="border border-[#9c745f]" onClick={() => onClose()}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewBucket