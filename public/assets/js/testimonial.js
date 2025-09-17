
const testimonials = [
  {
    quote:
      "With years of experience in the real estate industry, our team of dedicated professionals is committed to delivering transparent, reliable, and personalized services. Whether you are buying your dream home, selling a property, or investing in real estate, we ensure a smooth and hassle-free experience.",
    name: "Who We Are",
    // designation: "Restaurant Critic",
    src:
      "assets/img/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"
  },
  {
    quote:
      "Our mission is simple – to turn your property dreams into reality. We believe that a home is more than just bricks and walls; it’s a space where life’s most beautiful memories are created.",
    name: "Our Mission",
    // designation: "Frequent Visitor",
    src:
      "assets/img/zoshua-colah-mviR-sX9rXg-unsplash.jpg"
  },
  {
    quote:
      "Verified & Reliable Properties., Professional Guidance., Affordable & Competitive Deals., Hassle-Free Paperwork., Customer-Centric Approach.",
    name: "Why Choose Us",
    // designation: "Satisfied Customer",
    src:
      "assets/img/ats-12.jpg"
  }
];

let activeIndex = 0;
const imageContainer = document.getElementById("image-container");
const nameElement = document.getElementById("name");
const designationElement = document.getElementById("designation");
const quoteElement = document.getElementById("quote");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;

  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));

  return (
    minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
  );
}

function updateTestimonial(direction) {
  const oldIndex = activeIndex;
  activeIndex =
    (activeIndex + direction + testimonials.length) % testimonials.length;

  const containerWidth = imageContainer.offsetWidth;
  const gap = calculateGap(containerWidth);
  const maxStickUp = gap * 0.8; // 80% of the calculated gap

  testimonials.forEach((testimonial, index) => {
    let img = imageContainer.querySelector(`[data-index="${index}"]`);
    if (!img) {
      img = document.createElement("img");
      img.src = testimonial.src;
      img.alt = testimonial.name;
      img.classList.add("testimonial-image");
      img.dataset.index = index;
      imageContainer.appendChild(img);
    }

    const offset =
      (index - activeIndex + testimonials.length) % testimonials.length;
    const zIndex = testimonials.length - Math.abs(offset);
    const opacity = index === activeIndex ? 1 : 1;
    const scale = index === activeIndex ? 1 : 0.85;

    let translateX, translateY, rotateY;
    if (offset === 0) {
      translateX = "0%";
      translateY = "0%";
      rotateY = "0deg";
    } else if (offset === 1 || offset === -2) {
      translateX = "20%";
      translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
      rotateY = "-15deg";
    } else {
      translateX = "-20%";
      translateY = `-${(maxStickUp / img.offsetHeight) * 100}%`;
      rotateY = "15deg";
    }

    img.style.zIndex = zIndex;
    img.style.opacity = opacity;
    img.style.transform = `translate(${translateX}, ${translateY}) scale(${scale}) rotateY(${rotateY})`;
  });

  nameElement.textContent = testimonials[activeIndex].name;
  designationElement.textContent = testimonials[activeIndex].designation;
  quoteElement.innerHTML = testimonials[activeIndex].quote
    .split(" ")
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");

  animateWords();
}

function animateWords() {
  const words = quoteElement.querySelectorAll(".word");
  words.forEach((word, index) => {
    word.style.opacity = "0";
    word.style.transform = "translateY(10px)";
    word.style.filter = "blur(10px)";
    setTimeout(() => {
      word.style.transition =
        "opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out";
      word.style.opacity = "1";
      word.style.transform = "translateY(0)";
      word.style.filter = "blur(0)";
    }, index * 20);
  });
}

function handleNext() {
  updateTestimonial(1);
}

function handlePrev() {
  updateTestimonial(-1);
}

prevButton.addEventListener("click", handlePrev);
nextButton.addEventListener("click", handleNext);

// Initial setup
updateTestimonial(0);

// Autoplay functionality
const autoplayInterval = setInterval(handleNext, 5000);

// Stop autoplay on user interaction
[prevButton, nextButton].forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(autoplayInterval);
  });
});

// Handle window resize
window.addEventListener("resize", () => updateTestimonial(0));
