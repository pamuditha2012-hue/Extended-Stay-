document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.getElementById("gallery-grid");
    const loadingState = document.getElementById("gallery-loading");

    // --- Theme Toggle ---
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }

    themeToggle.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });

    // Strategy 1: Attempt to load sequentially named images (1.jpg, 2.jpg... or 1.png, 2.png...)
    let currentIdx = 1;
    let consecutiveFails = 0;
    const maxFails = 3; // Stop trying after failing 3 consecutive extensions/numbers
    const extensions = ['.jpg', '.png', '.jpeg'];

    let loadedCount = 0;

    function createGalleryItem(src) {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.style.animation = "fadeInDown 0.5s ease-out";

        const img = document.createElement("img");
        img.src = src;
        img.alt = "Gallery Image";
        img.loading = "lazy";

        item.appendChild(img);
        return item;
    }

    function tryLoadImage(index, extIndex) {
        if (extIndex >= extensions.length) {
            // All extensions failed for this index
            consecutiveFails++;
            if (consecutiveFails >= maxFails) {
                // We assume there are no more photos
                finishLoading();
                return;
            } else {
                // Try next number
                tryLoadImage(index + 1, 0);
            }
            return;
        }

        const ext = extensions[extIndex];
        const imgSrc = `photo/${index}${ext}`;

        const img = new Image();
        img.onload = () => {
            // Success! Add to gallery
            galleryGrid.appendChild(createGalleryItem(imgSrc));
            loadedCount++;
            consecutiveFails = 0; // reset fails

            // Try next number (start from first extension again)
            tryLoadImage(index + 1, 0);
        };
        img.onerror = () => {
            // Failed, try next extension for same index
            tryLoadImage(index, extIndex + 1);
        };

        img.src = imgSrc;
    }

    function finishLoading() {
        loadingState.style.display = "none";

        if (loadedCount === 0) {
            galleryGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; background: #fff; border-radius: 10px;">
                    <p>No photos found via automatic scan.</p>
                    <p style="color: #777; font-size: 0.9em; margin-top: 10px;">
                        Ensure your photos are placed in the <strong>photo</strong> folder and named as numbers (e.g., <strong>1.jpg, 2.jpg</strong>).<br>
                        Alternatively, use the "Or Load From Folder Manually" button.
                    </p>
                </div>
            `;
        }
    }

    // Start auto-scan
    tryLoadImage(1, 0);

    // --- Lightbox Functionality ---
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");
    const prevBtn = document.querySelector(".prev-lightbox");
    const nextBtn = document.querySelector(".next-lightbox");

    let currentImageIndex = 0;
    let allImages = [];

    function updateLightbox() {
        lightboxImg.style.opacity = "0";
        setTimeout(() => {
            lightboxImg.src = allImages[currentImageIndex];
            lightboxImg.style.opacity = "1";
        }, 150);
    }

    galleryGrid.addEventListener("click", (e) => {
        const item = e.target.closest(".gallery-item");
        if (!item) return;

        allImages = Array.from(galleryGrid.querySelectorAll("img")).map(img => img.src);
        const clickedImg = item.querySelector("img").src;
        currentImageIndex = allImages.indexOf(clickedImg);

        lightboxImg.src = clickedImg;
        lightbox.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    nextBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        updateLightbox();
    });

    prevBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        updateLightbox();
    });

    // Close on background click
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("active");
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // --- Terms and Conditions Modal ---
    const termsModal = document.getElementById("terms-modal");
    const termsLink = document.getElementById("terms-link");
    const closeTerms = document.querySelector(".close-modal");

    if (termsLink && termsModal) {
        termsLink.addEventListener("click", () => {
            termsModal.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        closeTerms.addEventListener("click", () => {
            termsModal.style.display = "none";
            document.body.style.overflow = "auto";
        });

        window.addEventListener("click", (event) => {
            if (event.target === termsModal) {
                termsModal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }

    // --- Policy Modal ---
    const policyModal = document.getElementById("policy-modal");
    const policyLink = document.getElementById("policy-link");
    const closePolicy = document.querySelector(".close-policy-modal");

    if (policyLink && policyModal) {
        policyLink.addEventListener("click", () => {
            policyModal.style.display = "block";
            document.body.style.overflow = "hidden";
        });

        if (closePolicy) {
            closePolicy.addEventListener("click", () => {
                policyModal.style.display = "none";
                document.body.style.overflow = "auto";
            });
        }

        window.addEventListener("click", (event) => {
            if (event.target === policyModal) {
                policyModal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }
});
