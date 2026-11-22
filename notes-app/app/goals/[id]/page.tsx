export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { getGoalById } from "../../services/goals"
import { toggleGoalImportance } from "../../actions/goals";

const GoalPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const goal = await getGoalById(Number(id))

    if (!goal) {
        notFound()
    }

    return (
        <div>
            <h2>{goal.content}</h2>
            <p>{goal.image_url}</p>
            <form action={toggleGoalImportance}>
                <input type="hidden" name="id" value={goal.id} />
                <button type="submit">

                </button>
            </form>
        </div>
    )
}

export default GoalPage