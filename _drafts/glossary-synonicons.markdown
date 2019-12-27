---
title: 'Glossary: synonicons'
date: 2019-11-05 10:54:00 +13:00
---

<link rel="stylesheet" href="https://unpkg.com/beerslider/dist/BeerSlider.css">

<style>
.beer-slider {
  font-family: Montserrat;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}
</style>


In linguistics and computer science, we have this notion of a synset. Wikipedia, explain:

<p>In <a href="https://en.wikipedia.org/wiki/Metadata" title="Metadata">metadata</a> a <b>synonym ring</b> or <b>synset</b>, is a group of <a href="https://en.wikipedia.org/wiki/Data_element" title="">data elements</a> that are considered <a href="https://en.wikipedia.org/wiki/Semantically" class="mw-redirect" title="Semantically">semantically</a> equivalent for the purposes of information retrieval.  These data elements are frequently found in different <a href="https://en.wikipedia.org/wiki/Metadata_registry" title="">metadata registries</a>. Although a group of terms can be considered equivalent, <a href="https://en.wikipedia.org/wiki/Metadata" title="Metadata">metadata</a> registries store the synonyms at a central location called the preferred data element.
</p>

<figure>
  <div id="slider1" class="beer-slider" data-start="50">
    <img src="https://thephilosophersmeme.com/uploads/2019-11-04_thephilosophersmeme.com_bento-dog_1080x1080.png" alt="Bento Dog">
    <div class="beer-reveal">
      <img src="https://thephilosophersmeme.com/uploads/2019-11-04_thephilosophersmeme.com_myspace-tom.png" alt="Myspace Tom">
    </div>
  </div>
  <figcaption>Practically indistinguishable.
  </figcaption>
</figure>

<!-- Bottom of body -->
<script src="https://unpkg.com/beerslider/dist/BeerSlider.js"></script>
<script>
  new BeerSlider(document.getElementById('slider1'));
</script>