let pizza = prompt("Welcome to Pizza Order \n Please Enter the Number to order: \n \n 1. Small Pizza (15$) \n 2. Medium Pizza (20$) \n 3. Large Pizza (25$) \n \n Please enter the size of pizza you want to order: ");


let pepperoni = prompt("Do you want to add pepperoni? :\n \n 1. Yes \n 2. No \n \n Please enter your choice: ");
let cheese = prompt("Do you want to add extra cheese? : \n \n 1. Yes \n 2. No \n \n Please enter your choice: ");

let totalpizza = prompt("Please enter the number of pizzas you want to order: ");
let bill;
if(pizza==1){
    if(pepperoni==1 && cheese==1){
        bill = (15 + 2 + 1) * totalpizza;
    }
    else if(pepperoni==1 && cheese==2){
        bill = (15 + 2) * totalpizza;
    }
    else if(pepperoni==2 && cheese==1){
        bill = (15 + 1) * totalpizza;
    }
    else if(pepperoni==2 && cheese==2){
        bill = 15 * totalpizza;
    }
    
}    
else if(pizza==2){
    if(pepperoni==1 && cheese==1){
        bill = (20 + 2 + 1) * totalpizza;
    }
    else if(pepperoni==1 && cheese==2){
        bill = (20 + 2) * totalpizza;
    }
    else if(pepperoni==2 && cheese==1){
        bill = (20 + 1) * totalpizza;
    }
    else if(pepperoni==2 && cheese==2){
        bill = 20 * totalpizza;
    }
    
}
else if(pizza==3){
    if(pepperoni==1 && cheese==1){
        bill = (25 + 2 + 1) * totalpizza;
    }
    else if(pepperoni==1 && cheese==2){
        bill = (25 + 2) * totalpizza;
    }
    else if(pepperoni==2 && cheese==1){
        bill = (25 + 1) * totalpizza;
    }
    else if(pepperoni==2 && cheese==2){
        bill = 25 * totalpizza;
    }
    
}
else{
    alert("Please enter a valid number!");
}
alert(`Thank You for choosing JS Pizza Deliveries\n \n Your Final Bill: ${bill}$`);
