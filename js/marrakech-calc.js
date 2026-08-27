/**
 * Marrakech GlobeTrek Travel Interactive Calculator & Services Engine
 */

const WHATSAPP_PHONE = '212600000000';

document.addEventListener('DOMContentLoaded', function() {
    initDefaultDates();
    initCalcTabs();
    initTransferCalc();
    initCircuitCalc();
    initAirportCalc();
    initCityGuideCalc();
    initQuadCalc();
    initBalloonCalc();
    initGolfCalc();
    initBundleCalc();
    initFaqAccordion();
    initTailorMadeForm();
});

// Set default date to tomorrow for all date inputs if empty
function initDefaultDates() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const defaultDate = `${yyyy}-${mm}-${dd}`;

    const dateInputs = document.querySelectorAll('.calc-input[type="date"]');
    dateInputs.forEach(input => {
        if (!input.value) {
            input.value = defaultDate;
            input.min = defaultDate;
        }
    });
}

// WhatsApp redirect helper
function sendWhatsAppBooking(title, details, total) {
    let msg = `*🌟 ${title} - Marrakech GlobeTrek Booking*\n\n`;
    for (const [key, val] of Object.entries(details)) {
        if (val) {
            msg += `• *${key}:* ${val}\n`;
        }
    }
    msg += `\n💰 *Total Price:* ${total}\n`;
    msg += `\n👉 Please confirm my reservation and available pickup details.`;

    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, '_blank');
}

// Tab switching
function initCalcTabs() {
    const tabBtns = document.querySelectorAll('.calc-tab-btn');
    const panels = document.querySelectorAll('.calc-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            tabBtns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            this.classList.add('active');
            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// 1. Medina to Destination Transfer Calculator
function initTransferCalc() {
    const fromSelect = document.getElementById('transfer-from');
    const toSelect = document.getElementById('transfer-to');
    const dateInput = document.getElementById('transfer-date');
    const peopleInput = document.getElementById('transfer-people');
    const vehicleSelect = document.getElementById('transfer-vehicle');
    const priceDisplay = document.getElementById('transfer-price-val');
    const bookBtn = document.getElementById('btn-book-transfer');

    const rates = {
        'Ourika Valley': 350,
        'Essaouira Beach': 650,
        'Ouarzazate': 900,
        'Agadir': 1100,
        'Casablanca': 1200,
        'Merzouga Desert': 2400
    };

    function updatePrice() {
        if (!toSelect || !priceDisplay) return;
        const dest = toSelect.value;
        let base = rates[dest] || 400;
        
        const vehicle = vehicleSelect ? vehicleSelect.value : 'van';
        if (vehicle === 'minibus') base *= 1.4;
        if (vehicle === 'vip') base *= 1.8;

        const totalFormatted = Math.round(base) + ' DH';
        priceDisplay.innerText = totalFormatted;
        return totalFormatted;
    }

    if (toSelect) toSelect.addEventListener('change', updatePrice);
    if (vehicleSelect) vehicleSelect.addEventListener('change', updatePrice);
    updatePrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const total = updatePrice();
            sendWhatsAppBooking('Medina Transfer Reservation', {
                'From': fromSelect ? fromSelect.value : 'Marrakech',
                'To': toSelect ? toSelect.value : 'Ourika',
                'Date': dateInput ? dateInput.value : 'Upcoming',
                'Persons': (peopleInput ? peopleInput.value : '2') + ' pax',
                'Vehicle': vehicleSelect ? vehicleSelect.options[vehicleSelect.selectedIndex].text : 'Minivan'
            }, total);
        });
    }
}

