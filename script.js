let names=document.querySelector('.name')
let msg=document.querySelector('#msg')
let password=document.querySelector('.password ')
let email=document.querySelector('.email')
let button=document.querySelector('#btn')
let right=document.querySelector('#right')
let msg1=document.querySelector('#msg1')
let right1=document.querySelector('#right1')
let right2=document.querySelector('#right2')


let msg2=document.querySelector('#msg2')
function isUsernameIsValid() {
  let nameLength = names.value.trim().length
  let usernameReg = /^[A-Z][a-z0-9_-]{5,19}$/
  if (nameLength === 0) {
    msg.innerHTML = 'User Name cannot be blank'
    msg.style.color = 'red'
    right.className = 'fa-solid fa-circle-exclamation'
    right.style.color = 'red'
  }
  else if (!usernameReg.test(names.value.trim())) {
    msg.innerHTML = 'User Name must at least 6 symbols and begin with uppercase'
    msg.style.color = 'red'
    right.className = 'fa-solid fa-circle-exclamation'
    right.style.color = 'red'
  }
  else {
    msg.innerHTML = 'User Name is valid'
    msg.style.color = 'rgb(5, 88, 5)'
    right.className = 'fa-solid fa-circle-check'
    right.style.color = 'rgb(5, 88, 5)'
  }
}

function isPasswordValid() {
  let passwordLength = password.value.trim().length
  let passwordReg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,10}$/
  if (passwordLength === 0) {
    msg1.innerHTML = 'Password cannot be blank'
    msg1.style.color = 'red'
    right1.className = 'fa-solid fa-circle-exclamation'
    right1.style.color = 'red'
  } else if (!passwordReg.test(password.value.trim())) {
    msg1.innerHTML = 'Password must be min 6, max 10 characters,<br>at least 1 uppercase, 1 lowercase , 1 number and a special character'
    right1.className = 'fa-solid fa-circle-exclamation'
    right1.style.color = 'red'
  } else {
    msg1.innerHTML = 'Password is valid'
    msg1.style.color = 'rgb(5, 88, 5)'
    right1.className = 'fa-solid fa-circle-check'
    right1.style.color = 'rgb(5, 88, 5)'
  }
}
function isEmailValid() {
  let emailLength = email.value.trim().length
  let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  if (emailLength === 0) {
    msg2.innerHTML = 'Email Adrress cannot be blank'
    msg2.style.color = 'red'
    right2.className = 'fa-solid fa-circle-exclamation'
    right2.style.color = 'red'
  } else if (!emailReg.test(email.value.trim())) {
    msg2.innerHTML = 'Enter a valid Email Address'
    msg2.style.color = 'red'
    right2.className = 'fa-solid fa-circle-exclamation'
    right2.style.color = 'red'
  } else {
    msg2.innerHTML = 'Email Address is valid'
    msg2.style.color = 'rgb(5, 88, 5)'
    right2.className = 'fa-solid fa-circle-check'
    right2.style.color = 'rgb(5, 88, 5)'
  }
}

button.addEventListener('click',isUsernameIsValid);
button.addEventListener('click',isPasswordValid);
button.addEventListener('click',isEmailValid);