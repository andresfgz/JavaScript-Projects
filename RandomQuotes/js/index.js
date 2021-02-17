const btn = document.querySelector('#btn');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

const quotes = ["La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco." , 
"Nunca se alcanza la verdad total, ni nunca se está totalmente alejado de ella", "Lo sabio es la meta del alma humana y, a medida que se avanza en sus conocimientos, va alejando a su vez el horizonte de lo desconocido." ,
"Los muertos son los únicos que ven el final de la guerra.", "Enseñar no es una función vital, porque no tienen el fin en sí misma; la función vital es aprender.",];

const authors = ["Aristóteles" , "Platón" , "Democrito", "Socrates", "Aristoteles"];

btn.addEventListener('click', function() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomQuote];
    author.textContent = authors[randomQuote];
   
})