"use client"

import GoalList from "./GoalList"
import BucketList from "./BucketList"

const QuickActions = () => {

    return (
        <div className="flex flex-col border rounded-lg p-4">
            <h1 className="text-xl">Quick Actions</h1>
            <div>
                <GoalList />
            </div>
            <div>
                <BucketList />
            </div>
        </div>
    )
}

export default QuickActions