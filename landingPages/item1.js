// ========================================
  // IMAGE DATA AND VARIABLES
  // ========================================
  const images = [
    {
      id: 1,
      src: 'https://p1-ofp.static.pub/medias/25838872816_IdeaPadSlim315IAH8ArticGrey_202306020227161725094221889.png',
      title: '',
      description: ''
    },
    {
      id: 2,
      src: 'https://p1-ofp.static.pub//fes/cms/2024/06/11/gb6jv79453e5ohrv9fx886c5h3neri258868.jpg',
      title: '',
      description: ''
    },
    {
      id: 3,
      src: 'https://p1-ofp.static.pub//fes/cms/2024/06/11/548ohbuc722nmbyt8u2jbfms412vr7750935.jpg',
      title: '',
      description: ''
    },
    {
      id: 4,
      src: 'https://p3-ofp.static.pub//fes/cms/2024/06/11/ru6svzzls0361xvl5pv7msmn2q5gjw887621.jpg',
      title: '',
      description: ''
    },
    {
      id: 5,
      src: 'https://p2-ofp.static.pub//fes/cms/2024/06/11/s38l9c6um4k6nvxt1w7cz31wc9zmqh440231.jpg',
      title: '',
      description: ''
    },
    {
      id: 6,
      src: 'https://p4-ofp.static.pub//fes/cms/2024/06/11/w5e8oftvx4vff0yke8z9eo5qyb6pr1703766.jpg',
      title: '',
      description: ''
    }
  ];

  let selectedImageIndex = 0;

  // ========================================
  // GALLERY INITIALIZATION
  // ========================================
  function initGallery() {
    generateThumbnails();
    updateMainImage();
  }

  // ========================================
  // THUMBNAIL GENERATION
  // ========================================
  function generateThumbnails() {
    const thumbnailList = document.getElementById('thumbnailList');
    thumbnailList.innerHTML = '';

    images.forEach((image, index) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = `thumbnail ${index === selectedImageIndex ? 'selected' : ''}`;
      thumbnail.onclick = () => selectImage(index);

      const img = document.createElement('img');
      img.src = image.src;
      img.alt = `Thumbnail ${image.id}`;

      thumbnail.appendChild(img);
      thumbnailList.appendChild(thumbnail);
    });
  }

  // ========================================
  // IMAGE SELECTION FUNCTIONS
  // ========================================
  function selectImage(index) {
    selectedImageIndex = index;
    updateMainImage();
    updateThumbnailSelection();
    updateCounter();
  }

  function updateMainImage() {
    const selectedImage = images[selectedImageIndex];
    document.getElementById('mainImage').src = selectedImage.src;
    document.getElementById('mainTitle').textContent = selectedImage.title;
    document.getElementById('mainDescription').textContent = selectedImage.description;
  }

  function updateThumbnailSelection() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
      if (index === selectedImageIndex) {
        thumbnail.classList.add('selected');
      } else {
        thumbnail.classList.remove('selected');
      }
    });
  }

  function updateCounter() {
    const counter = document.getElementById('imageCounter');
    if (counter) {
      counter.textContent = `${selectedImageIndex + 1} of ${images.length} images`;
    }
  }

  // ========================================
  // NAVIGATION FUNCTIONS
  // ========================================
  function navigateImage(direction) {
    if (direction === 'prev' && selectedImageIndex > 0) {
      selectImage(selectedImageIndex - 1);
    } else if (direction === 'next' && selectedImageIndex < images.length - 1) {
      selectImage(selectedImageIndex + 1);
    }
  }

  function scrollThumbnails(direction) {
    const container = document.getElementById('thumbnailContainer');
    const scrollAmount = 200;

    if (direction === 'left') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  // ========================================
  // EVENT LISTENERS
  // ========================================
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft' && selectedImageIndex > 0) {
      selectImage(selectedImageIndex - 1);
    } else if (event.key === 'ArrowRight' && selectedImageIndex < images.length - 1) {
      selectImage(selectedImageIndex + 1);
    }
  });

  document.addEventListener('DOMContentLoaded', initGallery);

  // ========================================
  // LEGACY FUNCTIONS (for compatibility)
  // ========================================
  function changeImage(img) {
    document.getElementById("mainImage").src = img.src;
    document.querySelectorAll('.thumbnail-bar img').forEach(i => i.classList.remove("active"));
    img.classList.add("active");
  }


// ---------------------- Add this to your existing JavaScript ----------------------------------
// ========================================
    // STICKY HEADER FUNCTIONALITY
    // ========================================
    
    function initStickyHeader() {
        const stickyHeader = document.getElementById('stickyHeader');
        const productTitle = document.querySelector('.product-title');
        const productPrice = document.querySelector('.price');
        
        // Sync content from main product section to sticky header
        function syncStickyContent() {
            const stickyProductName = document.getElementById('stickyProductName');
            const stickyPrice = document.getElementById('stickyPrice');
            
            if (productTitle && stickyProductName) {
                stickyProductName.textContent = productTitle.textContent.trim();
            }
            
            if (productPrice && stickyPrice) {
                stickyPrice.textContent = productPrice.textContent.trim();
            }
        }
        
        // Show/hide sticky header based on scroll position
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const triggerPoint = 200; // Show sticky header after scrolling 200px
            
            if (scrollPosition > triggerPoint) {
                stickyHeader.classList.add('visible');
            } else {
                stickyHeader.classList.remove('visible');
            }
        }
        
        // Initialize
        syncStickyContent();
        
        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);
        
        // Optional: Listen for content changes (if you're updating content dynamically)
        const observer = new MutationObserver(syncStickyContent);
        if (productTitle) observer.observe(productTitle, { childList: true, subtree: true });
        if (productPrice) observer.observe(productPrice, { childList: true, subtree: true });
    }
    
    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', initStickyHeader);





function redirectToSignIn() {
  window.location.href = "../signIn.html";
}
function redirectToHome() {
  window.location.href = "../index.html";
}









// Smooth scrolling for navigation links
        document.querySelectorAll('.mn3t_clickable_nav_button_element').forEach(function(button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    var existingStickyHeight = 60; // Adjust this value to match your existing sticky bar height
                    var navHeight = document.querySelector('.zx9k_sticky_navigation_wrapper_2024').offsetHeight;
                    var totalOffset = existingStickyHeight + navHeight;
                    var targetPosition = targetElement.offsetTop - totalOffset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });