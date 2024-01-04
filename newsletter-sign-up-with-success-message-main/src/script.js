const card = document.getElementById("card");
const email = document.getElementById("email");
const validEmail = document.getElementById('valid-email-required');
const button = document.getElementById("submit-button");

function validateEmail(inputText){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.match(mailformat)){
        
        //Clear all card children to update success card.
        while(card.firstChild){
            card.removeChild(card.lastChild);
        }
        
        //Re-create card element for successful signup notification.
        const thanksWrapper = document.createElement("div");
        const checkImg = document.createElement('img');
        const thanksH1 = document.createElement('h1');
        const infoPara = document.createElement('p');
        const dismissButton = document.createElement('button');
    
        card.className = "card-success";
        thanksWrapper.className ="thanks-wrapper";

        checkImg.src = "../assets/images/icon-success.svg";
        thanksH1.innerText = "Thanks for subscribing!";
        infoPara.innerText = `A confirmation email has been sent to ${inputText}. Please open it and click the button inside to confir your subscription.`;
        dismissButton.innerText = "Dismiss message";

        thanksWrapper.appendChild(checkImg);
        thanksWrapper.appendChild(thanksH1);
        thanksWrapper.appendChild(infoPara);
        card.appendChild(thanksWrapper);
        card.appendChild(dismissButton);     
    }
    else{
        validEmail.style = `display: block;`;
        email.style= `color: var(--clr-tomato);
                      font-weight: 700;
                      border: 1px var(--clr-tomato) solid;                     
                      background: rgb(250, 94, 89, 0.1);`
    }
}


button.addEventListener("click", ()=> {

    let input = email.value;
    validateEmail(input);

    
});
