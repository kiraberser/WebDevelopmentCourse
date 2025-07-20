import Link from "next/link"

import NewList from "@/components/list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news"

function FilteredNewsPage({ params }) {
  const filter = params.filter

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news;
  let links = getAvailableNewsYears()

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
    links = getAvailableNewsMonths(selectedYear)
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []
  }

  let newsContent = <p>No news found fot the selected period.</p>
  if (news && news.length > 0) {
    newsContent = <NewList news={news} />
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid Filter");
  }

  return (
    <div>
      <header id='archive-header'>
        <nav>
          <ul>
            {links.map(link => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </div>
  )
}

export default FilteredNewsPage
