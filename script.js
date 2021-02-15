const newYears = "1 Jan 2022";
// const newYears = "15 Feb 2021";

const countdownDiv = document.querySelector(".countdown");
const day = document.querySelector("#days");
const hour = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const second = document.querySelector("#seconds");

const countDown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  console.log("newYearsDate", newYearsDate);
  console.log("currentDate", currentDate);

  if (newYearsDate === currentDate || newYearsDate < currentDate) {
    countdownDiv.innerHTML = "<h1>Happy New Years</h1>";
    clearInterval(setInterValTime);
  } else {
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 24;
    const seconds = Math.floor(totalSeconds % 60);

    day.innerHTML = days;
    hour.innerHTML = formatTime(hours);
    minute.innerHTML = formatTime(minutes);
    second.innerHTML = formatTime(seconds);
  }
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const setInterValTime = setInterval(countDown, 1000);
