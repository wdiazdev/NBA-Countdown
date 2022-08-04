const countDown = () => {
    const countDate = new Date('Oct 18, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const daysBetween = countDate - currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    const nbaStartDay = Math.floor(daysBetween / day);
    const nbaStartHours = Math.floor((daysBetween % day) / hour);
    const nbaStartMinutes = Math.floor((daysBetween % hour) / minutes);
    const nbaStartSeconds = Math.floor((daysBetween % minutes) / seconds);

    document.querySelector("#d").innerText = nbaStartDay
    document.querySelector("#h").innerText = nbaStartHours
    document.querySelector("#m").innerText = nbaStartMinutes
    document.querySelector("#s").innerText = nbaStartSeconds

    if (daysBetween < 0) {
        document.querySelector("#d").innerText = "";
        document.querySelector("#h").innerText = "";
        document.querySelector("#m").innerText = "";
        document.querySelector("#s").innerText = "";
        document.querySelector("#time-up").innerText = "Time up!";
    }

};

setInterval(countDown, 1000);