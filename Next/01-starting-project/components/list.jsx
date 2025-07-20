import Link from "next/link"

function NewList({ news }) {
    return (
        <div>
            <ul className='news-list'>
                {news.map((news) => (
                    <li key={news.id}>
                        <Link href={`/news/${news.slug}`}>
                            <img src={`/images/news/${news.image}`} alt={news.title} />
                            <span>{news.title}</span>
                        </Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default NewList
