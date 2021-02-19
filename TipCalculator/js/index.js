const form = document.querySelector('#message-form'); 
form.addEventListener('submit', function(e){
    e.preventDefault();
    const errorC = document.querySelector('#error-cont');
    const cantidad = document.querySelector('#cantidad');
    const usuarios = document.querySelector('#usuarios');
    const servicios = document.querySelector('#servicio');
    const resultProp = document.querySelector('#result-prop');
    const resultTot = document.querySelector('#result-total');
    const resultPers = document.querySelector('#result-person');
    const price = document.querySelector('#price');
    const people = document.querySelector('#people');
    const form = document.querySelector('#select-form');
    const loader = document.querySelector('#loader');

        if (price.value === '') {
            errorC.classList.add('show');
            cantidad.textContent = "La cantidad no puede estar vacia";
        } else {
            cantidad.textContent = "";
        }

        if (people.value === '') {
            errorC.classList.add('show');
            usuarios.textContent = "Cantidad de usuarios debe ser mayor a cero";
        }  else {
            usuarios.textContent = "";
        }

        if (form.value == 0) {
            errorC.classList.add('show');
            servicios.textContent = "Por favor seleccione un servicio";
        } else {
            servicios.textContent = "";
        }
        
        if (price.value != '' && people.value != '' && form.value != 0) {
            errorC.classList.remove('show');
            let percentTip = '';
            if (form.value == 20) {
                percentTip = 0.2;
            } else if (form.value == 10) {
                percentTip = 0.1;
            } else {
                percentTip = 0.02;
            }
            const tip = Number(price.value)*percentTip;
            const total = Number(price.value) + Number(tip);
            const div = Number(total) / Number(people.value);
            const tt = document.querySelector('#tt');
            tt.classList.add('hiden');
            loader.classList.remove('hiden');
            setTimeout(function() {
                loader.classList.add('hiden');
                tt.classList.remove('hiden');
                resultProp.textContent = `${tip.toFixed(2)}`;
                resultTot.textContent = `${total.toFixed(2)}`;
                resultPers.textContent = `${div.toFixed(2)}`;
            
            },2000);
            price.value = "";
            people.value = "";
            form.value = 0;
        } 
})
