/**
 * Marrakech GlobeTrek Travel Interactive Calculator & Services Engine
 */

const WHATSAPP_PHONE = '212663040642';

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

function sendWhatsAppBooking(title, details) {
    let msg = `*🌟 ${title} - VibeKech Marrakech Booking*\n\n`;
    for (const [key, val] of Object.entries(details)) {
        if (val) {
            msg += `• *${key}:* ${val}\n`;
        }
    }
    msg += `\n💰 *Tarif:* Sur Devis Express WhatsApp\n`;
    msg += `\n👉 Merci de me confirmer le meilleur prix et la disponibilité s'il vous plaît !`;

    openWhatsApp(WHATSAPP_PHONE, msg);
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

    function updatePrice() {
        if (!priceDisplay) return;
        priceDisplay.innerHTML = `<span class="price-whatsapp-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp</span>`;
    }

    if (toSelect) toSelect.addEventListener('change', updatePrice);
    if (vehicleSelect) vehicleSelect.addEventListener('change', updatePrice);
    updatePrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            sendWhatsAppBooking('Medina Transfer Reservation', {
                'From': fromSelect ? fromSelect.value : 'Marrakech',
                'To': toSelect ? toSelect.value : 'Ourika',
                'Date': dateInput ? dateInput.value : 'Upcoming',
                'Persons': (peopleInput ? peopleInput.value : '2') + ' pax',
                'Vehicle': vehicleSelect ? vehicleSelect.options[vehicleSelect.selectedIndex].text : 'Minivan'
            });
        });
    }
}

