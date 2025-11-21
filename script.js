const display = document.getElementById('inp');
const buttons = document.querySelectorAll('.calculatorbox .btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.value;

        if(val === "AC") {
            display.value = '';
        } else if(val === "×") {
            display.value = display.value.slice(0,-1);
        } else if(val === "=") {
            try {
                display.value = new Function('return ' + display.value)();
            } catch {
                display.value = "Error";
                setTimeout(()=> display.value = '', 1000);
            }
        } else {
            display.value += val;
        }
    });
});

