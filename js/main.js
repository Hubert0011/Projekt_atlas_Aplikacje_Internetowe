document.addEventListener("DOMContentLoaded", () => {
    

    //render modala
    const floraGrid = document.getElementById("flora-grid");
    const faunaGrid = document.getElementById("fauna-grid");
    
    const modal = document.getElementById("info-modal");
    const modalImg1 = document.getElementById("modal-img-1");
    const modalImg2 = document.getElementById("modal-img-2");
    const modalTitle = document.getElementById("modal-title");
    const modalLatin = document.getElementById("modal-latin");
    const modalDesc = document.getElementById("modal-desc");
    const btnCloseModal = document.querySelector(".close-modal");

    function renderCards(dataArray, container) {
        if (!container) return; 
        
        //render kart
        const cardsHTML = dataArray.map((item, index) => `
            <article class="card" data-category="${item.category}" data-index="${index}">
                <!-- Na karcie wyświetlamy tylko pierwsze (główne) zdjęcie -->
                <img src="${item.image}" alt="${item.name} w polskim lesie" loading="lazy">
                <div class="card-content">
                    <h2>${item.name}</h2>
                    <span class="latin-name">${item.latin}</span>
                    <!-- Króciutka zajawka opisu na karcie, reszta w modalu -->
                    <p>${item.desc.substring(0, 60)}...</p>
                </div>
            </article>
        `).join('');

        container.innerHTML = cardsHTML;

        //spiecie modala z kartami
        const cards = container.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.cursor = "pointer"; 
            card.addEventListener('click', () => {
                const index = card.getAttribute('data-index');
                const item = dataArray[index];
                
                modalTitle.textContent = item.name;
                modalLatin.textContent = item.latin;
                modalDesc.textContent = item.desc; 
                modalImg1.src = item.image;
                modalImg1.alt = item.name;
                if (item.image2) {
                    modalImg2.src = item.image2; 
                    modalImg2.alt = item.name + " zdjęcie drugie";
                    modalImg2.classList.remove('hidden');
                } else { 
                    modalImg2.src = "";
                    modalImg2.classList.add('hidden');
                }
                
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; 
            });
        });
    }

    if (floraGrid) renderCards(floraData, floraGrid);
    if (faunaGrid) renderCards(faunaData, faunaGrid);

    // Zamykanie modala
    if (modal) {
        const closeModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        };
        btnCloseModal.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-body')) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        });
    }

    //filtrowanie tresci
    function setupFilters(containerId, filtersContainerId) {
        const container = document.getElementById(containerId);
        const filtersContainer = document.getElementById(filtersContainerId);
        
        if (!container || !filtersContainer) return;

        const filterButtons = filtersContainer.querySelectorAll('.filter-btn');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');
                const allCards = container.querySelectorAll('.card');

                allCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    setupFilters("flora-grid", "flora-filters");
    setupFilters("fauna-grid", "fauna-filters");

    //hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
    }


    //walidacja formalurza
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); //blokada domsylnego wyslania

            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Funkcja pomocnicza do błędów
            const setError = (element, hasError) => {
                const errorMsg = element.nextElementSibling;
                if (hasError) {
                    element.classList.add('input-error');
                    errorMsg.classList.remove('hidden');
                    isValid = false;
                } else {
                    element.classList.remove('input-error');
                    errorMsg.classList.add('hidden');
                }
            };

            //nie puste
            setError(nameInput, nameInput.value.trim() === "");

            //poprawny wzor maila
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setError(emailInput, !emailPattern.test(emailInput.value.trim()));

            //min 10 znakow wiadomosci
            setError(messageInput, messageInput.value.trim().length < 10);

            if (isValid) {
                formStatus.textContent = 'Dziękujemy! Twoja wiadomość została poprawnie wysłana.';
                formStatus.classList.add('success');
                formStatus.classList.remove('hidden');
                
                contactForm.reset(); //czysczenie formularza 
                

                setTimeout(() => {
                    formStatus.classList.add('hidden');
                    formStatus.classList.remove('success');
                }, 5000);
            } else {
                formStatus.classList.add('hidden');
            }
        });
    }

    //zmiana dark/light
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('atlas-theme');

    const lightIconPath = 'assets/icons/dark-mode.svg';
    const darkIconPath = 'assets/icons/light-mode.svg';

    const updateIcon = (theme) => {
        if (themeToggleBtn) {
            const iconPath = theme === 'dark' ? lightIconPath : darkIconPath;
            themeToggleBtn.innerHTML = `<img src="${iconPath}" alt="Przełącz motyw" class="theme-icon">`;
        }
    };

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateIcon(currentTheme);
    } else {
        updateIcon('light');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let targetTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('atlas-theme', targetTheme);
            
            updateIcon(targetTheme);
        });
    }

});