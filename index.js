const p = document.getElementsByClassName("p");
const nav = document.getElementById("nav")
const blue = document.getElementById("close")
const right = document.getElementById("right")
const left = document.getElementById("left")
const search = document.getElementById("search")


const handleBlueClick = ()=>{
    for(let i of p){
        i.classList.add('hidden')
    }
    nav.classList.add('width')
    left.classList.add('hidden')
    right.classList.remove('hidden')
    search.classList.add('search-icon')
}
const handleRightClick = ()=>{
    for(let i of p){
        i.classList.remove('hidden')
    }
    nav.classList.remove('width')
    left.classList.remove('hidden')
    right.classList.add('hidden')
    search.classList.remove('search-icon')
}

left.addEventListener('click', handleBlueClick);
right.addEventListener('click' , handleRightClick);
search.addEventListener('click' , handleRightClick)



