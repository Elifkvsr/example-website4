const nav = document.getElementById("mainNav");
const searchBox = document.getElementById("searchBox");
const bottomSection = document.getElementById("bottomSection");
const menuItems = document.querySelectorAll(".menu-item");

// Her menü için alt menü açma olayları
menuItems.forEach((item) => {
  const title = item.querySelector(".menu-title");

  // Mobilde: tıklamayla aç/kapat
  title.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      item.classList.toggle("open");
    }
  });

  // Masaüstünde: fareyle üzerine gelince aç, çıkınca kapat
  title.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 768) {
      item.classList.add("open");
    }
  });

  item.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 768) {
      item.classList.remove("open");
    }
  });
});

function toggleMenu(element) {
  const navItem = element.closest(".nav-item");
  const icon = element.querySelector("i");

  // Tüm açık menüleri kapat ve ikonları eski haline getir
  document.querySelectorAll(".nav-item.open").forEach((item) => {
    if (item !== navItem) {
      item.classList.remove("open");
      const otherIcon = item.querySelector(".nav-title i");
      if (otherIcon) otherIcon.className = "ri-arrow-down-s-line";
    }
  });

  // Mevcut menüyü aç/kapat
  navItem.classList.toggle("open");

  // İkonu güncelle
  if (navItem.classList.contains("open")) {
    icon.className = "ri-arrow-up-s-line";
  } else {
    icon.className = "ri-arrow-down-s-line";
  }
}

// Masaüstü hover etkisi için
document.querySelectorAll(".nav-item").forEach((item) => {
  const title = item.querySelector(".nav-title");
  const icon = title ? title.querySelector("i") : null;

  item.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 768) {
      item.classList.add("open");
      if (icon) icon.className = "ri-arrow-up-s-line";
    }
  });

  item.addEventListener("mouseleave", () => {
    if (window.innerWidth >= 768) {
      item.classList.remove("open");
      if (icon) icon.className = "ri-arrow-down-s-line";
    }
  });
});

function toggleMenu(element) {
  const navItem = element.closest(".nav-item");
  navItem.classList.toggle("open");

  // Close other open menus
  document.querySelectorAll(".nav-item").forEach((item) => {
    if (item !== navItem) {
      item.classList.remove("open");
    }
  });
}

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".nav-item")) {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("open");
    });
  }
});

function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function toggleSubmenu(element) {
  const submenu = element.nextElementSibling;
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
}

// Slider
var swiper = new Swiper("#yorumSlider", {
  slidesPerView: 4,
  spaceBetween: 18,
  loop: true,
  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    641: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  on: {
    init: function () {
      updateActiveSlide(this);
    },
    slideChange: function () {
      updateActiveSlide(this);
    },
  },
});

function updateActiveSlide(swiper) {
  // Tüm slaytlardan active-slide sınıfını kaldır
  swiper.slides.forEach((slide) => {
    slide.classList.remove("active-slide");
  });

  // Ekranda ilk görünen slide'ı active yap (swiper.activeIndex)
  const firstVisibleSlide = swiper.slides[swiper.activeIndex];
  if (firstVisibleSlide) {
    firstVisibleSlide.classList.add("active-slide");
  }
}

///

// SSS sorularına tıklama işlevi
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});

