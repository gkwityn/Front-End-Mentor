const accordion = document.getElementsByClassName("accordion");

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        let selector = this.lastElementChild;
        if(panel.style.display === "block"){
            panel.style.display = "none";
            selector.src = "../assets/images/icon-plus.svg"
            
        }
        else{
            panel.style.display = "block";
            selector.src = "../assets/images/icon-minus.svg"
        }
    });
}

