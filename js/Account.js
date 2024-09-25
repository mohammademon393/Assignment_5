document.getElementById('donate-btn').addEventListener('click', function(event){

    event.preventDefault();
    
    const inputField = document.getElementById('donate-input').value;
   
    if(inputField >0){
        
        const blance = document.getElementById('My-account').innerText;
        
        const inputNumber = parseFloat(inputField);
        const balanceNumber = parseFloat(blance);
        const myBalance = balanceNumber - inputNumber;

        document.getElementById('My-account').innerText = myBalance;
    }
    
    else{
        alert('Donation fail, please try again');
    }
});
// step-1 end

// step-2 start
document.getElementById('donate-btn-2').addEventListener('click', function(event){
    event.preventDefault();
    
    const inputField = document.getElementById('donate-input-2').value;
   
    if(inputField >0){
        
        const blance = document.getElementById('My-account-2').innerText;
        
        const inputNumber = parseFloat(inputField);
        const balanceNumber = parseFloat(blance);
        const myBalance = balanceNumber - inputNumber;

        document.getElementById('My-account-2').innerText = myBalance;
    }
    
    else{
        alert('Donation fail, please try again');
    }
});
// step-2 end

// step- 3 start
document.getElementById('donate-btn-3').addEventListener('click', function(event){
    event.preventDefault();
    
    const inputField = document.getElementById('donate-input-3').value;
   
    if(inputField >0){
        
        const blance = document.getElementById('My-account-3').innerText;
        
        const inputNumber = parseFloat(inputField);
        const balanceNumber = parseFloat(blance);
        const myBalance = balanceNumber - inputNumber;

        document.getElementById('My-account-3').innerText = myBalance;
    }
    
    else{
        alert('Donation fail, please try again');
    }
});
// start-3 end


