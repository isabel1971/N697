async function criarProdutos(cd) {
    cd.preventDefault();

    (async () => {
    
    let NomeProduto = document.getElementById("Nome do Produto").value;
    let quantidade = document.getElementById("Quantidade").value;
    let perecivel = document.getElementById("Perecível").value;
    let dataValidade = document.getElementById("Data de Validade").value;
        
    const myNewObject = new Parse.Object('Produtos');

    myNewObject.set('Nome do Produto', NomeProdut);
    myNewObject.set('Quantidade', quantidade);
    myNewObject.set('Perecível', perecivel);
    myNewObject.set('Data de Validade', dataValidade);
    
    try {
        const result = await myNewObject.save();
 
        console.log('Produtos created', result);
        alert(
            "Produto cadastrado com sucesso!"
        );
    } catch (error) {
        console.error('Error while creating Doador: ', error);
        alert(
            "Erro. Não foi possível cadastrar o Produto."
        )
    }
    })();
}

async function lerDoador(ld) {
    ld.preventDefault();
 
    (async () => {
        const Produtos = Parse.Object.extend('Produtos');
        const query = new Parse.Query(Produtos);
        try {
            const results = await query.find();
            for (const object of results) {
                // Access the Parse Object attributes using the .GET method
                const NomeProduto = object.get('NomeProduto')
                const quantidade = object.get('quantidade')
                const perecivel = object.get('perecivel')
                const dataValidade = object.get('dataValidade')
                console.log(NomeProduto);
                console.log(quantidade);
                console.log(perecivel);
                console.log(dataValidade);

            }

         } catch (error) {
            console.error('Error while fetching Produtos', error);
        }
    })();
}

    async function atualizarProdutos(ad) {
    ad.preventDefault();

    (async () => {
        const query = new Parse.Query(Produtos);
        try {
            
            const object = await query.get('xKue915KBG');
            object.set('NomeProduto', 'A string');
            object.set('quantidade', 1);
            object.set('perecivel', true);
            object.set('dataValidade', new Date());
            try {
                const response = await object.save();
            
                console.log(response.get('NomeProduto'));
                console.log(response.get('quantidade'));
                console.log(response.get('perecivel'));
                console.log(response.get('dataValidade'));
                console.log(response.get('doacaoEspecie'));
                console.log(response.get('valorDoacao'));
                console.log('Produtos updated', response);
              } catch (error) {
                console.error('Error while updating Produtos', error);
                }
              } catch (error) {
                console.error('Error while retrieving object Produtos', error);
              }
    })();
}

    async function excluirProdutos(ed) {
    ed.preventDefault();

    (async () => {
    const query = new Parse.Query('Produtos');
    try {
 
        const object = await query.get('xKue915KBG');
        try {
          const response = await object.destroy();
          console.log('Deleted ParseObject', response);
        } catch (error) {
          console.error('Error while deleting ParseObject', error);
        }
      } catch (error) {
        console.error('Error while retrieving ParseObject', error);
      }
    })();
}