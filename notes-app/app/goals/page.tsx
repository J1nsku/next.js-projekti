import Link from "next/link"
import { getGoals } from "../services/goals"

export default async function Goals() {
    const goals = await getGoals()
    return (
        <div>
            {/* <h2> Goals </h2> */}
            <div className="flex flex-row gap-4">
                {goals.map(goal => (
                    <div key={goal.id} className="flex flex-col border rounded-lg p-4">
                        <img src={goal.image_url} alt={goal.content}
                            width={200}
                            height={200}
                        />
                        <h2> {goal.content} </h2>
                        {/* <Link href={`/goals/${goal.id}`}> {goal.dream} </Link> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
