const buttonFi= document.querySelector('#first');
const buttonSe= document.querySelector('#second');
const buttonTh= document.querySelector('#third');
const buttonFo= document.querySelector('#four');

const contentFi= document.querySelector('#first-content');
const contentSe= document.querySelector('#second-content');
const contentTh= document.querySelector('#third-content');
const contentFo= document.querySelector('#forth-contentt');

const tabContent= document.querySelectorAll('.tabcontent');
const buttons = document.querySelectorAll('button');

console.log(tabContent);
console.log(buttons);


function openTab(id){
    for (let item of id){
        if (item != event.target){
            item.classList.remove('active');
        } 
    }
}

for(let i = 0; i <43; i++) {
    buttons[i].addEventListener('click', (event) => {
        openTab(tabContent)
        openTab(buttons)

        buttons[i].classList.add('active')
        tabContent[i].classList.add('active')
    });
}