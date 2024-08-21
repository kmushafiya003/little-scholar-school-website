// footerData.js
import logo from '../../assets/logo.webp' // Adjust the path to your logo image
import { FaYoutube } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";

import AAKRITI from '../../images/StudentLife/Topper/X-Student/AAKRITI AGARWAL.webp'
import ADITI from '../../images/StudentLife/Topper/X-Student/ADITI SUYAL.webp'
import ADITYA from '../../images/StudentLife/Topper/X-Student/ADITYA SINGH.webp'
import DAKSH from '../../images/StudentLife/Topper/X-Student/DAKSH GAHLOT.webp'
import KARAN from '../../images/StudentLife/Topper/X-Student/KARAN KUMAR.webp'
import TAZEEM from '../../images/StudentLife/Topper/X-Student/TAZEEM KHAN.webp'

export const footerData = {
    logo: logo,
    address:
        'Bhalla Farm Pratappur, Ramnagar Road, Kashipur-244713, Distt. U.S.Nagar',
    socialMedia: [
        {
            id: 1,
            name: 'Facebook',
            icon: <FaFacebook/>,
            url: '#'
        },
        {
            id: 2,
            name: 'Instagram',
            icon: <LuInstagram/>,
            url: '#'
        },
        {
            id: 3,
            name: 'YouTube',
            icon: <FaYoutube/>,
            url: '#'
        }
    ],
    birthdays: [
        {
            id: 1,
            name: "Aakriti Agarwal",
            date: "August 2nd, 2024",
            image:AAKRITI,
        },
        {
            id: 2,
            name: "Aditya Singh",
            date: "July 26th, 2024",
            image: ADITYA,
        },
        {
            id: 3,
            name: "Aditi Suyal",
            date: "July 18th, 2024",
            image: ADITI
        },
        {
            id: 4,
            name: "Daksh Gehlot",
            date: "August 2nd, 2024",
            image: DAKSH
        },
        {
            id: 5,
            name: "Karan Kumar",
            date: "July 26th, 2024",
            image: KARAN
        },
        {
            id: 6,
            name: "Tazeem Khan",
            date: "July 18th, 2024",
            image:TAZEEM
        }
    ],
    usefulLinks: [
        {
            id: 1,
            name: 'Privacy Policy',
            url: '#'
        },
        {
            id: 2,
            name: 'Terms & Conditions',
            url: '#'
        },
        {
            id: 3,
            name: 'Contact',
            url: '#'
        },
        {
            id: 4,
            name: 'Sitemap',
            url: '#'
        }
    ],
    schoolTimings: {
        summer: '07:20 am - 1:30 pm',
        winter: '07:50 am - 02:00 pm',
        totalVisits: 8723
    },
    copyright: '© 2024 Little Scholars. All Rights Reserved.',
    developer: {
        name: 'Puminati Digital',
        url: '#'
    }
}
