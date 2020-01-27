let phase = 1
let demandList
const numberOfModels = 4
const demandPerPhase = [
    {
        phase: 1,
        start: [{ demand: 10, value: 300 }, { demand: 10, value: 300 }, { demand: 10, value: 300 }, { demand: 10, value: 300 }],
        mid: [{ demand: 8, value: 250 }, { demand: 15, value: 500 }, { demand: 12, value: 350 }, { demand: 9, value: 350 }],
        end: [{ demand: 4, value: 200 }, { demand: 12, value: 700 }, { demand: 10, value: 300 }, { demand: 8, value: 350 }]
    },
    {
        phase: 2,
        start: [{ demand: 8, value: 400 }, { demand: 8, value: 400 }, { demand: 8, value: 400 }, { demand: 8, value: 300 }],
        mid: [{ demand: 9, value: 450 }, { demand: 6, value: 350 }, { demand: 8, value: 450 }, { demand: 9, value: 400 }],
        end: [{ demand: 8, value: 500 }, { demand: 4, value: 300 }, { demand: 8, value: 400 }, { demand: 11, value: 600 }]
    },
    {
        phase: 3,
        start: [{ demand: 8, value: 500 }, { demand: 5, value: 250 }, { demand: 6, value: 400 }, { demand: 12, value: 500 }],
        mid: [{ demand: 12, value: 550 }, { demand: 7, value: 300 }, { demand: 8, value: 450 }, { demand: 5, value: 300 }],
        end: [{ demand: 11, value: 600 }, { demand: 8, value: 350 }, { demand: 10, value: 500 }, { demand: 3, value: 200 }]
    }
]

const getNowSeconds = () => {
    return Math.floor(new Date().valueOf() / 1000)
}

const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    const leadingZero = sec < 10 ? '0' : ''
    return `${min}:${leadingZero}${sec}`
}

const timer = {
    interval: null,
    totalSeconds: 300,
    startedAt: null,

    start: () => {
        timer.startedAt = getNowSeconds()
        timer.interval = setInterval(timer.display, 500)
        timer.display()
    },
    stop: () => {
        if (timer.interval) {
            clearInterval(timer.interval)
            timer.interval = null
        }
    },
    display: () => {
        const div = document.getElementById('timer')
        if (!timer.startedAt) {
            div.innerHTML = formatTime(timer.totalSeconds)
            return
        }
        const elapsed = getNowSeconds() - timer.startedAt
        const remaining = Math.max(timer.totalSeconds - elapsed, 0)
        if (remaining <= 0) {
            timer.stop()
        }
        updateDemand(remaining)
        div.innerHTML = formatTime(remaining)
    },
    reset: () => {
        timer.stop()
        timer.startedAt = null
        timer.display()
    }
}

const setPhase = (newPhase) => {
    phase = newPhase
    const list = document.getElementById('robot-model-list')
    list.innerHTML = ''
    for (let i = 1; i <= numberOfModels; i++) {
        list.appendChild(createRobotModelDiv(i))
    }
    timer.reset()
    buildDemandList()
    updateDemand(timer.totalSeconds)
}

const createRobotModelDiv = (model) => {
    const div = document.createElement('div')
    div.className = 'robot-model'
    div.innerHTML = `<img src="./img/phase${phase}model${model}.png" /><p>Model ${model}</p><div id="model${model}-demand" class="demand"></div>`
    return div
}

const buildDemandList = () => {
    demandList = new Array(numberOfModels)
    const data = demandPerPhase.find(x => x.phase == phase)
    const halfSeconds = timer.totalSeconds * .5
    for (let i = 0; i < numberOfModels; i++) {
        demandList[i] = []
        demandList[i].push({ time: 0, demand: formatDemand(data.end[i]) });
        interpolate(i, 0, halfSeconds, data.end[i], data.mid[i])
        demandList[i].push({ time: halfSeconds, demand: formatDemand(data.mid[i]) });
        interpolate(i, halfSeconds, timer.totalSeconds, data.mid[i], data.start[i])
        demandList[i].push({ time: timer.totalSeconds, demand: formatDemand(data.start[i]) });
    }
}

const formatDemand = (data) => {
    return `<div>
        <p><span>$${data.value} <small> each </small></span></p> 
        <p> x </p> 
        <p><span>${data.demand} <small> max </small></span></p>
        </div>`
}

const interpolate = (i, start, end, from, to) => {
    if (phase < 3) return

    const interval = 30
    const steps = (end - start) / interval
    const demandDelta = (to.demand - from.demand) / steps
    const valueDelta = (to.value - from.value) / steps
    for (let step = 1; step < steps; step++) {
        let temp = {
            demand: Math.round(from.demand + demandDelta * step),
            value: Math.round(from.value + valueDelta * step)
        }
        demandList[i].push({ time: start + step * interval, demand: formatDemand(temp) })
    }
}

const updateDemand = (remaining) => {
    for (let i = 1; i <= numberOfModels; i++) {
        const demandToShow = demandList[i - 1].filter(x => x.time >= remaining).map(x => x.demand)
        const div = document.getElementById(`model${i}-demand`)
        div.innerHTML = demandToShow.join('')
    }
}
