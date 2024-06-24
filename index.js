document.getElementById('findDeals').addEventListener('click', () => {
  fetch('deals.json').then((deals) => deals.json()).then((json) => {
    document.getElementById('results').innerHTML = JSON.stringify(json);
  });
});
