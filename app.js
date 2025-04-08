document.addEventListener('DOMContentLoaded', () => {
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

    const submitButton = document.querySelector('.submitButton')
    console.log(submitButton)
    submitButton.addEventListener('click', () => {
        const FirstName = document.getElementById("pname").value;
        const LastName = document.getElementById("uname").value;
        const Select = document.getElementById("Assunto").value;
        const Message = document.getElementById("Mensagem").value;
        if(FirstName && LastName && Select !== "none"){
            submitButton.setAttribute('href', `mailto:uva@veigadealmeida.edu.br?subject=${FirstName} ${LastName} - ${Select}&body=Olá, meu nome é ${FirstName} ${LastName} e gostaria de falar sobre ${Select}. \n Mensagem: ${Message} `);
            submitButton.setAttribute('target', '_blank');
        } else {
            alert("Preencha todos os campos obrigatórios");
        }
    })

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
