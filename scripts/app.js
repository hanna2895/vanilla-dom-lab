const container = document.querySelector('#container');

console.log(container);

const secondImg = document.querySelector('#second-img');
console.log(secondImg);

const infoElements = document.querySelectorAll(".info")

console.log(infoElements);

const firstP = document.querySelector('p');

firstP.innerHTML = '<strong>Jamboree sandwich at the Jambo-ree</strong>';

const newDiv = document.createElement('div');

console.log(newDiv);

document.body.appendChild(newDiv)

const firstSec = document.querySelector('section');

const someP = document.createElement('p');

firstSec.appendChild(someP);

const newImg = document.createElement('img');

newImg.src = "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/10/terrier-puppy.jpg?itok=rIgh3ArV&fc=50,50"

document.body.appendChild(newImg);

const newSection = document.createElement('section');

newSection.id = "butterfly";

document.body.appendChild(newSection)

const sectionClasses = firstSec.classList;

firstSec.classList.add('wdi-remote-gizmo')

sectionClasses.contains('wdi-remote-gizmo');

sectionClasses.remove('wdi-remote-gizmo');

newImg.style.height = '376px';
newImg.style.width = '500px';
newImg.style.margin = '20px 0px 0px 0px';