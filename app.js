// A impressão inclui todas as respostas, mesmo após o leitor recolher uma delas.
let previousDetailsState = [];
window.addEventListener('beforeprint', () => {
  previousDetailsState = Array.from(document.querySelectorAll('details'), detail => ({
    detail,
    open: detail.open,
  }));
  previousDetailsState.forEach(({ detail }) => { detail.open = true; });
});
window.addEventListener('afterprint', () => {
  previousDetailsState.forEach(({ detail, open }) => { detail.open = open; });
  previousDetailsState = [];
});
