const skills = [
  { "name": "Python", "value": 90 },
  { "name": "Javascript", "value": 60 },
  { "name": "AWS", "value": 80 },
  { "name": "HTML/CSS", "value": 70 }
]

const jobs = [
  {
    "company": "Infosys",
    "position": "Specialist Programmer",
    "description": "Involved in various phases of SDLC including requirement gathering, modeling, analysis, architecture design, prototyping, development & testing.",
    "period": "Jun 2019 - Present",
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