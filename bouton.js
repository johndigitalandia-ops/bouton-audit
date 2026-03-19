var btn = document.getElementById('btn-audit');
if (btn) {
  var active = false;
  btn.addEventListener('click', function() {
    active = !active;
    this.style.borderColor = active ? '#BF00FF' : 'transparent';
    this.style.transition = 'all 0.3s ease';
  });
}
