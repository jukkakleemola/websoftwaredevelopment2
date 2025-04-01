# Vaihe 1 - Määrittely ja suunnittelu
Projektin aiheena on kehittää varastonhallinta järjestelmä AV-alalla toimivalle yritykselle. Sovelluksella on kolme pääasiallista käyttötarkoitusta: kalustonvuokrauslistan luominen, 
päivittäminen ja muokkaaminen, kaluston vikailmoitusten raportointi sekä huoltokirjanpito.


## 1. Käyttäjäpersoonat

1. Jaska Johtaja - yrityksen johtaja
    - Ikä: 43
    - Koulutus: AMK
    - Kotipaikka: Tampere
    - Kiireellinen yrityksen toimitusjohtaja. Asuu eri paikkakunnalla kuin yrityksen varasto. Teknisesti valveutunut henkilö ja osittain kiinostunut kehittämään yrityksen toimintoja sähköisiksi.
  - Mitä hyötyy:
    - Varaston hallinnan helppous
    - Pääsy tietoihin yhden apin kautta
    - Seuranta tietokannasta
  - Rooli palvelun käyttäjänä:
    - Admin oikeudet
    - Huolto taulukoiden ja vikalistojen hallinnointi
    - User management
    - Vuokrausten seuranta
    - QR scannaus

2. Tane Työmies - yrityksen työntekijä (varasto)
    - Ikä: 38
    - Koulutus: AMK
    - Kotipaikka: Kokkola
    - Työ kiireistä, etenkin sesonkien aikaan. Laitteiston kunnossa pitäminen ja vikatilanteiden tietoon saaminen tärkeää. Halukas kehittämään varastotyöskentelyä
- Mitä hyötyy:
    - Varaston hallinnan helppous
    - Pääsy tietoihin yhden apin kautta
    - In/out seurannan helppou­s
    - Vikailmoitukset tietoon
    - Huoltotarpeet
- Rooli palvelun käyttäjänä:
    - Huolto taulukoiden ja vikalistojen hallinnointi
    - User management
    - Vuokrausten seuranta
    - QR scannaus

3. Lassi Huoltoja - huoltotiimin jäsen(varasto)
    - Ikä: 29
    - Koulutus: Media-assistentti
    - Kotipaikka: Kokkola
    - Työskentelee yrityksen huoltotiimissä ja vastaa laitteiden kunnossapidon sekä vikojen dokumentoinnista. Etsii keinoja tehostaa huoltojen seurantaa ja raportointia, jotta laitteiden toimivuus voidaan varmistaa mahdollisimman joustavasti myös kiireisinä aikoina.

- Mitä hyötyy:
    - Helppokäyttöinen huolto- ja vikailmoitusten hallinta
    - Reaaliaikainen päivitys laitteiden kunnosta
    - Pääsy tietoihin yhden apin kautta
    - Vikailmoitukset tietoon
    - Huoltotarpeet, tilanne kuva
- Rooli palvelun käyttäjänä:
    - Huolto taulukoiden ja vikalistojen hallinnointi/kuittaus
    - QR scannaus

4. Matti Mikkonen - asiakas (vieras)
    - Ikä: 18-60
    - Koulutus: Kaikki
    - Kotipaikka: Koko Suomi
    - Käyttöliittymän tulee olla riittävän yksinkertainen jotta toimintoja tulee käytettyä.
- Mitä hyötyy:
    - Vikailmoitusten tekeminen
    - QR scannaus

## 2. Käyttötapaukset ja -tilanteet

1. Kaluston vuokrauslistan hallinta
- Käyttäjät: Jaska Johtaja, Tane Työmies
- Käyttäjä luo ja päivittää kaluston vuokrauslistoja. Järjestelmässä voi lisätä uusia laitteita, muokata olemassa olevia tietoja sekä poistaa vanhentuneita merkintöjä. Käyttöliittymässä on selkeä hakutoiminto ja suodattimia, jotta oikea kalusto löytyy nopeasti.
- Tämä tukee päivittäistä työtä ja helpottaa vuokraustilanteen reaaliaikaista seurantaa.

2. Vikailmoitusten raportointi ja seuranta
- Käyttäjät: Tane Työmies, Lassi Huoltoja, Matti Mikkonen
- Käyttäjä voi nopeasti raportoida havaitsemistaan laitevioista mobiilisovelluksen tai työpöytäversion kautta. Järjestelmä mahdollistaa vikailmoituksen liittämisen valokuvaan ja yksityiskohtaisiin kuvaustietoihin. Ilmoitukset kirjataan järjestelmään, minkä jälkeen huolto-tiimi saa reaaliaikaisen ilmoituksen ja voi priorisoida korjaustoimenpiteet.
- Tämä helpottaa laitteiden kunnon seurantaa ja varmistaa, että vikailmoitukset eivät jää huomaamatta.

