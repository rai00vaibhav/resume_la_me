import React,{ useEffect, useState } from 'react';
import { LoremService } from '../../Services/LoremService';
import { useLocation } from 'react-router-dom';
import { GenSkill } from '../common/GenSkill';

export const Skills = () => {
    const [skillData, setskillData] = useState([]);
    const location = useLocation();  
    const skill = location.pathname.split('/')[1];
    console.log(location);
    useEffect(() => {
        async function fetchLoremIpsum() {
            const res = await LoremService.getLoremIpsum();
            if(res.ok){
                const response = await res.json();
                setskillData(response);
            }
        }
        fetchLoremIpsum();
       
    }, []);
    return (
        <>
            {skillData && skillData.length> 0 && (<GenSkill list={skillData} type={skill}/>)}
        </>
    )
}
