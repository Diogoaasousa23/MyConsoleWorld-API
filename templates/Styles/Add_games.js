document.addEventListener("DOMContentLoaded", function () {
    const addGameBtn = document.getElementById("addGameBtn");
    const gameList = document.getElementById("GameList");
  
    addGameBtn.addEventListener("click", function (event) {
      event.preventDefault();
  
      const gameNameInput = document.getElementById("GameName");
      const gameDateInput = document.getElementById("GameDate");
      const gameConsoleInput = document.getElementById("GameConsole");
      const gameStateInput = document.getElementById("GameState");
      const gameRatingInput = document.getElementById("gameRating");
  
      const gameName = gameNameInput.value;
      const gameDate = gameDateInput.value;
      const gameConsole = gameConsoleInput.value;
      const gameState = gameStateInput.value;
      const gameRating = gameRatingInput.value;
  
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td class="td Game2-col">${gameName}</td>
        <td class="td date-col">${gameDate}</td>
        <td class="td console-col">${gameConsole}</td>
        <td class="td state2-col">${gameState}</td>
        <td class="td rating-col">${gameRating}</td>
        <td class="actions-col">
            <button type="button" class="btn btn-sm btn-outline-primary edit-game-btn" data-bs-toggle="modal" data-bs-target="#editGameModal">Edit</button>
        </td>
      `;
  
      gameList.appendChild(newRow);
  
      // Limpar os campos de entrada após adicionar o jogo
      gameNameInput.value = "";
      gameDateInput.value = "";
      gameConsoleInput.value = "";
      gameStateInput.value = "";
      gameRatingInput.value = "";
  
      // Fechar o modal
      const newGameModal = bootstrap.Modal.getInstance(document.getElementById('newGameModal'));
      newGameModal.hide();
    });
  });