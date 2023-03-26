const generateEl = document.getElementById('btn-generate');
const result = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbEl = document.getElementById('numb');
const symbolEl = document.getElementById('symbol');

generateEl.addEventListener('click', (e) => {
  e.preventDefault();
 
  const length = +lengthEl.value > 20 ? 20 : +lengthEl.value;
  const hasUpper = upperEl.checked
  const hasLower = lowerEl.checked
  const hasNumber = numbEl.checked
  const hasSymbol = symbolEl.checked

  result.innerText =  generatePassword(hasUpper,hasLower,hasNumber, hasSymbol,length) 
 })

const generatePassword = (upper,lower, number,symbol,length) => {
  let password = '';

  const generators = [
    upper? getRandomUpper : null,
    lower? getRandomLower : null,
    number? getRandomNumber : null,
    symbol? getRandomSymbol : null
  ].filter(item => item !== null);
 
  if(generators.length === 0) {
    return '';
  }

  for(let i= 0; i < length; i += generators.length ) {
    generators.forEach(() => {
      const randomFunc = generators[Math.floor(Math.random() * generators.length)]();      

      password += randomFunc;
    }) 
  }

  const finalPassword = password.slice(0, length);

  return finalPassword
}

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10)  + 48);
}
const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26)  + 65);
}
const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26)  + 97);
}
const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}