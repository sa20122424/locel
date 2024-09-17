

let sozdat = document.querySelector('.sozdat')
let pokozat = document.querySelector('.pokozat')
let udalit = document.querySelector('.udalit')
let udalitVseKluchi = document.querySelector('.udalitVseKluchi')
let input = document.querySelector('#input')
let body = document.querySelector('body')
let h1 = document.createElement('h1')
let text = document.querySelector('.text')
let form = document.querySelector("form")

















function create() {

 
    let Namee = document.querySelector("#input")
    localStorage.setItem('name', Namee.value)
 
    let text = document.querySelector('.text')
    
    
    text.innerHTML = `<p>${Namee.value}</p>`   
}

// function show() {
//     let shows = prompt('Value Olib beradi ')

//     let db = localStorage.getItem(shows)

//     alert(db)

//     // let db = localStorage.getItem(shows)
//     // alert(db)
// }


// function deletes() {
//     let clear = prompt()

//     localStorage.removeItem(clear)
// }



// function clearAll() {
//     localStorage.clear()
// }
