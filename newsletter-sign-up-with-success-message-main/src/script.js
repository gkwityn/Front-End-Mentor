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

        const checkImg = document.createElement('img');
        const thanksH1 = document.createElement('h1');
        const infoPara = document.createElement('p');
        const dismissButton = document.createElement('button');

        card.style = 
            `width: 50%;
            height: 50%;
            max-width:275px;
            max-height:275px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            padding: 1.75rem;
            `;
        checkImg.style = 
            `width: 2.5rem;`;
        thanksH1.style = 
            `font-size: 2rem;`;
        infoPara.style =
            `font-size: 0.75rem;
             font-weight: 400`;
        dismissButton.style =
            `height: 2rem;
            font-size: 0.75rem;
            font-weight: 400`;

        checkImg.src = "../assets/images/icon-success.svg";
        thanksH1.innerText = "Thanks for subscribing!";
        infoPara.innerText = `A confirmation email has been sent to ${inputText}. Please open it and click the button inside to confir your subscription.`;
        dismissButton.innerText = "Dismiss message";

        card.appendChild(checkImg);
        card.appendChild(thanksH1);
        card.appendChild(infoPara);
        card.appendChild(dismissButton);
        // button:hover{
        //     background: linear-gradient(45deg, hsl(344, 96%, 65%), hsl(23, 96%, 65%));
        //     cursor: pointer;
        // }
           
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
