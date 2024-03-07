const skills = [
  { "name": "Python", "value": 90 },
  { "name": "Javascript", "value": 60 },
  { "name": "AWS", "value": 80 },
  { "name": "HTML/CSS", "value": 70 }
]

const jobs = [
  {
    "company": "Genpact",
    "position": "Lead Consultant",
    "description": "Involved in various phases of SDLC including requirement gathering, modeling, analysis, architecture design, prototyping, development & testing.",
    "period": "Oct 2021 - Present",
    "imgUrl": "data:image/svg+xml,%3Csvg viewBox='0 0 144 40' xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2'%3E%3Cpath d='m28.923 10.13-7.206 5.1-7.078-5.019-7.089 5.027-7.198-5.105L14.639 0l14.284 10.13Z' style='fill:%23ff555f'/%3E%3Cpath d='M7.71 25.043v-9.871L.352 10.16v19.894l14.603 9.947V29.977L7.71 25.043Zm7.245 5.435h6.984V20.319h-6.984v10.159Z' style='fill:%2300aecf'/%3E%3Cpath d='m14.953 39.999 14.603-9.841v-9.842l-14.603 9.765v9.918Z' style='fill:%23073262'/%3E%3Cpath d='m22.222 25.397-7.269-5.094 7.234-5.065 7.369 5.072-7.334 5.087Z' style='fill:%23ff555f'/%3E%3Cpath d='M49.729 24.658c2.179 0 3.988-1.864 3.988-4.199 0-2.337-1.809-4.2-3.988-4.2-2.147 0-3.957 1.863-3.957 4.199s1.809 4.2 3.957 4.2ZM46.233 28c.644 1.241 1.932 2.099 3.404 2.099 2.148 0 3.866-1.804 3.866-4.022v-.148l-.061-.027c-1.196 1.153-2.731 1.863-4.449 1.863-3.681 0-6.657-3.282-6.657-7.305 0-4.051 2.976-7.304 6.657-7.304 1.718 0 3.252.71 4.449 1.893l.061-.031v-1.479h3.436v12.539c0 3.963-3.037 7.156-7.148 7.156-2.761 0-5.154-1.419-6.442-3.577L46.233 28Zm22.548-9.465.031-.059c-.759-1.36-2.094-2.277-3.642-2.277-1.609 0-2.854.858-3.674 2.277l.031.059h7.254Zm-.395 4.759 2.368 2.276c-1.366 1.36-3.278 2.188-5.373 2.188-4.189 0-7.529-3.252-7.529-7.302a7.28 7.28 0 0 1 7.317-7.301 7.28 7.28 0 0 1 2.794.552 7.281 7.281 0 0 1 4.492 6.749c0 .651-.061.828-.061.828H61.253c0 1.537 1.851 3.34 3.976 3.34 1.245 0 2.337-.532 3.157-1.33Zm9.22-2.641v7.105H74.28V13.549h3.326v1.73l.061.031c1.128-1.426 2.643-2.155 4.216-2.155 5.939 0 6.088 5.525 6.088 7.225v7.378h-3.326v-7.105c0-1.7-.031-4.311-3.475-4.311-1.959 0-3.564 1.913-3.564 4.311Zm19.415-4.333c-2.204 0-3.979 1.9-3.979 4.251 0 2.382 1.775 4.281 3.979 4.281 2.143 0 3.949-1.899 3.949-4.281 0-2.351-1.806-4.251-3.949-4.251Zm.735 11.728c-1.745 0-3.245-.694-4.47-1.93l-.062.032v7.085h-3.428V13.548h3.428v1.477l.062.031c1.225-1.176 2.725-1.9 4.47-1.9 3.674 0 6.643 3.317 6.643 7.448 0 4.13-2.969 7.444-6.643 7.444Zm14.949-3.425c2.18 0 3.958-1.832 3.958-4.167s-1.779-4.198-3.957-4.198c-2.148 0-3.958 1.863-3.958 4.198 0 2.335 1.809 4.167 3.957 4.167Zm-.735-11.468c1.718 0 3.252.71 4.449 1.892l.061-.031v-1.479h3.435v13.836h-3.436v-1.419l-.061-.059c-1.196 1.153-2.731 1.863-4.449 1.863-3.681 0-6.657-3.252-6.657-7.302s2.976-7.301 6.658-7.301Zm22.548 12.415a7.476 7.476 0 0 1-5.321 2.188c-4.149 0-7.456-3.252-7.456-7.302s3.307-7.301 7.456-7.301c2.074 0 3.969.827 5.321 2.187l-2.374 2.187a3.978 3.978 0 0 0-2.947-1.27c-2.285 0-4.088 1.891-4.088 4.197s1.803 4.167 4.088 4.167a4.154 4.154 0 0 0 3.007-1.3l2.314 2.247Zm6.742-9.386v10.661h-3.443V16.184h-2.386v-3.199h2.386V6.766h3.443v6.219h2.385v3.199h-2.385Z' style='fill:%2300aecf'/%3E%3C/svg%3E"
  },
  {
    "company": "Infosys",
    "position": "Specialist Programmer",
    "description": "Involved in various phases of SDLC including requirement gathering, modeling, analysis, architecture design, prototyping, development & testing.",
    "period": "Jun 2019 - Oct 2021",
    "imgUrl": "https://cdn.iconscout.com/icon/free/png-256/infosys-2850045-2370783.png"
  },
  {
    "company": "Spoken Tutorial, IIT-Bombay",
    "position": "Summer Intern",
    "description": "As an Intern, developed a custom module from scratch to automate the calculation of honorarium payable to all external contributors of the Spoken Tutorial Project with a feature to track the progress of an honorarium.",
    "period": "May 2018 - Jul 2018",
    "imgUrl": "https://fossee.in/digital-india/images/logos/spoken_logo.png"
  }
];

