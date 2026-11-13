import { Suspense } from "react"
import HomeContent from "./HomeContent"

export default async function Home() {

  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <HomeContent />
      </Suspense>
    </div>
  )
}

function LoadingPage() {
  return <p>Loading data...</p>
}