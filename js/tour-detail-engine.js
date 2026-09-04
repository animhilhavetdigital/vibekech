/**
 * GlobeTrek Tour Details Dynamic Loader & Interactive Booking Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    const WHATSAPP_PHONE = '212659672184';

    function sendAutoNotification(data) {
        const notificationEmail = 'vibekechcontact@gmail.com';
        const endpoint = `https://formsubmit.co/ajax/${notificationEmail}`;
        
        try {
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            }).catch(err => console.log('Auto notification:', err));
        } catch (e) {
            console.log('Notification error:', e);
        }
    }

    function openWhatsApp(phone, message) {
        const cleanPhone = (phone || WHATSAPP_PHONE).replace(/[^0-9]/g, '');
        const encodedMsg = encodeURIComponent(message);
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const url = isMobile 
            ? `https://wa.me/${cleanPhone}?text=${encodedMsg}` 
            : `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMsg}`;
        window.open(url, '_blank');
        return url;
    }

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
    if (specPrice) {
        specPrice.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp`;
    }

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
                ${opt.name}
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

    // 10. Live Price / Option Selection Logic
    const peopleInput = document.getElementById('tour-book-people');
    const sidebarPriceDisplay = document.getElementById('sidebar-price-display');
    const sidebarPriceUnit = document.getElementById('sidebar-price-unit');
    const sidebarCalcTotal = document.getElementById('sidebar-calc-total');

    function calculateDetailTotal() {
        const people = parseInt(peopleInput ? peopleInput.value : '2', 10) || 1;
        const selectedOption = optSelect ? optSelect.options[optSelect.selectedIndex] : null;
        const optionName = selectedOption ? selectedOption.value : tour.title;

        if (sidebarPriceDisplay) {
            sidebarPriceDisplay.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp`;
        }
        if (sidebarPriceUnit) {
            sidebarPriceUnit.textContent = '/ Devis gratuit';
        }
        if (sidebarCalcTotal) {
            sidebarCalcTotal.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Sur Devis WhatsApp`;
        }

        return { people, optionName };
    }

    if (peopleInput) peopleInput.addEventListener('input', calculateDetailTotal);
    if (optSelect) optSelect.addEventListener('change', calculateDetailTotal);

    // Initial calculation
    calculateDetailTotal();

    // 11. WhatsApp Direct Booking Action
    const btnBookWa = document.getElementById('btn-book-tour-wa');
    if (btnBookWa) {
        btnBookWa.addEventListener('click', () => {
            const { people, optionName } = calculateDetailTotal();
            const dateVal = dateInput ? dateInput.value : 'Tomorrow';
            const hotelVal = document.getElementById('tour-book-hotel') ? document.getElementById('tour-book-hotel').value : 'Non spécifié';

            const message = 
`👋 *Bonjour VibeKech Marrakech !*
Je souhaite demander le tarif et réserver l'activité suivante :

📍 *Activité :* ${tour.title}
✨ *Formule :* ${optionName}
📅 *Date souhaitée :* ${dateVal}
👥 *Nombre de personnes :* ${people} Pax
🏨 *Lieu de prise en charge :* ${hotelVal}
💰 *Tarif :* Sur devis WhatsApp

Pouvez-vous m'envoyer le meilleur prix et confirmer la disponibilité s'il vous plaît ? Merci !`;

            openWhatsApp(WHATSAPP_PHONE, message);
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
            const { people, optionName } = calculateDetailTotal();
            const dateVal = dateInput ? dateInput.value : 'A confirmer';

            // Reset view to form
            const formStep = document.getElementById('dossier-step-form');
            const successStep = document.getElementById('dossier-step-success');
            if (formStep) formStep.style.display = 'block';
            if (successStep) successStep.style.display = 'none';

            if (dossierRefEl) dossierRefEl.textContent = 'REF: ' + currentDossierRef;
            if (dossierPaxDate) dossierPaxDate.textContent = `${people} Personnes • Date: ${dateVal}`;
            if (dossierTotalAmount) dossierTotalAmount.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp`;

            if (dossierItemsContainer) {
                dossierItemsContainer.innerHTML = `
                    <div class="dossier-item-row">
                        <div class="item-info">
                            <h5>${tour.title}</h5>
                            <p>${optionName} • ${tour.duration}</p>
                            <small style="color: #2e7d32; font-weight: 600;">✓ Prise en charge Hôtel/Riad & Chauffeur inclus</small>
                        </div>
                        <div class="item-price text-success" style="font-weight: 700;">Sur Devis WhatsApp</div>
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

            const { people, optionName } = calculateDetailTotal();
            const dateVal = dateInput ? dateInput.value : 'A convenir';
            const name = document.getElementById('client-name').value;
            const phone = document.getElementById('client-phone').value;
            const email = document.getElementById('client-email').value;
            const hotel = document.getElementById('client-hotel').value || 'À préciser';
            const notes = document.getElementById('client-notes').value || 'Aucune';

            const waText = 
`⭐ *NOUVEAU DOSSIER DE RÉSERVATION VIBEKECH* ⭐
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

💰 *TARIF :* Devis sur WhatsApp

Merci de me confirmer le meilleur tarif et la réservation !`;

            // Send Auto Notification Email in Background
            sendAutoNotification({
                "_subject": `🔔 NOUVEAU DOSSIER - ${tour.title} (${currentDossierRef})`,
                "Ref_Dossier": currentDossierRef,
                "Nom_Client": name,
                "Telephone_WhatsApp": phone,
                "Email_Client": email,
                "Riad_Hotel": hotel,
                "Date_Voyage": dateVal,
                "Participants": people + ' Pax',
                "Tour_Title": tour.title,
                "Option": optionName,
                "Remarques": notes || 'Aucune'
            });

            // Open WhatsApp with dossier
            const waUrl = openWhatsApp(WHATSAPP_PHONE, waText);

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

