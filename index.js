const api = "http://localhost:5000";

// Cadastrar novo usuário
document.getElementById("formUsuario").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    await fetch(`${api}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email })
    });

    alert("Usuário cadastrado com sucesso!");
    e.target.reset();
});

// Cadastrar novo livro
document.getElementById("formLivro").addEventListener("submit", async (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const usuario_id = document.getElementById("usuario_id").value;

    await fetch(`${api}/livros`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, autor, usuario_id })
    });

    alert("Livro cadastrado com sucesso!");
    e.target.reset();
    listarLivros();
});

// Listar livros
async function listarLivros() {
    const resposta = await fetch(`${api}/livros`);
    const livros = await resposta.json();

    const lista = document.getElementById("listaLivros");
    lista.innerHTML = "";

    livros.forEach(livro => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card">
                <h5>${livro.titulo}</h5>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><small><strong>Dono:</strong> ${livro.usuario}</small></p>
                <button class="btn btn-danger btn-sm" onclick="deletarLivro(${livro.id})">Remover</button>
            </div>
        `;
        lista.appendChild(card);
    });
}

// Deletar livro
async function deletarLivro(id) {
    if (confirm("Tem certeza que deseja remover este livro?")) {
        await fetch(`${api}/livro/${id}`, {
            method: "DELETE"
        });
        listarLivros();
    }
}

// Iniciar carregando os livros
listarLivros();
