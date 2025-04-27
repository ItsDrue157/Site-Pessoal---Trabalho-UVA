document.addEventListener('DOMContentLoaded', () => {
    // NAVBAR Clicked
    const currentPage = window.location.pathname;
    const pages = document.getElementsByClassName('cabecalho-menu-link');
    for (const item of pages) {
        const pageHref = item.getAttribute('href');
        console.log(currentPage.endsWith(pageHref));
        if (currentPage.endsWith(pageHref)) {
            item.classList.add('active');
            console.log(item)
        } else if (currentPage === '') {
            window.location.assign('index.html');
        }
    }



        // formualrio de contato
        const submitButton = document.querySelector('.submitButton');submitButton.addEventListener('click', () => {
        const FirstName = document.getElementById("pname").value;
        const escolha_dev = document.getElementById("escolha_dev").value;
        const LastName = document.getElementById("uname").value;
        const Select = document.getElementById("Assunto").value;
        const Message = document.getElementById("Mensagem").value;
    
        // Mapeamento de destinatários
        const devEmails = {
            gabrielRamos: "gabriel.r.silva2806@gmail.com",
            gabrielFelix: "gabriel.barros@veigadealmeida.edu.br",
            carlos: "17573508700@veigadealmeida.edu.br",
            miguelLuis: "glluid12@gmail.com",
            joaoItalo: "joao.italo@example.com"
        };
    
        if (FirstName && LastName && Select !== "none" && escolha_dev !== "none") {
            const devEmail = devEmails[escolha_dev];
            if (devEmail) {
                submitButton.setAttribute('href', `mailto:${devEmail}?subject=${FirstName} ${LastName} - ${Select}&body=Olá, meu nome é ${FirstName} ${LastName} e gostaria de falar sobre ${Select}. \n Mensagem: ${Message}`);
                submitButton.setAttribute('target', '_blank');
            } else {
                alert("O destinatário selecionado não é válido.");
            }
        } else {
            alert("Preencha todos os campos obrigatórios");
        }
    });

    // função para contar os caracteres do textarea
    const textArea = document.getElementById("Mensagem");
    textArea.addEventListener("input", (e) => {
        const CharCount = document.getElementById("charCount");
        const value = e.target.value;
        const length = value.length;
        const maxLength = 500;
        CharCount.innerHTML = length + '/' + maxLength;
        console.log(length + '/' + maxLength);
        if(length == maxLength) {
            CharCount.style.color = "red";
        }
    })

});