const projects = [
  {
    "title": "Jobs App",
    "description": "Jobs search app is an interactive angular application which shows job openings around the world. ",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/front-end-developer/challenge8-jobs-app/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/front-end-developer/projects/challenge8-jobs-app/",
    "tags": ["Front-End", "Angular", "Bootstrap"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/front-end-developer/projects/challenge8-jobs-app/screenshots/jobs-app-demo.gif",
    "difficulty": 4
  },
  {
    "title": "Weather App",
    "description": "Weather app is an interactive angular application which gives weather details of cities around the world.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/front-end-developer/challenge7-weather-app/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/front-end-developer/projects/challenge7-weather-app/",
    "tags": ["Front-End", "Angular"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/front-end-developer/projects/challenge7-weather-app/screenshots/weather-app-demo.gif",
    "difficulty": 4
  },

  {
    "title": "Quiz App",
    "description": "Country quiz app is an exciting app to test your knowledge of countries around the world.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/front-end-developer/challenge6-quiz-app/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/front-end-developer/projects/challenge6-quiz-app/",
    "tags": ["Front-End", "Angular"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/front-end-developer/projects/challenge6-quiz-app/screenshots/quiz-app-demo.gif",
    "difficulty": 3
  },
  {
    "title": "Quote Generator",
    "description": "Famous quotes can be a great source of motivation. This application displays a random quote from a large pool of quotes available. You can also view all available quotes from a specific personality.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/front-end-developer/challenge5-quote-generator/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/front-end-developer/projects/challenge5-quote-generator/",
    "tags": ["Front-End", "Angular", "Karma"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/front-end-developer/projects/challenge5-quote-generator/screenshots/quote-generator-demo.gif",
    "difficulty": 3
  },
  {
    "title": "Todo App",
    "description": "A todo app built using angular. It uses localStorage to persists data across multiple sessions. Additionally, this angular app is unit tested with 100% coverage.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/front-end-developer/challenge4-todo-app/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/front-end-developer/projects/challenge4-todo-app/",
    "tags": ["Front-End", "Angular", "Karma"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/front-end-developer/projects/challenge4-todo-app/screenshots/demo-screenshot.gif",
    "difficulty": 3
  },
  {
    "title": "Windbnb",
    "description": "A small version of Airbnb - Windbnb with pre-populated data. This app is built using angular. It uses angular features such as Components, pipes etc.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/front-end-developer/challenge3-windbnb/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/front-end-developer/projects/challenge3-windbnb/",
    "tags": ["Front-End", "Angular"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/front-end-developer/projects/challenge3-windbnb/screenshots/demo-screenshot.gif",
    "difficulty": 2
  },
  {
    "title": "Edie Homepage",
    "description": "Edie Homepage is a landing page ideal for development studio providing web services. It cover all important sections such as services, projects, clients, team etc.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/responsive-web-developer/challenge7-edie-homepage",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/responsive-web-developer/challenge7-edie-homepage",
    "tags": ["Responsive", "Javascript", "HTML", "CSS"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/responsive-web-developer/challenge7-edie-homepage/demo-screenshot.gif",
    "difficulty": 2
  },
  {
    "title": "Checkout Page",
    "description": "A checkout page with a modern and minimal design suitable for all sort of e-commerce websites.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/responsive-web-developer/challenge6-checkout-page",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/responsive-web-developer/challenge6-checkout-page",
    "tags": ["Responsive", "Javascript", "HTML", "CSS"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/responsive-web-developer/challenge6-checkout-page/demo-screenshot.PNG",
    "difficulty": 2
  },
  {
    "title": "My Gallery Page",
    "description": "My Gallery is a responsive web page inspired by Instagram profile page to display images. It uses CSS grid feature for alignment.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/responsive-web-developer/challenge5-my-gallery",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/responsive-web-developer/challenge5-my-gallery",
    "tags": ["Responsive", "HTML", "CSS"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/responsive-web-developer/challenge5-my-gallery/demo-screenshot.PNG",
    "difficulty": 1
  },
  {
    "title": "Receipe Blog",
    "description": "Responsive page of classic cheesecake recipe built with HTML and CSS.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/responsive-web-developer/challenge4-recipe-page/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/responsive-web-developer/challenge4-recipe-page",
    "tags": ["Responsive", "HTML", "CSS"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/responsive-web-developer/challenge4-recipe-page/demo-screenshot.gif",
    "difficulty": 1
  },
  {
    "title": "Interior Consultant",
    "description": "Responsive page for interior consultant built with HTML and CSS. Uses flex for layout and Javascript to show interactive hamburger menu on small screen device.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/responsive-web-developer/challenge3-interior-consultant/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/responsive-web-developer/challenge3-interior-consultant",
    "tags": ["Responsive", "Javascript", "HTML", "CSS"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/responsive-web-developer/challenge3-interior-consultant/demo-screenshot.PNG",
    "difficulty": 1
  },
  {
    "title": "My Team Page",
    "description": "My Team is a responsive web page to list out all team members with their images and designation.",
    "demoUrl": "https://mohitkh7-devchallenge-solution.web.app/responsive-web-developer/challenge2-my-team/",
    "codeUrl": "https://github.com/mohitkh7/devchallenges-solution/tree/master/responsive-web-developer/challenge2-my-team",
    "tags": ["Responsive", "HTML", "CSS"],
    "imageUrl": "https://github.com/mohitkh7/devchallenges-solution/raw/master/responsive-web-developer/challenge2-my-team/demo-screenshot.PNG",
    "difficulty": 1
  }
]

export { skills, jobs, projects };