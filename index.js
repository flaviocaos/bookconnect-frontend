const api = "http://localhost:5000";

document.getElementById("formUsuario").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    try {
        const resposta = await fetch(`${api}/usuarios`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email })
        });

        if (resposta.ok) {
            alert("Usuário cadastrado com sucesso!");
            e.target.reset();
        } else {
            const erro = await resposta.json();
            alert("Erro ao cadastrar usuário: " + erro.mensagem);
        }
    } catch (err) {
        alert("Erro na comunicação com a API.");
        console.error(err);
    }
});

document.getElementById("formLivro").addEventListener("submit", async (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const usuario_id = parseInt(document.getElementById("usuario_id").value);

    try {
        const resposta = await fetch(`${api}/livros`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo, autor, usuario_id })
        });

        if (resposta.ok) {
            alert("Livro cadastrado com sucesso!");
            console.log("Livro salvo:", { titulo, autor, usuario_id });
            e.target.reset();
            listarLivros();
        } else {
            const erro = await resposta.json();
            alert("Erro ao cadastrar livro: " + erro.mensagem);
            console.error("Erro:", erro);
        }
    } catch (err) {
        alert("Erro na comunicação com a API.");
        console.error(err);
    }
});

async function listarLivros() {
    console.log("Carregando livros...");
    const resposta = await fetch(`${api}/livros`);
    const livros = await resposta.json();
    console.log("Livros recebidos:", livros);

    const lista = document.getElementById("listaLivros");
    lista.innerHTML = "";

    livros.forEach(livro => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card p-3 shadow-sm">
                <h5>${livro.titulo}</h5>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><small><strong>Dono:</strong> ${livro.usuario}</small></p>
                <button class="btn btn-danger btn-sm" onclick="deletarLivro(${livro.id})">Remover</button>
            </div>
        `;
        lista.appendChild(card);
    });
}

async function deletarLivro(id) {
    if (confirm("Tem certeza que deseja remover este livro?")) {
        await fetch(`${api}/livro/${id}`, {
            method: "DELETE"
        });
        listarLivros();
    }
}

listarLivros();

    }
}

// Iniciar carregando os livros
listarLivros();
