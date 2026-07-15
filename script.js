import timelineData from './timeline.js';
import MinHeap from './minheap.js';

function getTracks(list) {
    if (list.length == 0) {
        return
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
    for (let year = startYear; year >= endYear; year--) {
        for (let month = 11; month >= 0; month--) {
            const tick = document.createElement('div');
            tick.classList.add('tick', month === 11 ? 'tick--year' : 'tick--month');
            tick.textContent = month === 11 ? year : '';
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
    bar.classList.add('event-bar');

    const top = dateToY(event.endDate)
    const bottom = dateToY(event.startDate)

    if (bottom < top) {
        console.warn('Bar has negative height — check date order for event:', event.name);
    }

    bar.style.top = `${top}px`
    bar.style.height = `${bottom - top}px`
    
    const label = document.createElement('div');
    label.classList.add('event-label');
    label.textContent = event.name;
    label.style.top = 0

    bar.appendChild(label)
    return bar;
}

function populateBars(events) {
    const barConainer = document.getElementById('bars')
    events.forEach(event => {
        const bar = createBar(event);
        barConainer.appendChild(bar)
    });
}

const rowHeight = 20;
const jobTracks = getTracks(timelineData[0]);
const eduTracks = getTracks(timelineData[1]);
const projectTracks = getTracks(timelineData[2]);
const eventTracks = getTracks(timelineData[3]);
const alltracks = [...timelineData[0], ...timelineData[1], ...timelineData[2], ...timelineData[3]]
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
const topAnchor = monthIndex(new Date(startYear, 11));
console.log('startYear:', startYear, 'endYear:', endYear, 'topAnchor:', topAnchor);
setUpTimeline(alltracks)
populateBars(timelineData[0])

