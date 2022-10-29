let screen = document.getElementsByClassName('input');
buttons = document.querySelectorAll('button');
let screenval = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerHTML;
        console.log(buttonText);
        if(buttonText == 'X'){
            buttonText = '*';
        screenval += buttonText;
        screen.value = screenval;
        }
        else if(buttonText == '='){
            screen.value = eval(screenval);
        }
        else{
            screenval += buttonText;
            screen.value = screenval;
        }
        
    })
}