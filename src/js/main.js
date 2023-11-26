// Seleção de elementos 
const multiplicationForm = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');

const multiplicationTitle = document.querySelector('#multiplication-title span')
const multiplicationTable = document.querySelector('.multiplication-operations');

//Funções 
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = " ";

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;

        const templeate = `<div class="row"> 
        <div class="operations">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser()

        const htmlTempleate = parser.parseFromString(templeate, "text/html")
        const row = htmlTempleate.querySelector(".row")

        multiplicationTable.appendChild(row);
    }
multiplicationTitle.innerHTML = number + " repetindo até o número " + multiplicatorNumber;
};


//Eventos 
multiplicationForm.addEventListener('submit', function(e){
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;
        createTable(multiplicationNumber, multiplicatorNumber);
    }

)