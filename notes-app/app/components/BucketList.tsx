"use client"

import Link from "next/link"
import { useState } from "react"
import NewBucket from "../goals/new/bucket/page"


const BucketList = () => {

    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            <div>
                {showForm ? (
                    <NewBucket />
                ) : (
                    <button className="bg-green-500" onClick={() => setShowForm(true)}>
                       + Add new bucket
                    </button>
                )}
            </div>
        </div>
    )
}

export default BucketList