document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Pega o nome que salvamos na página de login
    const nomeSalvo = sessionStorage.getItem("usuarioLogado");

    // 2. Pega a referência da tag h2 do seu HTML (<h2 class="username">)
    const usernameHeader = document.querySelector(".username");

    // 3. Se existir um nome salvo, substitui o "seu_usuario" pelo nome real!
    if (nomeSalvo) {
        usernameHeader.innerText = nomeSalvo;
        
        // Opcional: Se quiser mudar o "Nome Completo" da bio para o nome dele também:
        // document.querySelector(".full-name").innerText = nomeSalvo;
    } else {
        // Caso alguém tente entrar direto na página de perfil sem fazer login:
        usernameHeader.innerText = "Visitante";
    }
});
// Contador de publicações (Aba de posts)
let totalPosts = 0;

// --- 1. ALTERAR FOTO DE PERFIL ---
const uploadPhotoInput = document.getElementById('upload-photo');
const profileImg = document.getElementById('profile-img');

uploadPhotoInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        // Cria uma URL temporária do arquivo de imagem carregado do computador/celular
        const imageUrl = URL.createObjectURL(file);
        // Atualiza a imagem de perfil na tela
        profileImg.src = imageUrl;
    }
});

// --- 2. SISTEMA DE ALTERNÁCIA DE ABAS (TABS) ---
function switchTab(tabName) {
    // Esconde todos os painéis de conteúdo
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Remove a classe 'active' de todos os botões de aba
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Ativa o painel e o botão selecionado
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    // Encontra o botão clicado baseado no atributo onclick e adiciona a classe active
    event.currentTarget.classList.add('active');
}

// Adição de posts e projetos de portfólio
const floatingBtn = document.getElementById('floating-add-btn');
const uploadItemInput = document.getElementById('upload-item-input');

// Contador de posts (mantenha se já tiver no topo do seu arquivo)
if (typeof totalPosts === 'undefined') {
    let totalPosts = 0; 
}

// 1. Quando o usuário clica no "+" flutuante, abre a galeria de fotos
floatingBtn.addEventListener('click', function() {
    uploadItemInput.click(); 
});

// 2. Quando o usuário escolhe a foto da galeria, processa o arquivo
uploadItemInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (file) {
        // Cria uma URL em memória temporária para a imagem selecionada
        const imageUrl = URL.createObjectURL(file);
        
        // Descobre qual aba está ativa para saber onde enfiar a imagem
        const abaPostsAtiva = document.getElementById('tab-posts').classList.contains('active');
        
        if (abaPostsAtiva) {
            addNewItem('posts', imageUrl);
        } else {
            addNewItem('portfolio', imageUrl);
        }
        
        // Limpa o input para permitir que a mesma imagem possa ser enviada em seguida se necessário
        uploadItemInput.value = '';
    }
});

// 3. Função adaptada para receber a URL do arquivo carregado
function addNewItem(type, imageUrl) {
    const gridId = type === 'posts' ? 'grid-posts' : 'grid-portfolio';
    const gridContainer = document.getElementById(gridId);

    // Remove o "Nenhum post ainda" se ele existir
    const emptyState = gridContainer.querySelector('.empty-state');
    if (emptyState) {
        emptyState.remove();
    }

    // Cria o elemento do grid quadrado
    const newItem = document.createElement('div');
    newItem.className = 'grid-item';
    newItem.innerHTML = `<img src="${imageUrl}" alt="Item enviado da galeria">`;

    // Adiciona no topo da lista
    gridContainer.insertBefore(newItem, gridContainer.firstChild);

    // Atualiza o contador se for na aba de posts
    if (type === 'posts') {
        totalPosts++;
        document.getElementById('count-posts').innerText = totalPosts;
    }
}