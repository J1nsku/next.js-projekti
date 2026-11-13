import { connection } from "next/server";

import { getGoals } from "./services/goals";
import GoalList from "./components/GoalList";
import QuickActions from "./components/QuickActions";
import MotivationCard from "./components/MotivationCard";
import YearProgress from "./components/YearProgress";
import LifeStats from "./components/LifeStats";
import TopPriorities from "./components/TopPriorities";
import { getBuckets } from "./services/buckets";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";


export default async function HomeContent() {
    await connection()

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    const buckets = await getBuckets();

    const goals = await getGoals();

    return (
        <div className="flex flex-col gap-4 w-full px-6">

            <h1 className="md:col-span-3 text-center font-(family-name:--font-caveat) 
            text-5xl text-[#9c745f]"> Dashboard </h1>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr_2fr]">

                <div className="flex flex-col items-center mx-auto">
                    <QuickActions buckets={buckets} />
                    <GoalList goals={goals} buckets={buckets} />
                    <MotivationCard />
                    <YearProgress />
                </div>

                <div className="flex flex-col gap-4">

                    <div className="px-5 py-15 items-center bg-[#efebe9] rounded-xl">
                        <p className="text-2sm bg-[#9c745f]"> Dreams </p>

                        <div className="grid grid-cols-3 gap-4">
                            {goals.map(goal => (
                                <div key={goal.id} className="flex flex-col border border-[#bdbdbd] rounded-lg bg-[#ffffff]">
                                    <img className="rounded-t-lg border-t border-t-[#bdbdbd] 
            border-l border-l-[#bdbdbd] border-r border-r-[#bdbdbd]"
                                        src={goal.image_url} alt={goal.content}
                                        width={200}
                                        height={200}
                                    />
                                    <h2> {goal.content} </h2>
                                    <h3 className="bg-green-100 text-green-950 rounded-full"> {goal.category} </h3>
                                    {new Date(goal.created_at).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                    {/* <Link href={`/goals/${goal.id}`}> {goal.dream} </Link> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <TopPriorities />
                </div>

                <div className="flex flex-col items-center">
                    <img src="/images/coffee.jpg" alt="coffee"
                        width={250}
                        height={250}
                    />

                    <LifeStats />
                </div>
            </div>
        </div>
    )
}