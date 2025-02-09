## Inspiration
Lorsque nous avons vu le thème de cette année, nous avons tout de suite pensé à faire une carte interactive qui ressemblait aux cartes pour visualiser l’impact de la montée des eaux sur les villes du monde ou autres impact environmentaux comme https://coastal.climatecentral.org/map, https://theoceancleanup.com/plastic-tracker/ , https://waqi.info/#/c/4.333/7.871/2.3z , https://www.carbonmap.org/#Emissions 
Nous voulions faire quelque chose d’original, alors nous avons finalement décidé de faire une carte qui montre le niveau de différents polluants dans l’air autravers les années, ce qui ne semblait pas exister.

## Ce que ça fait
C’est une carte interactive où l'utilisateur peut sélectionner l’année et le type de polluant. En nous basant sur des données open source, nous collectons pour chaque point une latitude et une longitude, un type de polluant et une quantité. L’utilisateur voit ensuite une heatmap (carte de concentration) pour ce polluant et cette année et aussi une description du polluant et de ces effets.

## Comment nous l’avons construit
Nous avons essayé d’utiliser Lovable pour construire le frontend, mais comme nous ne connaissions pas react, nous n’avons pas pu continuer l’application. Nous avons plutôt opté pour du html/css/javascript classique. Ensuite, nous avons utilisé l’API de google maps pour créer la heatmap et nous avons extrait les données open source du World Health Organization en .xcls que nous avons converti en json.

## Les défis que nous avons rencontrés
Nous ne connaissions tous aucunement le développement web et l’utilisation d’API avant le début de ce projet. Nous avons donc dû faire des recherches pour tout ce que nous avons construit, ce qui a pris énormément de temps. De plus, notre manque de connaissance nous a empêché de correctement utiliser les outils d’IA générative, puisque nous ne comprenions pas les réponses. Comme quoi le rêve du “natural language as code” est encore loin d’être viable.

## Ce dont nous sommes fier
D’avoir bâti malgré tout un site web qui fonctionne avec une heatmap qui fonctionne comme désiré. Même si l’application ne correspond pas totalement à ce que nous avions envisagé au départ, nous sommes très fiers d’avoir appris beaucoup durant ce projet.

## Ce que nous avons appris
Le développement web en général. 
Comment utiliser l’API de google maps et comment protéger une clé d’API
Comment utiliser des outils d’IA générative comme Lovable et Cursor

## Ce qui s’en vient pour Air-mageddon
Nous aimerions ajouter beaucoup plus de points de données afin que la carte rendue soit plus précise et représentative. Nous aimerions aussi étendre le nombre de polluants ou même ajouter les émissions de GES ou autres gaz qui peuvent se retrouver dans l’atmosphère, qu’ils soient nocifs ou non.
