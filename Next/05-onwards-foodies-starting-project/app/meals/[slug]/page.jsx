const MealsSlugPage = ({params}) => {
    return(
        <main>
            <div>
                <h1>Meals Slug</h1>
                <p>{params.slug}</p>
            </div>
        </main>
    )
}

export default MealsSlugPage