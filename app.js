const clockus = () => {
  const allDate = new Date();

  let hour = allDate.getHours(),
    min = allDate.getMinutes(),
    sec = allDate.getSeconds();

  hour < 10 ? (hour = `0 ${hour}`) : hour;
  min < 10 ? (min = `0 ${min}`) : min;
  sec < 10 ? (sec = `0 ${sec}`) : sec;

  document.getElementById("hours").innerHTML = `${hour}`;
  document.getElementById("minutes").innerHTML = `: ${min}`;
  document.getElementById("seconds").innerHTML = `: ${sec}`;
  return clockus;
};

setInterval(clockus(), 100);
