# Pedra, Paper o Tisora (Versió Definitiva)

Aquest és un joc web complet de **Pedra, Paper o Tisora**, programat en un sol fitxer HTML autocontingut, que es pot executar directament en qualsevol navegador. La versió definitiva incorpora totes les funcionalitats previstes i ha superat la fase beta.

## 🧠 Característiques principals

- Joc clàssic contra la màquina.
- Possibilitat de seleccionar el nombre de rondes (fins a 11).
- Tres estratègies de la IA:
  - **Aleatori pur**
  - **Imitar el jugador**
  - **Respondre amb la jugada guanyadora anterior**
- Puntuació i ronda visibles en tot moment.
- Sistema d'àudio amb Web Audio API per a cada tipus de resultat.
- Visualització responsiva adaptada a mòbils, tauletes i ordinadors.
- Ús d'emojis visuals (🪨, 🧻, ✂️) per representar les jugades.
- Codi net i ben organitzat per facilitar-ne la comprensió.

## 🕹️ Instruccions d'ús

1. Obre el fitxer `.html` en qualsevol navegador modern.
2. Indica quantes rondes vols jugar.
3. Tria una estratègia de la IA al menú desplegable.
4. Prem "Començar joc".
5. Selecciona la teva jugada prement un dels botons: Pedra, Paper o Tisora.
6. El joc es desenvoluparà ronda a ronda, i al final mostrarà el resultat global.

## 📄 Estructura del codi

El fitxer HTML conté:

- **CSS intern** per a l'estil visual, amb disseny responsiu mitjançant media queries.
- **HTML estructurat** amb una pantalla de configuració i una altra de joc.
- **JavaScript incrustat** que gestiona:
  - La lògica del joc
  - L'elecció de la jugada de la IA segons l'estratègia
  - El control de rondes, puntuació i missatges
  - L'àudio per als esdeveniments clau

## 🔊 So

El joc utilitza la **Web Audio API** per emetre sons diferents quan:

- Guanyes una ronda
- Perds una ronda
- Empates una ronda
- Finalitza la partida

## 👤 Autor
Tomás Cuesta

## 💡 Suggeriments de millora

- Afegir animacions entre jugades
- Incloure un botó d'ajuda o de regles
- Guardar partides anteriors a localStorage
- Crear una versió multijugador local

## ✅ Estat del projecte

**Versió final i funcional.** Pots compartir-la, allotjar-la a GitHub Pages o modificar-la lliurement per als teus propis projectes educatius o d'aprenentatge.

---
