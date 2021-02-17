let counter = 0;
const buttons = document.querySelectorAll('.counterBtn');


buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if (button.classList.contains('lower')){
            counter--;
        } else if (button.classList.contains('add')){
            counter++;
        }

        const counterText = document.querySelector('#counter');
        counterText.textContent = counter;

        if (counter < 0) {
            counterText.classList.remove('green');
            counterText.classList.remove('general');
            counterText.classList.add('red');
        } else if (counter > 0) {
            counterText.classList.remove('red');
            counterText.classList.remove('general');
            counterText.classList.add('green');
        } else {
            counterText.classList.add('general');
        }
    })
})


















