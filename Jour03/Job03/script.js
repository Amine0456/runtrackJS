$(document).ready(function() {
    const $puzzleContainer = $('#puzzle-container');
    const $message = $('#message');
    const $restartButton = $('#restartButton');
  
    const imageSrcs = [
        'Assets/logo1.png',
        'Assets/logo2.png',
        'Assets/logo3.png',
        'Assets/logo4.png',
        'Assets/logo5.png',
        'Assets/logo6.png',
        'Assets/logo7.png',
        'Assets/logo8.png',
        'Assets/logo9.png',
      ];
  
    const tileSize = 100; 
    const emptyTile = 8; 
  
    let tiles = [];
  
    const randomImageSrc = imageSrcs[Math.floor(Math.random() * imageSrcs.length)];
  
    for (let i = 0; i < 9; i++) {
      const tile = $('<div>').addClass('tile').attr('data-index', i);
      if (i !== emptyTile) {
        tile.css('background-image', `url(${randomImageSrc})`);
        tile.css('background-position', `${-(i % 3) * tileSize}px ${-Math.floor(i / 3) * tileSize}px`);
      }
      tiles.push(tile);
      $puzzleContainer.append(tile);
    }
  
    function checkWin() {
      for (let i = 0; i < tiles.length; i++) {
        if (parseInt(tiles[i].attr('data-index')) !== i) {
          return false;
        }
      }
      return true;
    }
  
    function shuffleTiles() {
      tiles.sort(() => Math.random() - 0.5);
      $puzzleContainer.empty();
      tiles.forEach(tile => $puzzleContainer.append(tile));
      $message.text('');
      $restartButton.hide();
    }
  
    function moveTile(index) {
      if (index === emptyTile) return;
  
      const dx = index % 3 - emptyTile % 3;
      const dy = Math.floor(index / 3) - Math.floor(emptyTile / 3);
      if (Math.abs(dx) + Math.abs(dy) !== 1) return;
  
      const targetIndex = emptyTile;
      emptyTile = index;
  
      const temp = tiles[index];
      tiles[index] = tiles[targetIndex];
      tiles[targetIndex] = temp;
  
      updateTiles();
      if (checkWin()) {
        $message.text('Vous avez gagné').css('color', 'green');
        $restartButton.show();
      }
    }
  
    function updateTiles() {
      tiles.forEach((tile, index) => {
        tile.attr('data-index', index);
        if (index !== emptyTile) {
          const x = index % 3;
          const y = Math.floor(index / 3);
          tile.css('background-position', `${-x * tileSize}px ${-y * tileSize}px`);
        }
      });
    }
  
    $puzzleContainer.on('click', '.tile', function() {
      const index = parseInt($(this).attr('data-index'));
      moveTile(index);
    });
  
    $restartButton.click(function() {
      shuffleTiles();
      $message.text('');
    });
  
    shuffleTiles();
  });
  
