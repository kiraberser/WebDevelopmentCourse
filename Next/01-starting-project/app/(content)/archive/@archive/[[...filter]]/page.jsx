import Link from "next/link"

import NewList from "@/components/list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth
} from "@/lib/news"
import { Suspense } from "react";

const FilteredNews = async ({ year, month }) => {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year)
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month)
  }

  let newsContent = <p>No news found fot the selected period.</p>

  if (news && news.length > 0) {
    newsContent = <NewList news={news} />
  }

  return newsContent;
}

const FilteredYear = async ({ selectedYear, selectedMonth }) => {
  let availableYears = await getAvailableNewsYears()
  let links = availableYears

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear)
  }

  if (selectedYear && selectedMonth) {
    links = []
  }

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid Filter");
  }


  return (
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
  )
}

async function FilteredNewsPage({ params }) {
  const filter = params.filter

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  return (
    <div>
      <header id='archive-header'>
        <nav>
          <Suspense fallback={selectedMonth ? <p>Loading...</p> : <p>Loading Filter...</p>}>
            <FilteredYear selectedYear={selectedYear} selectedMonth={selectedMonth} />
          </Suspense>
        </nav>
      </header>
      <Suspense fallback={<p>Loading News...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </div>
  )
}

export default FilteredNewsPage
