<?php
$site_name = "HTML5-Seite mit Grundstruktur";
include ("./pages/settings/header.php"); ?>

<article>
  <h2>Überschrift</h2>
  <p>Dies ist meine erste HTML5-Seite</p>
      ... mehr Inhalt
</article>

<aside>
  <h3>Weiterführende Links</h3>
  <ul>
    <li><a href="#link_1.html">Wiki</a></li>
    <li><a href="#link_2.html">Blog</a></li>
    <li><a href="#link_3.html">Forum</a></li>
  </ul>
</aside>
<readfile("./pages/settings/slider.html")>
<?php include ("./pages/settings/footer.php"); ?>
