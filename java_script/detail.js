const items = document.querySelectorAll('.location');

function openCloseAnswer() {
    const answerId = this.id.replace('loc', 'det');

    if(document.getElementById(answerId).style.display === 'block') {
      document.getElementById(answerId).style.display = 'none';
      document.getElementById(this.id + '-toggle').textContent = '+';
    } else {
      document.getElementById(answerId).style.display = 'block';
      document.getElementById(this.id + '-toggle').textContent = '-';
    }
}

items.forEach(item => item.addEventListener('click', openCloseAnswer));