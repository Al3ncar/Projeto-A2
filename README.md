# Projeto-A2

## O tema do projeto vai ser jogo da memória 
Repositório destinado ao desenvolvimento de um trabalho em grupo da faculdade

## Crônicas de Eldoria — Jogo da Memória RPG

Jogo da memória temático de RPG medieval, desenvolvido com HTML5, CSS3 e JavaScript puro (ES Modules).

### Como executar

Como o projeto utiliza módulos JavaScript, execute-o por um servidor local (não abra o `index.html` diretamente via `file://`).

**Opção 1 — VS Code**
1. Abra a pasta `Projeto-A2` no VS Code.
2. Instale a extensão Live Server, caso ainda não tenha.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

**Opção 2 — Python**
No terminal, dentro da pasta do projeto, execute:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

### Adicionar ou remover personagens

1. Coloque a imagem PNG em `imgs/characters/`.
2. Abra `js/characters.js`.
3. Adicione um objeto ao array `characters`:

```javascript
{
  id: "ranger",
  name: "Patrulheiro",
  className: "Explorador",
  image: "imgs/characters/ranger.png",
  fallback: "🏹"
}
```

O `id` deve ser único. A imagem idealmente deve ser quadrada, com fundo transparente e proporções adequadas para pixel art. Se o arquivo não existir, o jogo mostra o emoji de fallback definido no cadastro.

A dificuldade determina quantos personagens do início do array serão usados: 4, 6 ou 8 pares. Portanto, mantenha pelo menos oito personagens cadastrados para habilitar todas as opções.

### Imagens

- `imgs/characters/`: retratos dos personagens.
- `imgs/cards/`: reservado para futuras imagens de verso de carta.
- `imgs/interface/`: reservado para elementos adicionais da interface.

Os nomes iniciais esperados estão no cadastro de `js/characters.js`. O verso das cartas atual é desenhado em CSS, então não é necessário adicionar imagem para ele.

### Configurações

A dificuldade pode ser alterada no menu Configurações. Os efeitos sonoros possuem apenas o controle visual nesta versão; nenhum áudio é reproduzido. Para mudar o número de pares ou acrescentar níveis, edite `difficultyPairs` em `js/game.js` e ajuste as opções em `index.html`.

### Histórico

`js/history.js` mantém `historicoPartidas` em memória. Cada vitória registra identificador, data ISO, tempo, movimentos e resultado. Os dados são perdidos ao recarregar a página; a estrutura está pronta para futura persistência com `localStorage`, que ainda não foi implementado.

### Estrutura

```text
Projeto-A2/
├── index.html
├── css/style.css
├── js/
│   ├── main.js
│   ├── game.js
│   ├── timer.js
│   ├── characters.js
│   └── history.js
├── imgs/
│   ├── characters/
│   ├── cards/
│   └── interface/
└── README.md
```

### Observações técnicas

- Sem frameworks ou dependências JavaScript externas.
- As fontes são carregadas do Google Fonts; se estiver offline, serão usadas fontes de fallback.
- O tabuleiro é embaralhado com Fisher–Yates.
- O cronômetro usa timestamps para evitar deriva acumulada do `setInterval`.
- O histórico registra somente partidas concluídas com vitória.
