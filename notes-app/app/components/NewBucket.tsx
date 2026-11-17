
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
                        <input className="border" type="text" name="content" required />
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

export default NewBucket