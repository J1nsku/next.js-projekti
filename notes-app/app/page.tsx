import { getGoals } from "./services/goals"
import Link from "next/link"
import GoalList from "./components/GoalList"
import QuickActions from "./components/QuickActions"

const Home = () => {

  const goals = getGoals()
  return (
    <div className="flex flex-col items-center">
      {/* <div>Etusivu</div>
      <p> Kerää tavoitteesi ja tee niistä totta.</p> */}

      <h1 className="text-4xl bg-red 500"> Dashboard </h1>

      <div className="flex flex-row gap-4">
        {goals.map(goal => (
          <div key={goal.id} className="flex flex-col border rounded-lg p-4">
            <img src={goal.url} alt={goal.content}
              width={200}
              height={200}
            />
            <h2> {goal.content} </h2>
            {/* <Link href={`/goals/${goal.id}`}> {goal.dream} </Link> */}
          </div>
        ))}
      </div>

        <QuickActions />
      {/* <GoalList /> */}
    </div>
  )
}
export default Home