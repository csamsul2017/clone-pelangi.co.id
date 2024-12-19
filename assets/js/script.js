const header = document.getElementById('header');

function myFunction() {
  const x = document.querySelector('.answare');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Jika scroll lebih dari 50px
    header.style.height = '60px';
  } else {
    // Jika kembali ke atas
    header.style.height = '80px';
  }
});
