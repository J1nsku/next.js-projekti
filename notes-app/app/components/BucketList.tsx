"use client"

import Link from "next/link"
import { useState } from "react"
// import NewBucket from "./NewBucket"

export type Bucket = {
    id: number,
    name: string
}


const BucketList = () => {

    const [showForm, setShowForm] = useState(false)

    return (
            {/* <div>
                {showForm ? (
                    <NewBucket />
                ) : (
                    <button className="cursor-pointer border rounded-sm p-1" onClick={() => setShowForm(true)}>
                       + Add new bucket
                    </button>
                )}
            </div> */}
    )
}

export default BucketList