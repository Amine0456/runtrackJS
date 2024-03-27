$(document).ready(function() {
  const $rainbowContainer = $('#rainbow-container');
  const $shuffleButton = $('#shuffleButton');
  const $message = $('#message');
  const $rainbowImages = $('.rainbow-image');
  const originalOrder = $rainbowImages.toArray().map(img => img.outerHTML);

  function shuffleImages() {
    $rainbowImages.sort(() => Math.random() - 0.5);
    $rainbowImages.detach().appendTo($rainbowContainer);
    $message.text(''); 
  }

  function checkOrder() {
    const currentOrder = $rainbowImages.toArray().map(img => img.outerHTML).join('');
    if (currentOrder === originalOrder.join('')) {
      $message.text('Vous avez gagné').css('color', 'green');
    } else {
      $message.text('Vous avez perdu').css('color', 'red');
    }
  }

  $shuffleButton.click(shuffleImages);

  $rainbowImages.click(checkOrder);
});
