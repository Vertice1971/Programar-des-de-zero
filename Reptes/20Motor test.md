
# Test Vertader/Fals
---

Aquest és un test interactiu que permet a l'usuari respondre preguntes de tipus vertader/fals, carregades des d'un fitxer JSON. El nombre de preguntes es pot seleccionar abans de començar. En finalitzar, es mostra la puntuació obtinguda i un resum personalitzat amb retroalimentació per a cada resposta.

## Instruccions

1. Prepara un **fitxer JSON** amb preguntes seguint aquest format:
   ```json
   {
     "preguntas": [
       { "texto": "La Terra gira al voltant del Sol.", "respuesta": true },
       { "texto": "L'aigua bull a 80 graus.", "respuesta": false }
     ]
   }
   ```

### A la interfície:

- Selecciona el fitxer JSON.
- Indica quantes preguntes vols respondre (per exemple, 10 o 20).
- Prem **Carregar Quiz** per començar.

### Durant el test:

- Respon cada pregunta marcant l'opció correcta.
  - Les respostes es barregen aleatòriament.
  - Pots canviar la teva resposta abans d'enviar.

### En finalitzar:

- Prem **Enviar respostes** per veure el resultat:
  - Es mostrarà quantes respostes has encertat.
  - Cada pregunta inclourà un comentari indicant si la teva resposta ha estat correcta o no.
- Pots repetir el test amb altres preguntes utilitzant el botó **Tornar-ho a intentar**.

## Característiques

- Interfície clara i accessible amb retroalimentació immediata.
- Compatible amb qualsevol navegador modern.
- Lectura dinàmica de fitxers JSON sense necessitat de connexió externa.
- Estil visual senzill i adaptat al seu ús educatiu.
- Suporta selecció aleatòria del nombre de preguntes a mostrar.

## Tecnologies utilitzades

- **HTML5**
- **CSS3** (disseny adaptatiu i ressaltat de resultats)
- **JavaScript** (lectura de fitxers, maneig del DOM, lògica de correcció)

## Autor

Tomàs Cuesta  
[Correu: tomcue@iesjuandelacierva.com](mailto:tomcue@iesjuandelacierva.com)

