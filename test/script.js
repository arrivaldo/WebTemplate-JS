
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Open modal on button click
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Close modal on close button click
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal if user clicks outside modal
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});