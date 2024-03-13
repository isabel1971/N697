function toggleConditionalFields() {
    var donationType = document.getElementById("donationType").value;
    var conditionalFieldsDonation = document.querySelector(".conditionalFieldsDonation");
    var conditionalFieldsPix = document.querySelector(".conditionalFieldsPix");

    if (donationType === "sim") {
        conditionalFieldsDonation.style.display = "none";
        conditionalFieldsPix.style.display = "block";
    } else {
        conditionalFieldsDonation.style.display = "block";
        conditionalFieldsPix.style.display = "none";
    }
}

function submitForm() {
    var productName = document.getElementById("productName").value;
    var quantity = document.getElementById("quantity").value;
    var perishable = document.getElementById("perishable").value;
    var expirationDate = document.getElementById("expirationDate").value;
    var donationType = document.getElementById("donationType").value;
    var donationAmount = document.getElementById("donationAmount").value;

    console.log("Doação em Espécie: " + donationType);

    if (donationType === "sim") {
        console.log("Entraremos em contato para informar a chave Pix para realização de sua doação.");
        console.log("Valor da Doação: " + donationAmount);
    } else {
        console.log("Nome do Produto: " + productName);
        console.log("Quantidade: " + quantity);
        console.log("Perecível: " + perishable);
        console.log("Data de Validade: " + expirationDate);
    }
    
    // Coloque a lógica do Parse aqui, se necessário
}
