# NEX GEN Cargo Transport
## Analisi layout
<!-- ![](public/img/screencapture.png) -->
Possibile struttura in App.vue:
-   TheHeader.vue
    - div "info-bar" superiore fissa
    - div "jumbotron" e all'interno NavBar.vue
        - NavBar.vue
<br></br>
-   TheMain.vue - 
suddiviso in 6 section
    1. WHO WE ARE - bianco, con paragrafo descrittivo e lista Vehicle Types
    2. ROAD TRANSPORT - nero
        - componente TheCard.vue
    3. HOW IT WORKS IN PRACTICE - bianco con road-map lineare
    4. WHAT ARE WE DOING - banner image con col di numeri
    5. CUSTOM TESTIMONIALS - nero
        - componente TheCard.vue
    6. SEND A MESSAGE - bianco
        - componente TheForm.vue
<br></br>
- TheFooter.vue
    - card
    - extra footer-bar inferiore

<br></br>
<br></br>
## Elementi riutilizzabili
- BOTTONI:
    - btn outline, text white 
    - btn outline, text colored
    - btn full colored
<br></br>
- CARD:
Lo styling è uguale per tutte le card ma il componente TheCard,vue viene richiamato solo in due section: 
    - ROAD TRANSPORT, icona in header card
    - CUSTOM TESTIMONIALS, icona in footer card
Nella componente TheFooter.vue non utilizzavile il TheCard.vue, ma stesso styling
<br></br>

