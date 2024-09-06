document.addEventListener('DOMContentLoaded', function() {

    let blocks = document.querySelectorAll('.container');
  
  
  
    function checkBlocksVisibility() {
  
      let windowHeight = window.innerHeight;
  
  
  
      blocks.forEach(block => {
  
        let blockPosition = block.getBoundingClientRect().top;
  
  
  
        if (blockPosition < windowHeight - 100) {
  
          block.style.opacity = "1";
  
          block.style.transform = "translateY(0)";
  
        } else {
  
          block.style.opacity = "0";
  
          block.style.transform = "translateY(50px)";
  
        }
  
      });
  
    }
  
  
  
    checkBlocksVisibility();
  
  
  
    window.addEventListener('scroll', checkBlocksVisibility);
  
  });

  document.addEventListener('DOMContentLoaded', function() {

    let blocks = document.querySelectorAll('.uslugi-list');
  
  
  
    function checkBlocksVisibility() {
  
      let windowHeight = window.innerHeight;
  
  
  
      blocks.forEach(block => {
  
        let blockPosition = block.getBoundingClientRect().top;
  
  
  
        if (blockPosition < windowHeight - 100) {
  
          block.style.opacity = "1";
  
          block.style.transform = "translateY(0)";
  
        } else {
  
          block.style.opacity = "0";
  
          block.style.transform = "translateY(50px)";
  
        }
  
      });
  
    }
  
  
  
    checkBlocksVisibility();
  
  
  
    window.addEventListener('scroll', checkBlocksVisibility);
  
  });