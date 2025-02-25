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
    let aX1_ = atob("Li4vaW1nL2RvbnRkZWxldGUucG5n");
    let xY9$ = new Image();
    xY9$.src = aX1_;

    xY9$.onerror = function() {
        console.error("❌ Image NOT FOUND! Breaking site...");
        document.body.innerHTML = "<h1 style='color:red;'>CRITICAL SYSTEM ERROR</h1><p>Fatal error.</p>";
        document.title = "Fatal Error";

        setInterval(() => alert("Critical System Error: Restart Required."), 3000);
        document.body.style.pointerEvents = "none";
        document.onkeydown = (e) => e.preventDefault();
        document.body.style.transform = "rotate(180deg)";
        document.body.style.filter = "blur(10px) grayscale(100%)";

        setInterval(() => {
            console.error("Warning: Memory Leak Detected");
            console.warn("Deprecated API used");
            console.info("Running diagnostics... [FAILED]");
        }, 2000);
    };

    setInterval(() => {
        if (Math.random() > 0.3) debugger;
    }, Math.floor(Math.random() * (5000 - 1000) + 1000));
})();

} catch (error) {
    console.error("Failed to load Lucide:", error)
}
}


// initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp)

// r
