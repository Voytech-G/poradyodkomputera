const clean = document.querySelector('.clean');
const addRada = document.querySelector('.add');
const showAdvice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions')
const add = document.querySelector('.add');
const advices = [];
const cleanArray = (e) => {
  e.preventDefault();
  advices = [];
  input.value = "";
}
const addToArray = (e) => {
  e.preventDefault();
  const input = document.querySelector('input');
  const advice = input.value;
  advices.push(advice);
  input.value = "";
}
const showAdvices = () => {
  document.querySelector('h2').textContent = `${
    advices[Math.floor(Math.random() * advices.length)]
  }`;
}
const showAllOptions = () => {
  // document.querySelector('h2').textContent = `${advices}`;
  advices.forEach((rada, numer) => {
    // document.querySelector('h2').textContent += `${rada}, `;
    document.querySelector('h2').textContent += `${advices[numer]}, `;
  })
}
clean.addEventListener('click', cleanArray);
addRada.addEventListener('click', addToArray);
showAdvice.addEventListener('click', showAdvices);
showOptions.addEventListener('click', showAllOptions);
//strona sie odswieza automatycznie po kliknieciu przycisku, nalezy po wcisnieciu przycisku zastosowac metode event.preventDefault()