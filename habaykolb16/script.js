/* 1 */
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');

  image1.onclick = function() {
    alert(this.src);
  };

  image2.onclick = function() {
    alert(this.src);
  };

  image3.onclick = function() {
    alert(this.src);
  };

/* 2 */
  const link1 = document.getElementById('link1');
  const link2 = document.getElementById('link2');
  const link3 = document.getElementById('link3');

  function handleMouseOver() {
    this.title = this.textContent;
  }

  link1.addEventListener('mouseover', handleMouseOver);
  link2.addEventListener('mouseover', handleMouseOver);
  link3.addEventListener('mouseover', handleMouseOver);

  setTimeout(() => {
    link1.removeEventListener('mouseover', handleMouseOver);
    console.log("Обробник події 'mouseover' для посилання 1 видалено.");
  }, 5000);


/* 5-6 */
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const input3 = document.getElementById('input3');
  const demoParagraph = document.getElementById('demo');

  function handleBlur() {
    demoParagraph.textContent += this.value + " ";
  }
  function handleClickOnce() {
    alert(this.value);
    this.removeEventListener('click', handleClickOnce);
  }

  input1.addEventListener('blur', handleBlur);
  input2.addEventListener('blur', handleBlur);
  input3.addEventListener('blur', handleBlur);
  input1.addEventListener('click', handleClickOnce);
  input2.addEventListener('click', handleClickOnce);
  input3.addEventListener('click', handleClickOnce);

/* 7 */
  const paragraph1 = document.getElementById('paragraph1');
  const paragraph2 = document.getElementById('paragraph2');
  const paragraph3 = document.getElementById('paragraph3');

  function calculateSquare() {
    const number = parseInt(this.textContent);
    if (!isNaN(number)) {
      this.textContent = number * number;
      // this.removeEventListener('click', calculateSquare);
    } else {
      this.textContent = "Не число";
    }
  }

  paragraph1.addEventListener('click', calculateSquare);
  paragraph2.addEventListener('click', calculateSquare);
  paragraph3.addEventListener('click', calculateSquare);

/* 8 */
  const inputs = document.querySelectorAll('input');
 
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      const requiredLength = parseInt(this.dataset.length);
      const currentLength = this.value.length;

      this.classList.remove('valid', 'invalid');

      if (currentLength === requiredLength) {
        this.classList.add('valid');
      } else {
        this.classList.add('invalid');
      }
    });
  });
