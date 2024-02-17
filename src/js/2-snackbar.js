import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// зробити слухача на кнопці
// після натискання на кнопку створюється функція з новим промісом у фун-цію додати заборону перевантаження
//в середині проміса повинна бути тімесет к затримкою яку вкаже в інтупі
//щоб отримати цю затримку треба витягнути value з інпута(або слухачем або просто інпут валує)
//після того як час сплине потрібно визначити if radio кнопка = fullfield то ресолве "" якщо ні рейект = ""  можна тернарником
//після виводиться сповіщення що обрали + або - у параметри ресолве і реект додати бібліотеку з потрібними налаштуваннями
//
//
//

const startBtn = document.querySelector('button');
const formEl = document.querySelector('.form');
const inputValue = formEl.elements.delay;

formEl.addEventListener('submit', handleShowPromise);

function handleShowPromise(event) {
  event.preventDefault();
  const delayValue = inputValue.value;
  setTimeout(() => {
    const promise = new Promise((res, rej) => {
      if (formEl.elements.state.value === 'fulfilled') {
        res(
          iziToast.success({
            message: `✅ Fulfilled promise in ${delayValue}ms`,
          })
        );
      } else {
        rej(
          iziToast.error({
            message: `❌ Rejected promise in ${delayValue}ms`,
          })
        );
      }
    });
  }, delayValue);
 
}
