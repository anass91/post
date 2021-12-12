const addComent = document.querySelector('.add-coment');
const viewComent = document.querySelector('.views-coment');
const inputValee = document.getElementById('coment-input');
const photoEffect = document.querySelector('.photo');
function addComentFn(){
    addComent.classList.add('class-visible');
    document.querySelector('.item-2').style.color = 'blue';
}
const createComent = document.createElement('p');
function viewComentFn(){
    
    viewComent.classList.add('class-visible');
    createComent.innerHTML = inputValee.value;
    createComent.classList.add('p-22')
    //document.getElementById('demo').innerHTML = inputValee.value;
    viewComent.appendChild(createComent);
   
}

function changeColor(){
    document.querySelector('.item-1').style.color = 'red';
    document.getElementById('herto').classList.add('class-anim');
    
}
function magicFn(){
    document.querySelector('.bi-emoji-wink-fill').classList.add('magic');
}

function addEfectBlue(){
    photoEffect.classList.remove('linear-2');
  photoEffect.classList.add('linear-1');
}
function addEfectBreen(){
    photoEffect.classList.remove('linear-1');
    photoEffect.classList.add('linear-2');
}
function addEfectB(){
    photoEffect.classList.remove('linear-1');
    photoEffect.classList.remove('linear-2');
    photoEffect.classList.add('linear-3');
}

function removeEffect(){
    photoEffect.classList.remove('linear-1');
    photoEffect.classList.remove('linear-2');
    photoEffect.classList.remove('linear-3');
}