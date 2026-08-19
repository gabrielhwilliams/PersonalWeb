// Timeline data
// type enum: job, education, project, event
const timelineData = [];

const education = [
    {
        name: "Rochester Institute of Technology",
        title: "B.S. in Computer Science & Psychology, Minor in AI",
        description: "Dual degree program in Computer Science and Psychology with a minor in Artificial Intelligence. Expected graduation in May 2027.",
        type: "education",
        skills: ["Python", "Java", "C++", "R", "SQL", "Statistical Machine Learning", "Agentic AI"],
        startDate: new Date("2022-09-01"),
        endDate: new Date("2027-05-31"),
    }
];

const jobs = [
    {
        name: "Amplify Internship",
        title: "Software Engineer Intern",
        description: "Worked in a small team of 3 in charge of language processing in order to clean data. Analyzed and presented several possible solutions before settling on one. Using n-grams, trained a model to find chunks of gibberish text and prune them.",
        type: "job",
        skills: ["Python", "R", "Statistical Machine Learning"],
        startDate: new Date("2022-06-01"),
        endDate: new Date("2022-08-31"),
    },
    {
        name: "Loaded Latke",
        title: "Line Cook",
        description: "Worked as a line cook, preparing dishes and handling kitchen operations during the semester.",
        type: "job",
        skills: [],
        startDate: new Date("2023-09-01"),
        endDate: new Date("2023-12-31"),
    },
    {
        name: "Amplify Co-op",
        title: "Software Engineer",
        description: "AGILE and SCRUM development as part of an established team. Full stack development including React front-end, RESTful backend, and an SQL database as well as small stories on a range of other company services. Refactored SQL to implement multiple versions of objects and create active/read-only versions. Optimized SQL and Java backend to make a service call 22 times as fast. Designed and built internal UI from scratch to allow for easy access to the database. Implemented 100+ unit and integration tests and automated testing as part of the git workflow.",
        type: "job",
        skills: ["SQL", "React", "Java", "HTML/CSS", "TypeScript", "GitHub Actions", "RESTful APIs"],
        startDate: new Date("2024-05-01"),
        endDate: new Date("2024-12-31"),
    },
    {
        name: "RKF Engineering Solutions Co-op",
        title: "Software Engineer",
        description: "Worked on a large web application with many sub-groups mainly using Angular and Java. Transitioned to a variety of subsystems to learn, enhance, and debug depending on need. Implemented pipelines to build, test, and deploy a variety of services in Kubernetes and Docker.",
        type: "job",
        skills: ["Angular", "TypeScript", "Java", "SQL", "Docker", "Kubernetes", "CI/CD"],
        startDate: new Date("2025-05-01"),
        endDate: new Date("2025-12-31"),
    },
    {
        name: "iD Tech Instructor",
        title: "Instructor (Co-op)",
        description: "Teaching programming, computer science principles, and game development to students.",
        type: "job",
        skills: ["Python", "Machine Learning", "PyTorch", "Game Development"],
        startDate: new Date("2026-06-01"),
        endDate: new Date("2026-08-31"),
    }
];

