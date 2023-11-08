

let inpEL = document.querySelector('input');
let btns = document.querySelectorAll('button');


for(let button of btns){
    button.addEventListener('click' , function(event){
        let btnText = event.target.innerText;
        // console.log(btnText);
        if(btnText === 'AC'){
            inpEL.value = "";
        }
        else if(btnText === '='){
            try{  //  saahi kaam ->

                inpEL.value = eval(inpEL.value);
            }
            catch(event){  // error
                inpEL.value = "invalid";
            }
        }
        else{
            inpEL.value += btnText;
        }
    })
}





















