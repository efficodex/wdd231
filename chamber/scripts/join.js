document.addEventListener("DOMContentLoaded", () => {
  // Insert current timestamp
  const tsInput = document.getElementById("timestamp");
  if (tsInput) {
    tsInput.value = new Date().toISOString();
  }

  // Open modals
  document.querySelectorAll(".open-modal").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const parentCard = link.closest(".join-card");
      const modalId = parentCard.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.showModal();
      }
    });
  });

  // Close modals
  document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      const dialog = btn.closest("dialog");
      if (dialog) dialog.close();
    });
  });

  // Allow Esc to close modals
  document.querySelectorAll("dialog").forEach(dialog => {
    dialog.addEventListener("cancel", e => {
      e.preventDefault();
      dialog.close();
    });
  });
});