const projects = [
    {
        name: "M.U.D.",
        title: "Developer",
        description: "A multi-user dungeon text adventure game built in Python.",
        type: "project",
        skills: ["Python"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-04-30"),
    },
    {
        name: "Recipeasy",
        title: "Developer",
        description: "Full-stack recipe application built with Java (Spring), React, SQL database, Liquibase migrations, and Docker.",
        type: "project",
        skills: ["React", "Java", "Spring", "SQL", "Docker", "Liquibase", "RESTful APIs"],
        startDate: new Date("2025-01-01"),
        endDate: new Date("2025-03-31"),
    },
    {
        name: "TrelloBored",
        title: "Developer",
        description: "AI-powered VS Code extension interpreting Git actions to manage scrum tickets via Python backend, Gemini AI, and GitHub Actions.",
        type: "project",
        skills: ["Python", "Gemini AI", "GitHub Actions", "CI/CD", "VS Code"],
        startDate: new Date("2026-01-01"),
        endDate: new Date("2026-03-31"),
    },
    {
        name: "Headless Linux Server",
        title: "Developer",
        description: "Self-hosted Linux server for security experimentation, networking, and project hosting. Hosting this website right now.",
        type: "project",
        skills: ["Linux", "Security", "Networking", "Docker"],
        startDate: new Date("2026-04-01"),
        endDate: new Date("2026-08-31"),
    },
    {
        name: "Personal Website",
        title: "Developer",
        description: "Personal portfolio website with an interactive multi-track timeline visualization and multi-theme switcher.",
        type: "project",
        skills: ["JavaScript", "HTML", "CSS"],
        startDate: new Date("2026-05-01"),
        endDate: new Date("2026-07-31"),
    }
];

const events = [
    {
        name: "BrickHack 9",
        title: "Hackathon Participant",
        description: "Participated in BrickHack 9 at RIT, collaborating on rapid software prototyping and project presentation in a 24-hour hackathon.",
        type: "event",
        skills: ["Python", "Git"],
        startDate: new Date("2023-02-01"),
        endDate: new Date("2023-02-01"),
    },
    {
        name: "BrickHack 10",
        title: "Hackathon Participant",
        description: "24-hour collegiate hackathon at RIT, designing and prototyping a collaborative software project.",
        type: "event",
        skills: ["Python", "Git"],
        startDate: new Date("2024-02-01"),
        endDate: new Date("2024-02-01"),
    },
    {
        name: "Wolf-jam",
        title: "Game Jam Participant",
        description: "Game jam event focused on rapid gameplay mechanics prototyping, asset creation, and game design under time constraints.",
        type: "event",
        skills: ["Game Design", "Python"],
        startDate: new Date("2024-10-01"),
        endDate: new Date("2024-10-01"),
    },
    {
        name: "BrickHack 11",
        title: "Hackathon Participant",
        description: "Competed in BrickHack 11 at RIT and created Middle Mismanagement, a simulation game built in Godot where players manage and balance infrastructure budgets against environmental impact.",
        type: "event",
        skills: ["Godot", "GDScript", "Game Design"],
        startDate: new Date("2025-02-01"),
        endDate: new Date("2025-02-01"),
    },
    {
        name: "DandyHacks",
        title: "Hackathon Participant",
        description: "Competed at DandyHacks and created Goobers, a hardware digital pet system linked by fingerprint authentication. Built with ESP32 boards, a digital screen, fingerprint reader, and a hosted webserver.",
        type: "event",
        skills: ["C++", "Python", "Flask", "SQL", "Networking", "Docker"],
        startDate: new Date("2025-10-01"),
        endDate: new Date("2025-10-01"),
    },
    {
        name: "MLH Digital Ocean: NYC",
        title: "Hackathon Participant",
        description: "Major League Hacking hackathon in NYC focused on cloud infrastructure and containerized web tools.",
        type: "event",
        skills: ["Docker", "Linux", "Networking"],
        startDate: new Date("2025-12-01"),
        endDate: new Date("2025-12-01"),
    },
    {
        name: "WiCHacks",
        title: "Hackathon Participant - 2nd Place",
        description: "Competed at WiCHacks and built CartSmart, an AI-powered grocery price comparison site using the Gemini API. Won second place in the Capital One: Best Financial Hack category.",
        type: "event",
        skills: ["React", "TypeScript", "Gemini AI"],
        startDate: new Date("2026-02-01"),
        endDate: new Date("2026-02-01"),
    }
];

timelineData.push(jobs, education, projects, events);
for (let i = 0; i < timelineData.length; i++) {
    timelineData[i].sort((a, b) => a.startDate - b.startDate);
}
export default timelineData;
