import React from 'react'
import "./style.css"

const Button = ({ title, link }) => (
    <div>
        <button className="button"><a href={link}>{title}</a></button>
    </div>
)


export default Button;