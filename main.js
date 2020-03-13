const cardButton = document.querySelectorAll('button');

const modalInner = document.querySelector('.modal-inner');

const modalOuter = document.querySelector('.modal-outer');

function handleClick(event){
     // grab the card
    const button = event.target;
    const card = button.closest('.card')
    
    // grab img src
    const img = card.querySelector('img').src;

    // grab the desr
    const desc = card.dataset.description;

    // populate the modal
    modalInner.innerHTML = `
    <img width='400' height='400' src="${img}" alt="Wes Bos">
    <h2>${desc}</h2>
    `
    // show the modal
    modalOuter.classList.add('open')
    
}


 
cardButton.forEach( card => card.addEventListener('click', handleClick))

modalOuter.addEventListener('click',(event)=>{
     isClosed = !event.target.closest('.modal-inner');
      if(isClosed){
        modalOuter.classList.remove('open')
     }
})