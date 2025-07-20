import { DUMMY_NEWS } from "@/data/dummy-news"
import NewList from "@/components/list"

function PageNews() {
  return (
    <>
      <h1>News Page</h1>
      <NewList news={DUMMY_NEWS} />
    </>
  )
}

export default PageNews
