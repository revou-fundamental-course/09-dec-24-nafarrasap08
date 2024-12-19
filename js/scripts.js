const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle class 'active'
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    console.log(navLinks); // Debug: Pastikan elemen ditemukan
    navLinks.classList.toggle('show'); // Tambahkan/menghapus class "show"
}
let currentSlide = 0; // Start with the first slide

const slides = document.querySelectorAll('.slide'); // Select all slides

// Function to change the slide
function changeSlide() {
    // Remove 'active' class from the current slide
    slides[currentSlide].classList.remove('active');

    // Increment the slide index
    currentSlide = (currentSlide + 1) % slides.length;

    // Add 'active' class to the next slide
    slides[currentSlide].classList.add('active');
}

// Change slide every 3 seconds (3000ms)
setInterval(changeSlide, 3000);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Mengambil nilai input dari form
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validasi Name
    if (name === '') {
        alert('Please enter your name');
        event.preventDefault(); // Mencegah pengiriman form
        return;
    }

    // Validasi Email (Format email)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '' || !emailPattern.test(email)) {
        alert('Please enter a valid email address');
        event.preventDefault(); // Mencegah pengiriman form
        return;
    }

    // Validasi Message
    if (message === '') {
        alert('Please enter your message');
        event.preventDefault(); // Mencegah pengiriman form
        return;
    }

    // Jika semua validasi lulus, tampilkan pesan sukses
    alert('Thank you for contacting us! Please check your email regularly for more information.');
});

document.getElementById("ourcountact").addEventListener("submit", function (e) {
    // Prevent form submission for validation
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name2").value.trim();
    const email = document.getElementById("email2").value.trim();
    const message = document.getElementById("message2").value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name
    if (name === "") {
        alert("Nama tidak boleh kosong.");
        return;
    }

    // Validate email
    if (email === "" || !emailPattern.test(email)) {
        alert("Masukkan alamat email yang valid.");
        return;
    }

    // Validate message
    if (message === "") {
        alert("Pesan tidak boleh kosong.");
        return;
    }

    // If all validations pass, submit the form
    alert("Formulir berhasil dikirim!");
    e.target.submit();
});

function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

