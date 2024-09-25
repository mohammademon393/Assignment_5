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

// if (newBalance + 100) {
//     const navBalance = document.getElementById('nav-balance').innerText;

//     const navBalanceNum = parseFloat(navBalance);
//     const abaiableBalance = navBalanceNum - addDonateNumber;
    
//     document.getElementById('nav-balance').innerText = abaiableBalance;

//     // const blogBtn = document.getElementById('Blog').value ;
//     // console.log('Added a blog file');
//     // window.location.href= '/Blog.html'
    
// }
// else{
//     alert('please try again');
// };

// document.getElementById('Blog').addEventListener('click', function(){
//     window.location.href ='/Blog.html'
//     console.log('collection blog page');
// });


