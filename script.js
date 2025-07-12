document.addEventListener('DOMContentLoaded', async () => {
    // --- VERİ MODELİ (AVRUPA DİLLERİ EKLENDİ) ---
    const etymologyData = [
        // Arapça Kelimeler
        { word: "kalem", origin_lang: "Arapça", country_code: "SAU", period: "Osmanlı Öncesi", info: "Arapça 'ḳalam' (قلم) kelimesinden gelir.", example: "Yazmak için bir kaleme ihtiyacım var.", detailed_info: "Kökeni Antik Yunanca 'kálamos' (κάλᾰμος) yani 'kamış' kelimesine dayanır...", source: "Nişanyan Sözlük", references: ["Sevan Nişanyan, 'Sözlerin Soyağacı'"] },
        { word: "teşekkür", origin_lang: "Arapça", country_code: "SAU", period: "Osmanlı", info: "Arapça 'şukr' (شكر) kökünden gelir.", example: "Yardımlarınız için teşekkür ederim." },
        { word: "kitap", origin_lang: "Arapça", country_code: "SAU", period: "Osmanlı Öncesi", info: "Arapça 'kitāb' (كتاب) kelimesinden alınmıştır.", example: "Bu kitabı okumanı tavsiye ederim." },
        // ... (Mevcut diğer Arapça, Farsça, İtalyanca vs. kelimeleriniz burada) ...
        { word: "altın", origin_lang: "Türkçe", country_code: "TUR", period: "Osmanlı Öncesi", info: "Eski Türkçe 'altun' kelimesinden.", example: "Altın fiyatları yükseldi." },

        // --- YENİ EKLENEN AVRUPA DİLLERİ ---
        
        // İspanyolca Kelimeler
        { word: "vardiya", origin_lang: "İspanyolca", country_code: "ESP", period: "Osmanlı", info: "İspanyolca 'guardia' (nöbet) kelimesinden.", example: "Gece vardiyasında çalışıyor." },
        { word: "kamarot", origin_lang: "İspanyolca", country_code: "ESP", period: "Osmanlı", info: "İspanyolca 'camarote' (kamara) kelimesinden.", example: "Kamarot, yolculara servis yaptı." },

        // Almanca Kelimeler
        { word: "şalter", origin_lang: "Almanca", country_code: "DEU", period: "Cumhuriyet", info: "Almanca 'Schalter' (düğme, şalter) kelimesinden.", example: "Elektrik kesintisi için şalteri kontrol etti." },
        { word: "dizel", origin_lang: "Almanca", country_code: "DEU", period: "Cumhuriyet", info: "Mucidi Rudolf Diesel'in adından.", example: "Bu araba dizel yakıtla çalışıyor." },

        // İngilizce Kelimeler
        { word: "futbol", origin_lang: "İngilizce", country_code: "GBR", period: "Cumhuriyet", info: "İngilizce 'football' (ayak topu) kelimesinden.", example: "Bu akşam arkadaşlarla futbol oynayacağız." },
        { word: "stres", origin_lang: "İngilizce", country_code: "GBR", period: "Cumhuriyet", info: "İngilizce 'stress' (baskı, gerilim) kelimesinden.", example: "Sınav stresi yüzünden uyuyamadı." },

        // Rusça Kelimeler
        { word: "semaver", origin_lang: "Rusça", country_code: "RUS", period: "Osmanlı", info: "Rusça 'samovar' (самовар), 'kendi kaynayan' demektir.", example: "Semaverde demlenen çayın tadı başkadır." },
        { word: "şapka", origin_lang: "Rusça", country_code: "RUS", period: "Osmanlı", info: "Kökeni tartışmalı olmakla birlikte Rusça 'şapka' (шапка) üzerinden geldiği düşünülür.", example: "Soğuk havada şapkasını taktı." },

        // Portekizce Kelimeler
        { word: "baraka", origin_lang: "Portekizce", country_code: "PRT", period: "Osmanlı", info: "Portekizce 'barraca' (derme çatma yapı) kelimesinden.", example: "İnşaat işçileri barakada kalıyordu." },
        { word: "marmelat", origin_lang: "Portekizce", country_code: "PRT", period: "Osmanlı", info: "Portekizce 'marmelada' (ayva reçeli) kelimesinden.", example: "Kahvaltıda ekmeğine marmelat sürdü." },

        // Felemenkçe (Hollanda Dili)
        { word: "branda", origin_lang: "Felemenkçe", country_code: "NLD", period: "Osmanlı", info: "Felemenkçe 'brand' (yanık, damga) kelimesinden, su geçirmez kumaş anlamını sonradan kazanmıştır.", example: "Yağmurdan korunmak için branda çektiler." },
        { word: "forsa", origin_lang: "Felemenkçe", country_code: "NLD", period: "Osmanlı", info: "İtalyanca 'forza' kökenli olup Felemenkçe denizcilik terimi olarak Türkçeye geçmiştir.", example: "Eski gemilerde forsalar kürek çekerdi." },

        // Macarca Kelimeler
        { word: "varos", origin_lang: "Macarca", country_code: "HUN", period: "Osmanlı", info: "Macarca 'város' (şehir, kasaba) kelimesinden.", example: "Tarihi metinlerde 'varoş' kelimesi geçer." },
        { word: "macar", origin_lang: "Macarca", country_code: "HUN", period: "Osmanlı", info: "Macarların kendi milletlerine verdikleri isimden.", example: "Macar salamı çok meşhurdur." },

        // İskandinav Dilleri
        { word: "fiyort", origin_lang: "İskandinavca", country_code: "NOR", period: "Cumhuriyet", info: "Norveççe 'fjord' kelimesinden.", example: "Norveç fiyortları turistlerin ilgisini çeker." },
        { word: "viking", origin_lang: "İskandinavca", country_code: "DNK", period: "Cumhuriyet", info: "Eski Nors dilindeki 'víkingr' kelimesinden.", example: "Vikingler usta denizcilerdi." },
		// --- YENİ EKLENECEK TÜRKÇE KELİMELER (10'a tamamlamak için) ---
	    { word: "yatak", origin_lang: "Türkçe", country_code: "TUR", period: "Osmanlı Öncesi", info: "Eski Türkçe 'yat-' fiilinden türemiştir.", example: "Yorulduğu için hemen yatağına uzandı." },
	    { word: "göz", origin_lang: "Türkçe", country_code: "TUR", period: "Osmanlı Öncesi", info: "Eski Türkçe 'köz' kelimesinden gelir.", example: "Mavi gözleri vardı." },
	    { word: "ayran", origin_lang: "Türkçe", country_code: "TUR", period: "Osmanlı Öncesi", info: "Eski Türkçe kökenli olup dünyaya Türkçe'den yayılmıştır.", example: "Kebabın yanında ayran içti." },

	    // --- YENİ EKLENECEK ASYA DİLLERİ ---
	    // Japonca Kelimeler
	    { word: "tsunami", origin_lang: "Japonca", country_code: "JPN", period: "Cumhuriyet", info: "Japonca 'tsu' (liman) ve 'nami' (dalga) kelimelerinden oluşur.", example: "Tsunami, büyük bir doğal afettir." },
	    { word: "anime", origin_lang: "Japonca", country_code: "JPN", period: "Cumhuriyet", info: "İngilizce 'animation' kelimesinin Japonca kısaltmasıdır.", example: "Hafta sonu yeni bir anime serisine başladı." },
	    // Çince Kelimeler
	    { word: "çay", origin_lang: "Çince", country_code: "CHN", period: "Osmanlı", info: "Çince 'chá' (茶) kelimesinin farklı lehçelerdeki telaffuzundan dünyaya yayılmıştır.", example: "Türkiye'de çay kültürü çok yaygındır." },
	    { word: "tayfun", origin_lang: "Çince", country_code: "CHN", period: "Cumhuriyet", info: "Çincenin Kanton lehçesindeki 'dàfēng' (büyük rüzgar) kelimesinden gelir.", example: "Tayfun nedeniyle uçuşlar iptal edildi." },
	    // Korece Kelimeler
	    { word: "tekvando", origin_lang: "Korece", country_code: "KOR", period: "Cumhuriyet", info: "Korece 'Tae-kwon-do' (태권도), ayak ve el ile savunma sanatıdır.", example: "Tekvando kursuna yazıldı." },
	    { word: "ginseng", origin_lang: "Korece", country_code: "KOR", period: "Cumhuriyet", info: "Kökeni Çince 'rénshēn' olsa da dünyaya Kore ginsengi olarak tanınmıştır.", example: "Ginseng, enerji verici bir bitki köküdür." }
    ];
    
    const map = L.map('map', {
        zoomControl: false 
    }).setView([45, 20], 3.5);
    L.control.zoom({ position: 'topright' }).addTo(map); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let countryPolygons = {};
    let wordMarkersLayer = L.layerGroup().addTo(map);
    let visibleWordMarkers = {};
    // DEĞİŞİKLİK 1: GEÇİCİ/ODAKLANILAN KELİME İÇİN YENİ BİR KATMAN OLUŞTURULDU
    let focusedWordLayer = L.layerGroup().addTo(map);

    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-sidebar');
    const searchBox = document.getElementById('search-box');
    const langFilter = document.getElementById('lang-filter');
    const periodFilter = document.getElementById('period-filter');
    const wordListContainer = document.getElementById('word-list-container');
    const detailPanel = document.getElementById('detail-panel');
    const detailTitle = document.getElementById('detail-title');
    const detailContent = document.getElementById('detail-content');
    const closeDetailPanel = document.getElementById('close-detail-panel');

    const isPointInPolygon = (point, vs) => { const x = point[0], y = point[1]; let inside = false; for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) { const xi = vs[i][0], yi = vs[i][1]; const xj = vs[j][0], yj = vs[j][1]; const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi); if (intersect) inside = !inside; } return inside; };
    const getRandomPointInCountry = (countryCode) => { const feature = countryPolygons[countryCode]; if (!feature) return null; const bounds = L.geoJSON(feature).getBounds(); const [minLng, minLat, maxLng, maxLat] = [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()]; const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates; let attempts = 0; while (attempts < 200) { const rndLng = Math.random() * (maxLng - minLng) + minLng; const rndLat = Math.random() * (maxLat - minLat) + minLat; for (const poly of polygons) { if (isPointInPolygon([rndLng, rndLat], poly[0])) { return [rndLat, rndLng]; } } attempts++; } return bounds.getCenter(); };
    
    const showDetailPanel = (wordObject) => {
        if (!wordObject) return;
        detailTitle.textContent = wordObject.word;
        let contentHTML = `<div class="detail-section"><h3>Detaylı Bilgi</h3><p>${wordObject.detailed_info || wordObject.info}</p></div>`;
        if (wordObject.source) { contentHTML += `<div class="detail-section"><h3>Ana Kaynak</h3><p>${wordObject.source}</p></div>`; }
        if (wordObject.references && wordObject.references.length > 0) { contentHTML += `<div class="detail-section"><h3>Referanslar</h3><ul>${wordObject.references.map(ref => `<li>${ref}</li>`).join('')}</ul></div>`; }
        detailContent.innerHTML = contentHTML;
        detailPanel.classList.add('visible');
    };

    const hideDetailPanel = () => { detailPanel.classList.remove('visible'); };

    const renderWordsOnMap = (words) => {
        wordMarkersLayer.clearLayers(); visibleWordMarkers = {};
        // DEĞİŞİKLİK 2: FİLTRELEME YAPILDIĞINDA GEÇİCİ KELİME DE TEMİZLENİR
        focusedWordLayer.clearLayers();
        const wordsByCountry = {}; words.forEach(word => { if (!wordsByCountry[word.country_code]) { wordsByCountry[word.country_code] = []; } wordsByCountry[word.country_code].push(word); });
        for (const code in wordsByCountry) {
            if (!countryPolygons[code]) continue;
            const countryWords = wordsByCountry[code];
            const randomSelection = [...countryWords].sort(() => 0.5 - Math.random()).slice(0, 1);
            randomSelection.forEach(word => {
                const randomCoords = getRandomPointInCountry(code);
                if (randomCoords) {
                    const icon = L.divIcon({ className: 'word-marker', html: word.word });
                    const marker = L.marker(randomCoords, { icon: icon }).addTo(wordMarkersLayer);
                    marker.bindPopup(`<div class="popup-title">${word.word}</div><div class="popup-info"><strong>Köken:</strong> ${word.origin_lang}</div><p class="popup-example">${word.example || ''}</p><button class="detail-button" data-word="${word.word}">Detayları Gör</button>`);
                    visibleWordMarkers[word.word] = marker;
                }
            });
        }
    };

    const updateWordList = (words) => {
        wordListContainer.innerHTML = ''; if (words.length === 0) { wordListContainer.innerHTML = '<p style="padding: 1rem;">Sonuç bulunamadı.</p>'; return; }
        words.forEach(word => {
            const item = document.createElement('div'); item.className = 'word-item';
            item.innerHTML = `<div class="word">${word.word}</div><div class="origin">${word.origin_lang} / ${word.period}</div>`;
            
            // DEĞİŞİKLİK 3: TIKLAMA MANTIĞI GÜNCELLENDİ
            item.addEventListener('click', (event) => {
                event.preventDefault();
                
                const markerOnMap = visibleWordMarkers[word.word];

                // Durum 1: Kelime zaten haritada görünüyorsa
                if (markerOnMap) {
                    focusedWordLayer.clearLayers();
                    map.flyTo(markerOnMap.getLatLng(), 8);
                    markerOnMap.openPopup();
                } 
                // Durum 2: Kelime haritada görünmüyorsa (YENİ MANTIK)
                else {
                    focusedWordLayer.clearLayers(); // Önceki geçici kelimeyi temizle
                    
                    const wordData = etymologyData.find(w => w.word === word.word);
                    if (wordData) {
                        const coords = getRandomPointInCountry(wordData.country_code);
                        if (coords) {
                            const icon = L.divIcon({ className: 'word-marker', html: wordData.word });
                            const tempMarker = L.marker(coords, { icon: icon });
                            tempMarker.bindPopup(`<div class="popup-title">${wordData.word}</div><div class="popup-info"><strong>Köken:</strong> ${wordData.origin_lang}</div><p class="popup-example">${wordData.example || ''}</p><button class="detail-button" data-word="${wordData.word}">Detayları Gör</button>`);
                            tempMarker.addTo(focusedWordLayer);
                            map.flyTo(coords, 8);
                            tempMarker.openPopup();
                        }
                    }
                }
            });
            wordListContainer.appendChild(item);
        });
    };
    
    const applyFilters = () => {
        const searchTerm = searchBox.value.toLowerCase().trim(); const selectedLang = langFilter.value; const selectedPeriod = periodFilter.value;
        const filteredWords = etymologyData.filter(w => w.word.toLowerCase().includes(searchTerm) && (selectedLang === 'all' || w.origin_lang === selectedLang) && (selectedPeriod === 'all' || w.period === selectedPeriod));
        renderWordsOnMap(filteredWords); updateWordList(filteredWords);
    };

    try {
        const response = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json');
        const geojsonData = await response.json();
        geojsonData.features.forEach(feature => { countryPolygons[feature.id] = feature; });
    } catch (error) { console.error("Ülke sınır verileri yüklenemedi:", error); alert("Harita verileri yüklenirken bir hata oluştu."); return; }
    
    const languages = [...new Set(etymologyData.map(w => w.origin_lang))].sort();
    languages.forEach(lang => { langFilter.add(new Option(lang, lang)); });

    toggleButton.addEventListener('click', () => { sidebar.classList.toggle('collapsed'); toggleButton.innerHTML = sidebar.classList.contains('collapsed') ? '☰' : '✕'; setTimeout(() => map.invalidateSize(), 350); });
    closeDetailPanel.addEventListener('click', hideDetailPanel);

    // DEĞİŞİKLİK 4: POPUP KAPANDIĞINDA GEÇİCİ KELİMEYİ TEMİZLEME
    map.on('popupclose', (e) => {
        if (focusedWordLayer.hasLayer(e.popup._source)) {
            focusedWordLayer.clearLayers();
        }
    });

    map.on('popupopen', (e) => {
        const detailButton = e.popup._container.querySelector('.detail-button');
        if (detailButton) {
            detailButton.addEventListener('click', () => {
                const wordStr = detailButton.dataset.word; const wordObject = etymologyData.find(w => w.word === wordStr);
                showDetailPanel(wordObject);
            });
        }
    });

    searchBox.addEventListener('input', applyFilters);
    langFilter.addEventListener('change', applyFilters);
    periodFilter.addEventListener('change', applyFilters);
    
    applyFilters();
});