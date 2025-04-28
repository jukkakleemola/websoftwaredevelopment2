# Vaihe 4 – Projektin esittely

## Projektin nimi


---

## Projektin yleiskuvaus

Projektin tavoitteena oli rakentaa selainpohjainen varastonhallintasovellus AV-laitteille.
Sovelluksessa voi esimerkiksi:

Skannata laitteen QR-koodin

Näyttää yksittäisen laitteen tiedot

Ilmoittaa viasta (fault report)

Lisätä huoltomerkintöjä (maintenance log)

Merkitä laitteen "käyttökiellossa"-tilaan (unusable)

Frontend on toteutettu Reactilla (Vite + Tailwind CSS) ja backend Node.js + Expressillä.
Tietokanta on PostgreSQL ja API:t mahdollistavat laitteen tietojen haun ja muokkaamisen.

---

## Käyttötapausten yhteenveto

Käyttötapaukset
| Käyttötapaus | Toteutettu (Kyllä/Ei) |
|----------|----------------------|
|1. QR-koodin skannaus ja laitteen tietojen näyttäminen|Toteutettu osittain|
Sovelluksessa on oma ScanQr-sivu, jossa mobiililaitteen kamera skannaa QR-koodin. Skannauksen jälkeen käyttäjä siirtyy suoraan laitteen yksityiskohtaiselle sivulle (/device/:deviceId). |Ei |
Demo: Avaa ScanQr → skannaa esim. "RZB-001" → siirtyy laitteen sivulle.  | Ei |
|2. Laitteen tietojen tarkastelu|Toteutettu|  |
Laitteen sivulla näkyy perusdata, kuten laitteen malli ja tunniste.  |Kyllä |
Sivulta voi tarkastella huoltohistoriaa ja vikailmoituksia (linkit maintenance logs ja fault reports). | Kyllä|
|3. Vikailmoituksen tekeminen (Fault Report) |Toteutettu  |
Laitteen sivulla voi täyttää lomakkeen vikailmoituksesta. Tiedot tallennetaan tietokantaan.  |Kyllä |
|4. Huoltomerkinnän lisääminen (Maintenance Log) |Toteutettu  |
Lomakkeella voi lisätä huoltotapahtumia yksittäiselle laitteelle. |Kyllä |
|5. Laitteen merkitseminen käyttökiellossa olevaksi |Toteutettu |
Laitteen tietosivulla voi klikata "Merkitse käyttökiellossa olevaksi" -nappia, joka muuttaa laitteen tilan kannassa. | Osittain|

---

## Tekninen toteutus

Frontend: Rakennettu Reactilla, tyylit TailwindCSS:llä. Responsiivisuus ja helppokäyttöisyys huomioitu.

Backend: Node.js + Express. REST API -rajapinnat autentikointia, tietojen hakua ja tallennusta varten.

Tietokanta: PostgreSQL. Yhteys backendin kautta pilvipalveluun (Google Cloud).

Autentikointi: JWT-tokeneilla suojatut reitit.

Julkaisu: Frontend ja backend julkaistu  


---

## Kehitysprosessi

Projektin ensimmäinen ja toinen vaihe sujuivat hyvin. Sovellusta kehitetin aluksi paikallisesti ja pilvipalveluun siirryin vasta myöhäisessä vaihessa. Opintojakson aikana olin käyttänyt Azuren
palveluita tehtävissä, mutta halusin tässä hyödyntää Googlen Cloudia. Tämä osoittautuikin melko hankalaksi, tietokantayhteys ei meinnanut toimia ja sivustollakin tuntui olevan ongelmia.
Harkitsin jo vaihtamista Azuren palveluun, mutta valitettavasti aika loppui kesken. Omalta osaltani projektin ajanhallinta ei toiminut, koska jätin pilvipalvelun käyttöön ottamisen liian myöhäiseksi
ja työkiireet katkaisivat projektin useaan otteeseen.

Tämän projektin aikana kertyi oppia web-sovelluksen kehittämisestä ja erityisesti ongelmien ratkaisemisesta. Koodin luomiseen hyödynsin tekoälyä sekä muutamia Youtube videoita.
Yhtenä merkittävänä huomiona nostan Developer toolsin käytön hyödyt. Vikatilanteita selvittäessä  koodiin ja logeihin pääsi helposti käsiksi ja monen ongelman juurisyy selvisi tätä kautta.



Mikä toimi hyvin:

Kaikki keskeisimmät käyttötapaukset saatiin toimiviksi.

Frontend ja backend kommunikoivat vakaasti.

Huomioitu mm. CORS-ongelmat ja ympäristömuuttujat.

Haasteet:

PostgreSQL-yhteyksien ja .env-muuttujien hallinta vaati tarkkuutta.

Testauksen automatisointi (Vitest, Testing Library) jäi vähälle.

Käyttöliittymän pienet yksityiskohdat (esim. latausanimaatiot) voisi vielä viimeistellä.


## Pohdinta ja tulevaisuuden jatkokehitys

Laitteen huoltohistorialle voisi rakentaa erillisen graafisen näkymän (esim. aikajana).

Käyttäjähallinta, eri roolit admin, huoltaja, käyttäjä.

Offline-tila ja PWA (Progressive Web App) ominaisuudet.


---

## Tuntikirjanpito

|Päivämäärä|Tunnit|Projektin vaihe|Tehtävä|
|:---:|:---:|:---:|:---|
|24.3.2025|2,5|Vaihe I|Aiheen valintaa, suunnittelua, omaa aikataulutusta...|
|29.3.2025|4|Vaihe I|Git-sivupohjan teko, käyttäjäpersoonat, käyttötapaukset ja -tilanteet, prototyypin teko|
|1.4.2025|4|Vaihe I|Vaihe I loppuun: proto valmiiks, arkkitehtuuri ja tekninen toteutus osuus, testauksen suunnittelu|
|6.4.2025|3|Vaihe II|Perusrakenteen ja toiminnallisuuksien suunnittelu ja luominen|
|9.4.2025|2|Vaihe II|Toiminnalisuuksien rakentaminen käyntiin|
|11.4.2025|9|Vaihe II|Toiminnallisuuksien rakentelu jatkuu...|
|13.4.2025|6|Vaihe II|Toiminnallisuuksien rakentelu jatkuu...|
|16.4.2025|2|Vaihe II|Toiminnallisuuksien rakentelu jatkuu...|
|18.4.2025|6|Vaihe II|Toiminnallisuuksien viimeistely ja raportti|
|21.4.2025|4|Vaihe III|Jatkokehitys, muokattu lomakkeita, korjattu tietokantaa|
|25.4.2025|2|Vaihe III|Jatkokehitys, muokattu ulkoasua, korjattu tietokantaa, Google Cloud rikki|
|27.4.2025|6|Vaihe Iv|Loppuraporttia, tietokannan korjaus jatkuu, Google Cloud rikki edelleen osittain|

Yhteensä aikaa käytetty: 50,5 tuntia.
