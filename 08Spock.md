# Pedra, Paper, Tisora, Llangardaix o Spock (Versió Definitiva)

Aquest és un joc web complet de **Pedra, Paper, Tisora, Llangardaix o Spock**, inspirat en la famosa expansió del clàssic joc. Està programat en un sol fitxer HTML autocontingut, que es pot executar directament en qualsevol navegador modern. Aquesta versió inclou millores gràfiques, lògica ampliada i un sistema d'IA amb tres estratègies.

## 🧠 Característiques principals

- Joc ampliat amb cinc opcions: Pedra, Paper, Tisora, Llangardaix i Spock.  
- Possibilitat de seleccionar el nombre de rondes (fins a 11).  
- Tres estratègies de la IA:
  - **Aleatori pur**
  - **Imitar el jugador**
  - **Respondre amb la jugada guanyadora anterior**
- Puntuació i ronda visibles en tot moment.  
- Sistema d'àudio amb Web Audio API per a cada tipus de resultat.  
- Visualització responsiva adaptada a mòbils, tauletes i ordinadors.  
- Ús d’emojis visuals (🪨, 🧻, ✂️, 🦎, 🖖) per representar les jugades.  
- Codi net, ben organitzat i autocontingut.

## 🕹️ Instruccions d'ús

1. Obre el fitxer `.html` en qualsevol navegador modern.  
2. Indica quantes rondes vols jugar.  
3. Tria una estratègia de la IA al menú desplegable.  
4. Prem "Començar joc".  
5. Selecciona la teva jugada prement un dels cinc botons.  
6. El joc es desenvoluparà ronda a ronda, i al final mostrarà el resultat global.  
7. Pots reiniciar el joc en finalitzar la partida.

## 📄 Estructura del codi

El fitxer HTML conté:

- **CSS intern** per a l'estil visual, amb disseny responsiu mitjançant media queries.  
- **HTML estructurat** amb una pantalla de configuració i una altra de joc.  
- **JavaScript incrustat** que gestiona:
  - La lògica del joc ampliat (amb noves relacions entre les cinc opcions).
  - L'elecció de jugada de la IA segons l'estratègia.
  - El control de rondes, puntuació i missatges.
  - El sistema d'àudio amb diferents tons per a cada resultat.

## 🔊 So

El joc utilitza la **Web Audio API** per emetre sons diferents quan:

- Guanyes una ronda  
- Perds una ronda  
- Empates una ronda  
- Finalitza la partida

## 👤 Autor

Tomás Cuesta

## 💡 Suggeriments de millora

- Afegir animacions o efectes de transició entre jugades.  
- Mostrar un historial de jugades anteriors.  
- Incloure una secció de regles amb les relacions entre les cinc opcions.  
- Crear un mode de dos jugadors en local.

## ✅ Estat del projecte

**Versió final i funcional.** Pots compartir-la, allotjar-la a GitHub Pages o modificar-la lliurement per als teus propis projectes educatius o d'aprenentatge.

