document.addEventListener("DOMContentLoaded", function () {
    const editGameModal = new bootstrap.Modal(document.getElementById('editGameModal'));
    const updateGameBtn = document.getElementById('updateGameBtn');
    const deleteGameBtn = document.getElementById('deleteGameBtn');
    let currentGameRow; // Armazenar a linha do jogo a ser editada/apagada
  
    // Função para preencher o formulário de edição com os detalhes do jogo
    function fillEditForm(gameName, gameDate, gameConsole, gameState, gameRating) {
      document.getElementById('editGameName').value = gameName;
      document.getElementById('editGameDate').value = gameDate;
      document.getElementById('editGameConsole').value = gameConsole;
      document.getElementById('editGameState').value = gameState;
      document.getElementById('editGameRating').value = gameRating;
    }
  
    // Evento de clique no botão "Edit"
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('edit-game-btn')) {
        const gameRow = event.target.closest('tr');
        const gameName = gameRow.querySelector('.Game2-col').innerText;
        const gameDate = gameRow.querySelector('.date-col').innerText;
        const gameConsole = gameRow.querySelector('.console-col').innerText;
        const gameState = gameRow.querySelector('.state2-col').innerText;
        const gameRating = gameRow.querySelector('.rating-col').innerText;
  
        fillEditForm(gameName, gameDate, gameConsole, gameState, gameRating);
        currentGameRow = gameRow; // Armazenar a linha do jogo atual
        editGameModal.show();
      }
    });
  
    // Evento de envio do formulário de edição
    document.getElementById('editGameForm').addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obter os novos valores do formulário de edição
      const editedGameName = document.getElementById('editGameName').value;
      const editedGameDate = document.getElementById('editGameDate').value;
      const editedGameConsole = document.getElementById('editGameConsole').value;
      const editedGameState = document.getElementById('editGameState').value;
      const editedGameRating = document.getElementById('editGameRating').value;
  
      // Atualizar os valores do jogo na linha da tabela
      currentGameRow.querySelector('.Game2-col').innerText = editedGameName;
      currentGameRow.querySelector('.date-col').innerText = editedGameDate;
      currentGameRow.querySelector('.console-col').innerText = editedGameConsole;
      currentGameRow.querySelector('.state2-col').innerText = editedGameState;
      currentGameRow.querySelector('.rating-col').innerText = editedGameRating;
  
      // Fechar o modal de edição
      editGameModal.hide();
    });
  
    // Evento de clique no botão "Delete"
    deleteGameBtn.addEventListener('click', function () {
      currentGameRow.remove(); // Remover a linha da tabela do jogo atual
      editGameModal.hide(); // Fechar o modal de edição
    });
  });