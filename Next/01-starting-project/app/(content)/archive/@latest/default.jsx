import NewList from "@/components/list"
import { getLatestNews } from "@/lib/news"

function LatestNewPage() {

  const latestNews = getLatestNews()
  return (
    <div>
      <h1>Latest Page!</h1>
      <NewList news={latestNews}/>
    </div>
  )
}

export default LatestNewPage
