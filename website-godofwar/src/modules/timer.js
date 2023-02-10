// timer
export const formatValue = (value) => (value < 10 ? `0${value}` : value);

export const getTimerValues = (diff) => ({
  seconds: (diff / 1000) % 60,
  minutes: (diff / (1000 * 60)) % 60,
  hours: (diff / (1000 * 3600)) % 24,
  days: (diff / (1000 * 3600 * 24)) % 30,
});

export const setTimerValues = (values) => {
  Object.entries(values).forEach(([key, value]) => {
    const timerValue = document.getElementById(key);
    timerValue.innerText = formatValue(Math.floor(value));
  });
};

export const startTimer = (date) => {
  const id = setInterval(() => {
    const diff = new Date(date).getTime() - new Date().getTime();
    if (diff < 0) {
      clearInterval(id);
      return;
    }
    setTimerValues(getTimerValues(diff));
  }, 1000);
};
