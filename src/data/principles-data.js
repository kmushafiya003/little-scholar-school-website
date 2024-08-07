import behaviorConduct from '../images/principlesSec/Pic_of_students.webp';

import transportRules from '../images/principlesSec/Pic_of_Bus_Area.webp'
import winterGirls from '../images/principlesSec/winter_uniform.webp';
import summerBoys from '../images/principlesSec/summer_uniform.webp';
import summerGirls from '../images/principlesSec/summer_uniform.webp';

export const principlesData = [
    {
      section: "Behaviour/Code of Conduct",
      image: behaviorConduct,
      paragraph: "Students are expected to maintain high standards of behaviour both inside and outside the school. Respect, responsibility, and safety are our core values.",
      additionalDetails: [
        "Students must be punctual and regular to school. Leave of absence must be applied for. No student shall leave the School premises during the School hours without prior permission of the Principal. Honesty, cleanliness of dress and loyalty to School are demanded and expected of each student.",
        "A student should be habitually clean and neatly dressed. The School uniform is to be worn on all days. Immorality, insubordination, ragging of any kind, contempt of authority or wilful damage to property will be a sufficient reason for immediate expulsion of the student and are responsible for all School property.",
        "Money should not be lent or borrowed by the student and articles should not be exchanged between the students. Students are not allowed to wear jewellery or bring valuables to school. Students are admitted in the School at their own risk. The School will not be responsible for any injury or loss of books, stationery or any other article. They are not allowed to bring mobile phone to school. No reading materials (other than prescribed text books) should be brought to School without permission.",
        "The School reserves the right to advise the parents to withdraw their child if his/her progress in studies is unsatisfactory or his/her attendance is irregular or his/her conduct is harmful to other students."
      ]
    },
    {
      section: "Library",
      image: "library.jpg",
      paragraph: "The school library is a resource center for students. It offers a wide range of books, journals, and digital resources to support learning and research.",
      additionalDetails: [
        "Students must maintain absolute silence in the library. Students are expected to handle the library books with care. Books marked, disfigured or damaged will have to be replaced or paid by the borrower. For the loss of a book, the market price will be charged. Text books, magazines and reference books will not be issued."
      ]
    },
    {
      section: "Transport Rules",
      image: transportRules,
      paragraph: "Students must follow the transport rules strictly. Punctuality, discipline, and respect for the transport staff and fellow passengers are mandatory.",
      additionalDetails: [
        "The school bus service is available for all students on specific routes. Bus drivers are authorized to stop the bus only at designated stops. Routes and stops are approved by the school and parents must survey the route prior to selecting a bus stop. The list of stops is made keeping in view the convenience and safety of all bus commuters and no diversion/extension will be entertained on existing routes.",
        "Bus fees will be paid by parents as per fee rules. At the end of the Academic Session, i.e. by 31st March, parents must apply in writing for withdraw from bus if required, failing which bus fee will be charged from April, as per approved rates.",
        "Students are expected to behave in a courteous manner in the bus and should not throw trash/food inside or outside the bus. In case of any emergency, parents must contact the School office, which will take the necessary action in contacting the person in charge of a particular bus."
      ]
    },
    {
      section: "School Uniform",
      
      paragraph: "The school uniform is mandatory for all students. It fosters a sense of community and equality among students.",
      details: {
        winter: {
          boys: {
            image: winterGirls,
            paragraph: "Boys' winter uniform includes a navy blue blazer, white shirt, grey trousers, and a school tie.",
            additionalDetails: [
              "For All days Except Monday and Friday",
              "House Shirt",
              "White Socks",
              "White Shoes",
              "A child coming to school out of uniform without a valid reason will be charged a fine of Rs.20/- & subsequently this fine will be doubled.",
              "All blazers and pullovers must have the child’s name and class clearly visible on the their inner pockets of the blazers and bellow back of the & pull over."
            ]
          },
          girls: {
            image: winterGirls,
            paragraph: "Girls' winter uniform includes a navy blue blazer, white shirt, grey skirt or trousers, and a school tie.",
            additionalDetails: [
              "For All days Except Monday and Friday",
              "House Shirt",
              "White Shorts/ divided Skirts",
              "White Shoes",
              "A child coming to school out of uniform without a valid reason will be charged a fine of Rs.20/- & subsequently this fine will be doubled.",
              "All blazers and pullovers must have the child’s name and class clearly visible on the their inner pockets of the blazers and bellow back of the & pull over."
            ]
          }
        },
        summer: {
          boys: {
            image: summerBoys,
            paragraph: "Boys' summer uniform includes a white short-sleeved shirt, grey shorts or trousers, and a school tie.",
            additionalDetails: [
              "For All days Except Monday and Friday",
              "Sky blue Shirt with School crest",
              "Grey Socks",
              "Black Shoes",
              "School Belt"
            ]
          },
          girls: {
            image: summerBoys,
            paragraph: "Girls' summer uniform includes a white short-sleeved blouse, grey skirt or trousers, and a school tie.",
            additionalDetails: [
              "For All days Except Monday and Friday",
              "Grey Shorts/ Trousers/ Skirts/ Salwar",
              "Sky blue Shirt with School crest/ Kameez",
              "Grey Socks",
              "Black Shoes",
              "School Belt / dupatta with crest"
            ]
          }
        }
      }
    },
    {
      section: "House System",
      image: "house_system.jpg",
      paragraph: "The house system promotes teamwork, leadership, and school spirit. Students are divided into houses that compete in various activities and events.",
      additionalDetails: [
        "The students of classes II to XII are members of houses allotted to them. The house system plays an important role in promoting the cultural and co-curricular activities of the school. The houses conduct functions to celebrate important days and events. Inter-House competitions are periodically conducted to motivate students to take part in debates, declamations and other activities. Besides this, the students play inter-house matches in team games- Cricket, Basketball, football volleyball, athletics etc."
      ],
      charts: [
        {
          title: "House Tally 2022-23",
          image: "house_tally_2022_23.jpg"
        },
        {
          title: "House Tally 2019-20",
          image: "house_tally_2019_20.jpg"
        },
        {
          title: "House Tally 2017-18",
          image: "house_tally_2017_18.jpg"
        }
      ]
    },
    {
      section: "Withdrawal from School",
      image: "withdrawal.jpg",
      paragraph: "Parents must submit a written application for withdrawal at least one month in advance. All dues must be cleared before the Transfer Certificate (TC) is issued."
    },
    {
      section: "Faculty",
      image: "faculty.jpg",
      paragraph: "Our faculty consists of highly qualified and experienced teachers dedicated to providing the best education and support to our students."
    }
  ];
  