// 2. Multi-City Circuit Tour Builder (Base 1200 DH / day)
function initCircuitCalc() {
    const cityCheckboxes = document.querySelectorAll('.circuit-city-cb');
    const dateInput = document.getElementById('circuit-date');
    const daysInput = document.getElementById('circuit-days');
    const peopleInput = document.getElementById('circuit-people');
    const priceDisplay = document.getElementById('circuit-price-val');
    const bookBtn = document.getElementById('btn-book-circuit');

    function updateCircuitPrice() {
        if (!priceDisplay) return;
        const days = parseInt(daysInput ? daysInput.value : 1) || 1;
        const people = parseInt(peopleInput ? peopleInput.value : 1) || 1;

        let total = days * 1200;
        if (people > 6) {
            total += (people - 6) * 150 * days;
        }

        const totalFormatted = total.toLocaleString() + ' DH';
        priceDisplay.innerText = totalFormatted;
        return totalFormatted;
    }

    cityCheckboxes.forEach(cb => cb.addEventListener('change', updateCircuitPrice));
    if (daysInput) daysInput.addEventListener('input', updateCircuitPrice);
    if (peopleInput) peopleInput.addEventListener('input', updateCircuitPrice);
    updateCircuitPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const total = updateCircuitPrice();
            const selectedCities = [];
            cityCheckboxes.forEach(cb => {
                if (cb.checked) selectedCities.push(cb.value);
            });

            sendWhatsAppBooking('Multi-City Circuit Tour', {
                'Cities': selectedCities.join(' → ') || 'Marrakech & Sahara',
                'Start Date': dateInput ? dateInput.value : 'Upcoming',
                'Duration': (daysInput ? daysInput.value : '3') + ' Days',
                'Group Size': (peopleInput ? peopleInput.value : '2') + ' Travelers'
            }, total);
        });
    }
}

// 3. Airport Transfer (Round trip / One way)
function initAirportCalc() {
    const transferType = document.getElementById('airport-type');
    const destination = document.getElementById('airport-dest');
    const dateInput = document.getElementById('airport-date');
    const peopleInput = document.getElementById('airport-people');
    const priceDisplay = document.getElementById('airport-price-val');
    const bookBtn = document.getElementById('btn-book-airport');

    function updateAirportPrice() {
        if (!priceDisplay) return;
        let base = 200;

        if (destination && destination.value === 'palmeraie') {
            base = 250;
        } else if (destination && destination.value === 'agafay') {
            base = 500;
        }

        if (transferType && transferType.value === 'roundtrip') {
            base = base * 1.85;
        }

        const totalFormatted = Math.round(base) + ' DH';
        priceDisplay.innerText = totalFormatted;
        return totalFormatted;
    }

    if (transferType) transferType.addEventListener('change', updateAirportPrice);
    if (destination) destination.addEventListener('change', updateAirportPrice);
    updateAirportPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const total = updateAirportPrice();
            sendWhatsAppBooking('Airport Transfer Booking', {
                'Type': transferType ? transferType.options[transferType.selectedIndex].text : 'One Way',
                'Area': destination ? destination.options[destination.selectedIndex].text : 'Marrakech Medina',
                'Flight Date': dateInput ? dateInput.value : 'Upcoming',
                'Passengers': (peopleInput ? peopleInput.value : '2') + ' pax'
            }, total);
        });
    }
}

// 4. Marrakech City Guide Tour
function initCityGuideCalc() {
    const optionSelect = document.getElementById('guide-option');
    const durationSelect = document.getElementById('guide-duration');
    const dateInput = document.getElementById('guide-date');
    const peopleInput = document.getElementById('guide-people');
    const priceDisplay = document.getElementById('guide-price-val');
    const bookBtn = document.getElementById('btn-book-guide');

    function updateGuidePrice() {
        if (!priceDisplay) return;
        let base = 300;

        const opt = optionSelect ? optionSelect.value : 'with-guide';
        const dur = durationSelect ? durationSelect.value : 'half';

        if (opt === 'with-guide') {
            base += 250;
        }
        if (dur === 'full') {
            base *= 1.7;
        }

        const totalFormatted = Math.round(base) + ' DH';
        priceDisplay.innerText = totalFormatted;
        return totalFormatted;
    }

    if (optionSelect) optionSelect.addEventListener('change', updateGuidePrice);
    if (durationSelect) durationSelect.addEventListener('change', updateGuidePrice);
    updateGuidePrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const total = updateGuidePrice();
            sendWhatsAppBooking('Marrakech Guided City Tour', {
                'Service': optionSelect ? optionSelect.options[optionSelect.selectedIndex].text : 'With Guide',
                'Duration': durationSelect ? durationSelect.options[durationSelect.selectedIndex].text : 'Half Day',
                'Tour Date': dateInput ? dateInput.value : 'Upcoming',
                'People': (peopleInput ? peopleInput.value : '2') + ' pax'
            }, total);
        });
    }
}