// 2. Multi-City Circuit Tour Builder
function initCircuitCalc() {
    const cityCheckboxes = document.querySelectorAll('.circuit-city-cb');
    const dateInput = document.getElementById('circuit-date');
    const daysInput = document.getElementById('circuit-days');
    const peopleInput = document.getElementById('circuit-people');
    const priceDisplay = document.getElementById('circuit-price-val');
    const bookBtn = document.getElementById('btn-book-circuit');

    function updateCircuitPrice() {
        if (!priceDisplay) return;
        priceDisplay.innerHTML = `<span class="price-whatsapp-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp</span>`;
    }

    cityCheckboxes.forEach(cb => cb.addEventListener('change', updateCircuitPrice));
    if (daysInput) daysInput.addEventListener('input', updateCircuitPrice);
    if (peopleInput) peopleInput.addEventListener('input', updateCircuitPrice);
    updateCircuitPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            const selectedCities = [];
            cityCheckboxes.forEach(cb => {
                if (cb.checked) selectedCities.push(cb.value);
            });

            sendWhatsAppBooking('Multi-City Circuit Tour', {
                'Cities': selectedCities.join(' → ') || 'Marrakech & Sahara',
                'Start Date': dateInput ? dateInput.value : 'Upcoming',
                'Duration': (daysInput ? daysInput.value : '3') + ' Days',
                'Group Size': (peopleInput ? peopleInput.value : '2') + ' Travelers'
            });
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
        priceDisplay.innerHTML = `<span class="price-whatsapp-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp</span>`;
    }

    if (transferType) transferType.addEventListener('change', updateAirportPrice);
    if (destination) destination.addEventListener('change', updateAirportPrice);
    updateAirportPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            sendWhatsAppBooking('Airport Transfer Booking', {
                'Type': transferType ? transferType.options[transferType.selectedIndex].text : 'One Way',
                'Area': destination ? destination.options[destination.selectedIndex].text : 'Marrakech Medina',
                'Flight Date': dateInput ? dateInput.value : 'Upcoming',
                'Passengers': (peopleInput ? peopleInput.value : '2') + ' pax'
            });
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
        priceDisplay.innerHTML = `<span class="price-whatsapp-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp</span>`;
    }

    if (optionSelect) optionSelect.addEventListener('change', updateGuidePrice);
    if (durationSelect) durationSelect.addEventListener('change', updateGuidePrice);
    updateGuidePrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            sendWhatsAppBooking('Marrakech Guided City Tour', {
                'Service': optionSelect ? optionSelect.options[optionSelect.selectedIndex].text : 'With Guide',
                'Duration': durationSelect ? durationSelect.options[durationSelect.selectedIndex].text : 'Half Day',
                'Tour Date': dateInput ? dateInput.value : 'Upcoming',
                'People': (peopleInput ? peopleInput.value : '2') + ' pax'
            });
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

    function updateQuadPrice() {
        if (!priceDisplay) return;
        priceDisplay.innerHTML = `<span class="price-whatsapp-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp</span>`;
    }

    if (packageSelect) packageSelect.addEventListener('change', updateQuadPrice);
    if (peopleInput) peopleInput.addEventListener('input', updateQuadPrice);
    updateQuadPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            sendWhatsAppBooking('Quad & Buggy Biking Reservation', {
                'Package': packageSelect ? packageSelect.options[packageSelect.selectedIndex].text : 'Palmeraie Quad',
                'Date': dateInput ? dateInput.value : 'Upcoming',
                'Quads / Persons': (peopleInput ? peopleInput.value : '2') + ' pax',
                'Time Slot': slotSelect ? slotSelect.value : 'Sunset'
            });
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

    function updateBalloonPrice() {
        if (!priceDisplay) return;
        priceDisplay.innerHTML = `<span class="price-whatsapp-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp</span>`;
    }

    if (packageSelect) packageSelect.addEventListener('change', updateBalloonPrice);
    if (peopleInput) peopleInput.addEventListener('input', updateBalloonPrice);
    updateBalloonPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            sendWhatsAppBooking('Hot Air Balloon Flight Reservation', {
                'Package': packageSelect ? packageSelect.options[packageSelect.selectedIndex].text : 'Classic Sunrise Flight',
                'Flight Date': dateInput ? dateInput.value : 'Upcoming',
                'Passengers': (peopleInput ? peopleInput.value : '2') + ' Passengers',
                'Pickup Area': pickupSelect ? pickupSelect.value : 'Marrakech Medina'
            });
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
        priceDisplay.innerHTML = `<span class="price-whatsapp-tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp</span>`;
    }

    if (courseSelect) courseSelect.addEventListener('change', updateGolfPrice);
    if (addonsSelect) addonsSelect.addEventListener('change', updateGolfPrice);
    if (peopleInput) peopleInput.addEventListener('input', updateGolfPrice);
    updateGolfPrice();

    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            sendWhatsAppBooking('Golf Booking Reservation', {
                'Course': courseSelect ? courseSelect.value : 'Royal Golf Marrakech',
                'Game Date': dateInput ? dateInput.value : 'Upcoming',
                'Players': (peopleInput ? peopleInput.value : '2') + ' Players',
                'Add-ons': addonsSelect ? addonsSelect.options[addonsSelect.selectedIndex].text : 'Green fee only'
            });
        });
    }
}

