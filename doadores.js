async function criarDoador(cd) {
    cd.preventDefault();

    (async () => {
    const myNewObject = new Parse.Object('Doador');
    myNewObject.set('nome', 'A string');
    myNewObject.set('cpfCnpj', 1);
    myNewObject.set('endereco', 'A string');
    myNewObject.set('email', 'A string');
    myNewObject.set('telefone', 1);
    try {
        const result = await myNewObject.save();
 
        console.log('Doador created', result);
    } catch (error) {
        console.error('Error while creating Doador: ', error);
    }
    })();
}

async function lerDoador(ld) {
    ld.preventDefault();
 
    (async () => {
        const Doador = Parse.Object.extend('Doador');
        const query = new Parse.Query(Doador);
        try {
            const results = await query.find();
            for (const object of results) {
                // Access the Parse Object attributes using the .GET method
                const nome = object.get('nome')
                const cpfCnpj = object.get('cpfCnpj')
                const endereco = object.get('endereco')
                const email = object.get('email')
                const telefone = object.get('telefone')
                console.log(nome);
                console.log(cpfCnpj);
                console.log(endereco);
                console.log(email);
                console.log(telefone);
            }
        } catch (error) {
            console.error('Error while fetching Doador', error);
        }
    })();
}

    async function atualizarDoador(ad) {
    ad.preventDefault();

    (async () => {
        const query = new Parse.Query(Doador);
        try {
            
            const object = await query.get('xKue915KBG');
            object.set('nome', 'A string');
            object.set('cpfCnpj', 1);
            object.set('endereco', 'A string');
            object.set('email', 'A string');
            object.set('telefone', 1);
            try {
                const response = await object.save();
            
                console.log(response.get('nome'));
                console.log(response.get('cpfCnpj'));
                console.log(response.get('endereco'));
                console.log(response.get('email'));
                console.log(response.get('telefone'));
                console.log('Doador updated', response);
            } catch (error) {
                console.error('Error while updating Doador', error);
            }
        } catch (error) {
            console.error('Error while retrieving object Doador', error);
        }
    })();
}

    async function excluirDoador(ed) {
    ed.preventDefault();

    (async () => {
    const query = new Parse.Query('Doador');
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