// 5. Quad Biking Adventure
function initQuadCalc() {
    const packageSelect = document.getElementById('quad-package');
    const dateInput = document.getElementById('quad-date');
    const peopleInput = document.getElementById('quad-people');
    const slotSelect = document.getElementById('quad-slot');
    const priceDisplay = document.getElementById('quad-price-val');
    const bookBtn = document.getElementById('btn-book-quad');

    const rates = {
        'palmeraie': 450,
        'agafay-sunset': 700,
        'agafay-dinner': 900,
        'buggy-safari': 1200
    };

    function updateQuadPrice() {
        if (!priceDisplay) return;
        const pkg = packageSelect ? packageSelect.value : 'palmeraie';
        const rate = rates[pkg] || 450;
        const count = parseInt(peopleInput ? peopleInput.value : 1) || 1;

        let total = rate * count;
        const totalFormatted = total.toLocaleString() + ' DH';
        priceDisplay.innerText = totalFormatted;
        return totalFormatted;
    }

    if (packageSelect) packageSelect.addEventListener('change', updateQuadPrice);
    if (peopleInput) peopleInput.addEventListener('input', updateQuadPrice);
    updateQuadPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const total = updateQuadPrice();
            sendWhatsAppBooking('Quad & Buggy Biking Reservation', {
                'Package': packageSelect ? packageSelect.options[packageSelect.selectedIndex].text : 'Palmeraie Quad',
                'Date': dateInput ? dateInput.value : 'Upcoming',
                'Quads / Persons': (peopleInput ? peopleInput.value : '2') + ' pax',
                'Time Slot': slotSelect ? slotSelect.value : 'Sunset'
            }, total);
        });
    }
}

// 6. Hot Air Balloon Sunrise
function initBalloonCalc() {
    const packageSelect = document.getElementById('balloon-package');
    const dateInput = document.getElementById('balloon-date');
    const peopleInput = document.getElementById('balloon-people');
    const pickupSelect = document.getElementById('balloon-pickup');
    const priceDisplay = document.getElementById('balloon-price-val');
    const bookBtn = document.getElementById('btn-book-balloon');

    const rates = {
        'classic': 1800,
        'royal': 2400,
        'vip': 3200
    };

    function updateBalloonPrice() {
        if (!priceDisplay) return;
        const pkg = packageSelect ? packageSelect.value : 'classic';
        const rate = rates[pkg] || 1800;
        const count = parseInt(peopleInput ? peopleInput.value : 1) || 1;

        let total = rate * count;
        const totalFormatted = total.toLocaleString() + ' DH';
        priceDisplay.innerText = totalFormatted;
        return totalFormatted;
    }

    if (packageSelect) packageSelect.addEventListener('change', updateBalloonPrice);
    if (peopleInput) peopleInput.addEventListener('input', updateBalloonPrice);
    updateBalloonPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const total = updateBalloonPrice();
            sendWhatsAppBooking('Hot Air Balloon Flight Reservation', {
                'Package': packageSelect ? packageSelect.options[packageSelect.selectedIndex].text : 'Classic Sunrise Flight',
                'Flight Date': dateInput ? dateInput.value : 'Upcoming',
                'Passengers': (peopleInput ? peopleInput.value : '2') + ' Passengers',
                'Pickup Area': pickupSelect ? pickupSelect.value : 'Marrakech Medina'
            }, total);
        });
    }
}

// 7. Golf Experience
function initGolfCalc() {
    const courseSelect = document.getElementById('golf-course');
    const dateInput = document.getElementById('golf-date');
    const peopleInput = document.getElementById('golf-people');
    const addonsSelect = document.getElementById('golf-addons');
    const priceDisplay = document.getElementById('golf-price-val');
    const bookBtn = document.getElementById('btn-book-golf');

    function updateGolfPrice() {
        if (!priceDisplay) return;
        const course = courseSelect ? courseSelect.value : 'Royal Golf Marrakech';
        let baseRate = 850;
        if (course.includes('Amelkis')) baseRate = 950;
        if (course.includes('Assoufid')) baseRate = 1200;
        if (course.includes('PalmGolf')) baseRate = 900;

        const addon = addonsSelect ? addonsSelect.value : 'none';
        if (addon === 'buggy') baseRate += 300;
        if (addon === 'full') baseRate += 550;

        const players = parseInt(peopleInput ? peopleInput.value : 1) || 1;
        let total = baseRate * players;

        const totalFormatted = total.toLocaleString() + ' DH';
        priceDisplay.innerText = totalFormatted;
        return totalFormatted;
    }

    if (courseSelect) courseSelect.addEventListener('change', updateGolfPrice);
    if (addonsSelect) addonsSelect.addEventListener('change', updateGolfPrice);
    if (peopleInput) peopleInput.addEventListener('input', updateGolfPrice);
    updateGolfPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const total = updateGolfPrice();
            sendWhatsAppBooking('Golf Booking Reservation', {
                'Course': courseSelect ? courseSelect.value : 'Royal Golf Marrakech',
                'Game Date': dateInput ? dateInput.value : 'Upcoming',
                'Players': (peopleInput ? peopleInput.value : '2') + ' Players',
                'Add-ons': addonsSelect ? addonsSelect.options[addonsSelect.selectedIndex].text : 'Green fee only'
            }, total);
        });
    }
}

