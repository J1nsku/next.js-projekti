import { createGoal } from "../../actions/goals"

const NewGoal = () => {
    return (
        <div>
            <h2> Create new goal </h2>
            <form action={createGoal}>
                <div>
                    <label>
                        Goal
                        <input type="text" name="content" required />
                    </label>
                </div>
                <div>
                    <label>
                        Picture
                        <input type="file" name="url" required />
                    </label>
                </div>
                <button type="submit">
                    Create
                </button>
            </form>
        </div>
    )
}

export default NewGoal