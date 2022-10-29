import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Button from '~/components/button/button'
import Card from '~/components/card/card'

const cliLines = ['% gluon run', '']

export default component$(() => {
  return (
    <>
      <header class="md:flex p-32 items-center gap-8">
        <div class="h-min mb-4 md:mb-0">
          <h1 class="text-6xl text-slate-100 font-black">
            <span class="text-transparent bg-gradient-to-bl bg-clip-text from-sky-500 to-indigo-500">
              Changing
            </span>{' '}
            how we use the web
          </h1>

          <Button text="See our projects" link="#projects" />
        </div>

        <div>
          <img src="/browser.png" alt="Pulse webbrowser" class="rounded" />

          <div></div>
        </div>
      </header>

      <section class="p-32">
        <h2 class="text-3xl text-slate-200 font-bold mb-4" id="projects">
          Our projects
        </h2>

        <div class="flex gap-4 align-top">
          <Card
            title="Gluon"
            description="Unified tooling for building firefox-bassed browsers and tools with minimal effort."
            link="https://github.com/pulse-browser/gluon"
          />

          <Card
            title="Pulse Browser"
            description="Delivering a fast, feature rich, firefox-based browser."
            link="https://pulsebrowser.app"
          />
        </div>
      </section>

      <footer class="text-center text-slate-300 p-8">
        <p>&copy; Fushra {new Date().getFullYear()}</p>
      </footer>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Fushra',
}
