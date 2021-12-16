
//Fixar så man kan byta mellan beställningar och Editering i admin header
let editDiv = document.querySelector('#editDiv');
let bessDiv = document.querySelector('#bessDiv');
let wellDiv = document.querySelector('#wellDiv');

document.querySelector('#bessBtn').addEventListener('click', () => {
  bessDiv.style.display = 'block';
  editDiv.style.display = 'none';
  wellDiv.style.display = 'none';
});

document.querySelector('#edtiBtn').addEventListener('click', () => {
  editDiv.style.display = 'block';
  bessDiv.style.display = 'none';
  wellDiv.style.display = 'none';
});

//Fixar så man kan byta mellan returer eller beställning i "beställningar"
let retDiv = document.querySelector('#returUnderDiv');
let bessUDiv = document.querySelector('#bessUnderDiv');

document.querySelector('#besUBTn').addEventListener('click', () => {
    retDiv.style.display = 'none';
    bessUDiv.style.display = 'table';
});

document.querySelector('#retUBTn').addEventListener('click', () => {
    bessUDiv.style.display = 'none';
    retDiv.style.display = 'table'; 
});
