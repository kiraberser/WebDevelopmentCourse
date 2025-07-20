'use client'

import { DUMMY_NEWS } from "@/data/dummy-news"
import { notFound, useRouter} from "next/navigation"

import Image from "next/image"




const ImagePage = ({ params }) => {
    const newsItem = DUMMY_NEWS.find((newItem) => newItem.slug === params.slug)

    //Navigatin Programatically
    const router = useRouter()

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={600} height={800} />
                </div>
            </dialog>
        </>
    )
}

export default ImagePage;