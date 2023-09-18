<script setup>
import { useAgeStore } from '@/stores/age';

const { age } = useAgeStore();
</script>

<script>
import { default as Wall } from '@/components/Wall.vue';

export default {
  components: {
    Wall
  }
}
</script>

<template>
  <Wall>
      <a href="/Pierre LEMÉE - Ingénieur logiciel.pdf" title="Version PDF" class="pdf-link block red3">pdf</a>
      <a href="/en" title="Read in english" class="locale-link block blue2">en</a>
  </Wall>
  <div id="content">
    <div id="header">
      <div id="name">
        <h1>Pierre LEMÉE // <span class="soft-title">CTO & Ingénieur logiciel</span></h1>
      </div>
      <div id="job">
        <h3>Homme // <span class="soft-title">{{ age }}</span> // <span class="soft-title">Français</span></h3>
      </div>
    </div>
    <div id="social">
      <a class="github" href="https://www.github.com/pierrelemee" target="_blank" title="Mon profil Github"></a>
      <a class="twitter" href="https://www.twitter.com/pitipout" target="_blank" title="Mon Twitter (personnel)"></a>
      <a class="lastfm" href="https://www.last.fm/user/pitipout/library/artists" target="_blank"
         title="Mon Last.fm top artistes"></a>
    </div>

    <div id="intro">
      <h3 class="section-title intro-title">Intro</h3>
      <p>Le développement logiciel est pour moi comme un <strong>jeu de construction</strong>: en empilant tout plein de
        blocs de taille, couleur et formes différentes et fort d'une imagination sans fin on peut faire d'une idée une
        réalisation réelle, solide et palpable. Transformant chaque esquisse en un projet <strong>réaliste</strong>.</p>
      <p>Voilà donc qui je suis: un développeur de {{ age }} ans <strong>passionné</strong> avec toujours une âme de
        jeune
        garçon
        espiègle. Je cherche sans cesse à savoir comment sont construits les bâtiments / logiciels / librairies,
        <strong>curieux</strong>
        de comprendre comment marchent les choses. J'aime être un constructeur, empilant les lignes de code, établissant
        des algorithmes, structurant les objets et concevant les plans de mes projets. Je suis un amoureux du Web, de
        Linux et de l'Open Source, je sais concevoir, implémenter, tester, déployer, requêter et automatiser. Je suis
        <strong>bâtisseur logiciel</strong>.</p>
    </div>
    <div id="skills-inner">
      <h3 class="section-title skills-title">Tech</h3>

      <div class="skills-category">
        <h4>Backend</h4>
        <ul>
          <li><span class="level level-blue level-5"></span>PHP 7+</li>
          <li><span class="level level-blue level-4"></span>Python</li>
          <li><span class="level level-blue level-4"></span>RabbitMQ</li>
          <li><span class="level level-blue level-4"></span>Symfony 3.4+</li>
          <li><span class="level level-blue level-3"></span>Django 3</li>
          <li><span class="level level-blue level-3"></span>JAVA</li>
          <li><span class="level level-blue level-2"></span>Typescript</li>
          <li><span class="level level-blue level-2"></span>Spring boot</li>

        </ul>
      </div>

      <div class="skills-category">
        <h4>Data</h4>
        <ul>
          <li><span class="level level-yellow level-5"></span>MySQL</li>
          <li><span class="level level-yellow level-4"></span>PostgreSQL</li>
          <li><span class="level level-yellow level-4"></span>Elasticsearch</li>
          <li><span class="level level-yellow level-3"></span>Hadoop</li>
          <li><span class="level level-yellow level-3"></span>Spark</li>
          <li><span class="level level-yellow level-3"></span>HPE Vertica</li>
          <li><span class="level level-yellow level-2"></span>Sqlite</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>Système</h4>
        <ul>
          <li><span class="level level-black level-5"></span>Bash</li>
          <li><span class="level level-black level-4"></span>Ansible</li>
          <li><span class="level level-black level-3"></span>Nginx / Apache</li>
          <li><span class="level level-black level-3"></span>AWS</li>
          <li><span class="level level-black level-2"></span>Redis</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>Frontend</h4>
        <ul>
          <li><span class="level level-red level-5"></span>HTML5 / CSS3</li>
          <li><span class="level level-red level-4"></span>Javascript</li>
          <li><span class="level level-red level-3"></span>VueJS</li>
          <li><span class="level level-red level-3"></span>Bootstrap 4</li>
          <li><span class="level level-red level-3"></span>React</li>
          <li><span class="level level-red level-2"></span>NuxtJS</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>Extra</h4>
        <ul>
          <li><span class="level level-blue level-5"></span>Git</li>
          <li><span class="level level-blue level-3"></span>Composer</li>
          <li><span class="level level-blue level-3"></span>pipenv + uWSGI</li>
          <li><span class="level level-blue level-3"></span>Maven</li>
          <li><span class="level level-blue level-2"></span>The Gimp</li>
        </ul>
      </div>
    </div>
    <div id="jobs">
      <h3 class="section-title jobs-title">Expérience pro</h3>

      <h4>CTO // <span class="soft-title">Ignition Program</span></h4>
      <h5>Paris // <span class="soft-title">Septembre 2020 - maintenant</span></h5>

      <p><a href="https://ignition-program.com/">Ignition Program</a> est le partenaire RH des startups, de early stage
        à
        la scale up. Que ce
        soit par l'accompagnement, le recrutement ou la formation, <strong>Ignition Program</strong> a pour motto de
        rendre les gens heureux
        d'aller au bureau le matin tout en permettant aux talents les plus prometteurs de la scène startup de trouver le
        job de
        leur rêve.</p>
      <p>Mon arrivée coïncide avec la volonté de professionnaliser l'équipe technique et produit. De la rationnalisation
        des coûts
        jusqu'à la définition d'un processus de développement en passant par la création d'une roadmap
        <em>communiquée</em> au CODIR, au
        sein duquel j'interviens, je joue principalement le rôle d'encadrant. Mais j'assume également le rôle de manager
        avec
        chaucn des membres de l'équipe ainsi qu'une position de mentor technique </p>
      <p><strong>Stack technique:</strong> Python, Django, VueJS, Nuxt, PostgreSQL, GitHub, Github Actions, Ansible,
        AWS,
        Metabase, Algolia</p>

      <h4>CTO // <span class="soft-title">Bloom at Work</span></h4>
      <h5>Paris // <span class="soft-title">Janvier 2018 - Mai 2020</span></h5>

      <p><a href="https://www.bloom-at-work.com/">Bloom at Work</a> se donne pour mission de booster l’épanouissement au
        travail. Elle offre
        aux entreprises de toutes tailles une solution pour mesurer, analyser et améliorer le bien-être au travail des
        collaborateurs.
        Avec des sondages simples, courts et fréquents, les entreprises prennent le pouls des équipes en temps réel et
        peuvent agir
        au bon moment pour améliorer le quotidien des employés.</p>
      <p>J'ai rejoint cette jeune startup avant tout afin de ré-internaliser une solution initiée par des prestaires
        externes. Mais très
        vite avec la responsabilité de porter la vision technique et assumer les décisions architecturales au sein d'une
        équipe qui
        a grandit jusqu'à 4 personnes. Ceci tout en remplissant le rôle de lead développeur backend, data et
        sysadmin. </p>
      <p><strong>Stack technique:</strong> PHP, Symfony, MySQL, Git, CircleCI, RabbitMQ, React, Ansible, AWS, Redis,
        Elasticsearch</p>

      <h4>Architecte // <span class="soft-title">Billogram</span></h4>
      <h5>Stockholm // <span class="soft-title">2017</span></h5>

      <p>Bénéficiant d'une opportunité de partir à l'étranger et d'enfin donner une dimension internationale à ma
        carrière, j'ai passé
        l'année 2017 en Suède 🇸🇪 où j'ai posé mes valises dans la startup <a href="https://billogram.com/">Billogram</a>,
        après un passage temporaire
        dans une agence.</p>
      <p>Billogram est une solution de facturation simple en ligne, à l'époque uniquement déployée en Suède et en
        Allemagne.</p>
      <p>J'y ai intégré l'équipe backend et système où je suis intervenu en tant qu'arcitecte logiciel et systèmes </p>
      <p><strong>Stack technique:</strong> Python, Django, PHP, MySQL, Git, RabbitMQ, React</p>

      <h4>CTO // <span class="soft-title">Sens Critique</span></h4>
      <h5>Paris // <span class="soft-title">Août 2016 - Janvier 2017</span></h5>

      <p>J'ai eu le privilège d'être le CTO de <a href="http://www.senscritique.com/">SensCritique</a>,
        dont le site offre à ses membres la possibilité
        de noter ou critiquer des films, séries TV, jeux vidéos, livres ou
        musique, de partager des suggestions de médias à travers la communauté
        et de générer du contenu éditorial. </p>
      <p>Ma mission visait à organiser l'équipe de développement en:</p>
      <ul>
        <li>adoptant une méthodologie <strong>Agile</strong> avec <strong>Scrum</strong></li>
        <li>organisant les tâches et priorisant les projets, en intéraction avec le market et les responsables
          fonctionnels
        </li>
        <li>établissant des standards de développement comme la revue de pair ou les procédures de déploiement</li>
        <li>gérant les partenariats techniques avec nos fournisseurs à travers des réunions de travail</li>
        <li>créant un environnement de test (pour palier au manque de tests unitaires à mon arrivée dans la société) et
          une proécedure
          de d'intégration continue
        </li>
      </ul>
      <p><strong>Stack technique:</strong> PHP, MySQL, Git, Redis, Java, Elasticsearch, RabbitMQ, GraphQL, Ansible, Bash
      </p>

      <h4>Développeur web &amp; data // <span class="soft-title">BlaBlaCar</span></h4>
      <h5>Paris // <span class="soft-title">Juillet 2014 - Juillet 2016</span></h5>

      <p>Je suis fier d'avoir été lead tech au sein de la BI team de <a href="https://www.blablacar.com/">Blablacar</a>,
        le site de référence
        en matière de covoiturage.</p>
      <ul>
        <li>Gestion d'un flux de collecte de données BI orientées actions utlisateur (PHP et Symfony, MySQL et Rabbit
          MQ)
        </li>
        <li>Mise en place des outils de stockage et processing des données sur
          la base BI (Hadoop (HDFS, Pig script et Hive, synchronisation avec la
          base analytique HPE Vertica
        </li>
        <li>Développement d'outils interne de migration de données (Java et Spring, RabbitMQ)</li>
        <li>Mise en place d'un canal alternatif de collecte de données côté client (PHP, Javascript,
          NGinx,Java,Cassandra
          et
        </li>
      </ul>
      <p><strong>Stack technique:</strong> PHP, Symfony, MySQL, Doctrine, Git,
        Redis, Elasticsearch, RabbitMQ, Hadoop (HDFS, Hive, Imapala, Pig-latin,
        Spark), HPE Vertica, Kafka</p>

      <h4>Ingénieur logiciel // <span class="soft-title">Altran</span></h4>
      <h5>Paris // <span class="soft-title">Juillet 2013 - Juin 2014</span></h5>

      <p>J'ai rejoint <a href="https://www.altran.com/">Altran</a> en qualité d'ingénieur consultant au sein d'un
        plateau
        pour <a href="https://www.gemalto.com/">Gemalto</a>,
        leader mondial de solutions de sécurité numérique.</p>
      <p>J'ai contribué au développement d'un projet de plateforme de gestion sécurisée de paiements sans-contact.</p>
      <ul>
        <li>support sur le développement de l'interface d'administration ainsi que la solution bakcned</li>
        <li>mise à jour des scripts d'installation (pour systèmes <strong>Linux</strong> et administration réseau, mise
          en
          place et intégration des scsripts)
        </li>
        <li>creation du service de monitoring des services applicatifs</li>
        <li>intervention sur la gestion de configuration logicielle ainsi que la maintenance du système de compilation
          et
          génération
        </li>
      </ul>
      <p><strong>Stack technique:</strong> JAVA, JSF, SOAP, JPA, Bash, Python, Weblogic, JMX, Groovy, Maven, SVN</p>

      <h4>Ingénieur Logiciel // <span class="soft-title">Thales Alenia Space</span></h4>
      <h5>Cannes // <span class="soft-title">Avril 2011 - Mai 2013</span></h5>

      <p>J'ai effectué mon alternance au sein du groupe <a
          href="https://www.thalesgroup.com/fr/global-activities/espace">Thales
        Alenia Space</a>,
        le leader européen des solutions par satellite.</p>
      <p>En tant que membre de l'équipe optique, j'ai développé et maintenu un environnement de simulation d'images
        satellites haute
        résolution en <strong>Java</strong>, et pris en main son évolution ainsi que géré l'ensemble des outils
        applicatifs de simulation en:</p>
      <ul>
        <li>participant à chaque étape du cycle de vie du développeent logiciel, des spécifications fonctionnelles à la
          validation
          par l'utilisateur final
        </li>
        <li>étant responsable de la gestion de version logicielle et des paramètres applicatifs</li>
        <li>encadrant l'intervention sur site de nos sous-traitants, aidant sur
          la fourniture des données, organisant les réunions hebdomadaires
          d'échange et de reporting d'avancement
        </li>
      </ul>
      <p><strong>Stack technique:</strong> JAVA, Swing, Maven, JNI, C, Bash</p>

      <h4>Développeur web // <span class="soft-title">Toutletoutim</span></h4>
      <h5>Normandie // <span class="soft-title">2009 - 2011</span></h5>

      <p>Après mon diplôme universitaire, j'ai décidé de me lancer comme webmaster en freelance pour renforcer mes
        compétences de
        développement web. J'ai conçu, construit et livré des sites web pour divers clients et organisations (tels que
        <a
            href="http://www.les-blotteries.com/">Les Blotteries</a>
        ou <a href="http://www.deco-styl.com/">Déco Styl</a>)</p>
      <p>Ceci m'a permis d'appréhender:</p>
      <ul>
        <li>la gestion clientèle: prise de besoin, réunions d'avancement, livraison et facturation</li>
        <li>le développement et la maintenance de plusieurs sites web avec bases de données dédiées ou applications
          clients riches
        </li>
        <li>les contraintes légales, financières et administratives du métier</li>
      </ul>
      <p><strong>Stack technique:</strong> PHP, MySQL, CSS, Javascript, Actionscript, Gimp</p>

      <h4>Développeur // <span class="soft-title">Orange Labs</span></h4>
      <h5>Caen // <span class="soft-title">2009</span></h5>

      <p>Pour ma première expérience de développeur, j'ai eu la chance de rejoindre l'équipe R&amp;D d'<a
          href="https://laborange.fr/">Orange Labs</a>.
        Ma mission a ainsi consisté à:</p>
      <ul>
        <li>établir une passerelle entre la Livebox Orange et le catalogue des web radios que la marque proposait en
          <strong>Java</strong> au travers
          du protocole réseau de médias UPnP
        </li>
        <li>concevoir, développer et tester le serveur de médias distribiuant lesdites radios depuis le web service
          d'Orange vers tous
          les appareils connectés sur le réseau domestique, découvrant au passage le concept de web services
          (<strong>REST</strong> et <strong>SOAP</strong>)
        </li>
      </ul>
      <p><strong>Stack technique:</strong> Java, UPnP (framework Cybergarage), web services REST &amp; SOAP </p>

    </div>
    <div id="education">
      <h3 class="section-title education-title">Scolarité</h3>

      <h4>Software engineer MBA // <span class="soft-title">CFA AFTI</span></h4>
      <h5>Orsay // <span class="soft-title">2013</span></h5>

      <p>J'ai complété ma formation par ce cycle de 2 ans pour asseoir mon socle de connaissance technique, travailler
        dans l'industrie
        (ja passais la moitié de mon temps au bureau) et appréhender les b-à-ba de l'ingénierie. </p>
      <p>Au delà des aspects technqiues, j'ai surtout découvert comment récolter les besoins clients, écrire des
        <strong>spécifications</strong>,
        <strong>organiser</strong> les tâches de développement ou assurer la stabilité logicielle au travers des
        <strong>tests
          unitaires</strong>.</p>

      <h4>Licence informatique // <span class="soft-title">Université de Caen</span></h4>
      <h5>Caen // <span class="soft-title">2009</span></h5>

      <p>Au cours de cette licence, j'ai constitué tout le socle de mon bagage technique, incluant:</p>
      <ul>
        <li>langages de programmation: Python, JAVA, PHP, C, C++, Haskell, et autres</li>
        <li>approches scientifiques: algorithmie, algèbre, sciences physiques, etc...</li>
        <li>concepts techniques globaux: base de données, systèmes d'exploitation, réseau, traitement du langage,
          système
          d'infirmation
          géographique
        </li>
      </ul>

    </div>
    <div id="misc">
      <h3 class="section-title misc-title">Divers</h3>

      <p>En plus de ma langue maternelle, je parle couramment <strong>anglais</strong>, peux suivre une conversation en
        <strong>espagnol</strong> et suis capable
        d'identifier quelques mots en <strong>italien</strong> et <strong>suédois</strong>. </p>
      <p>Sur mon temps libre j'aime regarder des films et des séries TV. Dès que je le peux j'écoute de la musique
        (principalement
        électro, trip-hop, rock ou jazz). Je suis un accro de <strong>golf</strong>, mais je joue parfois au <strong>tennis</strong>,
        <strong>cours</strong> régulièrement
        et vais à la salle de <strong>gym</strong> quand je suis motivé.</p>
      <p>J'aime déguster a bon <strong>vin</strong>, une bonne <strong>bière</strong> ou un bon <strong>whisky</strong>.
        Je joue aux <strong>mots fléchés</strong> dès que je le peux (et
        non je n'ai pas 70 ans).</p>
      <p>Je vis actuellement dans mon appartement du 12e arrondissement de <strong>Paris</strong>.</p>
    </div>
    <div id="skills-outter">
      <h3 class="section-title skills-title">Tech</h3>

      <div class="skills-category">
        <h4>Backend</h4>
        <ul>
          <li><span class="level level-blue level-5"></span>PHP 7+</li>
          <li><span class="level level-blue level-4"></span>Python</li>
          <li><span class="level level-blue level-4"></span>RabbitMQ</li>
          <li><span class="level level-blue level-4"></span>Symfony 3.4+</li>
          <li><span class="level level-blue level-3"></span>Django 3</li>
          <li><span class="level level-blue level-3"></span>JAVA</li>
          <li><span class="level level-blue level-2"></span>Typescript</li>
          <li><span class="level level-blue level-2"></span>Spring boot</li>

        </ul>
      </div>

      <div class="skills-category">
        <h4>Data</h4>
        <ul>
          <li><span class="level level-yellow level-5"></span>MySQL</li>
          <li><span class="level level-yellow level-4"></span>PostgreSQL</li>
          <li><span class="level level-yellow level-4"></span>Elasticsearch</li>
          <li><span class="level level-yellow level-3"></span>Hadoop</li>
          <li><span class="level level-yellow level-3"></span>Spark</li>
          <li><span class="level level-yellow level-3"></span>HPE Vertica</li>
          <li><span class="level level-yellow level-2"></span>Sqlite</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>Système</h4>
        <ul>
          <li><span class="level level-black level-5"></span>Bash</li>
          <li><span class="level level-black level-4"></span>Ansible</li>
          <li><span class="level level-black level-3"></span>Nginx / Apache</li>
          <li><span class="level level-black level-3"></span>AWS</li>
          <li><span class="level level-black level-2"></span>Redis</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>Frontend</h4>
        <ul>
          <li><span class="level level-red level-5"></span>HTML5 / CSS3</li>
          <li><span class="level level-red level-4"></span>Javascript</li>
          <li><span class="level level-red level-3"></span>VueJS</li>
          <li><span class="level level-red level-3"></span>Bootstrap 4</li>
          <li><span class="level level-red level-3"></span>React</li>
          <li><span class="level level-red level-2"></span>NuxtJS</li>
        </ul>
      </div>

      <div class="skills-category">
        <h4>Extra</h4>
        <ul>
          <li><span class="level level-blue level-5"></span>Git</li>
          <li><span class="level level-blue level-3"></span>Composer</li>
          <li><span class="level level-blue level-3"></span>pipenv + uWSGI</li>
          <li><span class="level level-blue level-3"></span>Maven</li>
          <li><span class="level level-blue level-2"></span>The Gimp</li>
        </ul>
      </div>
    </div>
  </div>
</template>
