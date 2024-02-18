import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// зробити слухача на форми
//у фун-цію додати заборону перевантаження. після натискання на кнопку створюється функція в середині проміса повинна бути тімесет к затримкою яку вкаже в інтупі в середены з новим промісом
//
//
//щоб отримати цю затримку треба витягнути value з інпута(або слухачем або просто інпут валує)
//після того як час сплине потрібно визначити if radio кнопка = fullfield то ресолве "" якщо ні рейект = ""  можна тернарником
//після виводиться сповіщення що обрали + або - у параметри ресолве і реект додати бібліотеку з потрібними налаштуваннями

const startBtn = document.querySelector('button');
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleShowPromise);

function handleShowPromise(evt) {
  evt.preventDefault();
  let delay = formEl.elements.delay.value;
  let radioValue = formEl.elements.state.value;
  function showPromise(time, value) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (value === 'fulfilled') {
          res(time);
        } else value === 'rejected';
        rej(time);
      }, delay);
      formEl.reset();
    });
  }
  showPromise(delay, radioValue)
    .then(positive => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${positive}ms`,
        title: 'OK',
        icon: '',
        backgroundColor: '#59A10D',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        close: false,
        position: 'topRight',
        titleSize: 16,
        messageSize: 16,
      });
    })
    .catch(negative => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${negative}ms`,
        icon: '',
        backgroundColor: '#EF4040',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        close: false,
        position: 'topRight',
        titleSize: 16,
        messageSize: 16,
      });
    });
}
