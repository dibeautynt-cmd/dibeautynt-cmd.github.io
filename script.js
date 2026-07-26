// =============================
// HEADER ĐỔI MÀU KHI CUỘN
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        document.querySelectorAll("nav a").forEach(link => {
            link.style.color = "#333";
        });

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

        document.querySelectorAll("nav a").forEach(link => {
            link.style.color = "#fff";
        });

    }

});

// =============================
// HIỆU ỨNG XUẤT HIỆN KHI CUỘN
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// =============================
// NÚT LÊN ĐẦU TRANG
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("active");

    } else {

        topBtn.classList.remove("active");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
