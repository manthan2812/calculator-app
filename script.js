var buttonsList = document.getElementsByTagName('button');
var textArea = document.getElementById('text-box');

Array.from(buttonsList).forEach( button => {
    button.addEventListener('click', function() { 
        //evaluate expression
        if(button.value === '=') {
            textArea.innerHTML = eval(textArea.innerHTML);
        }
        //1/x button
        else if(button.value === '1/x') {
            textArea.innerHTML = 1 / eval(textArea.innerHTML);
        }
        //clear textarea(screen)
        else if(button.value === 'C') {
            textArea.innerHTML = '';
        }
        //remove last character/number
        else if(button.value === 'back-space') {
            textArea.innerHTML = textArea.innerHTML.slice(0, -1);
        }
        //show button value in screen
        else {
            textArea.innerHTML += button.value;
        }
    })
});

//adding keyboard key functionality to calc
document.addEventListener('keydown', function(e) {
    var values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];
    
    if(e.key === 'Enter') {
        textArea.innerHTML = eval(textArea.innerHTML);
    }
    else if(e.key === 'c' || e.key === 'C') {
        textArea.innerHTML = '';
    }
    else if(e.key === 'Backspace') {
        textArea.innerHTML = textArea.innerHTML.slice(0, -1);
    }
    else if( values.includes(e.key) ) {
        textArea.innerHTML += e.key;
    }

});

