
import monkeys from './monkeys.js';

console.log(monkeys);

let divClassMonkeys=document.querySelector('div.monkeys');

 let promise=fetch(`./template..hbs`);

 promise
.then(res=>res.text())
.then(data=>{

    let createTemplate=Handlebars.compile(data);

    divClassMonkeys.innerHTML=createTemplate({monkeys});

    let buttonsAll=document.querySelectorAll('button');

    let buttons=Array.from(buttonsAll);

    buttons.forEach(button=>{
        button.addEventListener('click',function (event){

            let details=event.target.parentElement.querySelector('p');

           details.style.display='block';

        });

    });

})