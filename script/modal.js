const btnOpen = document.querySelector('.btnOpen')

function createModal(){
    const modalDiv = document.createElement("div");
    const modalForm = document.createElement("form");
    const btnClose = document.createElement("button");
    const h3 = document.createElement("h3");

    const divEmail = document.createElement("div")
    const divTel = document.createElement("div")
    const pEmailText = document.createElement("p");
    const pTelText = document.createElement("p");
    const pEmail = document.createElement("p");
    const pTel = document.createElement("p");
    const divEmailTel = document.createElement("div")

    btnClose.innerText = "закрыть";
    h3.innerText = 'Контактные данные:';
    pEmailText.innerText = 'Email:'
    pEmail.innerText = 'irinatassinari@gmail.com'
    pTelText.innerText = 'Номер телефона:'
    pTel.innerText = '+4915773717582'

    modalDiv.classList.add("modal");
    modalDiv.classList.add("active");
    modalForm.classList.add("modal_content");
    btnClose.classList.add("btnClose");
    btnOpen.classList.add("btnOpen");
    h3.classList.add('h3-modal')
    pEmailText.classList.add('pEmailText')
    pEmail.classList.add('pEmail')
    pTelText.classList.add('pTelText')
    pTel.classList.add('pTel')
    divEmail.classList.add('divEmail')
    divTel.classList.add('divTel')
    divEmailTel.classList.add('divEmailTel')
    
    divEmailTel.append(divEmail,divTel)

    divEmail.append(pEmailText,pEmail)
    divTel.append(pTelText,pTel)
    
    modalForm.append(btnClose,h3,divEmailTel);
    modalDiv.append(modalForm);
    document.body.append(modalDiv);

    btnClose.addEventListener('click', () => {
    modalDiv.remove();
  })

    modalDiv.addEventListener("click", (event) => {
    if (event.target === modalDiv) modalDiv.remove();
  });
}


btnOpen.addEventListener("click", () => {
  createModal();
});