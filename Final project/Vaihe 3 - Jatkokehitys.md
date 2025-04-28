# Vaihe 3. – Jatkokehitys (vapaaehtoinen)

## Valittu käyttötapaus tai toiminnon parannus
- Pilvipalvelun käyttöönotto
- Tietokannan toiminnan parantaminen pilvessä
- Huolto- ja vikailmoitustietojen kirjaamisen parannus
- QR-koodin lukemisen testaus


## Alkuperäinen määrittely
Tavoitteena oli siirtää sovellus pilvipalveluun, jotta se on käytettävissä laajemmalla asiakaskunnalla ja mahdollistaa skaalautuvuuden.
Google Cloud tarjoaa tarvittavat palvelut backendin ja frontendin ajamiseen. Backendin siirtäminen pilveen mahdollistaa tietokannan ja sovelluksen käytön useiden käyttäjien kesken samanaikaisesti.

## Toteutus
Toisessa vaiheessa sovellus oli käytettävissä vain paikallisesti, koska en ehtinyt saada integrointia Google Cloudiin toimimaan. Tässä oli paljon haasteita, etenkin tietokannan osalta. Frontend ja backend ajetiin paikallisesti sekä virtuaalikoneessa. Nyt saatiin Cloud integraatio toimimaan osittain. QR-koodin skannaus testattiin react-qr-reader kirjastolla ja saatiin testattua, mutta jotain epävakautta toiminnassa on. Tätä jatkokehitetään.

### Muita muutoksia
Backendin koodia muokkasin yhteensopivaksi Google Cloudin PostgreSQL-tietokannan kanssa. 

