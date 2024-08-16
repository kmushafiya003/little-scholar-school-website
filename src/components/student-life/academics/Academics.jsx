import React from "react";

import {academicsData} from '../../../data/StudentLife/academics'
import AcademicsNdsports from "../../common/AcademicsNdsports";
const Academics=()=>{
    return(
        <>
        <AcademicsNdsports data={academicsData}/>
        </>
    )
}
export default Academics