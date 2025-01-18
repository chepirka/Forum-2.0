const menu1 = document.querySelector('.menu1')
const menu2 = document.querySelector('.menu2')

const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')

const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')


const arrowFunction = (menu, button, content)=>{
    button.addEventListener('click', ()=>{
        if(content.classList.contains('hide')){
            content.classList.remove('hide')
        }else{
            content.classList.add('hide')
        }
    })
}
arrowFunction(menu1, button1, content1)
arrowFunction(menu2, button2, content2)