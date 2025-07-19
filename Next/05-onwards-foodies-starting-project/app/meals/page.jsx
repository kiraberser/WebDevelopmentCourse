import MealGrid from "@/components/meals/MealGrid"

import Link from "next/link"
import styles from './page.module.css'
import { getMeals } from "@/lib/meals"
import { Suspense } from "react"

export const metadata = {
    title: "All Meals",
    description: "Browse the delicious meals shared by our vibrant community."
}

const Meals = async () => {
    const meals = await getMeals();
    return <MealGrid meals={meals}/>
}

const MealsPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created {''}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={styles.cta}><Link href='/meals/share'>Share Your Favorite Recipe</Link></p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<p className={styles.loading}>Fetching meals..</p>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}

export default MealsPage