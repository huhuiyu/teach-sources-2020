let div99 = document.getElementById('div99');

for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    let span = document.createElement('span');
    span.innerHTML = j + '×' + i + '=' + j * i;
    div99.append(span);
  }

  div99.append(document.createElement('br'));
}
