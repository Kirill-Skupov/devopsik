fetch('/api/items')
  .then(r => r.json())
  .then(items => {
    const ul = document.getElementById('items');
    ul.innerHTML = items.map(i => '<li>#' + i.id + ' — ' + i.name + '</li>').join('');
  })
  .catch(err => {
    document.getElementById('items').textContent = 'API error: ' + err;
  });