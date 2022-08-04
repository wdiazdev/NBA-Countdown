NBA-Countdown

HTML | CSS | JavaScript

Steps involved in creating the basics:

1 - Declare a variable that holds the date and time that we want our countdown timer to run down to, declare a variable for the current date and time and a variable for the gap in between. 

2 - Make a function that update every second. Calculate the time difference (in milliseconds) between our current date and end date.

3- Display the output to users:
    document.querySelector("#d").innerText = nbaStartDay
    document.querySelector("#h").innerText = nbaStartHours
    document.querySelector("#m").innerText = nbaStartMinutes
    document.querySelector("#s").innerText = nbaStartSeconds

4- The if statement clears the values of days, hours, minutes, and seconds and displays a heading when the timer is up.
