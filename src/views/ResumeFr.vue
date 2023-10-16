<script setup>
import { useAgeStore } from '@/stores/age'

const { age } = useAgeStore()
</script>

<script>
import { default as Wall } from '@/components/Wall.vue'
import { default as LinkedinLogo } from '@/assets/logo-linkedin.svg'
import { default as GithubLogo } from '@/assets/logo-github.svg'
import { default as TwitterLogo } from '@/assets/logo-twitter.svg'
import { default as LastfmLogo } from '@/assets/logo-lastfm.svg'

export default {
  components: {
    Wall,
    LinkedinLogo,
    GithubLogo,
    TwitterLogo,
    LastfmLogo
  }
}
</script>

<template>
  <Wall position="left"></Wall>

  <aside>
    <a class="block red3" href="/pdfs/Pierre LEMÉE - Ingénieur logiciel.pdf" title="Version PDF"
      >pdf</a
    >
    <a class="block blue2" href="/en" title="Read in english">en</a>
  </aside>

  <div class="page-outer">
    <div class="page-inner">
      <header>
        <div class="name">
          <h1>Pierre LEMÉE // <span class="soft-title">Ingénieur logiciel</span></h1>
        </div>
        <div class="job">
          <h2>
            Homme // <span class="soft-title">{{ age }}</span> //
            <span class="soft-title">Français</span>
          </h2>
        </div>
        <div class="social">
          <a
            class="padded"
            href="https://www.linkedin.com/in/pierre-lemee/"
            target="_blank"
            title="Mon profil Linkedin"
          >
            <LinkedinLogo />
          </a>

          <a href="https://www.github.com/pierrelemee" target="_blank" title="Mon profil Github">
            <GithubLogo />
          </a>
          <a
            href="https://www.twitter.com/pitipout"
            target="_blank"
            title="Mon Twitter (personnel)"
          >
            <TwitterLogo />
          </a>
          <a
            href="https://www.last.fm/user/pitipout/library/artists"
            target="_blank"
            title="Mon Last.fm top artistes"
          >
            <LastfmLogo />
          </a>
        </div>
      </header>

      <div id="content">
        <section aria-label="Intro">
          <h3 class="title-blue">Intro</h3>
          <p>
            Je construis des applications web comme on joue aux
            <a href="https://www.lego.com" title="Lego">Lego ©</a>, je suis un
            <strong>bâtisseur logiciel</strong>.
          </p>
        </section>
        <section aria-label="Tech" class="skills">
          <h3 class="title-yellow">Tech</h3>

          <div class="skill-badges">
            <p>These are the technologies I know:</p>
            <!--
              Legend:
              - red for languages
              - yellow for frameworks
              - blue for frontend
              - black for devops / sysadmin
              - white for data

              **or** by universe
            -->
            <span class="skill-badge skill-red skill-master">PHP</span>
            <span class="skill-badge skill-yellow skill-secure">Symfony</span>
            <span class="skill-badge skill-red skill-secure">Python</span>
            <span class="skill-badge skill-yellow skill-secure">Django</span>
            <span class="skill-badge skill-yellow skill-comfy">Flask</span>
            <span class="skill-badge skill-red skill-secure">Javascript</span>
            <span class="skill-badge skill-red skill-comfy">Typecript</span>
            <span class="skill-badge skill-yellow skill-comfy">Nest</span>
            <span class="skill-badge skill-white skill-master">MySQL</span>
            <span class="skill-badge skill-white skill-secure">PostgreSQL</span>
            <span class="skill-badge skill-blue skill-secure">Vue</span>
            <span class="skill-badge skill-blue skill-secure">Bootstrap</span>
            <span class="skill-badge skill-blue skill-padawan">React</span>
            <span class="skill-badge skill-blue skill-comfy">Tailwind</span>
            <span class="skill-badge skill-red skill-comfy">Java</span>
            <span class="skill-badge skill-yellow skill-padawan">Spring Boot</span>
            <span class="skill-badge skill-black skill-master">Bash</span>
            <span class="skill-badge skill-black skill-secure">Git</span>
            <span class="skill-badge skill-black skill-comfy">Ansible</span>
            <span class="skill-badge skill-black skill-secure">CI (Circle / Github Actions)</span>
            <span class="skill-badge skill-black skill-comfy">AWS</span>
            <span class="skill-badge skill-white skill-secure">Metabase</span>
            <span class="skill-badge skill-black skill-securer">Rabbit MQ</span>
            <span class="skill-badge skill-black skill-comfy">Redis</span>
            <span class="skill-badge skill-black skill-padawan">Elasticsearch (ELK)</span>
            <span class="skill-badge skill-white skill-padawan">Hadoop</span>
          </div>
        </section>
        <section aria-label="Expérience pro" id="jobs">
          <h3 class="title-red">Expérience pro</h3>

          <div class="job">
            <div class="job-summary">
              <h4>
                <a href="https://beta.gouv.fr/">Beta.gouv</a> &
                <a href="https://underdog.shop/">Underdog</a>
              </h4>
              <h5>Développeur // 2022 - 2023</h5>
            </div>

            <div class="job-description">
              <p>Portez ce vieux whisky au juge blond qui fume !</p>
              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-blue skill-secure">Machin</span>
                <span class="skill-badge skill-black skill-comfy">TRUC</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4><a href="https://ignition-program.com/">Ignition Program</a></h4>
              <h5>CTO // 2020 - 2022</h5>
            </div>

            <div class="job-description">
              <p>
                J'ai managé l'équipe tech (jusqu'à 10 personnes) d'<strong>Ignition Program</strong>
                dans une transition de refonte applicative vers une approche produit performante.
              </p>
              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-red skill-secure">Python</span>
                <span class="skill-badge skill-yellow skill-secure">Django</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4><a href="https://www.bloom-at-work.com/">Bloom at Work (Lucca)</a></h4>
              <h5>CTO // 2018 - 2020</h5>
            </div>

            <div class="job-description">
              <p>
                J'ai créé et fait évoluer l'application, en duo avec la responsable produit, avant
                de recruter une équipe et mettre en place les premiers processes de développement et
                déploiement.
              </p>
              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-red skill-secure">PHP</span>
                <span class="skill-badge skill-yellow skill-secure">Symfony</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4><a href="https://billogram.com/en">Billogram (🇸🇪)</a></h4>
              <h5>Développeur / devops // 2017</h5>
            </div>

            <div class="job-description">
              <p>Portez ce vieux whisky au juge blond qui fume !</p>
              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-blue skill-secure">Machin</span>
                <span class="skill-badge skill-black skill-comfy">TRUC</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4><a href="https://www.senscritique.com">Senscritique</a></h4>
              <h5>CTO // 2016</h5>
            </div>

            <div class="job-description">
              <p>Portez ce vieux whisky au juge blond qui fume !</p>
              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-blue skill-secure">Machin</span>
                <span class="skill-badge skill-black skill-comfy">TRUC</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4><a href="https://www.blablacar.fr">Blablacar</a></h4>
              <h5>Développeur // 2014- 2016</h5>
            </div>

            <div class="job-description">
              <p>Portez ce vieux whisky au juge blond qui fume !</p>
              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-blue skill-secure">Machin</span>
                <span class="skill-badge skill-black skill-comfy">TRUC</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4><a href="https://www.blablacar.fr">Altran (Capgemini)</a></h4>
              <h5>Développeur // 2013- 2014</h5>
            </div>

            <div class="job-description">
              <p>Portez ce vieux whisky au juge blond qui fume !</p>
              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-blue skill-secure">Machin</span>
                <span class="skill-badge skill-black skill-comfy">TRUC</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4><a href="https://www.blablacar.fr">Thalès Alenia Space</a></h4>
              <h5>Développeur // 2011- 2013</h5>
            </div>

            <div class="job-description">
              <p>Portez ce vieux whisky au juge blond qui fume !</p>
              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-blue skill-secure">Machin</span>
                <span class="skill-badge skill-black skill-comfy">TRUC</span>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="Scolarité" id="education">
          <h3 class="title-black">Scolarité</h3>

          <h4>Software engineer MBA // <span class="soft-title">CFA AFTI</span></h4>
          <h5>Orsay // <span class="soft-title">2013</span></h5>

          <p>
            J'ai complété ma formation par ce cycle de 2 ans pour asseoir mon socle de connaissance
            technique, travailler dans l'industrie (ja passais la moitié de mon temps au bureau) et
            appréhender les b-à-ba de l'ingénierie.
          </p>
          <p>
            Au delà des aspects technqiues, j'ai surtout découvert comment récolter les besoins
            clients, écrire des <strong>spécifications</strong>, <strong>organiser</strong> les
            tâches de développement ou assurer la stabilité logicielle au travers des
            <strong>tests unitaires</strong>.
          </p>

          <h4>Licence informatique // <span class="soft-title">Université de Caen</span></h4>
          <h5>Caen // <span class="soft-title">2009</span></h5>

          <p>
            Au cours de cette licence, j'ai constitué tout le socle de mon bagage technique,
            incluant:
          </p>
          <ul>
            <li>langages de programmation: Python, JAVA, PHP, C, C++, Haskell, et autres</li>
            <li>approches scientifiques: algorithmie, algèbre, sciences physiques, etc...</li>
            <li>
              concepts techniques globaux: base de données, systèmes d'exploitation, réseau,
              traitement du langage, système d'infirmation géographique
            </li>
          </ul>
        </section>
        <section aria-label="Divers" id="misc">
          <h3 class="title-blue">Divers</h3>

          <p>
            En plus de ma langue maternelle, je parle couramment <strong>anglais</strong>, peux
            suivre une conversation en <strong>espagnol</strong> et suis capable d'identifier
            quelques mots en <strong>italien</strong> et <strong>suédois</strong>.
          </p>
          <p>
            Sur mon temps libre j'aime regarder des films et des séries TV. Dès que je le peux
            j'écoute de la musique (principalement électro, trip-hop, rock ou jazz). Je suis un
            accro de
            <strong>golf</strong>, mais je joue parfois au <strong>tennis</strong>,
            <strong>cours</strong> régulièrement et vais à la salle de <strong>gym</strong> quand je
            suis motivé.
          </p>
          <p>
            J'aime déguster a bon <strong>vin</strong>, une bonne <strong>bière</strong> ou un bon
            <strong>whisky</strong>. Je joue aux <strong>mots fléchés</strong> dès que je le peux
            (et non je n'ai pas 70 ans).
          </p>
          <p>
            Je vis actuellement dans mon appartement du 12e arrondissement de
            <strong>Paris</strong>.
          </p>
        </section>
      </div>
    </div>
  </div>
  <Wall position="right"></Wall>
</template>
