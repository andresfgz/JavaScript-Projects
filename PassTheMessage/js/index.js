const form = document.querySelector('#message-form'); //select input
form.addEventListener('submit', function(e){
    e.preventDefault();

    const message = document.querySelector('#input-area');
    const messageContent = document.querySelector('#message');
    const errorMessage = document.querySelector('#feedback');

    if (message.value === '') {
        errorMessage.classList.add('show');
        setTimeout(function(){
            errorMessage.classList.remove('show')
        },3000);
    } else {
        messageContent.textContent = message.value;
        message.value = ''
    }
})