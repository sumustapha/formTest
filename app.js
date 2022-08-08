const formSubmit = document.querySelector('#form')
const password = document.querySelector('#password')
const confirmp = document.querySelector('#confirm')
const error = document.querySelector('.error')


formSubmit.addEventListener('submit',(e)=>{
    e.preventDefault()
    checkPassword()
})

function checkPassword(){
    const passwordValue = password.value.trim()
    const confirmpValue = confirmp.value.trim()

    if((passwordValue || confirmpValue)===""){
        error.style.display = "block"
        error.innerText = "Password cannot be empty"
        password.className = 'errors'
        confirmp.className = 'errors'
    }
    else if(passwordValue!==confirmpValue){
        error.style.display = "block"
        error.innerText = "Password does not match"
        password.className = 'errors'
        confirmp.className = 'errors'
    }
    else{
        error.style.display = "none"
        error.innerText = ""
        password.className = ''
        confirmp.className = ''
    }

}