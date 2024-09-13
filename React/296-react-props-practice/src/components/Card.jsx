import React from 'react'
import Avatar from './Avatar'
import Info from './Info'

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <p className=''>{props.id}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img}/>
            </div>
            <div className="bottom">
                <Info 
                    email={props.email}
                    phone={props.tel}
                />
            </div>
        </div>
    )
}

export default Card
