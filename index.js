// Obter o elemento do botão de fazer requisição pelo ID
const button = document.getElementById("button");

// Obter o elemento do botão de listar pessoas pelo ID
const buttonList = document.getElementById("button-people");

// Função assíncrona para fazer requisições a três URLs diferentes
async function request() {
	// URLs para as requisições
	const url = "https://jsonplaceholder.typicode.com/todos/1";
	const url2 = "https://jsonplaceholder.typicode.com/todos/2";
	const url3 = "https://jsonplaceholder.typicode.com/todos/3";

	// Fazendo requisição para a primeira URL
	await axios.get(url).then(function (response) {
		console.log(response.data);
	});

	// Fazendo requisição para a segunda URL
	await axios.get(url2).then(function (response) {
		console.log(response.data);
	});

	// Fazendo requisição para a terceira URL
	await axios.get(url3).then(function (response) {
		console.log(response.data);
	});
}

// Obter o elemento que vai armazenar a lista de pessoas pelo ID
const peopleList = document.getElementById("people-list");

// Função assíncrona para obter informações de pessoas e adicioná-las à lista
async function getPeople() {
	peopleList.innerHTML = [""]
	// Iterando sobre os IDs das pessoas de 1 a 9
	for (let i = 1; i < 10; i++) {
		// Criando elementos HTML para cada pessoa
		const person = document.createElement("li");
		const namePerson = document.createElement("h2");
		const emailPerson = document.createElement("span");

		// URL da API para obter informações de uma pessoa específica
		const url = `https://jsonplaceholder.typicode.com/users/${i}`;

		// Fazendo uma requisição para obter as informações da pessoa
		await axios.get(url).then(function (personData) {
			// Extraindo o nome e o email da pessoa dos dados da resposta
			const { name, email } = personData.data;

			// Definindo o texto dos elementos HTML com o nome e o email da pessoa
			namePerson.textContent = name;
			emailPerson.textContent = email;

			// Adicionando os elementos de nome e email à lista de pessoas
			person.appendChild(namePerson);
			person.appendChild(emailPerson);

			// Adicionando a pessoa à lista de pessoas no HTML
			peopleList.appendChild(person);
		});
	}
}