// 8. Multi-Service Combo Package Builder Section (-15% OFF)
function initBundleCalc() {
    const bundleCheckboxes = document.querySelectorAll('.combo-section-cb');
    const dateInput = document.getElementById('combo-date');
    const peopleInput = document.getElementById('combo-people');
    const hotelInput = document.getElementById('combo-hotel');
    const countDisplay = document.getElementById('combo-count');
    const selectedListEl = document.getElementById('combo-selected-list');
    const subtotalDisplay = document.getElementById('combo-subtotal-val');
    const discountRow = document.getElementById('combo-discount-row');
    const discountDisplay = document.getElementById('combo-discount-val');
    const finalDisplay = document.getElementById('combo-final-val');
    const openDossierBtn = document.getElementById('btn-open-dossier');

    function calculateItemDetails(serviceId, people) {
        let name = '';
        let subOptionText = '';
        let itemTotal = 0;

        switch (serviceId) {
            case 'airport': {
                const typeEl = document.getElementById('combo-opt-airport-type');
                const destEl = document.getElementById('combo-opt-airport-dest');
                const flightEl = document.getElementById('combo-opt-airport-flight');
                let base = 200;
                if (destEl && destEl.value === 'palmeraie') base += 50;
                if (destEl && destEl.value === 'agafay') base += 300;
                if (typeEl && typeEl.value === 'roundtrip') base *= 1.85;

                itemTotal = Math.round(base);
                name = 'VIP Airport Transfer (' + (destEl ? destEl.options[destEl.selectedIndex].text : 'Medina') + ')';
                subOptionText = (typeEl ? typeEl.options[typeEl.selectedIndex].text : 'One Way') + (flightEl && flightEl.value ? ' • Vol: ' + flightEl.value : '');
                
                const tagEl = document.getElementById('price-tag-airport');
                if (tagEl) tagEl.innerText = '+' + itemTotal + ' DH';
                break;
            }
            case 'transfer': {
                const fromEl = document.getElementById('combo-opt-transfer-from');
                const destEl = document.getElementById('combo-opt-transfer-dest');
                const vehEl = document.getElementById('combo-opt-transfer-vehicle');
                const destPrices = { 'Ourika Valley': 350, 'Essaouira Beach': 650, 'Ouarzazate Kasbahs': 900, 'Agadir Coast': 1100, 'Casablanca': 1200, 'Merzouga Desert': 2400 };
                const chosenDest = destEl ? destEl.value : 'Ourika Valley';
                let base = destPrices[chosenDest] || 350;
                if (vehEl && vehEl.value === 'minibus') base *= 1.4;
                if (vehEl && vehEl.value === 'vip') base *= 1.8;

                itemTotal = Math.round(base);
                name = 'Medina Transfer (' + (fromEl ? fromEl.value : 'Marrakech') + ' → ' + chosenDest + ')';
                subOptionText = 'Véhicule: ' + (vehEl ? vehEl.options[vehEl.selectedIndex].text : 'Minivan');

                const tagEl = document.getElementById('price-tag-transfer');
                if (tagEl) tagEl.innerText = '+' + itemTotal + ' DH';
                break;
            }
            case 'circuit': {
                const routeEl = document.getElementById('combo-opt-circuit-route');
                const daysEl = document.getElementById('combo-opt-circuit-days');
                const vehEl = document.getElementById('combo-opt-circuit-veh');

                const days = parseInt(daysEl ? daysEl.value : 3) || 3;
                let dailyRate = (vehEl && vehEl.value.includes('VIP')) ? 1400 : 1200;
                itemTotal = days * dailyRate;

                name = 'Multi-City Circuit (' + (routeEl ? routeEl.value : 'Morocco Tour') + ')';
                subOptionText = days + ' Jours • ' + (vehEl ? vehEl.value : '4x4') + ' avec chauffeur privé';

                const tagEl = document.getElementById('price-tag-circuit');
                if (tagEl) tagEl.innerText = '+' + itemTotal.toLocaleString() + ' DH';
                break;
            }
            case 'guide': {
                const typeEl = document.getElementById('combo-opt-guide-type');
                const durEl = document.getElementById('combo-opt-guide-dur');
                let base = 550;
                if (typeEl && typeEl.value === 'Private Driver Only') base = 300;
                if (durEl && durEl.value.includes('Full Day')) base *= 1.7;

                itemTotal = Math.round(base);
                name = 'Historical Medina Guided Tour';
                subOptionText = (typeEl ? typeEl.value : 'With Guide') + ' • ' + (durEl ? durEl.value : 'Half Day');

                const tagEl = document.getElementById('price-tag-guide');
                if (tagEl) tagEl.innerText = '+' + itemTotal + ' DH';
                break;
            }
            case 'quad': {
                const pkgEl = document.getElementById('combo-opt-quad-pkg');
                const slotEl = document.getElementById('combo-opt-quad-slot');
                const pkgRates = { 'Palmeraie Quad 2h': 450, 'Agafay Sunset Quad + Camel': 700, 'Agafay Quad + Camel + Dinner Show': 900, 'Buggy 2-Seater Safari': 1200 };
                const chosenPkg = pkgEl ? pkgEl.value : 'Agafay Sunset Quad + Camel';
                const rate = pkgRates[chosenPkg] || 700;

                // If Palmeraie or Buggy, charged per unit, else per pax
                if (chosenPkg.includes('Buggy')) {
                    itemTotal = rate * Math.ceil(people / 2);
                } else if (chosenPkg.includes('Palmeraie')) {
                    itemTotal = rate * people;
                } else {
                    itemTotal = rate * people;
                }

                name = chosenPkg;
                subOptionText = 'Taux: ' + (slotEl ? slotEl.value : 'Sunset') + ' • ' + people + ' Pax';

                const tagEl = document.getElementById('price-tag-quad');
                if (tagEl) tagEl.innerHTML = '+' + rate.toLocaleString() + ' DH<small>/' + (chosenPkg.includes('Buggy') ? 'buggy' : 'pax') + '</small>';
                break;
            }
            case 'balloon': {
                const pkgEl = document.getElementById('combo-opt-balloon-pkg');
                const rates = { 'Classic Sunrise + Berber Breakfast': 1800, 'Royal Compartment Sunrise Flight': 2400, 'VIP Private Basket + Champagne': 3200 };
                const chosen = pkgEl ? pkgEl.value : 'Classic Sunrise + Berber Breakfast';
                const rate = rates[chosen] || 1800;

                itemTotal = rate * people;
                name = 'Hot Air Balloon Sunrise Flight (' + chosen + ')';
                subOptionText = people + ' Passagers • Transport Riad inclus';

                const tagEl = document.getElementById('price-tag-balloon');
                if (tagEl) tagEl.innerHTML = '+' + rate.toLocaleString() + ' DH<small>/pax</small>';
                break;
            }
            case 'sahara': {
                const stdEl = document.getElementById('combo-opt-sahara-std');
                const rate = (stdEl && stdEl.value.includes('Royal')) ? 3400 : 2400;

                itemTotal = rate * people;
                name = '3-Day Merzouga Sahara Desert Tour';
                subOptionText = (stdEl ? stdEl.options[stdEl.selectedIndex].text : 'Luxury Camp') + ' • ' + people + ' Pax';

                const tagEl = document.getElementById('price-tag-sahara');
                if (tagEl) tagEl.innerHTML = '+' + rate.toLocaleString() + ' DH<small>/pax</small>';
                break;
            }
            case 'golf': {
                const courseEl = document.getElementById('combo-opt-golf-course');
                const addonEl = document.getElementById('combo-opt-golf-addon');
                const coursePrices = { 'Royal Golf Marrakech': 850, 'Amelkis Golf Club': 950, 'Assoufid Golf Club': 1200, 'PalmGolf Palmeraie': 900 };
                const chosenCourse = courseEl ? courseEl.value : 'Royal Golf Marrakech';
                let rate = coursePrices[chosenCourse] || 850;
                if (addonEl && addonEl.value.includes('Buggy & Clubs')) rate += 550;
                else if (addonEl && addonEl.value.includes('Buggy')) rate += 300;

                itemTotal = rate * people;
                name = 'Golf: ' + chosenCourse;
                subOptionText = (addonEl ? addonEl.value : 'Green fee') + ' • ' + people + ' Joueurs';

                const tagEl = document.getElementById('price-tag-golf');
                if (tagEl) tagEl.innerHTML = '+' + rate.toLocaleString() + ' DH<small>/joueur</small>';
                break;
            }
        }

        return { name, subOptionText, itemTotal };
    }

    function updateBundleSection() {
        if (!finalDisplay) return;
        const people = parseInt(peopleInput ? peopleInput.value : 1) || 1;
        let subtotal = 0;
        let selectedCount = 0;
        const detailedItems = [];

        if (selectedListEl) selectedListEl.innerHTML = '';

        bundleCheckboxes.forEach(cb => {
            const card = cb.closest('.combo-service-card');
            const serviceId = card ? card.getAttribute('data-service-id') : '';

            if (cb.checked) {
                selectedCount++;
                if (card) card.classList.add('active');

                const details = calculateItemDetails(serviceId, people);
                subtotal += details.itemTotal;
                detailedItems.push(details);

                if (selectedListEl) {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${details.name}</strong> <small style="color:#777;">(${details.itemTotal.toLocaleString()} DH)</small>`;
                    selectedListEl.appendChild(li);
                }
            } else {
                if (card) card.classList.remove('active');
            }
        });

        if (countDisplay) countDisplay.innerText = selectedCount;
        if (subtotalDisplay) subtotalDisplay.innerText = subtotal.toLocaleString() + ' DH';

        // 15% discount for 2 or more selected services
        let discount = 0;
        let finalPrice = subtotal;
        if (selectedCount >= 2) {
            discount = Math.round(subtotal * 0.15);
            finalPrice = subtotal - discount;
            if (discountRow) discountRow.style.display = 'flex';
            if (discountDisplay) discountDisplay.innerText = '-' + discount.toLocaleString() + ' DH';
        } else {
            if (discountRow) discountRow.style.display = 'none';
        }

        const totalFormatted = Math.round(finalPrice).toLocaleString() + ' DH';
        if (finalDisplay) finalDisplay.innerText = totalFormatted;

        return { totalFormatted, selectedCount, subtotal, discount, detailedItems };
    }

    bundleCheckboxes.forEach(cb => {
        cb.addEventListener('change', updateBundleSection);
    });

    const allSubSelects = document.querySelectorAll('.combo-opt');
    allSubSelects.forEach(sel => {
        sel.addEventListener('change', updateBundleSection);
    });

    if (peopleInput) peopleInput.addEventListener('input', updateBundleSection);
    updateBundleSection();

    // Initialize the Booking Dossier Checkout Modal
    if (openDossierBtn) {
        openDossierBtn.addEventListener('click', function() {
            populateDossierModal();
        });
    }

    function populateDossierModal() {
        const { totalFormatted, detailedItems, selectedCount, discount, subtotal } = updateBundleSection();
        const dateVal = dateInput ? dateInput.value : 'Upcoming';
        const peopleVal = peopleInput ? peopleInput.value : '2';
        const hotelVal = hotelInput && hotelInput.value ? hotelInput.value : '';

        // Generate unique reference
        const refId = 'GT-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
        const refTag = document.getElementById('dossier-ref-number');
        if (refTag) refTag.innerText = 'REF: #' + refId;

        const paxDateEl = document.getElementById('modal-dossier-pax-date');
        if (paxDateEl) paxDateEl.innerText = `${peopleVal} Voyageurs • Date: ${dateVal}`;

        const hotelClientInput = document.getElementById('client-hotel');
        if (hotelClientInput && hotelVal) hotelClientInput.value = hotelVal;

        const totalAmountEl = document.getElementById('modal-dossier-total-amount');
        if (totalAmountEl) totalAmountEl.innerText = totalFormatted;

        const itemsContainer = document.getElementById('modal-dossier-items-container');
        if (itemsContainer) {
            itemsContainer.innerHTML = '';
            if (detailedItems.length === 0) {
                itemsContainer.innerHTML = '<div class="text-muted p-2">Aucun service sélectionné. Veuillez cocher vos activités.</div>';
            } else {
                detailedItems.forEach(item => {
                    const row = document.createElement('div');
                    row.className = 'dossier-item-row';
                    row.innerHTML = `
                        <div>
                            <span class="dossier-item-name">${item.name}</span>
                            <span class="dossier-item-sub">${item.subOptionText}</span>
                        </div>
                        <span class="dossier-item-price">${item.itemTotal.toLocaleString()} DH</span>
                    `;
                    itemsContainer.appendChild(row);
                });

                if (selectedCount >= 2) {
                    const discountRow = document.createElement('div');
                    discountRow.className = 'dossier-item-row';
                    discountRow.style.color = '#2e7d32';
                    discountRow.innerHTML = `
                        <div>
                            <span class="dossier-item-name" style="color:#2e7d32;">🎉 Remise Spéciale Pack Multi-Services (15% OFF)</span>
                        </div>
                        <span class="dossier-item-price" style="color:#2e7d32;">-${discount.toLocaleString()} DH</span>
                    `;
                    itemsContainer.appendChild(discountRow);
                }
            }
        }

        // Reset step view
        const stepForm = document.getElementById('dossier-step-form');
        const stepSuccess = document.getElementById('dossier-step-success');
        if (stepForm) stepForm.style.display = 'block';
        if (stepSuccess) stepSuccess.style.display = 'none';
    }

    // Checkout Form Submit -> WhatsApp & Success confirmation
    const checkoutForm = document.getElementById('dossier-checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const refId = document.getElementById('dossier-ref-number').innerText.replace('REF: #', '');
            const clientName = document.getElementById('client-name') ? document.getElementById('client-name').value : '';
            const clientPhone = document.getElementById('client-phone') ? document.getElementById('client-phone').value : '';
            const clientEmail = document.getElementById('client-email') ? document.getElementById('client-email').value : '';
            const clientHotel = document.getElementById('client-hotel') ? document.getElementById('client-hotel').value : 'To be confirmed';
            const clientNotes = document.getElementById('client-notes') ? document.getElementById('client-notes').value : '';

            const dateVal = dateInput ? dateInput.value : 'Upcoming';
            const peopleVal = peopleInput ? peopleInput.value : '2';
            const { totalFormatted, detailedItems, discount, selectedCount } = updateBundleSection();

            // Format comprehensive structured WhatsApp Booking Dossier
            let message = `*📋 NOUVEAU DOSSIER DE RÉSERVATION (#${refId})*\n`;
            message += `*Agence GlobeTrek Marrakech Travel*\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

            message += `👤 *INFORMATIONS CLIENT:*\n`;
            message += `• *Nom & Prénom:* ${clientName}\n`;
            message += `• *Téléphone / WhatsApp:* ${clientPhone}\n`;
            message += `• *Email:* ${clientEmail}\n`;
            message += `• *Prise en charge (Riad/Hôtel):* ${clientHotel}\n`;
            if (clientNotes) {
                message += `• *Remarques / Vol:* ${clientNotes}\n`;
            }
            message += `\n📅 *DATE & PARTICIPANTS:*\n`;
            message += `• *Date de voyage:* ${dateVal}\n`;
            message += `• *Nombre de personnes:* ${peopleVal} personnes\n\n`;

            message += `🎯 *SERVICES RÉSERVÉS DANS LE PACK:*\n`;
            detailedItems.forEach((it, idx) => {
                message += `${idx + 1}. *${it.name}* (${it.itemTotal} DH)\n   └ _${it.subOptionText}_\n`;
            });

            if (selectedCount >= 2) {
                message += `\n🎁 *REMISE PACK APPLIQUÉE:* -${discount} DH (15% OFF)\n`;
            }
            message += `\n💰 *TOTAL NET À PAYER SUR PLACE:* *${totalFormatted}*\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n`;
            message += `👉 *Demande de confirmation automatique par GlobeTrek Team.*`;

            const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

            // Trigger WhatsApp
            window.open(whatsappUrl, '_blank');

            // Switch to Success Confirmation Step
            const stepForm = document.getElementById('dossier-step-form');
            const stepSuccess = document.getElementById('dossier-step-success');
            const successRefDisplay = document.getElementById('success-ref-display');
            const successWALink = document.getElementById('success-whatsapp-link');

            if (stepForm) stepForm.style.display = 'none';
            if (stepSuccess) stepSuccess.style.display = 'block';
            if (successRefDisplay) successRefDisplay.innerText = 'Dossier #' + refId;
            if (successWALink) successWALink.href = whatsappUrl;
        });
    }
}

// 9. FAQ Accordion Logic
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(other => other.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// 10. Tailor-Made Trip Planner Interactive Logic
function initTailorMadeForm() {
    const optionGroups = ['dest-options', 'style-options', 'hotel-options'];
    optionGroups.forEach(groupId => {
        const groupEl = document.getElementById(groupId);
        if (!groupEl) return;
        const boxes = groupEl.querySelectorAll('.tailor-option-box');
        boxes.forEach(box => {
            box.addEventListener('click', function() {
                if (groupId === 'dest-options') {
                    this.classList.toggle('selected');
                } else {
                    boxes.forEach(b => b.classList.remove('selected'));
                    this.classList.add('selected');
                }
            });
        });
    });

    const form = document.getElementById('tailor-made-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const selectedDests = [];
        const destBoxes = document.querySelectorAll('#dest-options .tailor-option-box.selected');
        destBoxes.forEach(b => selectedDests.push(b.getAttribute('data-value') || b.querySelector('.opt-title').innerText));

        const styleBox = document.querySelector('#style-options .tailor-option-box.selected');
        const selectedStyle = styleBox ? (styleBox.getAttribute('data-value') || styleBox.querySelector('.opt-title').innerText) : 'Standard';

        const hotelBox = document.querySelector('#hotel-options .tailor-option-box.selected');
        const selectedHotel = hotelBox ? (hotelBox.getAttribute('data-value') || hotelBox.querySelector('.opt-title').innerText) : 'Standard Riad';

        const name = document.getElementById('tailor-name') ? document.getElementById('tailor-name').value : '';
        const phone = document.getElementById('tailor-phone') ? document.getElementById('tailor-phone').value : '';
        const days = document.getElementById('tailor-days') ? document.getElementById('tailor-days').value : '4';
        const travelers = document.getElementById('tailor-travelers') ? document.getElementById('tailor-travelers').value : '2';
        const notes = document.getElementById('tailor-notes') ? document.getElementById('tailor-notes').value : '';

        let message = `*🌟 New Custom Morocco Tour Request (Sur Mesure)*\n\n`;
        message += `👤 *Name:* ${name}\n`;
        message += `📱 *WhatsApp/Phone:* ${phone}\n`;
        message += `⏱ *Duration:* ${days} Days\n`;
        message += `👥 *Travelers:* ${travelers} People\n`;
        message += `📍 *Destinations:* ${selectedDests.join(', ') || 'All Morocco'}\n`;
        message += `🎭 *Trip Style:* ${selectedStyle}\n`;
        message += `🏨 *Accommodation:* ${selectedHotel}\n`;
        if (notes) {
            message += `📝 *Notes:* ${notes}\n`;
        }
        message += `\n👉 Please send me the custom itinerary and quotation.`;

        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
    });
}

// ==========================================================================
// Category Filter Pills Dynamic Filtering for All Activities & Excursions
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const filterPills = document.querySelectorAll('#activity-filter-pills .gyg-pill');
    const activityCards = document.querySelectorAll('#activity-cards-grid .gyg-card-link');

    if (filterPills.length && activityCards.length) {
        filterPills.forEach(pill => {
            pill.addEventListener('click', function(e) {
                e.preventDefault();

                // Toggle active class
                filterPills.forEach(p => p.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter') || 'all';

                activityCards.forEach(card => {
                    const categories = (card.getAttribute('data-category') || '').toLowerCase().split(' ');

                    if (filterValue === 'all' || categories.includes(filterValue.toLowerCase())) {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.96)';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 20);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});




