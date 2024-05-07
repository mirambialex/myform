setInterval(setCLASS, 1000)
const hourHand= document.querySelector ("[data-hour-hand]")
const minuteHand = document.querySelector ("[data-minute-hand]")
const secondHand = document.querySelector ("[data-second-hand]")

function setCLASS() {
    const currentDate=new Date()
    const secondRation =currentDate.getSeconds() / 60
    const minutesRation =
}