import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let changeDateValue;
const inputValueTimer = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataValueDays = document.querySelector('span[data-days]');
const dataValueHours = document.querySelector('span[data-hours]');
const dataValueMinutes = document.querySelector('span[data-minutes]');
const dataValueSeconds = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', '');
startBtn.classList.add('disabled-btn');
inputValueTimer.classList.add('input-check');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.error({
        iconUrl: '../img/x-octagon.svg',
        title: 'Error',
        titleColor: '#ffffff',
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        backgroundColor: '#EF4040',
        position: 'topRight',
        maxWidth: 902,
        titleSize: 16,
        messageSize: 16,
        close: false,
      });
      startBtn.classList.add('disabled-btn');
      startBtn.classList.remove('active-btn');
      startBtn.setAttribute('disabled', '');
    } else {
      startBtn.removeAttribute('disabled');
      inputValueTimer.classList.add('input-disabled');
      startBtn.classList.add('active-btn');
      startBtn.classList.remove('disabled-btn');
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
  const delta = userSelectedDate - Date.now();
  if (delta <= 0) {
    clearInterval(changeDateValue);
    return;
  } else {
    startBtn.classList.add('disabled-btn');
    startBtn.classList.remove('active-btn');
    startBtn.setAttribute('disabled', '');
    inputValueTimer.setAttribute('disabled', '');
    inputValueTimer.classList.remove('input-check');
  }
  const { days, hours, minutes, seconds } = convertMs(delta);

  dataValueDays.textContent = addLeadingZero(days);
  dataValueHours.textContent = addLeadingZero(hours);
  dataValueMinutes.textContent = addLeadingZero(minutes);
  dataValueSeconds.textContent = addLeadingZero(seconds);
}

startBtn.addEventListener('click', startUpdateTimerValue);

function startUpdateTimerValue() {
  changeDateValue = setInterval(updateTimerValue, 1000);
}
