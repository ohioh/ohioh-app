<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href=".source/main.css" />
  <title><?= $site_name ?></title>
</head>

<body>
  <h1><?= $site_name ?></h1>
  <main>
    <?php
    $today = date('d.m.Y');
    $now = date('H:i:s'); ?>

  </main>
  <footer>
    <p><a href="https://selfhtml.org/impressum.html">Impressum</a></p>
    <p>Seite abgerufen am <?= $today ?> um <?= $now ?> Uhr.</p>
  </footer>
</body>

</html>
