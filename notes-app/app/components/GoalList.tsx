"use client"

import Link from "next/link"
import { useState } from "react"
import NewGoal from "../goals/new/page"


const GoalList = () => {

    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            <div>
                {showForm ? (
                    <NewGoal />
                ) : (
                    <button className="bg-green-500" onClick={() => setShowForm(true)}>
                       + Add new goal
                    </button>
                )}
            </div>
        </div>
    )
}

export default GoalList