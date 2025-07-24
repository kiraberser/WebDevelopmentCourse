import NewList from "@/components/list"
import { getLatestNews } from "@/lib/news"

async function LatestNewPage() {

  const latestNews = await getLatestNews()
  return (
    <div>
      <h1>Latest Page!</h1>
      <NewList news={latestNews}/>
    </div>
  )
}

export default LatestNewPage
