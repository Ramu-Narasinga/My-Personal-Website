import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'No Code Website Builder',
      desc: 'Build website, emails and track user sessions',
      livedemo: 'https://no-code-website-builder.web.app/auth/login',
      githurl: 'https://github.com/Ramu-Narasinga/No-Code-Web-Builder',
      mediumlink: '',
      imgUrl: 'assets/images/ncwb.png',
      tech: 'Angular 14 , NodeJs, Typescript, Javascript, ReactJs, MySQL, Heroku Dyno, Firebase Hosting, Cypress'
    },
    {
      id: 2,
      title: 'Leaderline.js Integration With Pure HTML/CSS/JS',
      desc: 'An example showing how to configure leaderline library',
      livedemo: 'https://hzsr9k.csb.app/',
      githurl: 'https://github.com/Ramu-Narasinga/zuuba-fe-design',
      mediumlink: '',
      imgUrl: 'assets/images/p3-zwfd.png',
      tech: 'HTML, CSS, Vanilla Javascript, LeadlineJs'
    },
  ]

  openSourceProjects:any = [
    {
      id: 1,
      title: 'Nodejs-Mail-Sender',
      desc: 'An open source wrapper function in typescript that can be used in NodeJs to send emails built on top of nodemailer.',
      livedemo: 'https://www.npmjs.com/package/nodejs-mail-sender',
      githurl: 'https://github.com/Ramu-Narasinga/Nodemail-Sender',
      mediumlink: '',
      imgUrl: 'assets/images/mail-sender.png',
      tech: 'NodeJs, Nodemailer, NPM'
    }, 
    {
      id: 2,
      title: 'Views Count',
      desc: 'Show views count on any website or markdown',
      livedemo: 'https://projects.ramunarasinga.com/',
      githurl: 'https://github.com/Ramu-Narasinga/visitors-count',
      mediumlink: '',
      imgUrl: 'assets/images/views-count.png',
      tech: 'HTML, CSS, Vanilla Javascript, LeadlineJs'
    },
  ]

  about2 = `
  Frontend Developer with 4+ years of experience .
  Expertise in Javascript, Typescript, Angular, React, Cypress, Jest, NodeJs, MySQL .
  Quick learner and possess strong problem-solving skills
  `
  // Software Developer with 2.5+ years of experience .
  // Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  // Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  // Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL

  about = "Passionate about programming. I love to break down my tasks and create mindmaps to analyse the facts and achieve results."
  resumeurl = "https://docs.google.com/document/d/1MEStFJPRnJ_1AaQED6Lf41_toWvCkqy3QeCpy8QOXco/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '90%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '90%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '90%'
    },
    {
      'id': '4',
      'skill': 'MYSQL, MONOGO, FIREBASE',
      'progress': '85%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'Typescript',
      'progress': '90%'
    },
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Zuuba',
      location: 'Remote, Hyderabad, India',
      timeline: 'March 2021 to February 2022',
      role: 'Front End Developer',
      work: `
        Built a workflow module that involves displaying HTML elements that are connected by lines using the powerful LeaderLine Js library .
        This not only required my expertise in Angular, but also my creativity and problem-solving skills to find the best way to visualize complex information in a simple and intuitive way .
        Built an email builder that uses the popular GrapesJs library, providing a user-friendly drag-and-drop interface for creating stunning emails quickly and easily .
        This module is a crucial component of Zuuba's workflow module, serving as the backbone for their automation efforts. My hard work and dedication to this project have undoubtedly contributed to the product's success
      `
    },
    {
      id: 2,
      company: 'Docsie@Likalo',
      location: 'Remote, Hyderabad, India',
      timeline: 'May 2019 to February 2021',
      role: 'Front End Developer',
      work: `
        Took on a project to build a new product called Vocally using the rrweb.io library. My work involved developing a plugin to capture user sessions and a dashboard that displays a list of user activity sessions .
        It required a deep understanding of the library and a great deal of technical expertise to deliver a product that meets the needs of users .
        Built end-to-end testing suites  to ensure that the application runs smoothly and is free of bugs. This is a significant milestone in the development of the application to make  it more reliable and user-friendly .
        Took on the challenge of adding unit test coverage for an open-source library called tourguide.js .
        It required a comprehensive understanding of the library and the ability to write clean and efficient test code. My contributions undoubtedly helped improve the quality and reliability of the library, making it easier for others to use
      `
    },
    {
      id: 3,
      company: 'Quanteon Solutions',
      location: 'Hyderabad, India',
      timeline: 'May 2018 - April 2019',
      role: 'Software Engineer',
      work: `
        I contributed to the development of a GIS application that utilized the dynamic mapping capabilities of the leaflet.js library .
        Additionally, I exceeded expectations by constructing a full-stack web application using the MEAN stack in under a month, which included a range of features such as image upload (with storage on AWS S3), authentication, profile updates, and route navigation .
        I applied my skills to several ambitious MEAN  projects, of various scales, where I showcased my proficiency as a frontend developer
      `
    },
    {
      id: 4,
      company: 'Young Creators Media',
      location: 'Hyderabad, India',
      timeline: 'February 2018 - April 2018',
      role: 'Web Developer (Intern)',
      work: `
        I was entrusted with the significant responsibility of developing the company's website from scratch, using templates as a foundation .
        However, this required extensive modifications and customizations to be made on top of the templates, which proved to be a challenging but rewarding experience .
        I learned Bootstrap 4 and leveraged my advanced knowledge of Javascript to create a dynamic and visually stunning website that truly reflected the company's brand and values
      `
    },
  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/rn-medium.png',
      url: 'https://medium.com/@ramu.narasinga_61050'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/rn-github.png',
      url: 'https://github.com/Ramu-Narasinga'
    },
  ]

  skills(): Observable<any> {
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }

  getOpenSourceProjects(): Observable<any> {
    return this.openSourceProjects;
  }

  education(): Observable<any> {
    return this.educationData;
  }

  exprience(): Observable<any> {
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    return this.extraCircularInfo;
  }
}
