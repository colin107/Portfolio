/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Colin Wong's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Colin Wong Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Colin Wong",
  logo_name: "Colin Wong",
  nickname: "layman_brother",
  subTitle:
    "BSc Computer Science in CUHK \n",
  subTitle2:
    "Junior Programmer in Hongkong Post \n",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  // {
  //   name: "Github",
  //   link: "https://github.com/ashutosh1919",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/colin-wong-457735175/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/colin-wong-457735175/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#FFD433", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   siteName: "Leetcode",
  //   iconifyClassname: "simple-icons:leetcode",
  //   style: {
  //     color: "#FFD433",
  //   },
  //   profileLink: "https://www.hackerrank.com/layman_brother",
  // },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  // {
  //   name: "Gmail",
  //   link: "mailto:ashutoshhathidara98@gmail.com",
  //   fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  // },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular",
        //"⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Java Spring",
        "⚡ Write script and tools with Python",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision projects",
        // "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "linkedin",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/colin-wong-457735175",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFD433",
      },
      profileLink: "https://leetcode.com/colin107/",
    },

    // {
    //   name: "LinkedIn",
    //   link: "https://www.linkedin.com/in/colin-wong-457735175/",
    //   fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    //   backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/kailongwong",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The Chinese University of Hong Kong",
      subtitle: "BSc in Computer Science",
      logo_path: "cuhk.png",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development, Deep Learning and Data Science.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.cuhk.edu.hk/english/index.html",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Tools for Data Science",
      // subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/P6CWC67PYS9L",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "What is Data Science?",
      // subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/QPS6CWGZD7BZ",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "In my current job, my main responsibility is to develope, maintain, design and migrate full stack web applications with java, angular and javascript. I also have some web developement and AI experience in different company, such as technology company, FinTech company and startups. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Programmer",
          company: "Hongkong Post",
          company_url: "https://www.hongkongpost.hk/en/home/index.html",
          logo_path: "hkpo.jpg",
          duration: "Jan 2022 - Jan 2023",
          location: "Hong Kong",
          description:"-Develope, maintain, design and migrate full stack web applications with AngularTs, Java Spring and JavaScript",
          description2:"-Build Single Sign-On (SSO) on web application to replace old login system",
          description3:"-Improve system performance and reduce 90% of user interface latency ",
          description4:"-Write automated scripts to test websites and save the company's testing costs",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Information Technology - FinTech (Intern)",
          company: "PrimeCredit Limited",
          company_url: "https://www.primecredit.com/",
          logo_path: "1596068108017.jpg",
          duration: "May 2019 - Sept 2019",
          location: "Hong Kong",
          description:
            "-Developed web application by using Angular and Java Spring Boot",
          description2:"-Built NLP chatbot and Face Recognition with the supervisor",
          description3:"",
          description4:"",
          color: "#ee3c26",
        },
        {
          title: "AI Software Engineer Intern",
          company: "Homie Pet Limited",
          company_url:
            "https://homiepet.co/",
          logo_path: "homie.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Hong Kong",
          description:
            "-Applied Multi-task Cascaded Convolutional Networks (MTCNN) to detect faces with 99.8% accuracy",
          description2:"",
          description3:"",
          description4:"",
          color: "#0071C5",
        },
        {
          title: "IT Trainee",
          company: "SpaceshipHK",
          company_url:
            "https://www.spaceshipapp.com/en-hk/?utm_source=adwords&utm_medium=ppc&utm_term=spaceship&utm_campaign=PPC_Brand_Band-Pure_EXA_HK&hsa_ver=3&hsa_src=g&hsa_kw=spaceship&hsa_tgt=kwd-1496983995&hsa_cam=6513518554&hsa_mt=b&hsa_ad=476670142746&hsa_acc=6707530821&hsa_grp=111038447178&hsa_net=adwords&gclid=CjwKCAiAzKqdBhAnEiwAePEjkgv7c4yW2q9puPAF4mXTy_XReZYW7EXsNGgm32yDjzll08XZAMrstxoCBvQQAvD_BwE",
          logo_path: "spaceship.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Hong Kong",
          description:
            "-Developed web application by using React, NodeJS, PHP and MySQL",
          description2:"",
          description3:"",
          description4:"",
          color: "#0071C5",
        },
        {
          title: "Algorithm Engineer Intern",
          company: "Shanghai Xiaoi Robot Technology Co. Ltd",
          company_url:
            "https://www.xiaoi.com/",
          logo_path: "xiaoi.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Shanghai",
          description:"-Wrote Machine-Learning algorithms to Implement a Gender Classification system",
          description2:"-Applied Local Binary Pattern (LBP) for feature engineering",
          description3:"",
          description4:"",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "1582724963022.jpg",
    description:
      "You can find me on Linkdln OR Email to wongkailong3@gmail.com",
      description2:
      "Email to wongkailong3@gmail.com",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
