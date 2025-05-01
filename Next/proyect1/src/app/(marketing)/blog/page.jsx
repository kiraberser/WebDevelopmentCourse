import Button from "@/app/components/Button"


  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

export default async function Blog() {

  await sleep(2000)

  return (
    <div>
        <h1>Blog</h1>
    </div>
  )
}
