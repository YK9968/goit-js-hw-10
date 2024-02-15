import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const date = Date.now();
let userSelectedDate;
const inputValueTimer = document.querySelector('#datetime-picer');
const startBtn = document.querySelector('button[data-start]');
const dataValueDays = document.querySelector('span[data-days]');
const dataValueHours = document.querySelector('span[data-hours]');
const dataValueMinutes = document.querySelector('span[data-minutes]');
const dataValueSeconds = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < date) {
      window.alert('Please choose a date in the future');
      startBtn.setAttribute('disabled', '');
    } else {
      startBtn.removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
      updateTimerValue;
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value < 10) {
    return String(value).padStart(2, '0');
  } else {
    return value;
  }
}

function updateTimerValue() {
  const { days, hours, minutes, seconds } = convertMs(
    userSelectedDate - Date.now()
  );
  dataValueDays.textContent = addLeadingZero(days);
  dataValueHours.textContent = addLeadingZero(hours);
  dataValueMinutes.textContent = addLeadingZero(minutes);
  dataValueSeconds.textContent = addLeadingZero(seconds);
  const changeDateValue = setInterval(updateTimerValue, 1000);
}

startBtn.addEventListener('click', updateTimerValue);
