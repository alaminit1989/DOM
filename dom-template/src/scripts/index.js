import {getId, qryS, crElement} from './helps'

let title = getId('title')
let jumbotron = qryS('.jumbotron')
let intervalid

let arr = [
    {title: title.innerHTML.trim(), backround: '#6D7B8D'},
    {title: 'Md. Al-Amin', backround: '#4CC417'}
]

jumbotron.addEventListener('mouseenter', function(){
    clearInterval(intervalid)
})

jumbotron.addEventListener('mouseleave', function() {
    intervalid = start()
})

let flag = true
intervalid = start()

function start() {
    let intervalid = setInterval(() => {

        if(flag){
            title.innerHTML = arr[0].title
            flag = false
            jumbotron.style.background = arr[0].backround            
        }
        else{
            title.innerHTML = arr[1].title
            flag = true
            jumbotron.style.background = arr[1].backround           
        }
    
    }, 1000);

    return intervalid
}

let login = getId('btnlogin')
login.addEventListener('click', handler)

let signout = getId('btnSignout')
signout.addEventListener('click', handler)

function handler (e) {
    alert(`${this.innerHTML.trim()} successcully`)
}

