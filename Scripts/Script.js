async function registraNomeUsuario(nome, email) {

    console.log('enviando para o backend:', nome, email);

    try {
        const resposta = await fetch('http://localhost:3000/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: nome,
                Email: email
            })
        })

        const dados = await resposta.json();

        if (!resposta.ok) {
            console.error('Erro do servidor:', dados.error);
            alert('Erro ao registrar ', dados.error)
        } else {
            console.log('Resposta do servidor: ', dados);
            alert('Usuário' + nome + 'registrado com sucesso!, ID: ' + dados.userid)
        }
    }
    catch (error) {
        console.error("Erro de conexão: ", error);
        alert('Não foi possivel conectar ao servidor, verifique se o backend esta rodando corretamente')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('registro-form');

    if (formRegistro) {
        formRegistro.addEventListener('submit', (event) => {

            event.preventDefault();
            
            console.log('Formulário preenchido! Enviando dados...');

            const inputNome = document.getElementById('nome-input');
            const inputEmail = document.getElementById('email-input');

            registraNomeUsuario(inputNome.value, inputEmail.value)
        })
    }
})