import React from "react";
import AcademicsNdsports from "../../common/AcademicsNdsports";
import { sportsData } from '../../../data/StudentLife/sports'
const Sports=()=>{
    return (
        <>
        <AcademicsNdsports data={sportsData}/>
        </>
    )
}
export default Sports;