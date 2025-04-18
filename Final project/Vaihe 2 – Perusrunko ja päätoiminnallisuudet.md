Vaihe II – Perusrunko ja päätoiminnallisuudet
Toisessa vaiheessa määriteltiin sovelluksen perusrakenne ja päätoiminnallisuudet aiemmin laaditun suunnittelu- ja määrittelydokumentin pohjalta. Sovellus on toteutettu käyttäen PERN-stackia (PostgreSQL, Express, React, Node.js) sekä Tailwind CSS:ää käyttöliittymän muotoilussa.

1. Ympäristö
Projektin tavoitteena on luoda selainpohjainen, responsiivinen Progressive Web App (PWA) AV-alan varastonhallintajärjestelmäksi. Alkuvaiheessa sovellus toimii paikallisesti kehitysympäristössä Visual Studio Codessa. Suunnitelmissa on myöhemmin siirtää sovellus pilvipohjaiseen ympäristöön esimerkiksi Google Cloudin kautta, jolloin se saadaan käyttöönotettua laajempaa asiakaspohjaa varten.

2. Backend
Sovelluksen backend on toteutettu Node.js:llä ja Expressillä. Node.js mahdollistaa JavaScriptin ajamisen palvelinpuolella, mikä helpottaa kehitystä, kun sama ohjelmointikieli käytetään sekä backendissä että frontendissä. Express-framework tarjoaa yksinkertaisen tavan rakentaa REST API -rajapintoja, joiden kautta sovelluksen eri toiminnot, kuten laitteiden tietojen haku, vikailmoitusten tallennus ja huoltotietojen päivittäminen, kommunikoidaan frontendin kanssa. Backendissä on määritelty erilaisia reittejä, jotka vastaanottavat pyyntöjä ja välittävät tiedot PostgreSQL-tietokantaan.

3. Frontend
Käyttöliittymä on rakennettu Reactilla hyödyntäen Vite-kehitysympäristöä, mikä mahdollistaa nopean kehityksen ja tehokkaan HMR-tuen (Hot Module Replacement). Reactin komponenttipohjainen arkkitehtuuri mahdollistaa uudelleenkäytön ja modulaarisuuden, jolloin eri toimintojen kuten kirjautumisen, QR-skannauksen, laitelistauksen ja vikailmoituksen toteutus pysyy järjestyksessä. Käyttöliittymän tyylittelyyn on käytetty Tailwind CSS -tyylikirjastoa, joka tarjoaa valmiita utility-luokkia. Lisäksi käyttöliittymässä on käytössä oma index.css-tiedosto toistuvien tyylien hallintaan. Sovelluksen käyttöliittymässä on määritelty selkeä ja responsiivinen rakenne, johon kuuluu:

Login-sivu: Ensimmäisenä näkymänä, josta käyttäjä kirjautuu sisään.

Main Layout: Yhteinen pohja, jossa on header (logo ja logout-nappi), keskiosa (Outlet, jossa reititetty sisältö näkyy) ja footer (alavalikko navigointilinkeillä: ScanQr, Light, Hoist ja Sound).

ScanQr: Näyttää QR-skannauskomponentin, jonka kautta voidaan lukea laitetietoja.

Light: Näkymä, jossa on alasvetovalikot laitekategorioiden mukaan (esim. Spot, Wash, Beam, FX) ja tulevaisuudessa laitemallien listaus tietokannasta.

Hoist ja Sound: Demo-näkymiä, joiden toteutusta jatkokehitysvaiheessa laajennetaan.

4. Tietokanta
Tietokantana on käytetty PostgreSQL:a, joka on relaatiotietokanta ja mahdollistaa tietojen jäsentelyn tauluihin (esim. laitteiden vuokraustiedot, vikailmoitukset ja huoltokirjanpito). PostgreSQL toimii hyvin Node.js:n kanssa, ja tietokanta on suunniteltu siten, että sen taulut ja sarakkeet nimetään loogisesti. Tietoja tullaan säilyttämään pilvipohjassa (Google Cloud), mikä varmistaa skaalautuvuuden ja usean käyttäjän samanaikaisen käytön.

5. Perusrunko ja arkkitehtuuri
Projektin arkkitehtuurissa hyödynnetään kolmea kerrosta:

