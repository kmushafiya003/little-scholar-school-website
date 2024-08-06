// --------------------Infrastructure---------------------
import school from "../../src/images/school.webp";
// ----------------------SChool Bulding Images ------------------------
import schoolp1 from "../../src/images/in1.webp";
import schoolp2 from "../../src/images/in2.webp";
import schoolp3 from "../../src/images/in3.webp";
import schoolp4 from "../../src/images/in4.webp";
import schoolp5 from "../../src/images/in5.webp";
import schoolp6 from "../../src/images/in6.webp";
// ----------------Physics Lab ------------------------
import physics from "../../src/images/physics.webp";
import physicsp1 from "../../src/images/physics1.webp";
import physicsp2 from "../../src/images/physics2.webp";
import physicsp3 from "../../src/images/physics3.webp";
import physicsp4 from "../../src/images/physics4.webp";
// -----------------Chemistry Lab-------------------------
import chemistry from "../../src/images/chemistry.webp";
import chemistryp1 from "../../src/images/chemistry1.webp";
import chemistryp2 from "../../src/images/chemistry2.webp";
import chemistryp3 from "../../src/images/chemistry3.webp";
// --------------------Computer Lab-------------------------
import computer from "../../src/images/computer.webp";
import computerp1 from "../../src/images/comp1.webp";
import computerp2 from "../../src/images/comp2.webp";
import computerp3 from "../../src/images/comp3.webp";
// ----------------------Bio Lab-------------------------
import bio from "../../src/images/bio.webp";
import biop1 from "../../src/images/bio1.webp";
import bio2 from "../../src/images/bio2.webp";
import bio3 from "../../src/images/bio2.webp";
// -------------------Auduttorium---------------------------
import auditorium from "../../src/images/auditorium.webp";
import auditoriump1 from "../../src/images/aud1.webp";
import auditoriump2 from "../../src/images/aud2.webp";
import auditoriump3 from "../../src/images/aud3.webp";
import auditoriump4 from "../../src/images/aud4.webp";
// --------------------Goround------------------------------
import groundp1 from "../../src/images/sports1.webp";
import groundp2 from "../../src/images/sports2.webp";
import groundp3 from "../../src/images/sports3.webp";
import groundp4 from "../../src/images/sports4.webp";
import groundp5 from "../../src/images/sports5.webp";
// -----------------------Library------------------------------
import libraryp1 from "../../src/images/lib1.webp";
import libraryp2 from "../../src/images/lib2.webp";
import libraryp3 from "../../src/images/lib3.webp";
import libraryp4 from "../../src/images/lib4.webp";
// --------------------Faculty---------------------
import asha from "../../src/images/asha-negi.webp";
import shivani from "../../src/images/shivani-agarwal.webp";
import pooja from "../../src/images/pooja_arora.webp";
import priyam from "../../src/images/priyam.webp";
import parul from "../../src/images/parul.webp";
import neeshu from "../../src/images/neeshu_malik.webp";
import rajnandani from "../../src/images/rajnandhani.webp";
import anju from "../../src/images/anju-pant.webp";
import anuradha from "../../src/images/anuradha.webp";
import sandeep from "../../src/images/Sandeep_rawat.webp";

// \start(Infrastructure)
export const infrastructure = [
    {
        id: 1,
        name: "School Building",
        image: school,
        images: [
            {
                id: 9,
                picture: schoolp1
            },
            {
                id: 10,
                picture: schoolp2
            },
            {
                id: 11,
                picture: schoolp3
            },
            {
                id: 12,
                picture: schoolp4
            },
            {
                id: 13,
                picture: schoolp5
            },
            {
                id: 14,
                picture: schoolp6
            }
        ]
    },
    {
        id: 2,
        name: "Physics Lab",
        image: physics,
        images: [
            {
                id: 15,
                picture: physicsp1
            },
            {
                id: 16,
                picture: physicsp2
            },
            {
                id: 17,
                picture: physicsp3
            },
            {
                id: 18,
                picture: physicsp4
            }
        ]
    },
    {
        id: 3,
        name: "Chemistry Lab",
        image: chemistry,
        images: [
            {
                id: 19,
                picture: chemistryp1
            },
            {
                id: 20,
                picture: chemistryp2
            },
            {
                id: 21,
                picture: chemistryp3
            }
        ]
    },
    {
        id: 4,
        name: "Computer Lab",
        image: computer,
        images: [
            {
                id: 21,
                picture: computerp1
            },
            {
                id: 23,
                picture: computerp2
            },
            {
                id: 24,
                picture: computerp3
            }
        ]
    },
    {
        id: 5,
        name: "Biological Lab",
        image: bio,
        images: [
            {
                id: 25,
                picture: biop1
            },
            {
                id: 26,
                picture: bio2
            },
            {
                id: 27,
                picture: bio3
            }
        ]
    },
    {
        id: 6,
        name: "Auditorium",
        image: auditorium,
        images: [
            {
                id: 28,
                picture: auditoriump1
            },
            {
                id: 29,
                picture: auditoriump2
            },
            {
                id: 30,
                picture: auditoriump3
            },
            {
                id: 31,
                picture: auditoriump4
            }
        ]
    },
    {
        id:7,
        name: "Library",
        images: [
            {
                id: 32,
                picture: libraryp1
            },
            {
                id: 33,
                picture: libraryp2
            },
            {
                id: 34,
                picture: libraryp3
            },
            {
                id: 35,
                picture: libraryp4
            }
        ]
    },
    {
        id: 8,
        name: "Ground",
        images: [
            {
                id: 36,
                picture: groundp1
            },
            {
                id: 37,
                picture:groundp2
            },
            {
                id: 38,
                picture: groundp3
            },
            {
                id: 39,
                picture: groundp4
            },
            {
                id: 40,
                picture: groundp5
            }
        ]
    }
];
// \end{Infrastructure}

// \start(Faculty)

export const faculty = [
    {
        id: 1,
        name: "Ms. ASHA NEGI",
        image: asha,
        designation: "PRT",
    },
    {
        id: 2,
        name: "Ms. SHIVANI AGRAWAL",
        image: shivani,
        designation: "PRT",
    },
    {
        id: 3,
        name: "Ms. POOJA ARORA",
        image: pooja,
        designation: "PRT",
    },
    {
        id: 4,
        name: "Ms. PRIYAM NANDINI",
        image: priyam,
        designation: "PRT",
    },
    {
        id: 5,
        name: "Ms. PARUL AGGARWAL",
        image: parul,
        designation: "PRT",
    },
    {
        id: 6,
        name: "Ms. NEESHU MALIK",
        image: neeshu,
        designation: "PRT"
    },
    {
        id: 7,
        name: "Ms. RAJNANDANI SAXENA",
        image: rajnandani,  
        designation: "PRT",
    },
    {
        id: 8,
        name: "Ms. ANJU PANT",
        image: anju,
        designation: "PRT"
    },
    {
        id: 9,
        name: "Ms. ANURADHA BHARDWAJ",
        image: anuradha,
        designation: "PRT",
    },
    {
        id: 10,
        name: "Mr. SANDEEP RAWAT",
        image: sandeep,
        designation: "PRT",
    }
]

// \end(faculty)