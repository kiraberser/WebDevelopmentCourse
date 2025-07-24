import NewList from "@/components/list"

import { getAllNews } from "@/lib/news"

async function PageNews() {
  const news = await getAllNews()

  return (
    <>
      <h1>News Page</h1>
      <NewList news={news} />
    </>
  )
}

export default PageNews