Frontend: Reactilla toteutettu käyttöliittymä, joka on responsiivinen ja toimii PWA-mallin mukaisesti. Käyttöliittymästä löytyy yhteinen Main Layout, joka varmistaa johdonmukaisuuden eri näkymissä (Header, pääsisältö ja BottomNav).

Backend: Node.js:n ja Expressin pohjalta rakennettu REST API, joka hoitaa kaikki liiketoimintalogiikkaan liittyvät toiminnot, kuten laitetietojen käsittelyn ja vikailmoitusten tallennuksen.

Tietokanta: PostgreSQL, joka tukee tehokasta tiedon hallintaa ja monen käyttäjän samanaikaista käyttöä.

Tämä kerrosrakenne varmistaa, että muutokset yksiin toimintoihin eivät häiritse muiden osien toimintaa ja mahdollistaa helpon jatkokehityksen.

6. Toiminnallisuudet
Projektin tämänhetkiset toiminnallisuudet kattavat seuraavat päätoiminnot:

Kirjautuminen: Käyttäjä kirjautuu sisään login-sivulla, jonka jälkeen siirrytään yhteiseen Main Layoutiin.

QR-skannaus: ScanQr-näkymä tarjoaa toiminnon QR-koodin lukemiseen, jonka kautta voidaan hakea laitetietoja.

Laitehallinta – Light: Näkymässä on alasvetovalikot, joiden avulla laitekategoriat (Spot, Wash, Beam, FX) voidaan valita. Valinnan jälkeen tulevaisuudessa listataan kyseisen kategorian laitemalleja tietokannasta.

Demo-näkymät – Hoist ja Sound: Näissä näkymissä on tällä hetkellä vain peruslayout, ja ne toimivat pohjana jatkokehitykselle.

Vikailmoitukset ja huolto: Sovellukseen sisältyy ominaisuuksia vikailmoitusten raportointiin ja huoltojen seurantaan, mikä mahdollistaa nopean reagoinnin laitteiden vikatilanteisiin.

Lisätoiminnallisuuksia, kuten reaaliaikainen tiedon synkronointi ja asiakasviestintä (esim. sähköposti-ilmoitukset), kehitetään myöhemmässä vaiheessa.

Toteuttamattomat ominaisuudet:

Kaikkia suunniteltuja toiminallisuuksia ei saatu toteutettua. 

7. Koodin laatu ja dokumentointi
Projektin koodin laatuun on panostettu käyttämällä komponenttipohjaista arkkitehtuuria, jossa sekä backend että frontend on toteutettu samassa JavaScript-kielessä. Tämä mahdollistaa koodin uudelleenkäytön ja helpottaa ylläpitoa. Koodi on dokumentoitu selkeästi, ja kommentteja on lisätty erityisesti monimutkaisten toimintojen, kuten REST API -rajapintojen ja tietokantakyselyjen yhteyteen. Dokumentaatiota on laadittu myös erillisessä suunnittelu- ja määrittelydokumentissa, ja kyseisessä vaiheessa sovelluksen toiminnallisuuksia ja niiden toteutusta on testattu huolellisesti. Testaus on toteutettu sekä yksittäisten komponenttien että koko sovelluksen tasolla, mikä on varmistettu esimerkiksi selaimen kehitystyökaluilla ja Lighthouse-raporteilla.

Yhteenveto
Projektin toisessa vaiheessa on saatu luotua selkeä, responsiivinen perusrunko AV-varastonhallintajärjestelmälle, joka sisältää kirjautumissivun, yhteisen Main Layout -näkymän headerilla, keskiosalla ja alavalikolla. Sovelluksen päätoiminnallisuudet – QR-skannaus, laitekategorioiden hallinta (Light), demo-näkymät (Hoist ja Sound) sekä vikailmoitukset ja huolto – ovat suunniteltu laajennettaviksi jatkokehityksessä. Arkkitehtuuri mahdollistaa modulaarisen kehityksen ja tulevien uusien toiminnallisuuksien saumattoman integroinnin olemassa olevaan rakenteeseen.

Käyttämällä PERN-stackia sekä Tailwind CSS -työkaluja, koodin hallinta ja ylläpito on tehty tehokkaaksi ja skaalautuvaksi. Tämä vaihe toimii hyvänä pohjana, jolle sovelluksen jatkokehityksessä lisätään esimerkiksi tietokantayhteyksiä, käyttäjien hallintaa ja laitteiden reaaliaikaista seurantaa.