import { getDictionary } from '../dictionaries'
import { MapPin, Mail, Phone, ExternalLink, Code2, Monitor, GraduationCap, Briefcase, Award, Layers, Github } from 'lucide-react'

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="animate-fade-in">
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(10, 15, 28, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--card-border)',
        padding: '0.75rem 2rem',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src="/1.png" alt="Logo" style={{ height: '45px', borderRadius: '50%', border: '2px solid var(--accent-color)' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>IGNACIO</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container">
        <div className="flex flex-col items-center text-center w-full">
          <div className="profile-img-container">
            <img src="/1.png" alt={dict.hero.title} className="profile-img" />
          </div>
          <h1 className="hero-title">{dict.hero.title}</h1>
          <p className="hero-subtitle">{dict.hero.subtitle}</p>
          
          <div className="flex gap-4 justify-center flex-wrap" style={{ marginBottom: '2rem' }}>
            <a href="https://github.com/Ignaciobrenas" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
              <Code2 size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ignaciobrenas" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
              <ExternalLink size={20} /> LinkedIn
            </a>
          </div>

          <div className="flex gap-6 justify-center flex-wrap contact-info" style={{ color: 'var(--text-secondary)' }}>
            <span className="flex items-center gap-2"><MapPin size={18} /> {dict.hero.location}</span>
            <span className="flex items-center gap-2"><Mail size={18} /> ignaciobrenas@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={18} /> 640 770 380</span>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <img src="https://readme-typing-svg.herokuapp.com?font=Inter&size=24&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&width=600&lines=Software+Developer;Junior+IT+Technician;Backend+Enthusiast;Always+Learning" alt="Typing SVG" style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section container">
        <h2 className="section-title">{dict.about.title}</h2>
        <div className="glass-card text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{dict.about.p1}</p>
          <p style={{ fontSize: '1.1rem' }}>{dict.about.p2}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section container">
        <h2 className="section-title"><Briefcase className="inline-block mr-2" /> {dict.experience.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card">
            <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{dict.experience.soterguard_title}</h3>
                <div className="flex items-center gap-2 mt-1 mb-2">
                  <h4 style={{ color: 'var(--accent-color)', margin: 0 }}>Soterguard</h4>
                  <span className="badge" style={{ padding: '0.1rem 0.5rem' }}>{dict.experience.now}</span>
                </div>
              </div>
              <img src="/images.png" alt="Soterguard Logo" style={{ height: '40px', borderRadius: '4px' }} />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '500' }}>{dict.experience.soterguard_desc}</p>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {dict.experience.soterguard_tasks.map((task, index) => {
                const parts = task.split(': ');
                return (
                  <li key={index} style={{ lineHeight: '1.5' }}>
                    {parts.length > 1 ? (
                      <><strong style={{ color: 'var(--text-primary)' }}>{parts[0]}:</strong> {parts.slice(1).join(': ')}</>
                    ) : (
                      task
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="glass-card">
            <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{dict.experience.vimtech_title}</h3>
                <h4 style={{ color: 'var(--accent-color)' }}>VimTech - El Masnou</h4>
              </div>
              <img src="/vimtech.png" alt="VimTech Logo" style={{ height: '40px', borderRadius: '4px' }} />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{dict.experience.vimtech_date}</p>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              <li>{dict.experience.vimtech_l1}</li>
              <li>{dict.experience.vimtech_l2}</li>
              <li>{dict.experience.vimtech_l3}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="section container">
        <h2 className="section-title"><Award className="inline-block mr-2" /> {dict.volunteering.title}</h2>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{dict.volunteering.ajma_title}</h3>
            <span className="badge">{dict.volunteering.ajma_date}</span>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>{dict.volunteering.ajma_l1_bold}</strong> {dict.volunteering.ajma_l1}</li>
            <li><strong>{dict.volunteering.ajma_l2_bold}</strong> {dict.volunteering.ajma_l2}</li>
            <li><strong>{dict.volunteering.ajma_l3_bold}</strong> {dict.volunteering.ajma_l3}</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="section container">
        <h2 className="section-title"><GraduationCap className="inline-block mr-2" /> {dict.education.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card">
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{dict.education.daw}</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>STUCOM Pelai (Barcelona)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{dict.education.daw_date}</p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{dict.education.smr}</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>STUCOM Pelai (Barcelona)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{dict.education.smr_date}</p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{dict.education.eso}</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>IES Los Pedroches (Córdoba)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{dict.education.eso_date}</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section container">
        <h2 className="section-title"><Award className="inline-block mr-2" /> {dict.certifications.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card flex justify-between items-center">
            <h3 style={{ fontWeight: 'bold' }}>{dict.certifications.c1}</h3>
            <span className="badge" style={{ background: 'rgba(255, 165, 0, 0.1)', color: '#ffa500', borderColor: 'rgba(255, 165, 0, 0.2)' }}>{dict.certifications.c1_status}</span>
          </div>
          <div className="glass-card flex justify-between items-center">
            <h3 style={{ fontWeight: 'bold' }}>{dict.certifications.c2}</h3>
            <span className="badge" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.2)' }}>{dict.certifications.c2_status}</span>
          </div>
          <div className="glass-card flex justify-between items-center">
            <h3 style={{ fontWeight: 'bold' }}>{dict.certifications.c3}</h3>
            <span className="badge" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.2)' }}>{dict.certifications.c3_status}</span>
          </div>
          <div className="glass-card flex justify-between items-center">
            <h3 style={{ fontWeight: 'bold' }}>{dict.certifications.c4}</h3>
            <span className="badge" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.2)' }}>{dict.certifications.c4_status}</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section container">
        <h2 className="section-title"><Monitor className="inline-block mr-2" /> {dict.skills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>{dict.skills.frontend}</h3>
            <div className="flex flex-wrap gap-2">
              {dict.skills.frontend_skills.map(skill => <span key={skill} className="badge">{skill}</span>)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>{dict.skills.backend}</h3>
            <div className="flex flex-wrap gap-2">
              {dict.skills.backend_skills.map(skill => <span key={skill} className="badge" style={{ background: 'rgba(252, 211, 77, 0.1)', color: '#FCD34D', borderColor: 'rgba(252, 211, 77, 0.3)' }}>{skill}</span>)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>{dict.skills.devops}</h3>
            <div className="flex flex-wrap gap-2">
              {dict.skills.devops_skills.map(skill => <span key={skill} className="badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>{skill}</span>)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>{dict.skills.systems}</h3>
            <div className="flex flex-wrap gap-2">
              {dict.skills.systems_skills.map(skill => <span key={skill} className="badge" style={{ background: 'rgba(248, 113, 113, 0.1)', color: '#F87171', borderColor: 'rgba(248, 113, 113, 0.3)' }}>{skill}</span>)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>{dict.skills.markup} & {dict.skills.tools}</h3>
            <div className="flex flex-wrap gap-2">
              {[...dict.skills.markup_skills, ...dict.skills.tools_skills].map(skill => <span key={skill} className="badge" style={{ background: 'rgba(167, 139, 250, 0.1)', color: '#A78BFA', borderColor: 'rgba(167, 139, 250, 0.3)' }}>{skill}</span>)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>{dict.skills.soft}</h3>
            <div className="flex flex-wrap gap-2">
              {dict.skills.soft_skills.map(skill => <span key={skill} className="badge" style={{ background: 'rgba(147, 197, 253, 0.1)', color: '#93C5FD', borderColor: 'rgba(147, 197, 253, 0.3)' }}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section container">
        <h2 className="section-title"><Layers className="inline-block mr-2" /> {dict.projects.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: dict.projects.p1_title, tech: dict.projects.p1_tech, feats: dict.projects.p1_features },
            { title: dict.projects.p2_title, tech: dict.projects.p2_tech, feats: dict.projects.p2_features },
            { title: dict.projects.p3_title, tech: dict.projects.p3_tech, feats: dict.projects.p3_features },
            { title: dict.projects.p4_title, tech: dict.projects.p4_tech, feats: dict.projects.p4_features },
            { title: dict.projects.p5_title, tech: dict.projects.p5_tech, feats: dict.projects.p5_features }
          ].map((proj, i) => (
            <div key={i} className="glass-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{proj.title}</h3>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem' }}><strong>{dict.projects.tech}:</strong> {proj.tech}</p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {proj.feats.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="section container" style={{ textAlign: 'center' }}>
        <h2 className="section-title"><Github className="inline-block mr-2" /> {dict.stats.title}</h2>
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', overflowX: 'auto', padding: '2rem' }}>
          <img src="https://komarev.com/ghpvc/?username=IgnacioBrenas&color=38bdf8&style=for-the-badge" alt="Profile views" />
          <div className="flex flex-wrap justify-center gap-4">
            <img height="180em" src="https://github-readme-stats.vercel.app/api?username=IgnacioBrenas&show_icons=true&theme=dark&include_all_commits=true&count_private=true&bg_color=0f172a&title_color=38bdf8&text_color=94a3b8&icon_color=38bdf8&border_color=334155" alt="GitHub Stats"/>
            <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=IgnacioBrenas&layout=compact&langs_count=8&theme=dark&bg_color=0f172a&title_color=38bdf8&text_color=94a3b8&border_color=334155" alt="Top Langs"/>
          </div>
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=IgnacioBrenas&theme=dark&background=0f172a&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8&sideNums=38bdf8&currStreakNum=38bdf8&dates=94a3b8&sideLabels=94a3b8&border=334155" alt="GitHub Streak Stats" style={{ maxWidth: '100%' }} />
        </div>
      </section>

      <footer>
        <div className="container flex flex-col items-center gap-4">
          <img src="/1.png" alt="Logo Footer" style={{ height: '50px', borderRadius: '50%', opacity: 0.8 }} />
          <p>© {new Date().getFullYear()} Ignacio Breñas Muñoz. {dict.footer.created_with}</p>
        </div>
      </footer>
    </main>
  );
}
