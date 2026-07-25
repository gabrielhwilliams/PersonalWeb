// Timeline data
// type enum: job, education, project, event
const timelineData = [];
const projects = [
    {
    name: "Personal Website",
    title: "Developer",
    description: "A personal website to showcase my projects and resume.",
    type: "project",
    skills: ["HTML", "CSS", "JS"],
    startDate: new Date("2026-05-01"),
    endDate: new Date("2026-07-01"),
}, {
    name: "Linux Server",
    title: "Developer",
    description: "Turned an old computer into a headless linux server to practice security and to have somewhere to host projects",
    type: "project",
    skills: ["Linux", "Security", "Networking"],
    startDate: new Date("2026-04-01"),
    endDate: new Date("2026-08-01"),
}, {
    name: "Recipeasy",
    title: "Developer",
    description: ` Full stack application I designed and built to implement what I had learned professionally and academically. The goal was to make a website to store my favourite recipes.
Built with a Java backend (Spring) with an SQL database and a React front-end, connected by a RESTful API
Includes database migrations with Liquibase and containerization through Docker.`,
    type: "project",
    skills: ["React", "SQL", "Java", "Spring", "Liquibase", "RESTful api"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-03-01"),
}, {
    name: "TrelloBored",
    title: "Developer",
    description: "AI powered vs code extension designed to move scrum tickets by interpreting different git actions. Built in combination by using a python server to host the backend, github actions to scan the changes, and a vs-code extension to alert and confirm changes.",
    type: "project",
    skills: ["CI/CD", "Python", "Gemini", "Agentic AI", "Github Actions", "HTML/CSS/JS"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-01"),
},  {
    name: "M.U.D.",
    title: "Developer",
    description: "A multi-user dungeon game.",
    type: "project",
    skills: ["Python", "R"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-04-01"),
}, 
];
const events = [{
    name: "BrickHack 9",
    title: "Participant",
    description: "A hackathon event where I participated and developed a project.",
    type: "event",
    skills: ["Python", "R"],
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-02-01"),
}, {
    name: "BrickHack 10",
    title: "Participant",
    description: "A hackathon event where I participated and developed a project.",
    type: "event",
    skills: ["Python", "R"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-01"),
}, {
    name: "BrickHack 11",
    title: "Participant",
    description: "A hackathon event where I participated and developed a project.",
    type: "event",
    skills: ["Python", "R"],
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-02-01"),
}, {
    name: "Wolf-jam",
    title: "Participant",
    description: "A hackathon event where I participated and developed a project.",
    type: "event",
    skills: ["Python", "R"],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-10-01"),
}, {
    name: "Dandyhacks",
    title: "Participant",
    description: "A hackathon event where I participated and developed a project.",
    type: "event",
    skills: ["Python", "R"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-10-01"),
}, {
    name: "WiCHacks",
    title: "Participant",
    description: "A hackathon event where I participated and developed a project.",
    type: "event",
    skills: ["Python", "R"],
    startDate: new Date("2026-02-01"),
    endDate: new Date("2026-02-01"),
}, {
    name: "MLH Digital Ocean: NYC",
    title: "Participant",
    description: "A hackathon event where I participated and developed a project.",
    type: "event",
    skills: ["Python", "R"],
    startDate: new Date("2025-12-01"),
    endDate: new Date("2025-12-01"),
}, 
];

const jobs = [{
    name: "Amplify Internship",
    title: "Software Engineer Intern",
    description: "A software engineering internship where I worked on developing and maintaining web applications.",
    type: "job",
    skills: ["Python", "R"],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-08-31"),
},
{
    name: "Amplify co-op",
    title: "Software Engineer",
    description: "A software engineering co-op where I worked on developing and maintaining web applications.",
    type: "job",
    skills: ["Python", "R"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-12-31"),
},
{
    name: "iDtech Instructor",
    title: "Instructor",
    description: "An instructor for iDtech, teaching coding and game development to students.",
    type: "job",
    skills: ["Python", "R"],
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-08-31"),
},
{
    name: "Loaded Latke",
    title: "Line Cook",
    description: "A line cook at Loaded Latke, preparing and cooking food for customers.",
    type: "job",
    skills: [],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-12-31"),
},
{
    name: "RKF Engineering Solutions co-op",
    title: "Software Engineer",
    description: "A software engineering co-op where I worked on developing and maintaining web applications.",
    type: "job",
    skills: ["Python", "R"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-12-31"),
}];

const education = [{
    name: "Rochester Institute of Technology",
    title: "Bachelor of Science in Computer Science, Bachelor of Science in Psychology, Minor in Artificial Intelligence",
    description: "A dual degree program in Computer Science and Psychology with a minor in Artificial Intelligence.",
    type: "education",
    skills: [],
    startDate: new Date("2022-09-01"),
    endDate: new Date("2027-05-31"),
}];

timelineData.push(jobs, education, projects, events);
for (let i = 0; i < timelineData.length; i++) {
    timelineData[i].sort((a, b) => a.startDate - b.startDate);
}
export default timelineData;
