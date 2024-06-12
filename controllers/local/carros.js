document.addEventListener("DOMContentLoaded", function() {
    fetchGames();
  
    const newGameForm = document.getElementById('newGameForm');
    newGameForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const newGame = {
        name: document.getElementById('GameName').value,
        date: document.getElementById('GameDate').value,
        console: document.getElementById('GameConsole').value,
        state: document.getElementById('GameState').value,
        rating: document.getElementById('gameRating').value,
      };
      createGame(newGame);
    });
  
    const editGameForm = document.getElementById('editGameForm');
    editGameForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const editedGame = {
        id: editGameForm.dataset.gameId,
        name: document.getElementById('editGameName').value,
        date: document.getElementById('editGameDate').value,
        console: document.getElementById('editGameConsole').value,
        state: document.getElementById('editGameState').value,
        rating: document.getElementById('editGameRating').value,
      };
      updateGame(editedGame);
    });
  
    document.getElementById('deleteGameBtn').addEventListener('click', function() {
      const gameId = document.getElementById('editGameForm').dataset.gameId;
      deleteGame(gameId);
    });
  });
  
  function fetchGames() {
    fetch('/api/games')
      .then(response => response.json())
      .then(data => {
        const gameList = document.getElementById('GameList');
        gameList.innerHTML = '';
        data.forEach(game => {
          const gameRow = document.createElement('tr');
          gameRow.innerHTML = `
            <td>${game.name}</td>
            <td>${game.date}</td>
            <td>${game.console}</td>
            <td>${game.state}</td>
            <td>${game.rating}</td>
            <td>
              <button class="btn btn-primary" onclick="showEditGameModal(${game.id})">Edit</button>
            </td>
          `;
          gameList.appendChild(gameRow);
        });
      });
  }
  
  function createGame(game) {
    fetch('/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(game)
    })
    .then(response => response.json())
    .then(data => {
      $('#newGameModal').modal('hide');
      fetchGames();
    });
  }
  
  function showEditGameModal(gameId) {
    fetch(`/api/games/${gameId}`)
      .then(response => response.json())
      .then(data => {
        const editGameForm = document.getElementById('editGameForm');
        editGameForm.dataset.gameId = data.id;
        document.getElementById('editGameName').value = data.name;
        document.getElementById('editGameDate').value = data.date;
        document.getElementById('editGameConsole').value = data.console;
        document.getElementById('editGameState').value = data.state;
        document.getElementById('editGameRating').value = data.rating;
        $('#editGameModal').modal('show');
      });
  }
  
  function updateGame(game) {
    fetch(`/api/games/${game.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(game)
    })
    .then(response => response.json())
    .then(data => {
      $('#editGameModal').modal('hide');
      fetchGames();
    });
  }
  
  function deleteGame(gameId) {
    fetch(`/api/games/${gameId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      $('#editGameModal').modal('hide');
      fetchGames();
    });
  }
  