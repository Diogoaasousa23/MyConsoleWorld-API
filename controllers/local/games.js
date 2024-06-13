const fs = require('fs');

// Devolve todos os jogos
exports.getAll = async (req, res) => {
    // Ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    // Parse do JSON
    const data = JSON.parse(datajson);
    // Devolver os jogos
    return res.send(data.games);
}

// Devolve o jogo com o id
exports.getById = async (req, res) => {
    // Obter o id do jogo
    const id = req.params.id;
    // Ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    // Parse do JSON
    const data = JSON.parse(datajson);
    // Procurar um jogo com o id
    const games = data.games.filter(game => game.id == id);
    // Devolver o jogo
    res.send(games);
}

// Cria um jogo
exports.create = async (req, res) => {
    // Obter o jogo pelas características enviadas
    const { id, name, date, console, state, rating } = req.body;
    // Ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    // Parse do JSON
    const data = JSON.parse(datajson);
    // Adicionar jogo à lista
    data.games.push(req.body);
    // Criar o novo ficheiro com o jogo adicionado
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    // Devolver o novo jogo
    return res.status(201).send(req.body);
}

// Atualiza o jogo
exports.update = async (req, res) => {
    // Obter o jogo pelas características enviadas
    const { id, name, date, console, state, rating } = req.body;
    // Ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    // Parse do JSON
    const data = JSON.parse(datajson);
    // Procurar o jogo para atualizar
    const game = data.games.find(game => game.id == id);
    // Atualizar as características
    if (game) {
        game.name = name;
        game.date = date;
        game.console = console;
        game.state = state;
        game.rating = rating;
        // Atualizar no ficheiro JSON
        fs.writeFileSync('data/local/data.json', JSON.stringify(data));
        // Devolver o jogo alterado
        return res.send(game);
    } else {
        return res.status(404).send("Jogo não encontrado");
    }
}

// Apaga o jogo com o id
exports.delete = async (req, res) => {
    // Obter o id do jogo
    const id = req.params.id;
    // Ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    // Parse do JSON
    const data = JSON.parse(datajson);
    // Procurar o índice do jogo a ser excluído
    const gameIndex = data.games.findIndex(game => game.id == id);
    // Verificar se o jogo foi encontrado
    if (gameIndex !== -1) {
        // Excluir o jogo do array de jogos
        const deletedGame = data.games.splice(gameIndex, 1)[0];
        // Atualizar o ficheiro JSON
        fs.writeFileSync('data/local/data.json', JSON.stringify(data));
        // Retornar o jogo excluído como resposta
        return res.status(200).send(deletedGame);
    } else {
        // Caso o jogo não seja encontrado, retornar uma resposta de erro
        return res.status(404).send("Jogo não encontrado");
    }
}
