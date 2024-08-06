// navData.js
export const navData = [
  // {
  //   id: 1,

  //   path: '/',

  // },
  {
    id: 2,
    title: 'About us',
    path: '/about us',
    dropdown: [
      { id: 11, title: `Founders's Desk`, path: '/Founder_Desk' },
      { id: 12, title: `Principal's Desk`, path: '/Principal_Desk' },
      { id: 13, title: 'School Management', path: '/School-Mangement' },
      { id: 14, title: 'Managing Committee', path: '/Managing-Committee' },
      {
        id: 15,
        title: 'Principles & Policies',
        path: '/Principles & Policies'
      },
      { id: 16, title: 'Infrastructure', path: '/Infrastructure' },
      { id: 17, title: 'Photo Gallery', path: '/Photo Gallery' },
      { id: 18, title: 'Video Gallery', path: '/Video Gallery' },
      { id: 19, title: 'Media Gallery', path: '/Media Gallery' }
    ]
  },
  {
    id: 3,
    title: 'Admissions',
    path: '/admissions',
    dropdown: [
      {
        id: 21,
        title: 'Admission Helpdesk/School Visit',
        path: '/admissions/helpdesk'
      },
      {
        id: 22,
        title: 'Admission Procedure',
        path: '/admissions/admissionprocedure'
      },
      { id: 23, title: 'Resistration', path: '/admissions/resistration' },
      { id: 24, title: 'Fee Structure', path: '/admissions/feestructure' },
      { id: 25, title: 'Scholorship', path: '/admissions/scholorship' },
      { id: 26, title: 'School Timings', path: '/admissions/schooltimings' },
      { id: 27, title: `FAQ's`, path: '/admissions/FAQ' }
    ]
  },
  {
    id: 4,
    title: 'Student Life',
    path: '/studentlife',
    dropdown: [
      { id: 41, title: 'Academics', path: '/studentlife/academics' },
      { id: 42, title: 'Sports', path: '/studentlife/sports' },
      {
        id: 43,
        title: 'Swimming Pool Form',
        path: '/studentlife/swimmingpool'
      },
      {
        id: 44,
        title: 'Blood Donation Form',
        path: '/studentlife/blood-donation'
      },
      { id: 45, title: 'Co-curricular', path: '/studentlife/curricular' },
      {
        id: 46,
        title: 'Social-Cultural Development',
        path: '/studentlife/cultural'
      },
      { id: 47, title: 'Counselling', path: '/studentlife/counselling' },
      {
        id: 48,
        title: 'Council Guidelines',
        path: '/studentlife/council-guidelines',
        dropdown: [
          {
            id: 8888,
            title: 'Parent Form',
            path: '/studentlife/council-guidelines/parent-form'
          },
          {
            id: 9999,
            title: 'Student Form',
            path: '/studentlife/council-guidelines/student-form'
          }
        ]
      },
      { id: 49, title: 'Achievements', path: '/studentlife/achievements' },
      { id: 50, title: 'Events Calendar', path: '/studentlife/event-calendar' },
      { id: 51, title: 'Toppers', path: '/studentlife/toppers' },
      { id: 52, title: 'Cabinet', path: '/studentlife/cabinet' },
      {
        id: 53,
        title: 'Transfer Certificate',
        path: '/studentlife/transfer-cert'
      }
    ]
  },
  {
    id: 5,
    title: 'News & Calendar',
    path: '/news&calendar',
    dropdown: [
      { id: 61, title: 'Student Hand Book', path: '/news&calendar/handbook' },
      {
        id: 62,
        title: 'Newsletter/Scholars Times',
        path: '/news&calendar/newsletter'
      }
    ]
  },
  {
    id: 6,
    title: 'Mandatory Disclosures',
    path: '/mandatory-disclosures',
    dropdown: [
      { id: 71, title: 'Booklist', path: '/mandatory-disclosures/booklist' },
      {
        id: 72,
        title: 'Safety Certificates & Affiliations',
        path: '/mandatory-disclosures/safety-cert&aff'
      },
      {
        id: 73,
        title: 'CBSE-OASIS',
        path: '/mandatory-disclosures/CBSE-OASIS'
      },
      {
        id: 74,
        title: 'Mandatory Public Disclosures',
        path: '/mandatory-disclosures/public-discolusers'
      }
    ]
  },
  {
    id: 7,
    title: 'Contact Us',
    path: '/contact-us',
    dropdown: [
      { id: 81, title: 'Reach Us', path: '/contact-us/reach-us' },
      { id: 82, title: 'Career', path: '/contact-us/career' },
      { id: 83, title: 'Guest Book', path: '/contact-us/guest-book' }
    ]
  },
  {
    id: 8,
    title: 'Notice',
    path: '/notice',
    dropdown: [
      { id: 91, title: 'Notice 1', path: '/notice/notice1' },
      { id: 92, title: 'Notice 2', path: '/notice/notice 2' },
      { id: 93, title: 'Notice 3', path: '/notice/notice 3' }
    ]
  }
]
