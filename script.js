import timelineData from './timeline.js';
import MinHeap from './minheap.js';



function expandBar(bar) {
    if (currentlyExpanded && currentlyExpanded !== bar) {
        currentlyExpanded.classList.remove('is-expanded');
    }

    bar.classList.toggle('is-expanded');
    currentlyExpanded = bar.classList.contains('is-expanded') ? bar : null;

    const expandedTrackId = currentlyExpanded ? currentlyExpanded.eventData.trackId : null;
    repositionBars(expandedTrackId);

    if (bar.classList.contains('is-expanded')) {
        bar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
function getTracks(list) {
    if (list.length == 0) {
        return []
    }
    const rooms = new MinHeap();
    const finalorders = [[]]
    let tracks = 0;
    list[0].trackId = 0;
    rooms.insert(list[0])
    finalorders[tracks].push(list[0])
    for (let i = 1; i < list.length; i++) {
        const current = list[i];
        if (current.startDate > rooms.peek().endDate) {
            const r = rooms.pop();
            current.trackId = r.trackId;
        } else {
            tracks++;
            finalorders.push([])
            current.trackId = tracks
        }
        finalorders[current.trackId].push(current)
        rooms.insert(current)
    }
    return finalorders
};

function setUpTimeline (alltracks) {
    const container = document.getElementById('spine')
    const currentDate = new Date();
    for (let year = startYear; year >= endYear; year--) {
        for (let month = 11; month >= 0; month--) {
            const tick = document.createElement('div');
            tick.classList.add('tick', month === 11 ? 'tick--year' : 'tick--month');
            tick.textContent = month === 11 ? year : '';
            if ( month === currentDate.getMonth() && year === (currentDate.getFullYear()+1)) {
                tick.classList.add('tick--current');
                tick.textContent = 'Now';
                console.log(currentDate)
            }
            container.appendChild(tick);
        }
    }
}

function dateToY(date) {
    const row = topAnchor - monthIndex(date);
    return row * rowHeight;
}

function monthIndex(date) {
    return date.getFullYear() * 12 + date.getMonth();
}

function createBar(event){
    const bar = document.createElement('div');
    bar.classList.add('event-bar', `event-bar--${event.type}`);
    console.log(event)
    const top = dateToY(event.endDate)
    const bottom = dateToY(event.startDate)


    const barWidth = 12;
    const trackGap = 4;

    bar.eventData = event;
    bar.style.top = `${top}px`
    bar.style.height = `${bottom - top}px`
    bar.style.left = `${event.trackId * (barWidth + trackGap)}px`

    // const label = document.createElement('div');
    // label.classList.add('event-label');
    // label.textContent = event.name;
    // label.style.top = 0

    const label = document.createElement('div');
    label.classList.add('event-label');

    const name = document.createElement('div');
    name.classList.add('event-label-name');
    name.textContent = event.name;

    const role = document.createElement('div');
    role.classList.add('event-label-role');
    role.textContent = event.title;

    const desc = document.createElement('div');
    desc.classList.add('event-label-desc');
    desc.textContent = event.description ?? '';

    const skillsHeading = document.createElement('div');
    skillsHeading.classList.add('event-label-skills-heading');
    skillsHeading.textContent = 'List of skills';

    const skills = document.createElement('div');
    skills.classList.add('event-label-skills');
    skills.textContent = (event.skills ?? []).join(', ');

    label.append(name, role, desc, skillsHeading, skills);

    bar.addEventListener('click', () => expandBar(bar));

    bar.appendChild(label)
    return bar;
}

function createPoint(event) {
    const point = document.createElement('div');
    point.classList.add('event-point', `event-point--${event.type}`);
    const y = dateToY(event.startDate)
     point.style.top = `${y}px`;
    point.style.left = `${event.trackId * (12 + 4)}px`; // same track math as bars

    const label = document.createElement('div');
    label.classList.add('event-label');
    label.textContent = event.name;
    label.style.top = 0;

    point.eventData = event;
    point.addEventListener('click', () => expandBar(point));
    point.appendChild(label);
    return point;
}
const allElements = [];
function populateBars(events) {
    const barConainer = document.getElementById('bars')
    events.forEach(event => {
        if (event.startDate.getTime() === event.endDate.getTime()) {
            const point = createPoint(event);
            barConainer.appendChild(point);
            allElements.push(point);
        } else {
            const bar = createBar(event);
            barConainer.appendChild(bar);
            allElements.push(bar);
        }
    });
}

function applyOffset(track, offset) {
    track.forEach(rows => {
        rows.forEach(event => {
            event.trackId += offset
        });
    });
    return track
}

function repositionBars(expandedTrackId) {
    allElements.forEach(bar => {
        const event = bar.eventData;
        let left = event.trackId * (collapsedWidth + trackGap);

        if (expandedTrackId !== null && event.trackId > expandedTrackId) {
            left += expansionOffset;
        }

        bar.style.left = `${left}px`;
    });
}



const rowHeight = 20;
const jobTracks = getTracks(timelineData[0]);
const eduTracks = getTracks(timelineData[1]);
const projectTracks = getTracks(timelineData[2]);
const eventTracks = getTracks(timelineData[3]);
const collapsedWidth = 12;
const expandedWidth = 240;
const trackGap = 4;
const expansionOffset = expandedWidth - collapsedWidth;
const eduOffset = 0
const jobOffset = eduOffset + eduTracks.length
const projectOffset = jobOffset + jobTracks.length
const eventOffset = projectOffset + projectTracks.length

const alltracks = [...timelineData[0], ...timelineData[1], ...timelineData[2], ...timelineData[3]]
const indexedTracks = [
    ...applyOffset(eduTracks, eduOffset),
    ...applyOffset(jobTracks, jobOffset),
    ...applyOffset(projectTracks, projectOffset),
    ...applyOffset(eventTracks, eventOffset)
]
let currentlyExpanded = null;
let startYear = alltracks[0].endDate.getFullYear();
let endYear = alltracks[0].startDate.getFullYear();
alltracks.forEach(element => {
    if (element.endDate.getFullYear() > startYear) {
        startYear = element.endDate.getFullYear();
    }
    if (element.startDate.getFullYear() < endYear) {
        endYear = element.startDate.getFullYear();
    }
});
startYear += 1
const topAnchor = monthIndex(new Date(startYear, 0));
setUpTimeline(alltracks)
console.log(indexedTracks)
populateBars(indexedTracks.flat())