3. Huoltokirjanpito ja ylläpitosuunnitelmien hallinta
- Käyttäjät: Lassi Huoltoja
- Järjestelmässä ylläpidetään huoltokirjaa, johon kirjataan kaikki laitteiden huoltotapahtumat ja tulevat huoltosuunnitelmat.
- Käyttäjä voi asettaa muistutuksia säännöllisille huolloille ja tarkastuksille sekä seurata laitteiden huoltohistoriaa. Näin varmistetaan, että laitteet pysyvät toimintakunnossa ja mahdolliset ongelmat havaitaan ajoissa.
- Tämä mahdollistaa ennaltaehkäisevän kunnossapidon ja järjestelmällisen huoltojen seurannan.

4. Varaston reaaliaikainen tilannekuva ja analytiikka
- Käyttäjät: Jaska Johtaja, Lassi Huoltoja, Tane Työmies
- Käyttäjä saa reaaliaikaisen näkymän varaston tilasta: vuokraustilanteesta, vikatilanteista ja huoltotapahtumista.
- Järjestelmä tarjoaa visuaalisia raportteja ja analytiikkaa, joiden avulla voidaan ennakoida varaston tarpeita ja optimoida logistiikkaprosesseja.
- Auttaa strategisessa päätöksenteossa ja varaston tehokkaassa hallinnassa.

5. QR-koodin skannaus ja mobiilikäyttö
- Käyttäjät: Tane Työmies, Matti Mikkonen
- Mobiilisovelluksen avulla käyttäjä voi skannata QR-koodin, joka liittää laitteen tiedot suoraan järjestelmään.
- Skannaus mahdollistaa nopean vuokrauksen, vikailmoituksen tai huoltotietojen tarkistuksen paikan päällä ilman erillistä manuaalista tietojen syöttöä.
- Tämä käyttöliittymän ominaisuus parantaa käyttökokemusta ja tehostaa kenttätyötä, kun tiedot päivittyvät reaaliajassa.

## 3. Käyttöliittymän prototyyppi

**Etusivu**

Tarkoitus:

Tarjota käyttäjälle nopea pääsy sovelluksen keskeiseen toiminnallisuuteen eli QR-koodin lukemiseen.

Keskeiset elementit:

Suuri ja selkeä QR-koodin lukupainike, joka vie suoraan laitteen tietojen tarkasteluun

Yleiskatsaus: Pienet ilmoitus- ja päivitystiedot, kuten uusimmat vikailmoitukset ja huoltojen tilat

**Laitelistaussivu**

Tarkoitus:

Laite voidaan valita listala ilman QR-skannausta.

Keskeiset elementit:

Listaukset laitekategorioittain: esim. laitetyyppi, malli, laite

**Laitetiedot-sivu**

Tarkoitus:
Esittää yksityiskohtaiset tiedot juuri skannatusta laitteesta, mukaan lukien sen nykyinen vuokraustila, mahdolliset vikailmoitukset sekä huoltohistoria.

Keskeiset elementit:

Laitteen perustiedot: Malli, tila(varastossa/vuokralla)

Vikailmoitusten lista: Näyttää, onko laitteesta tehty vikailmoituksia, ja antaa mahdollisuus lisätä uusi ilmoitus

Huoltohistoria: Näyttää aikaisemmat huoltotapahtumat ja tulevat huoltotoimenpiteet

Vuokraus-toiminto: Mahdollisuus merkitä laite vuokraamaksi, jolloin tieto päivittyy reaaliaikaisesti tietokantaan

**Vikalmoitus- ja huoltosivu**


Tarkoitus:
Mahdollistaa vikailmoitusten raportointi ja huoltojen hallinta suoraan mobiililaitteella.

Keskeiset elementit:

Lomake vikailmoituksille, johon käyttäjä voi lisätä kuvia ja tekstikuvauksia

Checkbox vian valitsemiseen listauksesta, kuvaus kenttä kirjaamiseen

Selkeä käyttöliittymä, joka tukee nopeaa reagointia ongelmatilanteissa



## 4. Arkkitehtuuri ja tekninen toteutus

Projektissa on tarkoitus kehittää selainpohjainen, responsiivinen Progressive Web App (PWA). Tämä mahdollistaa natiiviin mobiilisovelluksen kaltaisen käyttökokemuksen. Käyttäjät pääsevät myös helposti käsiksi QR-koodin lukemistoimintoon, joka hyödyntää mobiililaitteen kameraa. Toteutan PERN-stackilla (PostgreSQL, Express, React, Node.js).

**Frontend:**

- Käyttöliittymä rakennetaan Reactilla(Vite, TailwindCSS)-> responsiivinen UI:n kehittäminen.

**Backend:**

- Node.js + Express
- REST API: Frontend kommunikoi backendin kanssa REST API:n kautta.

**Tietokanta:**

- Sovelluksen relaatiotietokantana on PostgreSQL.
- Tietokanta toimii Google Cloud pilvessä.

## 5. Projektin hallinta ja käyttäjätestaus

Add something
