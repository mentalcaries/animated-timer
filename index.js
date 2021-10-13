import Timer from "./components/Timer.js"


const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton,{
    onStart(){
        console.log("thing start")
    },

    onTick(){
        console.log('time is ticking')
    },

    onComplete(){
        console.log('all done')
    }

})

