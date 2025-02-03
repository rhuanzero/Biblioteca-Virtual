# 📚 Biblioteca Virtual

Este projeto é uma aplicação web interativa para gerenciamento de livros em uma biblioteca virtual. Ele permite **cadastrar, visualizar, filtrar e excluir livros**, garantindo que os dados persistam no navegador.

🔗 **Repositório no GitHub:** [biblioteca-virtual](https://github.com/rhuanzero/biblioteca-virtual)

## 📋 Funcionalidades

- **Adicionar livros** preenchendo os seguintes campos:
  - **ISBN** (código numérico de 5 dígitos, sem repetição)
  - **Título, Autores e Editora** (mínimo de 4 caracteres)
  - **Ano de publicação** (entre 1970 e o ano atual)
  - **Área** (`Computação`, `Matemática`, `Física`, `Química`, `Biologia`, `Letras`)
- **Consultar livros** com exibição em dois formatos:
  - **Lista vertical** (um livro abaixo do outro)
  - **Blocos horizontais** (lado a lado)
- **Filtragem por área** (exibir somente livros de uma área específica).
- **Excluir livros**, com confirmação antes da remoção.
- **Persistência de dados** no `localStorage` para manter os livros salvos mesmo após o fechamento do navegador.

## 🛠️ Conceitos Utilizados

### 🔹 HTML
- Uso de **tabelas e divs** para organizar os livros em diferentes formatos.
- Formulário dinâmico para inclusão de novos livros.
- Implementação de **botões interativos (`<button>`)** para adicionar, excluir e alternar entre os modos de exibição.
- **Listas suspensas (`<select>`)** para seleção da área do livro.

### 🎨 CSS
- Estilização dos elementos com **Grid Layout** para estruturar os livros em listas e blocos.
- Efeito de **hover no menu** para destacar os itens ao passar o mouse.
- Ajuste de **padding, margin e flexbox** para melhor organização da interface.
- Botões estilizados com **ícones personalizados**.

### ⚡ JavaScript
- Manipulação do **DOM** para adicionar, excluir e listar livros dinamicamente.
- **Eventos (`addEventListener`)** para capturar ações do usuário.
- **Validação de formulários**, impedindo a inserção de dados inválidos.
- **Armazenamento no localStorage**, permitindo que os livros permaneçam cadastrados mesmo após recarregar a página.
- Uso de **`querySelector` e `forEach`** para capturar e manipular elementos da interface.
- Implementação de **filtros dinâmicos** para exibir apenas os livros de uma área específica.

## 📂 Estrutura do Projeto

📦 **biblioteca-virtual**  
📜 **index.html** → Estrutura da página e formulários de cadastro  
📜 **styles.css** → Estilos visuais e organização da interface  
📜 **script.js** → Lógica para cadastro, exibição, filtros e persistência dos livros  

## 🖥️ Como Executar

1. Clone o repositório:  
   ```sh
   git clone https://github.com/rhuanzero/biblioteca-virtual.git

2. Acesse a pasta do projeto:
   ```sh
    cd biblioteca-virtual
  
3. Abra o arquivo index.html no navegador.

