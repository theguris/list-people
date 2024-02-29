1. **Obter a referência da lista no HTML:**
   Primeiro, vamos obter a referência do elemento `<ul>` onde queremos adicionar os itens da lista.

```javascript
const lista = document.getElementById("pessoas-lista");
```

2. **Limpar a lista existente (caso haja):** Vamos garantir que a lista esteja vazia antes de adicionarmos novos itens.

```javascript
lista.innerHTML = "";
```

3. **Iterar sobre o array de pessoas:** Vamos percorrer o array de pessoas utilizando um loop `forEach()`.

```javascript
pessoas.forEach((pessoa) => {
	// Etapas para cada pessoa serão adicionadas aqui
});
```

4. **Criar um elemento de lista para cada pessoa:** Vamos criar um elemento `<li>` para cada pessoa e adicionar suas informações.

```javascript
const itemLista = document.createElement("li");
itemLista.textContent = `${pessoa.nome} - ${pessoa.idade} anos`;
```

5. **Adicionar o item da lista à lista no HTML:** Vamos adicionar cada item da lista à lista no HTML.

```javascript
lista.appendChild(itemLista);
```