// 8. Multi-Service Combo Package Builder Section
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

    const badgeSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Sur Devis`;

    function calculateItemDetails(serviceId, people) {
        let name = '';
        let subOptionText = '';
        let itemTotal = 0;

        switch (serviceId) {
            case 'airport': {
                const typeEl = document.getElementById('combo-opt-airport-type');
                const destEl = document.getElementById('combo-opt-airport-dest');
                const flightEl = document.getElementById('combo-opt-airport-flight');

                name = 'VIP Airport Transfer (' + (destEl ? destEl.options[destEl.selectedIndex].text : 'Medina') + ')';
                subOptionText = (typeEl ? typeEl.options[typeEl.selectedIndex].text : 'One Way') + (flightEl && flightEl.value ? ' • Vol: ' + flightEl.value : '');
                
                const tagEl = document.getElementById('price-tag-airport');
                if (tagEl) tagEl.innerHTML = badgeSvg;
                break;
            }
            case 'transfer': {
                const fromEl = document.getElementById('combo-opt-transfer-from');
                const destEl = document.getElementById('combo-opt-transfer-dest');
                const vehEl = document.getElementById('combo-opt-transfer-vehicle');
                const chosenDest = destEl ? destEl.value : 'Ourika Valley';

                name = 'Medina Transfer (' + (fromEl ? fromEl.value : 'Marrakech') + ' → ' + chosenDest + ')';
                subOptionText = 'Véhicule: ' + (vehEl ? vehEl.options[vehEl.selectedIndex].text : 'Minivan');

                const tagEl = document.getElementById('price-tag-transfer');
                if (tagEl) tagEl.innerHTML = badgeSvg;
                break;
            }
            case 'circuit': {
                const routeEl = document.getElementById('combo-opt-circuit-route');
                const daysEl = document.getElementById('combo-opt-circuit-days');
                const vehEl = document.getElementById('combo-opt-circuit-veh');
                const days = parseInt(daysEl ? daysEl.value : 3) || 3;

                name = 'Multi-City Circuit (' + (routeEl ? routeEl.value : 'Morocco Tour') + ')';
                subOptionText = days + ' Jours • ' + (vehEl ? vehEl.value : '4x4') + ' avec chauffeur privé';

                const tagEl = document.getElementById('price-tag-circuit');
                if (tagEl) tagEl.innerHTML = badgeSvg;
                break;
            }
            case 'guide': {
                const typeEl = document.getElementById('combo-opt-guide-type');
                const durEl = document.getElementById('combo-opt-guide-dur');

                name = 'Historical Medina Guided Tour';
                subOptionText = (typeEl ? typeEl.value : 'With Guide') + ' • ' + (durEl ? durEl.value : 'Half Day');

                const tagEl = document.getElementById('price-tag-guide');
                if (tagEl) tagEl.innerHTML = badgeSvg;
                break;
            }
            case 'quad': {
                const pkgEl = document.getElementById('combo-opt-quad-pkg');
                const slotEl = document.getElementById('combo-opt-quad-slot');
                const chosenPkg = pkgEl ? pkgEl.value : 'Agafay Sunset Quad + Camel';

                name = chosenPkg;
                subOptionText = 'Taux: ' + (slotEl ? slotEl.value : 'Sunset') + ' • ' + people + ' Pax';

                const tagEl = document.getElementById('price-tag-quad');
                if (tagEl) tagEl.innerHTML = badgeSvg;
                break;
            }
            case 'balloon': {
                const pkgEl = document.getElementById('combo-opt-balloon-pkg');
                const chosen = pkgEl ? pkgEl.value : 'Classic Sunrise + Berber Breakfast';

                name = 'Hot Air Balloon Sunrise Flight (' + chosen + ')';
                subOptionText = people + ' Passagers • Transport Riad inclus';

                const tagEl = document.getElementById('price-tag-balloon');
                if (tagEl) tagEl.innerHTML = badgeSvg;
                break;
            }
            case 'sahara': {
                const stdEl = document.getElementById('combo-opt-sahara-std');

                name = '3-Day Merzouga Sahara Desert Tour';
                subOptionText = (stdEl ? stdEl.options[stdEl.selectedIndex].text : 'Luxury Camp') + ' • ' + people + ' Pax';

                const tagEl = document.getElementById('price-tag-sahara');
                if (tagEl) tagEl.innerHTML = badgeSvg;
                break;
            }
            case 'golf': {
                const courseEl = document.getElementById('combo-opt-golf-course');
                const addonEl = document.getElementById('combo-opt-golf-addon');
                const chosenCourse = courseEl ? courseEl.value : 'Royal Golf Marrakech';

                name = 'Golf: ' + chosenCourse;
                subOptionText = (addonEl ? addonEl.value : 'Green fee') + ' • ' + people + ' Joueurs';

                const tagEl = document.getElementById('price-tag-golf');
                if (tagEl) tagEl.innerHTML = badgeSvg;
                break;
            }
        }

        return { name, subOptionText, itemTotal: 0 };
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
                    li.innerHTML = `<strong>${details.name}</strong> <small style="color:#15803d; font-weight:600;">(Sur Devis WhatsApp)</small>`;
                    selectedListEl.appendChild(li);
                }
            } else {
                if (card) card.classList.remove('active');
            }
        });

        if (countDisplay) countDisplay.innerText = selectedCount;
        if (subtotalDisplay) subtotalDisplay.innerHTML = `<span class="price-whatsapp-tag">Prix sur WhatsApp</span>`;
        if (discountRow) discountRow.style.display = 'none';

        const totalFormatted = 'Prix sur WhatsApp';
        if (finalDisplay) finalDisplay.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp`;

        return { totalFormatted, selectedCount, subtotal, discount: 0, detailedItems };
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
        const { detailedItems, selectedCount } = updateBundleSection();
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
        if (totalAmountEl) totalAmountEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> Prix sur WhatsApp`;

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
                        <span class="dossier-item-price text-success" style="font-weight:700;">Sur Devis WhatsApp</span>
                    `;
                    itemsContainer.appendChild(row);
                });
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
            const { detailedItems } = updateBundleSection();

            // Format comprehensive structured WhatsApp Booking Dossier
            let message = `*📋 NOUVEAU DOSSIER DE RÉSERVATION (#${refId})*\n`;
            message += `*Agence VibeKech Marrakech*\n`;
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

            message += `🎯 *SERVICES SÉLECTIONNÉS:*\n`;
            detailedItems.forEach((it, idx) => {
                message += `${idx + 1}. *${it.name}*\n   └ _${it.subOptionText}_\n`;
            });

            message += `\n💰 *TARIF:* Devis personnalisé sur WhatsApp\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n`;
            message += `👉 *Demande envoyée pour confirmation et devis rapide.*`;

            // Send Auto Notification Email in Background
            sendAutoNotification({
                "_subject": `🔔 NOUVEAU DOSSIER DE RÉSERVATION (#${refId})`,
                "Ref_Dossier": refId,
                "Nom_Client": clientName,
                "Telephone_WhatsApp": clientPhone,
                "Email_Client": clientEmail,
                "Riad_Hotel": clientHotel,
                "Date_Voyage": dateVal,
                "Participants": peopleVal + ' personnes',
                "Services_Details": detailedItems.map(it => `${it.name} (${it.subOptionText})`).join(' | '),
                "Remarques": clientNotes || 'Aucune'
            });

            const whatsappUrl = openWhatsApp(WHATSAPP_PHONE, message);

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

        // Send Auto Notification Email for Custom Tour
        sendAutoNotification({
            "_subject": `✨ NOUVELLE DEMANDE VOYAGE SUR MESURE - ${name}`,
            "Nom_Client": name,
            "Telephone_WhatsApp": phone,
            "Duree_Jours": days + ' Jours',
            "Nombre_Voyageurs": travelers + ' Personnes',
            "Destinations": selectedDests.join(', ') || 'Tout le Maroc',
            "Style_Voyage": selectedStyle,
            "Hebergement": selectedHotel,
            "Remarques": notes || 'Aucune'
        });

        openWhatsApp(WHATSAPP_PHONE, message);
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

    // ==========================================================================
    // Smart Floating WhatsApp Concierge Widget Logic
    // ==========================================================================
    const waTriggerBtn = document.getElementById('smart-wa-trigger');
    const waPopup = document.getElementById('smart-wa-popup');
    const waCloseBtn = document.getElementById('smart-wa-close');
    const waSendBtn = document.getElementById('smart-wa-send-btn');
    const waInput = document.getElementById('smart-wa-input');

    if (waTriggerBtn && waPopup) {
        waTriggerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            waPopup.classList.toggle('open');
            if (waPopup.classList.contains('open') && waInput) {
                setTimeout(() => waInput.focus(), 150);
            }
        });

        if (waCloseBtn) {
            waCloseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                waPopup.classList.remove('open');
            });
        }

        document.addEventListener('click', (e) => {
            if (!waPopup.contains(e.target) && !waTriggerBtn.contains(e.target)) {
                waPopup.classList.remove('open');
            }
        });

        const sendCustomMessage = () => {
            const userText = (waInput ? waInput.value : '').trim();
            if (userText) {
                openWhatsApp(WHATSAPP_PHONE, 'Bonjour VibeKech! ' + userText);
                if (waInput) waInput.value = '';
                waPopup.classList.remove('open');
            }
        };

        if (waSendBtn) {
            waSendBtn.addEventListener('click', sendCustomMessage);
        }

        if (waInput) {
            waInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    sendCustomMessage();
                }
            });
        }
    }
});

