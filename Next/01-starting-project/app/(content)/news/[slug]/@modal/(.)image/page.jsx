import ModalBackdrop from "@/components/modal"
import { getNewsItem } from "@/lib/news"
import { notFound } from "next/navigation"

const ImagePage = async ({ params }) => {
    const newsItem = await getNewsItem(params.slug)

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>
    )
}

export default ImagePage;