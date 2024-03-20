async function minhaFuncaoSalvar(event) {
    event.preventDefault();

    (async () => {
        const Coleta = Parse.Object.extend('Coleta');
        const myNewObject = new Coleta();
        myNewObject.set('nome', 'A string');
        myNewObject.set('cpfCnpj', 'A string');
        myNewObject.set('tipoTransporte', [1, 'a string']);
        myNewObject.set('email', 'A string');
        myNewObject.set('telefone', 1);
        try {
            const result = await myNewObject.save();
            console.log('Coleta created', result);
        } catch (error) {
            console.error('Error while creating Coleta: ', error);
        }
    })();

    (async () => {
        const Coleta = Parse.Object.extend('Coleta');
        const query = new Parse.Query(Coleta);
        try {
            const results = await query.find();
            for (const object of results) {
                const nome = object.get('nome')
                const cpfCnpj = object.get('cpfCnpj')
                const tipoTransporte = object.get('tipoTransporte')
                const email = object.get('email')
                const telefone = object.get('telefone')
                console.log(nome);
                console.log(cpfCnpj);
                console.log(tipoTransporte);
                console.log(email);
                console.log(telefone);
            }
        } catch (error) {
            console.error('Error while fetching Coleta', error);
        }
    })();

    (async () => {
        const Coleta = Parse.Object.extend('Coleta');
        const query = new Parse.Query(Coleta);
        try {
            const object = await query.get('xKue915KBG');
            object.set('nome', 'A string');
            object.set('cpfCnpj', 'A string');
            object.set('tipoTransporte', [1, 'a string']);
            object.set('email', 'A string');
            object.set('telefone', 1);
            try {
                const response = await object.save();
                console.log(response.get('nome'));
                console.log(response.get('cpfCnpj'));
                console.log(response.get('tipoTransporte'));
                console.log(response.get('email'));
                console.log(response.get('telefone'));
                console.log('Coleta updated', response);
            } catch (error) {
                console.error('Error while updating Coleta', error);
            }
        } catch (error) {
            console.error('Error while retrieving object Coleta', error);
        }
    })();

    (async () => {
        const Coleta = Parse.Object.extend('Coleta');
        const query = new Parse.Query(Coleta);
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
