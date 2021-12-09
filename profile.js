function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Success! Your form has been submitted.');
}



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('#color').addEventListener('click', ()=> alert("My favorite color is purple."))

document.querySelector('#place').addEventListener('click', ()=> alert("My favorite place is with my son & husband."))

document.querySelector('#ritual').addEventListener('click', ()=> alert("My favorite ritual is my morning coffee."))