window.onscroll = function() {
    let navbar = document.querySelector('.navbar');
    let navbarBrand = document.querySelector('.navbar-brand');
    let navbarToggler = document.querySelector('.navbar-toggler-icon');
    let hr = document.querySelector('.hr');
    let navbarLinks = document.querySelectorAll('.nav-link'); // Pilih semua elemen dengan kelas 'nav-link'

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbarBrand.classList.add('scrolled');
        navbarToggler.classList.add('scrolled');
        hr.classList.add('scrolled');
        navbarLinks.forEach(link => {
            link.classList.add('scrolled'); // Tambahkan kelas ke masing-masing 'nav-link'
        });
    } else {
        navbar.classList.remove('scrolled');
        navbarBrand.classList.remove('scrolled');
        navbarToggler.classList.remove('scrolled');
        hr.classList.remove('scrolled');
        navbarLinks.forEach(link => {
            link.classList.remove('scrolled'); // Hapus kelas dari masing-masing 'nav-link'
        });
    }
};

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // Hapus kelas 'active' dari semua tautan
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        
        // Tambahkan kelas 'active' ke tautan yang diklik
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("div[id]"); // Pilih semua div dengan ID
    const navLinks = document.querySelectorAll(".nav-link");

    // Fungsi untuk mengatur kelas 'active' pada tautan
    function setActiveLink(id) {
        navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        },
        {
            root: null, // viewport sebagai root
            threshold: 0.5, // 50% elemen harus terlihat
        }
    );

    // Pantau setiap div yang memiliki ID
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.bawah1, .bawah2, .bawah3, .bawah4, .kiri1, .kanan1');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});

const playButton = document.getElementById('playButton');
const music = document.getElementById('music');

// Tambahkan event listener pada tombol
playButton.addEventListener('click', function(event) {
    event.preventDefault();  // Mencegah link berpindah halaman (jika perlu)
    
    // Mainkan audio saat tombol diklik
    music.play().catch(error => {
        console.log('Autoplay gagal:', error);
    });
    
    // Jika ingin lanjutkan ke section tertentu setelah klik
    window.location.href = "#about";  // Ganti dengan navigasi halaman jika diperlukan
});

