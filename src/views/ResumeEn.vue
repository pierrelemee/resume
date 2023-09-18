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
      <a href="/Pierre LEMÉE - Software engineer.pdf" title="PDF version" class="pdf-link block red3">pdf</a>
      <a href="/fr" title="Lire en Français" class="locale-link block blue2">fr</a>
  </Wall>
  <div id="content">
    <div id="header">
      <div id="name">
        <h1>Pierre LEMÉE // <span class="soft-title">CTO &amp; Software engineer</span></h1>
      </div>
      <div id="job">
        <h3>Male // <span class="soft-title">{{ age }}</span> // <span class="soft-title">French</span></h3>
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
      <p>To me, software development is like <strong>a construction game</strong>: by assembling blocks of different
        sizes, colors and shapes and an endless imagination you can turn any idea to a living, solid and palpable
        <strong>realization</strong>. Making any outline to a realistic project.</p>
      <p>This is who I am then: a {{ age }}-years old <strong>passionated</strong> developer / playful kid. I'm constantly
        investigating on how buildings / softwares / frameworks are made, <strong>curious</strong> about how the things
        truly work. I love to be a builder, stacking line of codes, setting up algorithms, structuring objects and
        designing the map of my projects. I'm a Web, Linux and Open Source lover, I know how to design, code, test,
        deploy, query and automatize. I'm a <strong>software builder</strong> .</p>
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
        <h4>System</h4>
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
      <h3 class="section-title jobs-title">Professional experience</h3>

      <h4>CTO // <span class="soft-title">Ignition Program</span></h4>
      <h5>Paris // <span class="soft-title">September 2020 - now</span></h5>

      <p><a href="https://ignition-program.com">Ignition Program</a> is the HR partner for startups, from early stage to
        scale up. Either it's
        through council, recruitment or training, <strong>Ignition Program</strong> 's motto is to make people happy to
        come at the office
        place while still offering to the most promising talents of the startup scene to find their dream job.</p>
      <p>My arrival matches with the will of professionalizing the tech &amp; product team. From cost rationalization to
        a development
        process setup and through a <em>communicated</em> roadmap to the board, which I am a part of, my role is
        essentially to frame.
        But I also undertake the role of manager for every single member of the team as well as technical mentor.</p>
      <p><strong>Tech stack:</strong> Python, Django, VueJS, Nuxt, PostgreSQL, GitHub, Github Actions, Ansible, AWS,
        Metabase, Algolia</p>

      <h4>CTO // <span class="soft-title">Bloom at Work</span></h4>
      <h5>Paris // <span class="soft-title">January 2018 - May 2020</span></h5>

      <p><a href="https://www.bloom-at-work.com/">Bloom at Work</a> aims to booster happiness at work. It offers to
        companies of all kind and size
        a solution to measure, analyze and improve collaborators' well-being at the workplace.</p>
      <p>Through simple, short and frequent surveys, companies can take the pulse of their teams in real time and act at
        the right
        time to improve the everyday live of their employees.</p>
      <p>I joined this early stage startup in order to first internalize its solution so far outsource. But I quickly
        had the responsability
        to hold the technical vision and takeover the underlying architecture decisions that have to be taken inside a
        team that grew
        up t 4 persons. All this while still fulfilling my duty of backend lead developer, data engineer and system
        admin. </p>
      <p><strong>Tech stack:</strong> PHP, Symfony, MySQL, Git, CircleCI, RabbitMQ, React, Ansible, AWS, Redis,
        Elasticsearch</p>

      <h4>Architect // <span class="soft-title">Billogram</span></h4>
      <h5>Stockholm // <span class="soft-title">2017</span></h5>

      <p>Benefiting of an opportunity to leave abroad and finally give an international dimension to my career, I spent
        the year 2017
        in Sweden 🇸🇪 where I landed in the startup <a href="https://billogram.com/">Billogram</a>, after a short step in
        a web agency.</p>
      <p>Billogram is an online billing solution, back then deployed in Sweden and Germany.</p>
      <p>In integrated the backend and system team where I intervened as a software and system architect. </p>
      <p><strong>Tech stack:</strong> Python, Django, PHP, MySQL, Git, RabbitMQ, React</p>

      <h4>CTO // <span class="soft-title">Sens Critique</span></h4>
      <h5>Paris // <span class="soft-title">August 2016 - January 2017</span></h5>

      <p>I had the privilege to be the CTO of <a href="http://www.senscritique.com">SensCritique</a>, which is a website
        offering members to rate or review
        films, TV shows, video games, books or even music albums, share suggestions among the community and create
        editorial content.</p>
      <p>My mission aims at organizing the development team, by:</p>
      <ul>
        <li>setting up an <strong>Agile</strong> methodology with <strong>Scrum</strong></li>
        <li>scheduling tasks and prioritizing projects, in interaction with market and product owners</li>
        <li>adopt development standards peer review through pull requests or deployment procedures</li>
        <li>handling technical partnerships with service providers by participating to meetings</li>
        <li>creating a test environment (dedicated to missing unit tests when I joined the company) and a continuous
          integration process
        </li>
      </ul>
      <p><strong>Tech stack:</strong> PHP, MySQL, Git, Redis, Java, Elasticsearch, RabbitMQ, GraphQL, Ansible, Bash</p>

      <h4>Web &amp; data developer // <span class="soft-title">BlaBlaCar</span></h4>
      <h5>Paris // <span class="soft-title">July 2014 - July 2016</span></h5>

      <p>I'm proud to have been a lead developer inside the BI team of <a href="https://www.blablacar.com">Blablacar</a>,
        the world leader in carpooling
        service.</p>
      <ul>
        <li>Management of a data collection streaming process, BI oriented, of detailed user actions (through PHP,
          Symfony, MySQL and Rabbit MQ)
        </li>
        <li>Setup of storage and processing tools for BI data (Hadoop (HDFS, Pig and Hive script, synchronization with
          the analytical database HPE Vertica)
        </li>
        <li>Dévelopment of internal tools to migrate data (through Java, Spring and RabbitMQ)</li>
        <li>Setup of an alternative channel for data collection, client side, namely <em>Tracktor</em> (PHP, Javascript,
          NGinx, Java, Kafka and Spark)
        </li>
      </ul>
      <p><strong>Techn stack:</strong> PHP, Symfony, MySQL, Doctrine, Git, Redis, Elasticsearch, RabbitMQ, Hadoop (HDFS,
        Hive, Imapala, Pig-latin, Spark), HPE Vertica, Kafka</p>

      <h4>Software engineer // <span class="soft-title">Altran</span></h4>
      <h5>Paris // <span class="soft-title">July 2013 - June 2014</span></h5>

      <p>I joined <a href="https://www.altran.com">Altran</a> as a consulting engineer as part of a service center team
        for <a href="https://www.gemalto.com/">Gemalto</a>,
        world leader in digital security.</p>
      <p>Technical assistance on a development project of a secured management platform dedicated to contactless
        payments.</p>
      <ul>
        <li>support on the development of the web administrator interface and the product's backend solution</li>
        <li>redaction of the update and installation scripts (<strong>Linux</strong> system and network administration,
          setup and integrations scripts)
        </li>
        <li>creation of the software's monitoring services</li>
        <li>intervention in the software configuration management and the system compilation and generation
          maintenance
        </li>
      </ul>
      <p><strong>Tech stack:</strong> JAVA, JSF, SOAP, JPA, Bash, Python, Weblogic, JMX, Groovy, Maven, SVN</p>

      <h4>Software engineer // <span class="soft-title">Thales Alenia Space</span></h4>
      <h5>Cannes // <span class="soft-title">April 2011 - May 2013</span></h5>

      <p>I joined <a href="https://www.thalesgroup.com/fr/global-activities/espace">Thales Alenia Space</a>, the
        European leader in satellite
        solutions, during my apprenticeship in software engineering.</p>
      <p>As a member of the optical team, I developed and maintained a <strong>Java</strong> based simulation
        environment for high resolution
        satellite images generation, and managed the evolution of the set of related software tools for simulation.</p>
      <ul>
        <li>participating in every step of the software's development life-cycle, from requirements gathering to
          end-user validation
        </li>
        <li>being responsible for software configuration management and system settings</li>
        <li>monitoring on-site intervention of subcontractors: assisting on information and data providing, organizing
          weekly
          meetings and reporting work progress
        </li>
      </ul>
      <p><strong>Tech stack:</strong> JAVA, Swing, Maven, JNI, C, Bash</p>

      <h4>Web developer // <span class="soft-title">Toutletoutim</span></h4>
      <h5>Normandy // <span class="soft-title">2009 - 2011</span></h5>

      <p>After graduating university, I decided to become a freelance web developer to strengthen my web development
        skills. I designed,
        created, delivered and maintained websites for various organizations and customers (such as <a
            href="http://www.les-blotteries.com">Les Blotteries</a>
        or <a href="http://www.deco-styl.com">Déco Styl</a></p>
      <p>This introduced me to:</p>
      <ul>
        <li>customer relationship management, delivery meetings</li>
        <li>developing and maintaining several websites with dedicated databases and rich Internet applications</li>
        <li>legal, financial and administrative requirements</li>
      </ul>
      <p><strong>Tech stack:</strong> PHP, MySQL, CSS, Javascript, Actionscript, Gimp</p>

      <h4>Developer // <span class="soft-title">Orange Labs</span></h4>
      <h5>Caen // <span class="soft-title">2009</span></h5>

      <p>For my first experience as a developer I had the chance to join the R&amp;D team of <a
          href="https://laborange.fr/">Orange Labs</a>. My
        mission was to:</p>
      <ul>
        <li>setting up a gateway between the Livebox (internet connection box) and the Orange web radios catalog in
          <strong>Java</strong> relying
          upon the <strong>UPnP</strong> protocol
        </li>
        <li>designed, developing and testing the media server providing web radios from the Orange web service to all
          connected devices,
          discovering web services (in both <strong>REST</strong> and <strong>SOAP</strong>)
        </li>
      </ul>
      <p><strong>Tech stack:</strong> Java, UPnP (Cybergarage framework), REST &amp; SOAP web services</p>

    </div>
    <div id="education">
      <h3 class="section-title education-title">Scolarité</h3>

      <h4>Software engineer MBA // <span class="soft-title">CFA AFTI</span></h4>
      <h5>Orsay // <span class="soft-title">2013</span></h5>

      <p>I completed my training with this 2 year school cycle to improve my technical knowledge, work in the industry
        (I spent half
        of the time at the office) and learn how to become an engineer.</p>
      <p>Beside the technical things I've learnt, I mostly discovered how to gather the client's needs, write <strong>specifications</strong>,
        <strong>organize development tasks</strong> or ensure product stability through <strong>unit testing</strong>.
      </p>

      <h4>Bachelor's degree in CS // <span class="soft-title">Caen University</span></h4>
      <h5>Caen // <span class="soft-title">2009</span></h5>

      <p>I learned all the technical basics during this 3 year school cycle, this including:</p>
      <ul>
        <li>programming languages: Python, JAVA, PHP, C, C++, Haskell, and others</li>
        <li>scientific approaches: algorithms, algebra, physics, etc...</li>
        <li>technical concepts: database, operating systems, network, language processing, geographical information
          systems
        </li>
      </ul>

    </div>
    <div id="misc">
      <h3 class="section-title misc-title">Miscellaneous</h3>

      <p>Beside my maternal language, French obviously, I speak a <strong>fluent English</strong>, I could attend a
        conversation in <strong>Spanish</strong>
        and can identify words in <strong>Italian</strong> or <strong>Swedish</strong>.</p>
      <p>On my spare time I enjoy watching films and TV shows. Whenever I can I listen to music (mostly electronic,
        ambient, rock and jazz).
        I am a <strong>golf</strong> addict, but I also sometimes play <strong>tennis</strong> or <strong>jog</strong>
        if I'm not too lazy.</p>
      <p>I like to taste a good <strong>wine</strong>, <strong>beer</strong> or <strong>whisky</strong>, or play
        <strong>mots fléchés</strong> (french equivalent of crossword puzzles)
        while drinking my morning coffee.</p>
      <p>I currently live in the 12th district of Paris.</p>
    </div>
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
                <h4>System</h4>
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
</template>
