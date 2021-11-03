import React from 'react';
import './GenSkill.css'

export const GenSkill = (props) => {
    console.log(props);
    const skillTypeClasses = `bg-success bg-gradient text-white skillType`;
    return (
        <>
            <div className={skillTypeClasses}>{props.type.toUpperCase()}</div>
            <div class="skillDesc">
                {props.list.map((item, index) => (
                    <p key={index}>
                        {item}
                    </p>
                ))}
            </div>

        </>
    )
}
