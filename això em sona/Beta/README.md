# Això em sona

**Això em sona** és una aplicació web educativa creada per **Tomás Cuesta** (tomcue@iesjuandelacierva.com), que permet treballar la memòria auditiva, l’atenció i el reconeixement musical mitjançant dues eines integrades:

- 🎵 Un **joc de l’endevinalla musical**, amb rondes per torns i puntuació.  
- ✂️ Un **tallador de MP3**, que permet retallar fragments d’àudio directament des del navegador.

---

## 🎮 Mode joc: Quina cançó és?

Aquest mode permet jugar-hi a classe o a casa escoltant fragments musicals i intentant endevinar la cançó entre diverses opcions.

**Característiques:**
- Selecció d’una carpeta local amb cançons `.mp3`.  
- Configuració inicial: nombre de rondes i jugadors (d’1 a 4).  
- Reproducció d’un fragment aleatori de cada cançó.  
- Tres opcions de resposta per torn (una correcta).  
- Sons d’encert i error generats per la Web Audio API.  
- Fons visual dinàmic que canvia amb cada cançó.  
- Puntuació individual i marcador de rondes.  
- Pantalla de resultat final amb efectes visuals.

---

## ✂️ Mode tallador de MP3

Una eina que permet a l’alumnat o al professorat:

- Carregar un fitxer MP3 des del seu dispositiu.  
- Seleccionar un interval de temps (inici i fi) en format minuts/segons.  
- Descarregar directament el fragment com a fitxer MP3.  
- Sense necessitat de pujar el fitxer a cap servidor.

L’eina és útil per generar fragments breus amb finalitats didàctiques o per preparar noves rondes del joc.

---

## 📁 Estructura del projecte

```
esto-me-suena/
├── index.html            ← Interfície principal del joc i del tallador  
├── css/  
│   └── estil.css         ← Estils visuals del projecte  
├── js/  
│   ├── joc.js            ← Lògica del joc de reconeixement musical  
│   └── tallador.js       ← Lògica del retall de MP3  
├── imatges/              ← Fons del joc (no incloses aquí)  
└── README.md             ← Aquest fitxer  
```

---

## 🚀 Com utilitzar-lo

1. Descarrega tots els fitxers del projecte.  
2. Obre `index.html` en un navegador modern (Chrome, Edge o compatible).  
3. Des del menú principal, tria:  
   - **Jugar** → per al joc de reconeixement musical.  
   - **Tallador MP3** → per retallar un fitxer d’àudio.  

> Cal que el navegador doni suport a l’API `showDirectoryPicker()` (només disponible en navegadors Chromium actualitzats).

---

## 🧠 Aplicacions educatives

- Activitats lúdiques a classe de música o llengua.  
- Jocs culturals amb música de diferents èpoques o gèneres.  
- Desenvolupament de la memòria auditiva.  
- Introducció pràctica a la manipulació d’àudio digital.  
- Treball col·laboratiu per equips.

---

## 👤 Autor

Aquest projecte ha estat creat per **Tomás Cuesta**, professor de Filosofia i apassionat de la programació didàctica.  
Abril de 2025.  
Ús lliure amb finalitats educatives.

---

## 📜 Llicència

Pots utilitzar, modificar i compartir aquest projecte amb finalitats educatives sempre que citis l’autor original.