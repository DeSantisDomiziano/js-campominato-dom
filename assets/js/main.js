const btn_el = document.getElementById('play')
const main_el = document.querySelector('.row.py-3')
const dif_easy = 100
const dif_medium = 81
const dif_hard = 49
const MAX_BOMBS = 16


function add_grid_cells() {
    const option_el = document.getElementById('difficulty').value
    if(option_el === 'easy') {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_easy; i++) {
            const square_el = `<div class="col dif_easy">safe</div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }

    } else if (option_el === 'medium') {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_medium; i++) {
            const square_el = `<div class="col dif_medium">safe</div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }        
    } else {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_hard; i++) {
            const square_el = `<div class="col dif_hard">safe</div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }
    }
}

function add_bombs() {
    const bombs_position_one = [];
    let squares = document.querySelectorAll('.row.py-3 > .col')        
        while( bombs_position_one.length < MAX_BOMBS) {
            const random_position = Math.floor(Math.random() * squares.length)
            const bombs_position = random_position
            const boms_decoration = squares[random_position].innerHTML = `<i class="fa-solid fa-bomb"></i>`
            if(!bombs_position_one.includes(random_position)) {
                bombs_position_one.push(bombs_position)
            }
        }
    
}

btn_el.addEventListener('click', function() {
    const bombs_position_one = [];
    add_grid_cells()
    add_bombs()
    
    let squares_el = document.querySelectorAll('.row.py-3 > .col')
    for(let i = 0; i < squares_el.length; i++) {   
        let single_square = squares_el[i]
        single_square.addEventListener('click', function() {
            console.log('CLICK')
            single_square.style.color = "white"
            if(bombs_position_one.includes(i)) {
                alert('hai perso')
            }
        })
    }
})