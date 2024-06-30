let result = '';

fetch('deals.json').then((deals) => deals.json()).then((json) => {
  document.getElementById('results').innerHTML = JSON.stringify(json);
  result = json;
});