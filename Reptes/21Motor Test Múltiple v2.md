# Test d'Opcions Múltiples – Versió 2
---

Aquesta és la **segona versió** del test interactiu d’opcions múltiples desenvolupat per Tomás Cuesta. En aquesta versió s’ha introduït un **sistema de penalització per error**, millorant la fidelitat de la puntuació final i fomentant una avaluació més justa i precisa.

## Què millora aquesta versió?

En la **versió original**, els errors no penalitzaven. Això podia portar a què l’alumnat respongués a l’atzar sense conseqüències, inflant la nota sense que realment reflectís la seva comprensió del contingut.

En canvi, aquesta **nova versió penalitza cada error** en proporció al valor de la pregunta. D’aquesta manera:

- **Aciertos sumen** punts cap a una nota final sobre 10.  
- **Errors resten** una part proporcional del valor de la pregunta, depenent del nombre d’opcions incorrectes.

Així, la nota obtinguda és un reflex més ajustat del coneixement real de l’alumnat, desincentivant l’atzar i premiant la reflexió.

## Instruccions d’ús

1. **Selecciona un arxiu JSON** amb preguntes d’aquest tipus:
   ```json
   {
     "preguntas": [
       {
         "texto": "¿Cuál es la capital de Francia?",
         "opciones": {
           "a": "París",
           "b": "Roma",
           "c": "Madrid"
         },
         "respuesta": "a"
       }
     ]
   }
