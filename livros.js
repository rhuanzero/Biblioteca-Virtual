document.addEventListener("DOMContentLoaded", () => { // main()

    let livros = JSON.parse(localStorage.getItem("livros")) || [];
    listarLivros();
    // Alternar entre seções "Incluir" e "Consultar"
    getId("incluirLivro").addEventListener("click", () => {
        getEl(".bodyIncluir").style.display = "block";
        getEl(".bodyConsultar").style.display = "none";
    });

    getId("consultarLivro").addEventListener("click", () => {
        getEl(".bodyIncluir").style.display = "none";
        getEl(".bodyConsultar").style.display = "block";

        // Atualiza a lista de livros na seção Consultar
        listarLivros();
    });

    // Evento para salvar o livro
    getId("salvar").addEventListener("click", () => {
        salvarLivro();
    });

        // Evento para filtrar livros por área
    getId("areaConsulta").addEventListener("change", () => {
        listarLivros(getId("areaConsulta").value);
    });


    function salvarLivro() {
        let isbn = getId("isbn").value.trim();
        let titulo = getId("titulo").value.trim();
        let autores = getId("autores").value.trim();
        let editora = getId("editora").value.trim();
        let ano = getId("ano").value;
        let area = getId("area").value;

        // Valida os dados
        if (validarDados({ isbn, titulo, autores, editora, ano, area })) {
            // Cria o objeto livro
            let livro = { isbn, titulo, autores, editora, ano, area };

            // Salva no Local Storage
            adicionarLivroAoStorage(livro);

            // Limpa os campos do formulário
            limparFormulario();

            alert("Livro salvo com sucesso!");
        }
    }

    function listarLivros(areaSelecionada = getEl("#areaConsulta").value) {
        let livros = JSON.parse(localStorage.getItem("livros")) || [];
        let livrosConsulta = document.querySelector(".livrosConsulta");
        let livrosConsulta2 = document.querySelector("#qtdlivros");
        let qtdLivros = 0;

        // Limpa a área de exibição
        livrosConsulta.innerHTML = "";


         // Filtra os livros pela área selecionada (se não for "todas")
        let livrosFiltrados = livros.filter(livro => 
            areaSelecionada === "todas" || livro.area === areaSelecionada
        );


         // Atualiza o contador de livros filtrados
        qtdLivros = livrosFiltrados.length;

        if(qtdLivros === 0){
            livrosConsulta2.innerHTML = `<h>Nenhum livro encontrado</h>`;
        }
        else{
            livrosConsulta2.innerHTML = `<h>${qtdLivros} livro(s) encontrado(s)</h>`;
        }

        // Cria a lista de livros
        livrosFiltrados.forEach((livro, index) => {
            let livroDiv = document.createElement("div");
            livroDiv.className = "livro";
            livroDiv.innerHTML = `
                <p>ISBN: ${livro.isbn}</p>
                <p>Título: ${livro.titulo}</p>
                <p>Autores: ${livro.autores}</p>
                <p>Editora: ${livro.editora}</p>
                <p>Ano: ${livro.ano}</p>
                <p>Área: ${livro.area}</p>
                <button class="btnExcluir" data-index="${index}">Excluir</button>
            `;
            livrosConsulta.appendChild(livroDiv);
        });

        // Adiciona eventos aos botões de excluir
        document.querySelectorAll(".btnExcluir").forEach((button) => {
            button.addEventListener("click", () => {
                removerLivro(button.getAttribute("data-index"));
            });
        });
    }

    function removerLivro(index) {
        // Recupera os livros existentes no Local Storage
        let livros = JSON.parse(localStorage.getItem("livros")) || []; 
        // Pega o título do livro que será excluído
        let titulo = livros[index].titulo;
    
        if(confirm(`Confirma a exclusão do livro "${titulo}"?`)) {
            // Remove o livro pelo índice
            livros.splice(index, 1);
    
            // Atualiza o Local Storage
            localStorage.setItem("livros", JSON.stringify(livros));
    
            // Atualiza a lista exibida
            listarLivros();

    
            alert("Livro excluído com sucesso!");
        } 
    }

    function validarDados({ isbn, titulo, autores, editora, ano, area }) {
        let valido = true;

        if(!validarISBN(isbn)){
            getId("valisbn").style.display = "none";
            getId("valisbn2").style.display = "inline";
            valido = false;
        }
        else if (isbn < 11111 || isbn > 99999) {
            getId("valisbn").style.display = "inline";
            getId("valisbn2").style.display = "none";
            valido = false;
        } else {
            getId("valisbn2").style.display = "none";
            getId("valisbn").style.display = "none";
        }

        if (titulo.length < 4) {
            getId("valtitulo").style.display = "inline";
            valido = false;
        } else {
            getId("valtitulo").style.display = "none";
        }

        if (autores.length < 4) {
            getId("valautores").style.display = "inline";
            valido = false;
        } else {
            getId("valautores").style.display = "none";
        }

        if (editora.length < 4) {
            getId("valeditora").style.display = "inline";
            valido = false;
        } else {
            getId("valeditora").style.display = "none";
        }

        if (ano >= new Date().getFullYear() || ano === "") {
            getId("valano").style.display = "inline";
            valido = false;
        } else {
            getId("valano").style.display = "none";
        }

        if (area === "") {
            getId("valarea").style.display = "inline";
            valido = false;
        } else {
            getId("valarea").style.display = "none";
        }

        return valido;
    }

    function adicionarLivroAoStorage(livro) {
        // Recupera os livros existentes no Local Storage
        let livros = JSON.parse(localStorage.getItem("livros")) || [];

        // Adiciona o novo livro ao array
        livros.push(livro);

        // Salva o array atualizado no Local Storage
        localStorage.setItem("livros", JSON.stringify(livros));
    }

    function limparFormulario() {
        getId("isbn").value = "";
        getId("titulo").value = "";
        getId("autores").value = "";
        getId("editora").value = "";
        getId("ano").value = "";
        getId("area").value = "";
    }

    function getId(elemento) {
        return document.getElementById(elemento);
    }

    function getEl(elemento) {
        return document.querySelector(elemento);
    }

    function validarISBN(isbnOrig){
        let livros = JSON.parse(localStorage.getItem("livros")) || [];
        for (let i = 0; i < livros.length; i++) {
            if (livros[i].isbn === isbnOrig) {
                return false; // ISBN duplicado encontrado
            }
        }
        return true;
    }
    
    getId("grid").addEventListener("click", () =>{
        document.querySelector(".livrosConsulta").style.display = "grid";

    });

    getId("list").addEventListener("click", () =>{
        document.querySelector(".livrosConsulta").style.display = "block";

    });



    

});
