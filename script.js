// Flip cards: tap or press Enter/Space to flip (hover also works on laptops)
document.querySelectorAll('.flip-card').forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
});

// Join form: demo only, nothing is sent yet
var form = document.getElementById('join-form');
var note = document.getElementById('form-note');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  note.textContent = 'Demo only: this form does not send anything yet.';
  form.reset();
});