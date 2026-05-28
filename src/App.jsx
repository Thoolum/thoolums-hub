export default function ModpackPortal() {
  const downloads = [
    {
      title: 'Sarsparilla Edition',
      desc: 'Primary modpack with all required mods and configs.',
      version: 'v1.0.0',
      link: 'https://drive.proton.me/urls/DW7QZKJHM4#qlMO9qy552Za',
      icon: '🍺'
    },
    // {
    //   title: 'All Modpacks',
    //   desc: 'Primary modpack with all required mods and configs.',
    //   version: 'Count: 0',
    //   link: 'https://drive.proton.me/urls/8DV3DG6JDM#NpaSQ1NBEYmy',
    //   icon: '📦'
    // },
    {
      title: 'Schematicannon Blueprints',
      desc: 'Custom Schematics.',
      version: 'Create Required',
      link: 'https://drive.proton.me/urls/T9QZJPJDXR#xJ8cIkc4DSWk',
      icon: '🗺️'
    },
    // {
    //   title: 'World Downloads',
    //   desc: 'Zip Files of past multiplayer worlds',
    //   version: 'Count: 0',
    //   link: '#',
    //   icon: '🖥️'
    // },
    {
      title: 'Other files',
      desc: 'Custom files such as mod backports, custom resource packs, etc..',
      version: 'Voxy Added',
      link: 'https://drive.proton.me/urls/882FGXKXVW#Hki3g0gVeyB3',
      icon: '🎨'
    }
  ];

  // const notes = [
  //   {
  //     title: 'Installation Guide',
  //     desc: 'Step-by-step setup instructions.',
  //     link: '#'
  //   },
  //   {
  //     title: 'Patch Notes',
  //     desc: 'Latest changes and balancing updates.',
  //     link: '#'
  //   },
  //   {
  //     title: 'FAQ',
  //     desc: 'Troubleshooting and common issues.',
  //     link: '#'
  //   }
  // ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full animate-pulse delay-1000" />

        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/10 backdrop-blur-md bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Thoolum's Minecraft Hub
            </h1>
          </div>

          <div className="hidden md:flex gap-6 text-sm uppercase tracking-widest">
            <a href="#downloads" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              Downloads
            </a>
            <a href="#notes" className="hover:text-pink-400 transition-all duration-300 hover:scale-110">
              Notes
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md text-cyan-300 text-sm uppercase tracking-[0.3em] animate-pulse">
          Modpacks • Downloads • Schematics
        </div>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-10">
          A centralized portal for custom modpacks, server files, schematics,
          configs, and updates.
        </p>
      </section>

      {/* Downloads */}
      <section id="downloads" className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-4xl font-black mb-2">Downloads</h3>
            <p className="text-gray-400">
              Latest builds and downloadable content.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {downloads.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

              <div className="relative z-10">
                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {item.icon}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold">
                    {item.title}
                  </h4>

                  <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                    {item.version}
                  </span>
                </div>

                <p className="text-gray-400 mb-8 min-h-[72px]">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cyan-300 group-hover:translate-x-2 transition-transform duration-300">
                    Download →
                  </span>

                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
                    ↓
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Notes */}
      {/* <section id="notes" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h3 className="text-4xl font-black mb-2">Documentation & Notes</h3>
          <p className="text-gray-400">
            Guides, patch notes, FAQs, and setup documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notes.map((note, idx) => (
            <a
              key={idx}
              href={note.link}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 transition-all duration-500 hover:scale-105 hover:border-purple-400/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                <div className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-4">
                  Notes
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {note.title}
                </h4>

                <p className="text-gray-400 mb-6">
                  {note.desc}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:gap-4 transition-all duration-300">
                  Open
                  <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section> */}

      {/* notes */}
      <section id="notes" className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-2xl p-10 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_60%)]" />
          </div>

          <div className="relative z-10">
            <a>All modpacks are meant to be installed via <a href="https://prismlauncher.org/" >Prism Launcher</a></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm backdrop-blur-md bg-black/40">
        <p>
          Built with GitHub Pages • Designed for modpacks & downloads
        </p>
      </footer>
    </div>
  );
}