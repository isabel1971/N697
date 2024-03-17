// Create a new User
async function criarComunidade(e) {
    e.preventDefault();
    alert('CHAMOU')

    try {
        let comunidade = new Parse.Object("Comunidade");

        let nomeComunidade = document.getElementById("txtNomeComunidade").value;
        let enderecoComunidade = document.getElementById("txtEnderecoComunidade").value;
        let emailComunidade = document.getElementById("txtEmailComunidade").value;
        let celularComunidade = document.getElementById("txtCelularComunidade").value;

        comunidade.set("nome", nomeComunidade); //nome é o Nome da Coluna na tabela do Backend4Apps
        comunidade.set("endereco", enderecoComunidade);
        comunidade.set("email", emailComunidade);
        comunidade.set("celular", celularComunidade);


        comunidade = await comunidade.save();
        if (comunidade !== null) {
            alert(
                `Nova comunidade cadastrada com sucesso! ComunidadeId: ${comunidade.id}, ${comunidade.get("nome")}`
            );
        }
    } catch (error) {
        alert(`Erro: ${error.message}`);
    }
}