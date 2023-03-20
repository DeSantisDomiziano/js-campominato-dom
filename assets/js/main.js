const btn_el = document.getElementById('play')
const main_el = document.querySelector('.row.py-3')
const dif_easy = 100
const dif_medium = 81
const dif_hard = 49
const bombs = 16

btn_el.addEventListener('click', function() {
    const option_el = document.getElementById('difficulty').value

    if(option_el === 'easy') {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_easy; i++) {
            const square_el = `<div class="col dif_easy"></div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }
        let squares = document.querySelectorAll('.row.py-3 > .col')
        console.log(squares);
        for(let i = 0; i < bombs; i++) {
            let random_position = Math.floor(Math.random() * squares.length)
            squares[random_position].innerHTML = `<i class="fa-solid fa-bomb"></i>`
        }
    } else if (option_el === 'medium') {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_medium; i++) {
            const square_el = `<div class="col dif_medium"></div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }        
    } else {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_hard; i++) {
            const square_el = `<div class="col dif_hard"></div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }
    }
    
    const squares_el = document.querySelectorAll('.row.py-3 > .col')
    for(let i = 0; i < squares_el.length; i++) {
        
        const single_square = squares_el[i]
        single_square.addEventListener('click', function() {
            single_square.classList.toggle('active')
        })
    }
})