document.querySelectorAll(".custom-nav-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("open");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const footerNavTitles = document.querySelectorAll(".footer-nav-title");

  footerNavTitles.forEach((title) => {
    title.addEventListener("click", function () {
      // Tüm menüleri kapat (isteğe bağlı)
      document.querySelectorAll(".footer-nav").forEach((nav) => {
        if (nav !== this.nextElementSibling) {
          nav.classList.remove("active");
          const otherImg = nav.previousElementSibling.querySelector("img");
          if (otherImg) otherImg.style.transform = "rotate(0deg)";
        }
      });

      // Tıklanan menüyü aç/kapat
      const nav = this.nextElementSibling;
      if (nav && nav.classList.contains("footer-nav")) {
        nav.classList.toggle("active");

        // Ok ikonunu döndür
        const img = this.querySelector("img");
        if (img) {
          img.style.transform = nav.classList.contains("active")
            ? "rotate(180deg)"
            : "rotate(0deg)";
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const footerNavTitles = document.querySelectorAll(".footer-nav-title");

  footerNavTitles.forEach((title) => {
    title.addEventListener("click", function () {
      const nav = this.nextElementSibling;
      if (nav && nav.classList.contains("footer-nav")) {
        nav.classList.toggle("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    const icons = document.querySelectorAll(".icon-container");
    icons.forEach((icon) => {
      icon.style.display = "flex";
    });
  }
});

document.querySelector(".mobile-btn").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("active");
});

// HAMBURGER
function toggleMobileMenu(item) {
  const submenu = item.querySelector(".submenu");
  const icon = item.querySelector(".icon");

  const isOpen = submenu.style.display === "block";

  // Diğer tüm menüleri kapat
  document.querySelectorAll(".submenu").forEach((menu) => {
    menu.style.display = "none";
  });
  document.querySelectorAll(".icon").forEach((i) => {
    i.classList.remove("ri-arrow-up-s-line");
    i.classList.add("ri-arrow-down-s-line");
  });

  // Eğer bu menü kapalıysa aç ve oku değiştir
  if (!isOpen) {
    submenu.style.display = "block";
    icon.classList.remove("ri-arrow-down-s-line");
    icon.classList.add("ri-arrow-up-s-line");
  }
}

//FOOTER-MENÜ
document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".footer-menus");

  menus.forEach((menu) => {
    const button = menu.querySelector(".footer-nav-titles");
    const nav = menu.querySelector(".footer-navs");
    const icon = button.querySelector("img");

    button.addEventListener("click", function () {
      const isActive = nav.classList.contains("active");

      // Diğer menüleri kapat
      document.querySelectorAll(".footer-navs").forEach((otherNav) => {
        otherNav.classList.remove("active");
        const otherIcon = otherNav.previousElementSibling.querySelector("img");
        if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
      });

      // Seçili menüyü aç/kapat
      if (!isActive) {
        nav.classList.add("active");
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".footer-menu");

  menus.forEach((menu) => {
    const button = menu.querySelector(".footer-nav-title");
    const nav = menu.querySelector(".footer-nav");

    button.addEventListener("click", function () {
      const isActive = nav.classList.contains("active");

      // Diğer menüleri kapat
      document.querySelectorAll(".footer-menu").forEach((otherMenu) => {
        otherMenu.querySelector(".footer-nav").classList.remove("active");
        otherMenu.querySelector(".footer-nav-title").classList.remove("active");
      });

      // Seçili menüyü aç/kapat
      if (!isActive) {
        nav.classList.add("active");
        button.classList.add("active");
      }
    });
  });
});

function toggleSubMobileMenu(item) {
  const submenu = item.querySelector(".submenu");
  const icon = item.querySelector(".icon");

  const isOpen = submenu.style.display === "block";

  // Tüm alt menüleri kapat
  document.querySelectorAll(".submenu").forEach((menu) => {
    menu.style.display = "none";
  });
  document.querySelectorAll(".icon").forEach((i) => {
    i.classList.remove("ri-arrow-up-s-line", "pink-icon");
    i.classList.add("ri-arrow-down-s-line");
  });

  // Seçili menü kapalıysa aç ve ikon stilini değiştir
  if (!isOpen) {
    submenu.style.display = "block";
    icon.classList.remove("ri-arrow-down-s-line");
    icon.classList.add("ri-arrow-up-s-line", "pink-icon"); // Pembe yap
  }
}

function toggleMobileMenu(element) {
  const submenu = element.querySelector(".submen");
  const icon = element.querySelector(".ri-arrow-down-s-line");

  // Menü açık mı?
  const isOpen = submenu.style.display === "flex";

  // Diğer açık menüleri kapat
  document
    .querySelectorAll(".submen")
    .forEach((s) => (s.style.display = "none"));
  document
    .querySelectorAll(".ri-arrow-down-s-line")
    .forEach((i) => i.classList.remove("rotate"));

  // Tıklanan menüyü aç/kapat
  if (!isOpen) {
    submenu.style.display = "flex";
    icon.classList.add("rotate");
  }
}

function toggleMobileMenu(element) {
  const submenu = element.querySelector(".submen");
  const icon = element.querySelector(".ri-arrow-down-s-line");

  const isOpen = element.classList.contains("open");

  // Diğer tüm menüleri kapat
  document.querySelectorAll(".nav-ite").forEach((item) => {
    item.classList.remove("open");
    const sub = item.querySelector(".submen");
    if (sub) sub.style.display = "none";
  });

  // Bu menüyü aç
  if (!isOpen) {
    element.classList.add("open");
    submenu.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const hizmetBox = document.querySelector(".hizmet1-kutu-grup1");

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      // Boş değilse göster
      if (searchInput.value.trim() !== "") {
        hizmetBox.classList.add("show");
      }
    }
  });
});

const tabs = document.querySelectorAll(".tab");
const hizmetler = document.querySelector(".hizmet1-kutu-grup1");
const bloglar = document.querySelector(".blog1-kutu-grup1");
const diger = document.querySelector(".diger1-kutu-grup1");

const groups = {
  hizmetler,
  bloglar,
  diger,
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Hide all groups
    Object.values(groups).forEach((group) => {
      if (group) group.classList.remove("show");
    });

    // Show selected group
    const selected = tab.dataset.category;
    if (groups[selected]) {
      groups[selected].classList.add("show");
    }
  });
});

// Optional: set default visible
bloglar.classList.add("show");
