// Timeline data
// type enum: job, education, project, event
const timelineData = [];
const jobs = [];
const education = [];
const projects = [];
const events = [];

const job1 = {
    name: "Amplify Internship",
    title: "Software Engineer Intern",
    type: "job",
    skills: ["Python", "R"],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-08-31"),
};
jobs.push(job1);

const job2 = {
    name: "Amplify co-op",
    title: "Software Engineer",
    type: "job",
    skills: ["Python", "R"],
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-12-31"),
};

jobs.push(job2);

const job3 = {
    name: "iDtech Instructor",
    title: "Instructor",
    type: "job",
    skills: ["Python", "R"],
    startDate: new Date("2026-06-01"),
    endDate: new Date("2026-8-31"),
};

jobs.push(job3);

const job4 = {
    name: "RKF Engineering co-op",
    title: "Software Engineer",
    type: "job",
    skills: ["Python", "R"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-12-31"),
};
jobs.push(job4);

const education1 = {
    name: "Rochester Institute of Technology",
    title: "Bachelor of Science in Computer Science, Bachelor of Science in Psychology, Minor in Artificial Intelligence",
    type: "education",
    skills: [],
    startDate: new Date("2022-09-01"),
    endDate: new Date("2027-05-31"),
};

education.push(education1);
timelineData.push(jobs, education, projects, events);
for (let i = 0; i < timelineData.length; i++) {
    timelineData[i].sort((a, b) => a.startDate - b.startDate);
}
export default timelineData;
