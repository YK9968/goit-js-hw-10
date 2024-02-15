import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const date = new Date();
let userSelectedDate = selectedDates[0];
const startBtn = document.querySelector('button');

const fp = flatpickr('#datetime-picker', {
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
    }
  },
});
