var btn = document.getElementById('btn-audit');
if (btn) {
  btn.addEventListener('mouseover', function() {
    this.style.borderColor = '#BF00FF';
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'all 0.2s ease';
  });
  btn.addEventListener('mouseout', function() {
    this.style.borderColor = 'transparent';
    this.style.transform = 'scale(1)';
  });
}
