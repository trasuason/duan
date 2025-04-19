
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('mainImage');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
    
        thumbnails.forEach(img => img.classList.remove('active'));
      
      // Thêm class active cho ảnh vừa click
      thumb.classList.add('active');

    
      mainImage.src = thumb.src;
    });
  });
