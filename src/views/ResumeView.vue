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
  props: {
    locale: {
      type: String
    }
  },
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
    <a
      class="block red3"
      :href="$t('aside.pdf.href', locale)"
      :title="$t('aside.pdf.title', locale)"
      >{{ $t('aside.pdf.label', locale) }}</a
    >
    <a
      class="block blue2"
      :href="$t('aside.translate.href', locale)"
      :title="$t('aside.translate.title', locale)"
      >{{ $t('aside.translate.label', locale) }}</a
    >
  </aside>

  <div class="page-outer">
    <div class="page-inner">
      <header>
        <div class="name">
          <h1>
            Pierre LEMÉE //
            <span class="soft-title" v-t="{ path: 'header.h1.job-title', locale }"></span>
          </h1>
        </div>
        <div class="job">
          <h2>
            {{ $t('header.h2.gender', locale) }} //
            <span class="soft-title">{{ $t('header.h2.age', locale, { age }) }}</span> //
            <span class="soft-title">{{ $t('header.h2.nationality', locale) }}</span>
          </h2>
        </div>
        <div class="social">
          <a
            class="padded"
            href="https://www.linkedin.com/in/pierre-lemee/"
            target="_blank"
            :title="$t('header.social.linkedin', locale)"
          >
            <LinkedinLogo />
          </a>

          <a
            href="https://www.github.com/pierrelemee"
            target="_blank"
            :title="$t('header.social.github', locale)"
          >
            <GithubLogo />
          </a>
          <a
            href="https://www.twitter.com/pitipout"
            target="_blank"
            :title="$t('header.social.twitter', locale)"
          >
            <TwitterLogo />
          </a>
          <a
            href="https://www.last.fm/user/pitipout/library/artists"
            target="_blank"
            :title="$t('header.social.lastfm', locale)"
          >
            <LastfmLogo />
          </a>
        </div>
      </header>

      <div id="content">
        <section :aria-label="$t('content.sections.intro.title', locale)">
          <h3 class="title-blue">{{ $t('content.sections.intro.title', locale) }}</h3>
          <div v-html="$t('content.sections.intro.description', locale)"></div>
        </section>
        <section :aria-label="$t('content.sections.tech.title', locale)" class="skills">
          <h3 class="title-yellow">{{ $t('content.sections.tech.title', locale) }}</h3>

          <div class="skill-badges">
            <p>{{ $t('content.sections.tech.description', locale) }}</p>
            <!--
              Legend:
              - red for languages
              - yellow for frameworks
              - blue for frontend
              - black for devops / sysadmin
              - white for data

              **or** by universe
            -->
            <span class="skill-badge skill-red skill-master">{{
              $t('content.sections.tech.technos.php', locale)
            }}</span>
            <span class="skill-badge skill-yellow skill-secure">{{
              $t('content.sections.tech.technos.symfony', locale)
            }}</span>
            <span class="skill-badge skill-red skill-secure">{{
              $t('content.sections.tech.technos.python', locale)
            }}</span>
            <span class="skill-badge skill-yellow skill-secure">{{
              $t('content.sections.tech.technos.django', locale)
            }}</span>
            <span class="skill-badge skill-yellow skill-comfy">{{
              $t('content.sections.tech.technos.flask', locale)
            }}</span>
            <span class="skill-badge skill-red skill-secure">{{
              $t('content.sections.tech.technos.js', locale)
            }}</span>
            <span class="skill-badge skill-red skill-comfy">{{
              $t('content.sections.tech.technos.ts', locale)
            }}</span>
            <span class="skill-badge skill-yellow skill-comfy">{{
              $t('content.sections.tech.technos.nest', locale)
            }}</span>
            <span class="skill-badge skill-white skill-master">{{
              $t('content.sections.tech.technos.mysql', locale)
            }}</span>
            <span class="skill-badge skill-white skill-secure">{{
              $t('content.sections.tech.technos.pg', locale)
            }}</span>
            <span class="skill-badge skill-blue skill-secure">{{
              $t('content.sections.tech.technos.vue', locale)
            }}</span>
            <span class="skill-badge skill-black skill-master">{{
              $t('content.sections.tech.technos.bash', locale)
            }}</span>
            <span class="skill-badge skill-black skill-secure">{{
              $t('content.sections.tech.technos.git', locale)
            }}</span>
            <span class="skill-badge skill-blue skill-secure">{{
              $t('content.sections.tech.technos.bootstrap', locale)
            }}</span>
            <span class="skill-badge skill-blue skill-padawan">{{
              $t('content.sections.tech.technos.react', locale)
            }}</span>
            <span class="skill-badge skill-blue skill-comfy">{{
              $t('content.sections.tech.technos.tailwind', locale)
            }}</span>
            <span class="skill-badge skill-red skill-comfy">{{
              $t('content.sections.tech.technos.java', locale)
            }}</span>
            <span class="skill-badge skill-yellow skill-padawan">{{
              $t('content.sections.tech.technos.spring', locale)
            }}</span>
            <span class="skill-badge skill-black skill-comfy">{{
              $t('content.sections.tech.technos.ansible', locale)
            }}</span>
            <span class="skill-badge skill-black skill-secure">{{
              $t('content.sections.tech.technos.ci', locale)
            }}</span>
            <span class="skill-badge skill-black skill-comfy">{{
              $t('content.sections.tech.technos.aws', locale)
            }}</span>
            <span class="skill-badge skill-white skill-secure">{{
              $t('content.sections.tech.technos.metabase', locale)
            }}</span>
            <span class="skill-badge skill-black skill-secure">{{
              $t('content.sections.tech.technos.rabbit', locale)
            }}</span>
            <span class="skill-badge skill-black skill-comfy">{{
              $t('content.sections.tech.technos.redis', locale)
            }}</span>
            <span class="skill-badge skill-black skill-padawan">{{
              $t('content.sections.tech.technos.es', locale)
            }}</span>
            <span class="skill-badge skill-white skill-padawan">{{
              $t('content.sections.tech.technos.hadoop', locale)
            }}</span>
          </div>
        </section>
        <section :aria-label="$t('content.sections.pro.title', locale)" id="jobs">
          <h3 class="title-red">{{ $t('content.sections.pro.title', locale) }}</h3>

          <div class="job">
            <div class="job-summary">
              <h4 v-html="$t('content.sections.pro.jobs.free.company', locale)"></h4>
              <h5 v-html="$t('content.sections.pro.jobs.free.summary', locale)"></h5>
            </div>

            <div class="job-description">
              <div v-html="$t('content.sections.pro.jobs.free.description', locale)"></div>

              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-red skill-secure">{{
                  $t('content.sections.tech.technos.python', locale)
                }}</span>
                <span class="skill-badge skill-yellow skill-secure">{{
                  $t('content.sections.tech.technos.django', locale)
                }}</span>
                <span class="skill-badge skill-red skill-comfy">{{
                  $t('content.sections.tech.technos.ts', locale)
                }}</span>
                <span class="skill-badge skill-yellow skill-secure">{{
                  $t('content.sections.tech.technos.nest', locale)
                }}</span>
                <span class="skill-badge skill-white skill-secure">{{
                  $t('content.sections.tech.technos.pg', locale)
                }}</span>
                <span class="skill-badge skill-blue skill-comfy">{{
                  $t('content.sections.tech.technos.vue', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.git', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.ci', locale)
                }}</span>
                <span class="skill-badge skill-white skill-comfy">{{
                  $t('content.sections.tech.technos.metabase', locale)
                }}</span>
                <span class="skill-badge skill-black skill-comfy">{{
                  $t('content.sections.tech.technos.redis', locale)
                }}</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4 v-html="$t('content.sections.pro.jobs.ignition.company', locale)"></h4>
              <h5 v-html="$t('content.sections.pro.jobs.ignition.summary', locale)"></h5>
            </div>

            <div class="job-description">
              <div v-html="$t('content.sections.pro.jobs.ignition.description', locale)"></div>

              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-red skill-secure">{{
                  $t('content.sections.tech.technos.python', locale)
                }}</span>
                <span class="skill-badge skill-yellow skill-master">{{
                  $t('content.sections.tech.technos.django', locale)
                }}</span>
                <span class="skill-badge skill-red skill-secure">{{
                  $t('content.sections.tech.technos.js', locale)
                }}</span>
                <span class="skill-badge skill-white skill-secure">{{
                  $t('content.sections.tech.technos.pg', locale)
                }}</span>
                <span class="skill-badge skill-blue skill-comfy">{{
                  $t('content.sections.tech.technos.vue', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.git', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.ansible', locale)
                }}</span>

                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.ci', locale)
                }}</span>
                <span class="skill-badge skill-white skill-comfy">{{
                  $t('content.sections.tech.technos.metabase', locale)
                }}</span>
                <span class="skill-badge skill-black skill-comfy">{{
                  $t('content.sections.tech.technos.aws', locale)
                }}</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4 v-html="$t('content.sections.pro.jobs.bloom.company', locale)"></h4>
              <h5 v-html="$t('content.sections.pro.jobs.bloom.summary', locale)"></h5>
            </div>

            <div class="job-description">
              <div v-html="$t('content.sections.pro.jobs.bloom.description', locale)"></div>

              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-red skill-master">{{
                  $t('content.sections.tech.technos.php', locale)
                }}</span>
                <span class="skill-badge skill-yellow skill-secure">{{
                  $t('content.sections.tech.technos.symfony', locale)
                }}</span>
                <span class="skill-badge skill-red skill-secure">{{
                  $t('content.sections.tech.technos.js', locale)
                }}</span>
                <span class="skill-badge skill-white skill-master">{{
                  $t('content.sections.tech.technos.mysql', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.git', locale)
                }}</span>
                <span class="skill-badge skill-blue skill-padawan">{{
                  $t('content.sections.tech.technos.react', locale)
                }}</span>
                <span class="skill-badge skill-black skill-comfy">{{
                  $t('content.sections.tech.technos.ansible', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.ci', locale)
                }}</span>
                <span class="skill-badge skill-black skill-comfy">{{
                  $t('content.sections.tech.technos.aws', locale)
                }}</span>
                <span class="skill-badge skill-white skill-secure">{{
                  $t('content.sections.tech.technos.metabase', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.rabbit', locale)
                }}</span>
                <span class="skill-badge skill-black skill-comfy">{{
                  $t('content.sections.tech.technos.redis', locale)
                }}</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4 v-html="$t('content.sections.pro.jobs.billogram.company', locale)"></h4>
              <h5 v-html="$t('content.sections.pro.jobs.billogram.summary', locale)"></h5>
            </div>

            <div class="job-description">
              <div v-html="$t('content.sections.pro.jobs.billogram.description', locale)"></div>

              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-red skill-master">{{
                  $t('content.sections.tech.technos.php', locale)
                }}</span>
                <span class="skill-badge skill-red skill-secure">{{
                  $t('content.sections.tech.technos.python', locale)
                }}</span>
                <span class="skill-badge skill-yellow skill-comfy">{{
                  $t('content.sections.tech.technos.flask', locale)
                }}</span>
                <span class="skill-badge skill-red skill-secure">{{
                  $t('content.sections.tech.technos.js', locale)
                }}</span>
                <span class="skill-badge skill-white skill-master">{{
                  $t('content.sections.tech.technos.mysql', locale)
                }}</span>
                <span class="skill-badge skill-black skill-master">{{
                  $t('content.sections.tech.technos.bash', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.git', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.ci', locale)
                }}</span>
                <span class="skill-badge skill-black skill-comfy">{{
                  $t('content.sections.tech.technos.redis', locale)
                }}</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4 v-html="$t('content.sections.pro.jobs.senscritique.company', locale)"></h4>
              <h5 v-html="$t('content.sections.pro.jobs.senscritique.summary', locale)"></h5>
            </div>

            <div class="job-description">
              <div v-html="$t('content.sections.pro.jobs.senscritique.description', locale)"></div>

              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-red skill-master">{{
                  $t('content.sections.tech.technos.php', locale)
                }}</span>
                <span class="skill-badge skill-red skill-comfy">{{
                  $t('content.sections.tech.technos.java', locale)
                }}</span>
                <span class="skill-badge skill-yellow skill-padawan">{{
                  $t('content.sections.tech.technos.spring', locale)
                }}</span
                >>
                <span class="skill-badge skill-red skill-secure">{{
                  $t('content.sections.tech.technos.js', locale)
                }}</span>
                <span class="skill-badge skill-white skill-master">{{
                  $t('content.sections.tech.technos.mysql', locale)
                }}</span>
                <span class="skill-badge skill-black skill-master">{{
                  $t('content.sections.tech.technos.bash', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.git', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.ci', locale)
                }}</span>
                <span class="skill-badge skill-black skill-comfy">{{
                  $t('content.sections.tech.technos.redis', locale)
                }}</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4 v-html="$t('content.sections.pro.jobs.blablacar.company', locale)"></h4>
              <h5 v-html="$t('content.sections.pro.jobs.blablacar.summary', locale)"></h5>
            </div>

            <div class="job-description">
              <div v-html="$t('content.sections.pro.jobs.blablacar.description', locale)"></div>

              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-red skill-master">{{
                  $t('content.sections.tech.technos.php', locale)
                }}</span>
                <span class="skill-badge skill-yellow skill-secure">{{
                  $t('content.sections.tech.technos.symfony', locale)
                }}</span>
                <span class="skill-badge skill-red skill-secure">{{
                  $t('content.sections.tech.technos.js', locale)
                }}</span>
                <span class="skill-badge skill-white skill-master">{{
                  $t('content.sections.tech.technos.mysql', locale)
                }}</span>
                <span class="skill-badge skill-black skill-master">{{
                  $t('content.sections.tech.technos.bash', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.git', locale)
                }}</span>
                <span class="skill-badge skill-blue skill-secure">{{
                  $t('content.sections.tech.technos.bootstrap', locale)
                }}</span>
                <span class="skill-badge skill-red skill-comfy">{{
                  $t('content.sections.tech.technos.java', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.ci', locale)
                }}</span>
                <span class="skill-badge skill-black skill-secure">{{
                  $t('content.sections.tech.technos.rabbit', locale)
                }}</span>
                <span class="skill-badge skill-black skill-comfy">{{
                  $t('content.sections.tech.technos.redis', locale)
                }}</span>
                <span class="skill-badge skill-black skill-padawan">{{
                  $t('content.sections.tech.technos.es', locale)
                }}</span>
                <span class="skill-badge skill-white skill-padawan">{{
                  $t('content.sections.tech.technos.hadoop', locale)
                }}</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4 v-html="$t('content.sections.pro.jobs.altran.company', locale)"></h4>
              <h5 v-html="$t('content.sections.pro.jobs.altran.summary', locale)"></h5>
            </div>

            <div class="job-description">
              <div v-html="$t('content.sections.pro.jobs.altran.description', locale)"></div>

              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-white skill-master">{{
                  $t('content.sections.tech.technos.mysql', locale)
                }}</span>
                <span class="skill-badge skill-black skill-master">{{
                  $t('content.sections.tech.technos.bash', locale)
                }}</span>
                <span class="skill-badge skill-red skill-comfy">{{
                  $t('content.sections.tech.technos.java', locale)
                }}</span>
              </div>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4 v-html="$t('content.sections.pro.jobs.thales.company', locale)"></h4>
              <h5 v-html="$t('content.sections.pro.jobs.thales.summary', locale)"></h5>
            </div>

            <div class="job-description">
              <div v-html="$t('content.sections.pro.jobs.thales.description', locale)"></div>

              <div class="skill-badges skill-badges-mini">
                <span class="skill-badge skill-black skill-master">{{
                  $t('content.sections.tech.technos.bash', locale)
                }}</span>
                <span class="skill-badge skill-red skill-comfy">{{
                  $t('content.sections.tech.technos.java', locale)
                }}</span>
              </div>
            </div>
          </div>
        </section>

        <section :aria-label="$t('content.sections.misc.title', locale)">
          <h3 class="title-black">{{ $t('content.sections.misc.title', locale) }}</h3>

          <p v-html="$t('content.sections.misc.content.languages', locale)"></p>
          <p v-html="$t('content.sections.misc.content.hobbies', locale)"></p>
          <p v-html="$t('content.sections.misc.content.likes', locale)"></p>
          <p v-html="$t('content.sections.misc.content.life', locale)"></p>
        </section>

        <section :aria-label="$t('content.sections.education.title', locale)">
          <h3 class="title-blue">{{ $t('content.sections.education.title', locale) }}</h3>

          <div class="job">
            <div class="job-summary">
              <h4>{{ $t('content.sections.education.schools.afti.diploma', locale) }}</h4>
              <h5>{{ $t('content.sections.education.schools.afti.summary', locale) }}</h5>
            </div>

            <div class="job-description">
              <p v-html="$t('content.sections.education.schools.afti.description', locale)"></p>
            </div>
          </div>

          <div class="job">
            <div class="job-summary">
              <h4>{{ $t('content.sections.education.schools.fac.diploma', locale) }}</h4>
              <h5>{{ $t('content.sections.education.schools.fac.summary', locale) }}</h5>
            </div>

            <div class="job-description">
              <p v-html="$t('content.sections.education.schools.fac.description', locale)"></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <Wall position="right"></Wall>
</template>
