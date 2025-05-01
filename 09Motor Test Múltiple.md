
# Motor de Test de Respostes Múltiples en HTML + JavaScript

**Autor:** Tomás Cuesta  
**Contacte:** tomcue@iesjuandelacierva.com

Aquest projecte permet executar tests tipus test (de respostes múltiples amb una opció correcta) directament al navegador. És una eina pensada per a ús educatiu amb alumnat de 4t d'ESO o Batxillerat.

---

## 🧪 Què fa aquest motor?

- Carrega un fitxer `.json` amb preguntes tipus test.  
- Permet triar quantes preguntes vols contestar.  
- Barreja les preguntes i les opcions a l'atzar.  
- Mostra retroalimentació visual després de cada resposta.  
- Informa al final del nombre total d'encerts.  
- Tot funciona de manera local al navegador.

---

## 📁 Estructura del JSON

El fitxer `.json` ha de tenir aquesta estructura:

```json
{
  "preguntes": [
    {
      "text": "Quina va ser una de les causes principals de la Revolució Francesa?",
      "opcions": {
        "a": "El descobriment d'Amèrica",
        "b": "La crisi econòmica i social de l'Antic Règim",
        "c": "La guerra de Successió Espanyola"
      },
      "resposta": "b"
    }
  ]
}
```

### 🔍 Detalls importants:

- `"text"`: és l'enunciat de la pregunta.  
- `"opcions"`: un objecte amb claus `"a"`, `"b"`, `"c"`… i els seus textos.  
- `"resposta"`: conté la **clau** de l'opció correcta, no el text literal.

Pots utilitzar més de tres opcions si ho desitges (afegint `"d"`, `"e"`, etc.).

---

## 🧠 Com generar preguntes amb IA

Pots generar el teu fitxer `.json` utilitzant intel·ligència artificial. Simplement copia els teus apunts i demana:

> “Genera 30 preguntes tipus test amb una sola resposta correcta en format JSON utilitzant aquesta plantilla…”

Després, facilita-li aquesta plantilla:

```json
{
  "preguntes": [
    {
      "text": "Text de la pregunta",
      "opcions": {
        "a": "Text opció A",
        "b": "Text opció B",
        "c": "Text opció C"
      },
      "resposta": "b"
    }
  ]
}
```

Revisa que el format es mantingui per evitar errors en carregar.

---

## 🚀 Com utilitzar el test

1. Obre el fitxer `index.html` al teu navegador (doble clic o arrossega'l al navegador).  
2. Prem “Selecciona el fitxer JSON” i tria el fitxer amb les preguntes.  
3. El sistema indicarà quantes preguntes hi ha i podràs triar quantes vols contestar.  
4. Prem “Començar Quiz” i comença el test.

---

## 💡 Recomanacions

- Desa sempre els fitxers `.json` localment al teu dispositiu.  
- Utilitza noms clars com `genetica4eso.json`, `revoluciofrancesa.json`…  
- Si alguna cosa no funciona, assegura't que el fitxer `.json` estigui ben format.

---

## 🎨 Personalització

Pots editar el disseny visual i els comportaments des de:

- El bloc `<style>` per a colors, tipografia i distribució.  
- El bloc `<script>` per ajustar el comportament (nombre d'intents, retroalimentació, puntuacions, etc.).

---

## 🛠️ Requisits tècnics

- Qualsevol navegador modern (Chrome, Firefox, Edge, Brave…).  
- No requereix instal·lació ni connexió a internet.  
- Compatible amb Windows, Linux, Mac i tauletes.

---

## 📚 Aplicacions educatives

- Avaluació prèvia o repàs final.  
- Joc interactiu a classe.  
- Treball individual amb autocorrecció.  
- Projecte grupal perquè l'alumnat creï el seu propi test.

---

## 🛡️ Llicència

Ús lliure i educatiu. Si millores el projecte, comparteix-lo amb altres docents.  
Tomás Cuesta – IES Juan de la Cierva

