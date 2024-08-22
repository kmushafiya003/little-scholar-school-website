import { FaCalendarAlt } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { IoBagCheck } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import { BsPersonArmsUp } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

export const IconData =[

    {
        id:1,
        text: "Events Calender",
        icon: <FaCalendarAlt />,
        path:'/student-life/events'

    },

    {
        id:2,
        text:"Our Alumini",
        icon: <PiStudent />,
        path:'/'

    },

    {
        id:3,
        text:"Job Vacancy",
        icon: <IoBagCheck />,
        path:'/'

    },

    {
        id:4,
        text:"School Panorama",
        icon: <FaSchool />,
        path:'/'

    },

    {
        id:5,
        text:"Kids Corner",
        icon: <BsPersonArmsUp />,
        path:'/'

    },

    {
        id:6,
        text:"e-Care Login",
        icon: <CiLogin />,
        path:'/'

    },
    
]