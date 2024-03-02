// Obter o elemento do botão de listar pessoas pelo ID
const buttonList = document.getElementById("button-people");

// Obter o elemento que vai armazenar a lista de pessoas pelo ID
const peopleList = document.getElementById("people-list");

// Função assíncrona para obter informações de pessoas e adicioná-las à lista
async function getPeople() {
  peopleList.innerHTML = [""];
  // Iterando sobre os IDs das pessoas de 1 a 9
  for (let i = 1; i < 10; i++) {
    // Criando elementos HTML para cada pessoa
    const person = document.createElement("li");
    const imagePerson = document.createElement("img");
    const namePerson = document.createElement("h2");
    const emailPerson = document.createElement("span");

    // URL da API para obter informações de uma pessoa específica
    const url = `https://jsonplaceholder.typicode.com/users/${i}`;
    const url2 = `https://api.waifu.pics/sfw/happy`;

    // Fazendo uma requisição para obter a imagem da pessoa
    await axios.get(url2).then(function (response) {
      const imageurl = response.data.url;

      imagePerson.setAttribute("src", imageurl);
    });

    // Fazendo uma requisição para obter as informações da pessoa
    await axios.get(url).then(function (personData) {
      // Extraindo o nome e o email da pessoa dos dados da resposta
      const { name, email } = personData.data;

      // Definindo o texto dos elementos HTML com o nome e o email da pessoa
      namePerson.textContent = name;
      emailPerson.textContent = email;

      // Adicionando os elementos de nome e email à lista de pessoas
      person.appendChild(imagePerson);
      person.appendChild(namePerson);
      person.appendChild(emailPerson);

      // Adicionando a pessoa à lista de pessoas no HTML
      peopleList.appendChild(person);
    });
  }
}
