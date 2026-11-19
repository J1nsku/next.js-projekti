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
import TopPriorityButton from "./TopPriorityButton";
import CompletedButton from "./CompletedButton";
import InspirationCard from "./components/InspirationCard";

export default async function HomeContent() {
    await connection()

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    const buckets = await getBuckets();

    const goals = await getGoals();

    return (
        <div className="flex flex-col gap-4 w-full px-8">

            <h1 className="md:col-span-3 text-center font-(family-name:--font-caveat) 
            text-5xl text-[#9c745f]"> Dashboard </h1>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr_2fr] gap-x-6">

                <div className="flex flex-col items-stretch mx-auto gap-4 w-full">
                    <QuickActions buckets={buckets} />
                    <GoalList goals={goals} buckets={buckets} />
                    <MotivationCard />
                    <YearProgress />
                </div>

                <div className="flex flex-col gap-4">

                    <div className="px-5 py-15 items-center bg-[#efebe9] rounded-xl">
                        <p className="self-start px-4 py-1 w-fit mb-4 text-2sm bg-[#DED9D7] rounded-xl"> Dreams </p>

                        <div className="grid grid-cols-3 gap-4">
                            {goals.map(goal => (
                                <div key={goal.id} className="flex flex-col border border-[#D9D9D9] rounded-lg bg-[#ffffff]">
                                    <div className="relative">
                                        <img className={`goal ${goal.is_completed ? "grayscale" : ""} rounded-t-lg border-t border-t-[#D9D9D9] 
                                            border-l border-l-[#bdbdbd] border-r border-r-[#D9D9D9]`}
                                            src={goal.image_url} alt={goal.content}
                                            width={200}
                                            height={200}
                                        />
                                        {goal.is_completed && <span className="absolute top-2 right-2 px-2 py-1 text-xs
                                       text-[#808080] bg-[#ffffff] rounded-xl">DONE</span>}
                                    </div>

                                    <div className="p-3">
                                        <div className="flex flex-row items-center gap-1">
                                            <TopPriorityButton id={goal.id} is_top_priority={goal.is_top_priority} />
                                            <h2 className={`goal ${goal.is_completed ? "line-through text-[#808080]" : ""}`}> {goal.content} </h2>
                                            <CompletedButton id={goal.id} is_completed={goal.is_completed} />
                                        </div>
                                        <h3 className="self-start text-xs font-bold px-2 py-0.5 w-fit text-2sm bg-[#B0D1D4] text-[#47595C] rounded-lg"> {goal.category} </h3>
                                        {new Date(goal.created_at).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </div>
                                    {/* <Link href={`/goals/${goal.id}`}> {goal.dream} </Link> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <TopPriorities goals={goals.filter((goal) => goal.is_top_priority === true)} />
                </div>

                <div className="flex flex-col items-stretch mx-auto gap-4 w-full">
                    <img src="/images/coffee.jpg" alt="coffee"
                        width={250}
                        height={250}
                    />

                    <LifeStats goals={goals} />
                    <InspirationCard />
                </div>
            </div>
        </div>
    )
}