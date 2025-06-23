        function toggleAnswer(element) {
        const answer = element.nextElementSibling;
        const icon = element.querySelector(".icon");
        console.log(answer);
        
            
        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.src = "./assets/images/icon-plus.svg";
        } else {
            answer.style.display = "block";
            icon.src = "./assets/images/icon-minus.svg";
        }
        }
