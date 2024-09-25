// Step-1: donate btn ar kaj //
document.getElementById('donate-btn')
    .addEventListener('click', function(event){
    event.preventDefault();

    const donateNumber = document.getElementById('donate-input').value;

    if (donateNumber>0) {
        const donation = document.getElementById('adding-donation').innerText;

        const addDonateNumber = parseFloat(donateNumber);

        const donationNumber = parseFloat(donation);
        const newBalance = donationNumber + addDonateNumber;
        
        document.getElementById('adding-donation').innerText = newBalance;  
    }
    else{
        alert('Donation fail, please try againg');
    } 
});

// Section-2
document.getElementById('donate-btn-2')
    .addEventListener('click', function(event){
    event.preventDefault();

    const donateNumber = document.getElementById('donate-input-2').value;

    if (donateNumber>0) {
        const donation = document.getElementById('adding-donation-2').innerText;

        const addDonateNumber = parseFloat(donateNumber);

        const donationNumber = parseFloat(donation);
        const newBalance = donationNumber + addDonateNumber;
        
        document.getElementById('adding-donation-2').innerText = newBalance;  
    }
    else{
        alert('Donation fail, please try againg');
    } 
});

// Section-3
document.getElementById('donate-btn-3')
    .addEventListener('click', function(event){
    event.preventDefault();

    const donateNumber = document.getElementById('donate-input-3').value;

    if (donateNumber>0) {
        const donation = document.getElementById('adding-donation-3').innerText;

        const addDonateNumber = parseFloat(donateNumber);

        const donationNumber = parseFloat(donation);
        const newBalance = donationNumber + addDonateNumber;
        
        document.getElementById('adding-donation-3').innerText = newBalance;  
    }
    else{
        alert('Donation fail, please try againg');
    } 
});
