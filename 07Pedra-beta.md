# Pedra, Paper o Tisora – Versió Beta

Aquest és un joc clàssic de **Pedra, Paper o Tisora**, programat en un sol fitxer HTML que funciona directament al navegador, sense necessitat de connexió a internet ni d'instal·lació addicional.

## 📜 Descripció

El joc permet triar quantes rondes vols jugar (entre 1 i 11) i enfrontar-te a una **IA simple** que selecciona la seva jugada de manera aleatòria.

Cada ronda té efectes de so i mostra en pantalla quina jugada ha fet cadascú. Al final, el programa declara el resultat final i ofereix l'opció de **reiniciar el joc**.

El joc està completament adaptat per a **mòbils, tauletes i ordinadors**, amb disseny responsiu i escalat de botons i textos.

## 🧠 Algoritme de decisió

La IA tria entre **rock, paper o scissors** de manera aleatòria. Les regles del joc s'implementen amb una estructura clara:

```javascript
const rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
```

Això significa:  
- Pedra guanya a Tisores  
- Paper guanya a Pedra  
- Tisores guanyen a Paper  

Si tots dos trien el mateix, hi ha empat.

## ✨ Característiques principals

- 🎮 Interfície clara i responsiva  
- 🔊 Efectes de so a cada ronda i al final de la partida  
- 📱 Adaptat a tot tipus de pantalles  
- 🧠 Algoritme de decisió simple i eficient  
- 🧻 Ús d’**emojis d’objectes reals**: roca, rotlle de paper, tisora  
- 🧪 Versió beta totalment operativa

## 📁 Instruccions d'ús

1. Descarrega el fitxer `.html`.  
2. Obre'l amb doble clic o des de qualsevol navegador.  
3. Introdueix el nombre de rondes.  
4. Tria la teva jugada fent clic sobre un dels tres botons.  
5. El joc mostrarà els resultats, sumarà punts i, al final, mostrarà el marcador total.

## 👨‍💻 Autor

[Introdueix aquí el teu nom]

Aquest joc forma part del projecte educatiu **“Programar des de zero”**, on s'aprenen conceptes de programació web mitjançant jocs, simulacions i eines educatives.

## 🔧 Estat del projecte

**Versió Beta Operativa**  
Funciona correctament en tots els dispositius.  
Pendent de futures ampliacions com nous modes de joc, anàlisi de patrons del jugador o estratègies variables per a la IA.

## 📤 Compartir i allotjar

Pots pujar aquest fitxer a GitHub com a pàgina pública o compartir-lo com a fitxer. No cal instal·lar res. Només cal tenir un navegador modern.

