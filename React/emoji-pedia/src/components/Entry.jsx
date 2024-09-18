export default function Entry(props) {
    return (
        <div>
            <dl className="justify-between m-5 max-w-screen-lg ">
                <div className="text-center max-w-80 h-80 mb-12 shadow-lg bg-slate-100 rounded-md p-3">
                    <dt>
                        <span className="m-auto block text-6xl pb-2" role="img" aria-label="Tense Biceps">
                        {props.emoji}
                        </span>
                        <span className="mb-3">{props.name}</span>
                    </dt>
                    <dd className="mt-2 ">
                        {props.meaning}
                    </dd>
                </div>
            </dl>
        </div>
    )
}

 
