# REPTES DE PROGRAMACIÓ

En aquesta carpeta trobaràs totes les solucions als reptes del llibre *“Aprèn a programar des de zero (de veritat) fent servir la Intel·ligència Artificial”*.  
Llegeix primer aquests reptes i instruccions, i després de crear les teves pròpies solucions colze a colze amb la teva IA preferida, compara-les amb les meves, que tens adjuntes a la carpeta d’aquest document.

---

## 1. ENDEVINA EL NOMBRE

**Descripció funcional del joc "Endevina el nombre"**

Programaràs un petit joc d’endevinar amb aquestes característiques:

### 1. Pantalla inicial amb menú de selecció de mode:
- **Mode Fàcil**: s’indica si el nombre secret és més alt o més baix.
- **Mode Difícil**: a més de “més alt” o “més baix”, s’indica si t’hi acostes o t’allunyes.

### 2. Configuració inicial:
- Selecció del nombre màxim d’intents (entre 1 i 10).
- Un cop confirmat, la partida comença i ja no es pot canviar.

### 3. Desenvolupament del joc:
- El programa genera un nombre entre 1 i 100.
- El jugador introdueix nombres i rep pistes.
- Missatges de victòria o derrota al final del joc.

### 4. Interfície:
- Mostra intents usats i restants.
- Missatges visuals i sons per encerts i errors.

### 5. Reinici:
- Botó per tornar al menú principal i reiniciar tot.

---

## 2. PARELLES – Joc de Memòria

**Descripció funcional del "Joc de Memòria"**

### Fases del joc:

#### 1. Selecció inicial:
- Elecció del nombre de parelles (de 2 a 10).
- Taulell amb el doble de cartes (una parella per figura).

#### 2. Dinàmica del joc:
- Les cartes estan ocultes per defecte.
- Se’n giren dues per torn. Si coincideixen, queden descobertes.
- Sons diferents per a encerts i errors.

#### 3. Final de partida:
- Missatge de felicitació.
- Botó de "Reiniciar" amb nova selecció de parelles.

### Característiques visuals i tècniques:
- Taulell adaptable en quadrícula.
- Figures amb CSS: cercles, estrelles, cors...
- Animació de gir 3D.
- Ús d’arrays, lògica condicional i CSS modern.

---

### 2 PLUS: DOBLE REPTE EXTRA – Verbs Irregulars en Anglès

**Adaptació del joc de memòria per repassar verbs irregulars:**

- Cartes amb:
  - Infinitiu + traducció
  - Participi passat en anglès  
  _Exemple: `go – anar` ↔ `gone`_

#### Requisits addicionals:
- Preguntar nombre de jugadors i els seus noms.
- Torns alterns amb marcador visible.
- Sons amb Web Audio API (beep agut i greu).
- Resultat final (individual o competitiu).
- Botó per tornar al menú inicial.

**Criteris de codi:**
- HTML autocontingut.
- Bon disseny, sense recursos externs.
- Ús d’arrays, condicionals i manipulació del DOM.

---

### Ara en francès!

**Versió amb Passé Composé**

- Infinitiu + traducció ↔ forma composta en francès.  
  _Exemple: `aller – anar` ↔ `je suis allé`_

#### Igual que en la versió anglesa, però amb:
- Participis compostos: `je suis/j’ai + participi`
- Màxim de 15 parelles per mantenir la jugabilitat.
- Tots els efectes i funcionalitats anteriors.

---

## 3. REPTES “ARREGLA ELS CODIS AMB EL TÍTOL 99…”

**Fitxers:** Penjat, Clic, Simó, Tanc, Tres en ratlla.  
**Objectiu:** Revisar, depurar, millorar. Fes servir la IA com a aliada!

### Algunes idees:
- **Penjat**: revisa les animacions (cames...).
- **Clic**: millora la dinàmica i la visibilitat.
- **Simó**: revisa la tolerància als errors.
- **Tanc**: millora la interfície, afegeix un altre tanc, barra de dany.
- **Tres en ratlla**: millora interfície, colors, animacions, dificultat.

---

## 4. TRES REPTES A PARTIR DEL TEST MÚLTIPLE

### Primer repte:
**Crear versions autocontingudes de test per tema.**
- Inserir el JSON directament dins l’HTML.
- Evitar haver de carregar fitxers externs.

### Segon repte:
**Test de veritable/fals**
- Canvi d’estructura HTML + JSON.
- Una afirmació i un valor booleà associat.

### Tercer repte:
**Penalització per errors**
- Segons el nombre d’opcions:
  - 3 opcions → –0,5 per error
  - 4 opcions → –0,33 per error
  - V/F → –1 per error

**Resultat:**  
Un test més exigent, més just i més semblant a un examen real.

---
