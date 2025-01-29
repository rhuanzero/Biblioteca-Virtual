Biblioteca Virtual
Este projeto é uma aplicação front-end desenvolvida em HTML, CSS e JavaScript para administrar uma biblioteca virtual. Ele permite cadastrar, consultar e excluir livros, armazenando os dados no localStorage do navegador para persistência.

Funcionalidades:
Menu Interativo: O menu destaca os itens quando o cursor é posicionado sobre eles, invertendo a cor de fundo e a cor da fonte.
Cadastro de Livros: Formulário para incluir novos livros com validações:
ISBN: Número inteiro de 5 dígitos, único.
Título, Autores e Editora: Mínimo de 4 caracteres.
Ano: Entre 1970 e o ano atual.
Área: Seleção obrigatória entre "Computação", "Matemática", "Física", "Química", "Biologia" e "Letras".

Consulta de Livros:
Lista de livros pode ser exibida em formato de lista (um abaixo do outro) ou em blocos (um ao lado do outro).
Filtro por área para exibir livros específicos.

Exclusão de Livros:
Confirmação de exclusão com o título do livro na mensagem.
Exclusão efetiva após confirmação.

Persistência de Dados:
Os dados dos livros são armazenados no localStorage do navegador, garantindo que as informações não sejam perdidas ao fechar o navegador.

Tecnologias Utilizadas
HTML: Estrutura da página.
CSS: Estilização e layout (Grid Layout).
JavaScript: Lógica de programação e interação com o localStorage.


