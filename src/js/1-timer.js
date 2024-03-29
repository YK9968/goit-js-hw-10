import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../img/error.svg';
// ====================================================================================^ import ^
let userSelectedDate;
let changeDateValue;
const inputValueTimer = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataValueDays = document.querySelector('span[data-days]');
const dataValueHours = document.querySelector('span[data-hours]');
const dataValueMinutes = document.querySelector('span[data-minutes]');
const dataValueSeconds = document.querySelector('span[data-seconds]');
// ===================================================================================== ^ variables ^
startBtn.setAttribute('disabled', '');
startBtn.classList.add('disabled-btn');
inputValueTimer.classList.add('input-check');
// ================================================================================ ^ defolt view items ^
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.show({
        iconUrl: cross,
        title: 'Error',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        message: 'Please choose a date in the future',
        backgroundColor: '#EF4040',
        position: 'topRight',
        titleSize: 16,
        messageSize: 16,
        maxWidth: 902,
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
    }
  },
};

const fp = flatpickr('#datetime-picker', options);
// ========================================================= ^ check past/future time + library flatpickr ^

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
// =====================================================================================^ convert ms ^

function addLeadingZero(value) {
  if (value < 10) {
    return String(value).padStart(2, '0');
  } else {
    return value;
  }
}
// ==================================================================================== ^ update value ^

function updateTimerValue() {
  const delta = userSelectedDate - Date.now();
  if (delta <= 0) {
    clearInterval(changeDateValue);
    return;
  }
  startBtn.classList.add('disabled-btn');
  startBtn.classList.remove('active-btn');
  startBtn.setAttribute('disabled', '');
  inputValueTimer.setAttribute('disabled', '');
  inputValueTimer.classList.remove('input-check');

  const { days, hours, minutes, seconds } = convertMs(delta);

  dataValueDays.textContent = addLeadingZero(days);
  dataValueHours.textContent = addLeadingZero(hours);
  dataValueMinutes.textContent = addLeadingZero(minutes);
  dataValueSeconds.textContent = addLeadingZero(seconds);
}
// ====================================================== ^ change timer value + change defolt view items ^
startBtn.addEventListener('click', handleStartUpdateTimerValue);

function handleStartUpdateTimerValue() {
  updateTimerValue();
  changeDateValue = setInterval(updateTimerValue, 1000);
}
// ============================================================================= ^ start timer ^
