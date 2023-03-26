const dodger = document.getElementById('dodger');

function addingEventListener() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
}

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

addingEventListener();
