import { DUMMY_NEWS } from "@/data/dummy-news"
import { notFound } from "next/navigation"


const ImagePage = ({ params }) => {
    const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === params.slug)

    if (!newsItem) {
        notFound()
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}

export default ImagePage;