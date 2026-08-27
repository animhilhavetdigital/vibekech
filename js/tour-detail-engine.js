/**
 * GlobeTrek Tour Details Dynamic Loader & Interactive Booking Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    const WHATSAPP_PHONE = '212600000000';

    // 1. Get Tour ID from URL (e.g., tour-detail.html?tour=ouarzazate)
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('tour') || 'agafay-sunset';

    // 2. Fetch Tour Data
    const tour = (typeof TOURS_DATABASE !== 'undefined' && TOURS_DATABASE[tourId]) 
        ? TOURS_DATABASE[tourId] 
        : TOURS_DATABASE['agafay-sunset'];

    if (!tour) return;

    // 3. Populate Page Header & Metadata
    document.title = tour.title + ' - GlobeTrek Marrakech';
    
    const badgeEl = document.getElementById('tour-badge');
    if (badgeEl) {
        badgeEl.textContent = tour.badge || 'RECOMMENDED';
        badgeEl.className = 'badge-tour-status ' + (tour.badgeClass || 'top-pick');
    }

    const titleEl = document.getElementById('tour-title');
    if (titleEl) titleEl.textContent = tour.title;

    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    if (breadcrumbTitle) breadcrumbTitle.textContent = tour.title;

    const breadcrumbCat = document.getElementById('breadcrumb-category');
    if (breadcrumbCat) breadcrumbCat.textContent = tour.category || 'Excursions';

    const locationEl = document.getElementById('tour-location');
    if (locationEl) locationEl.textContent = tour.location;

    const ratingEl = document.getElementById('tour-rating');
    if (ratingEl) ratingEl.textContent = tour.rating;

    const reviewsCountEl = document.getElementById('tour-reviews-count');
    if (reviewsCountEl) reviewsCountEl.textContent = tour.reviewsCount ? tour.reviewsCount.toLocaleString() : '1,200';

    const durationEl = document.getElementById('tour-duration');
    if (durationEl) durationEl.textContent = tour.duration;

    const pickupEl = document.getElementById('tour-pickup');
    if (pickupEl) pickupEl.textContent = tour.pickup;

    // 4. Populate Images Gallery
    if (tour.images && tour.images.length > 0) {
        const img1 = document.getElementById('gallery-img-1');
        const img2 = document.getElementById('gallery-img-2');
        const img3 = document.getElementById('gallery-img-3');
        if (img1 && tour.images[0]) img1.src = tour.images[0];
        if (img2 && tour.images[1]) img2.src = tour.images[1];
        else if (img2 && tour.images[0]) img2.src = tour.images[0];
        if (img3 && tour.images[2]) img3.src = tour.images[2];
        else if (img3 && tour.images[0]) img3.src = tour.images[0];
    }

    // 5. Populate Specifications Bar
    const specPrice = document.getElementById('spec-price');
    if (specPrice) specPrice.textContent = tour.basePrice + ' ' + tour.priceUnit;

    const specDuration = document.getElementById('spec-duration');
    if (specDuration) specDuration.textContent = tour.duration;

    const specGroup = document.getElementById('spec-group');
    if (specGroup) specGroup.textContent = tour.groupType || 'Private / Small Group';

    const specLanguages = document.getElementById('spec-languages');
    if (specLanguages) specLanguages.textContent = tour.languages || 'English, Français, العربية';

    // 6. Populate Overview & Highlights
    const overviewEl = document.getElementById('tour-overview');
    if (overviewEl) overviewEl.textContent = tour.overview;

    const highlightsEl = document.getElementById('tour-highlights');
    if (highlightsEl && tour.highlights) {
        highlightsEl.innerHTML = tour.highlights.map(h => `
            <li class="highlight-bullet">
                <span class="hl-check">✓</span>
                <span>${h}</span>
            </li>
        `).join('');
    }

    // 7. Populate Itinerary Timeline
    const itineraryEl = document.getElementById('tour-itinerary');
    if (itineraryEl && tour.itinerary) {
        itineraryEl.innerHTML = tour.itinerary.map(item => `
            <div class="timeline-step">
                <div class="timeline-time-badge">${item.time}</div>
                <div class="timeline-step-content">
                    <h5>${item.title}</h5>
                    <p>${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // 8. Populate Inclusions & Exclusions
    const includedEl = document.getElementById('tour-included');
    if (includedEl && tour.included) {
        includedEl.innerHTML = tour.included.map(inc => `
            <li><span style="font-weight: bold; margin-right: 6px;">✓</span> ${inc}</li>
        `).join('');
    }

    const excludedEl = document.getElementById('tour-excluded');
    if (excludedEl && tour.excluded) {
        excludedEl.innerHTML = tour.excluded.map(exc => `
            <li><span style="font-weight: bold; margin-right: 6px;">✗</span> ${exc}</li>
        `).join('');
    }

    // 9. Setup Sidebar Booking Form & Options
    const optSelect = document.getElementById('tour-book-option');
    if (optSelect && tour.bookingOptions) {
        optSelect.innerHTML = tour.bookingOptions.map(opt => `
            <option value="${opt.name}" data-price="${opt.price}" ${opt.selected ? 'selected' : ''}>
                ${opt.name} (${opt.price} ${tour.priceUnit})
            </option>
        `).join('');
    }

    // Default Date to tomorrow
    const dateInput = document.getElementById('tour-book-date');
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.value = tomorrow.toISOString().split('T')[0];
        dateInput.min = new Date().toISOString().split('T')[0];
    }

    // 10. Live Price Calculation Logic
    const peopleInput = document.getElementById('tour-book-people');
    const sidebarPriceDisplay = document.getElementById('sidebar-price-display');
    const sidebarPriceUnit = document.getElementById('sidebar-price-unit');
    const sidebarCalcTotal = document.getElementById('sidebar-calc-total');

    function calculateDetailTotal() {
        const people = parseInt(peopleInput ? peopleInput.value : '2', 10) || 1;
        const selectedOption = optSelect ? optSelect.options[optSelect.selectedIndex] : null;
        const unitPrice = selectedOption ? parseInt(selectedOption.getAttribute('data-price'), 10) : tour.basePrice;

        // Is price per person or per vehicle?
        let total = 0;
        if (tour.priceNote && (tour.priceNote.includes('per vehicle') || tour.priceNote.includes('per buggy') || tour.priceNote.includes('per group'))) {
            total = unitPrice;
            if (sidebarPriceUnit) sidebarPriceUnit.textContent = '/ transfer';
        } else {
            total = unitPrice * people;
            if (sidebarPriceUnit) sidebarPriceUnit.textContent = '/ person';
        }

        if (sidebarPriceDisplay) sidebarPriceDisplay.textContent = unitPrice.toLocaleString() + ' ' + tour.priceUnit;
        if (sidebarCalcTotal) sidebarCalcTotal.textContent = total.toLocaleString() + ' ' + tour.priceUnit;

        return { people, unitPrice, total, optionName: selectedOption ? selectedOption.value : tour.title };
    }

    if (peopleInput) peopleInput.addEventListener('input', calculateDetailTotal);
    if (optSelect) optSelect.addEventListener('change', calculateDetailTotal);

    // Initial calculation
    calculateDetailTotal();

    // 11. WhatsApp Direct Booking Action
    const btnBookWa = document.getElementById('btn-book-tour-wa');
    if (btnBookWa) {
        btnBookWa.addEventListener('click', () => {
            const { people, total, optionName } = calculateDetailTotal();
            const dateVal = dateInput ? dateInput.value : 'Tomorrow';
            const hotelVal = document.getElementById('tour-book-hotel') ? document.getElementById('tour-book-hotel').value : 'To be specified';

            const message = 
`👋 *Bonjour GlobeTrek Marrakech !*
Je souhaite réserver l'activité suivante :

📍 *Activité :* ${tour.title}
✨ *Formule :* ${optionName}
📅 *Date souhaitée :* ${dateVal}
👥 *Nombre de personnes :* ${people} Pax
🏨 *Lieu de prise en charge :* ${hotelVal || 'Non spécifié'}
💰 *Prix Estimé :* ${total.toLocaleString()} ${tour.priceUnit}

Pouvez-vous me confirmer la disponibilité s'il vous plaît ? Merci !`;

            window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
        });
    }

    // 12. Modal Booking Dossier Populator & Checkout Submission
    const btnOpenDossier = document.getElementById('btn-open-tour-dossier');
    const dossierRefEl = document.getElementById('dossier-ref-number');
    const dossierItemsContainer = document.getElementById('modal-dossier-items-container');
    const dossierPaxDate = document.getElementById('modal-dossier-pax-date');
    const dossierTotalAmount = document.getElementById('modal-dossier-total-amount');

    let currentDossierRef = '#GT-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);

    if (btnOpenDossier) {
        btnOpenDossier.addEventListener('click', () => {
            const { people, total, optionName } = calculateDetailTotal();
            const dateVal = dateInput ? dateInput.value : 'A confirmer';

            // Reset view to form
            const formStep = document.getElementById('dossier-step-form');
            const successStep = document.getElementById('dossier-step-success');
            if (formStep) formStep.style.display = 'block';
            if (successStep) successStep.style.display = 'none';

            if (dossierRefEl) dossierRefEl.textContent = 'REF: ' + currentDossierRef;
            if (dossierPaxDate) dossierPaxDate.textContent = `${people} Personnes • Date: ${dateVal}`;
            if (dossierTotalAmount) dossierTotalAmount.textContent = total.toLocaleString() + ' ' + tour.priceUnit;

            if (dossierItemsContainer) {
                dossierItemsContainer.innerHTML = `
                    <div class="dossier-item-row">
                        <div class="item-info">
                            <h5>${tour.title}</h5>
                            <p>${optionName} • ${tour.duration}</p>
                            <small style="color: #2e7d32; font-weight: 600;">✓ Prise en charge Hôtel/Riad & Chauffeur inclus</small>
                        </div>
                        <div class="item-price">${total.toLocaleString()} ${tour.priceUnit}</div>
                    </div>
                `;
            }

            // Sync hotel field if filled
            const preHotel = document.getElementById('tour-book-hotel') ? document.getElementById('tour-book-hotel').value : '';
            const clientHotel = document.getElementById('client-hotel');
            if (clientHotel && preHotel) clientHotel.value = preHotel;
        });
    }

    // Handle Dossier Submission
    const checkoutForm = document.getElementById('dossier-checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const { people, total, optionName } = calculateDetailTotal();
            const dateVal = dateInput ? dateInput.value : 'A convenir';
            const name = document.getElementById('client-name').value;
            const phone = document.getElementById('client-phone').value;
            const email = document.getElementById('client-email').value;
            const hotel = document.getElementById('client-hotel').value || 'À préciser';
            const notes = document.getElementById('client-notes').value || 'Aucune';

            const waText = 
`⭐ *NOUVEAU DOSSIER DE RÉSERVATION GLOBETREK* ⭐
🔖 *Référence :* ${currentDossierRef}
📅 *Date :* ${dateVal}

👤 *INFORMATIONS CLIENT :*
- *Nom :* ${name}
- *Téléphone / WhatsApp :* ${phone}
- *Email :* ${email}
- *Riad / Hôtel :* ${hotel}
- *Notes / Vol :* ${notes}

📋 *DÉTAIL DE LA PRESTATION :*
- *Activité :* ${tour.title}
- *Option :* ${optionName}
- *Nombre de personnes :* ${people} Pax
- *Prise en charge :* Inclus A/R

💰 *MONTANT TOTAL SUR PLACE :* ${total.toLocaleString()} ${tour.priceUnit}

Merci de confirmer la réservation dès réception !`;

            // Open WhatsApp with dossier
            const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;
            window.open(waUrl, '_blank');

            // Switch to Step 2 Confirmation View
            const formStep = document.getElementById('dossier-step-form');
            const successStep = document.getElementById('dossier-step-success');
            const successRef = document.getElementById('success-ref-display');
            const successWaLink = document.getElementById('success-whatsapp-link');

            if (formStep) formStep.style.display = 'none';
            if (successStep) successStep.style.display = 'block';
            if (successRef) successRef.textContent = 'Dossier ' + currentDossierRef;
            if (successWaLink) successWaLink.href = waUrl;
        });
    }
});
