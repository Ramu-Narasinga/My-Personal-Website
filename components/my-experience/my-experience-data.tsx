type Experience = {
  role: string;
  company: string;
  startMonth: string;
  endMonth: string;
  duration: string;
  responsibilities: string[]
}

export const experience: Experience[] = [{
  role: 'Front End Developer',
  company: 'Zuuba',
  startMonth: 'March, 2021',
  endMonth: 'February, 2022',
  duration: '1 Yr',
  responsibilities: [
    "Developed a module that shows HTML elements connected by lines, used LeaderlineJs (https://github.com/anseki/leader-line)",
    "Built an email builder that uses drag and drop functionality to render email, used the library called  GrapesJs (https://grapesjs.com)"
  ]
}, {
  role: 'Front End Developer',
  company: 'Docsie @ Likalo',
  startMonth: 'May, 2019',
  endMonth: 'February, 2021',
  duration: '2 Yrs',
  responsibilities: [
    "Developed a product that used the rrweb (https://www.rrweb.io/) library that records and replays the website session.",
    "Built stable automated end-to-end test suites using robot framework (https://robotframework.org/)",
    "Added  unit test coverage for an open-source library (https://github.com/LikaloLLC/tourguide.js/)"
  ]
}, {
  role: 'Full-stack Developer',
  company: 'Quanteon Solutions',
  startMonth: 'May, 2018',
  endMonth: 'April, 2019',
  duration: '1 Yr',
  responsibilities: [
    "Majorly worked on a GIS app that used leaflet.js library for interactive maps",
    "Built a full stack web application  using MEAN stack in less than a  month with basic functionalities such as image upload (used AWS S3 for storage), authentication, profile update and route navigation",
    "Worked on various small to large full stack  MEAN/ MERN projects."
  ]
}, {
  role: 'Intern - Web Developer',
  company: 'YCreators Media',
  startMonth: 'February, 2018',
  endMonth: 'April, 2018',
  duration: '3 Months',
  responsibilities: [
    "Developed website: http://ycreatorsmedia.com/ using HTML, CSS, Bootstrap 4, JS"
  ]
}]