// navData.js

export const navData = [

  {
    id: 1,
    title: 'About us',
    dropdown: [
      { id: 11, title: `Founders's Desk`, path: '/about-us/founder-desk' },
      { id: 12, title: `Principal's Desk`, path: '/about-us/principal-desk' },
      {
        id: 13,
        title: 'School Management',
        path: '/about-us/school-management'
      },
      {
        id: 14,
        title: 'Managing Committee',
        path: '/about-us/managing-committee'
      },
      {
        id: 15,
        title: 'Principles & Policies',
        path: '/about-us/principles&policies'
      },
      { id: 16, title: 'Infrastructure', path: '/about-us/infrastructure' }
    ]
  },
  {
    id: 2,
    title: 'Admissions',
    dropdown: [
      {
        id: 21,
        title: 'Admission Helpdesk/School Visit',
        path: '/admissions/admission-enquiry'
      },
      {
        id: 22,
        title: 'Admission Procedure',
        path: '/admissions/admission-procedure'
      },
      { id: 23, title: 'Registration', path: '/admissions/registration' },
      { id: 24, title: 'Fee Structure', path: '/admissions/fee-structure' },
      { id: 26, title: 'School Timings', path: '/admissions/school-timings' },
      { id: 27, title: `FAQ's`, path: '/admissions/faq' }
    ]
  },
  {
    id: 3,
    title: 'Student Life',
    dropdown: [
      { id: 31, title: 'Academics', path: '/student-life/academics' },
      { id: 32, title: 'Sports', path: '/student-life/sports' },

      { id: 33, title: 'Co-curricular', path: '/student-life/co-curricular' },
      {
        id: 34,
        title: 'Social-Cultural Development',
        path: '/student-life/social-cultural&development'
      },
      { id: 35, title: 'Counselling', path: '/student-life/counselling' },
      { id: 36, title: 'Achievements', path: '/student-life/achievements' },
      { id: 37, title: 'Events Calendar', path: '/student-life/events' },
      { id: 38, title: 'Toppers', path: '/student-life/toppers' },
      { id: 39, title: 'Cabinet', path: '/student-life/cabinet' },
      {id: 40,title: 'Transfer Certificate',path: '/student-life/transfer-certificate'}
    ]
  },
  {
    id: 4,
    title: 'News & Calendar',
    dropdown: [
      { id: 41, title: 'Student Hand Book', path: '/news&calendar/student-handbook' },
      {id: 42,title: 'Newsletter/Scholars Times', path: '/news&calendar/scholars-times'
      }
    ]
  },
  {
    id: 5,
    title: 'Mandatory Disclosures',
    dropdown: [
      { id: 51, title: 'Booklist', path: '/mandatory-disclosures/booklist' },
      {
        id: 52,
        title: 'Safety Certificates & Affiliations',
        path: '/mandatory-disclosures/safety-certificate&affiliations'
      },
      {
        id: 53,
        title: 'CBSE-OASIS',
        path: 'https://littlescholars-kashipur.com/pdf/oasis.pdf'
      },
      {
        id: 54,
        title: 'Mandatory Public Disclosures',
        path: 'https://littlescholars-kashipur.com/pdf/Mandatory_Disclosures.pdf'
      }
    ]
  },
  {
    id: 6,
    title: 'Contact Us',
    path: '/contact-us'
  },
  {
    id: 7,
    title: 'Notice',
    dropdown: [
      { id: 71, title: 'Notice 1', path: '/notice/notice1' },
      { id: 72, title: 'Notice 2', path: '/notice/notice 2' },
      { id: 73, title: 'Notice 3', path: '/notice/notice 3' }
    ]
  }
]
