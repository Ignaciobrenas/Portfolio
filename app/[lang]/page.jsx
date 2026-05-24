import { getDictionary } from '../dictionaries'
import { MapPin, Mail, Phone, ExternalLink, Code2, Monitor, GraduationCap, Briefcase, Award, Layers, Github, Server, Cloud, PenTool, Database } from 'lucide-react'
import RevealOnScroll from '../../components/RevealOnScroll'

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <main>
      <header className="header-sticky flex justify-between items-center">
        <a href="#" className="logo-container">
          <img src="/1.png" alt="Logo" className="logo-img" />
          <span className="logo-text">IGNACIO</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero container animate-fade-in">
        <div className="hero-bg-glow"></div>
        <div className="flex flex-col items-center text-center w-full">
          <div className="profile-container">
            <div className="profile-ring"></div>
            <img src="/1.png" alt={dict.hero.title} className="profile-img" />
          </div>
          <h1 className="hero-title">{dict.hero.title}</h1>
          <p className="hero-subtitle">{dict.hero.subtitle}</p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href="https://github.com/Ignaciobrenas" target="_blank" rel="noreferrer" className="btn-secondary">
              <Code2 size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ignaciobrenas" target="_blank" rel="noreferrer" className="btn-primary">
              <ExternalLink size={20} /> LinkedIn
            </a>
          </div>

          <div className="flex gap-6 justify-center flex-wrap contact-info">
            <span className="contact-item"><MapPin size={18} className="text-accent" style={{color: 'var(--accent-color)'}} /> {dict.hero.location}</span>
            <span className="contact-item"><Mail size={18} className="text-accent" style={{color: 'var(--accent-color)'}} /> ignaciobrenas@gmail.com</span>
            <span className="contact-item"><Phone size={18} className="text-accent" style={{color: 'var(--accent-color)'}} /> 640 770 380</span>
          </div>
          
          <div className="mt-8">
            <img src={`https://readme-typing-svg.herokuapp.com?font=Inter&size=24&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&width=600&lines=Software+Developer;Junior+IT+Technician;Backend+Enthusiast;Always+Learning`} alt="Typing SVG" style={{ maxWidth: '100%' }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <RevealOnScroll className="section container">
        <h2 className="section-title">{dict.about.title}</h2>
        <div className="glass-card text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="mb-6 font-medium" style={{ fontSize: '1.1rem' }}>{dict.about.p1}</p>
          <p className="font-medium" style={{ fontSize: '1.1rem' }}>{dict.about.p2}</p>
        </div>
      </RevealOnScroll>

      {/* Experience Section */}
      <RevealOnScroll className="section container">
        <h2 className="section-title"><Briefcase className="mr-2" size={40} /> {dict.experience.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="glass-card">
            <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
              <div>
                <h3 className="card-title">{dict.experience.soterguard_title}</h3>
                <div className="flex items-center gap-2 mt-2 mb-2">
                  <h4 className="card-subtitle mb-0">Soterguard</h4>
                  <span className="badge badge-green">{dict.experience.now}</span>
                </div>
              </div>
              <img src="/images.png" alt="Soterguard Logo" className="card-icon" />
            </div>
            <p className="font-medium text-secondary mb-4">{dict.experience.soterguard_desc}</p>
            <ul className="card-list">
              {dict.experience.soterguard_tasks?.map((task, index) => {
                const parts = task.split(': ');
                return (
                  <li key={index}>
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
                <h3 className="card-title">{dict.experience.vimtech_title}</h3>
                <h4 className="card-subtitle">VimTech - El Masnou</h4>
              </div>
              <img src="/vimtech.png" alt="VimTech Logo" className="card-icon" />
            </div>
            <span className="card-date">{dict.experience.vimtech_date}</span>
            <ul className="card-list">
              <li>{dict.experience.vimtech_l1}</li>
              <li>{dict.experience.vimtech_l2}</li>
              <li>{dict.experience.vimtech_l3}</li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>

      {/* Volunteering Section */}
      <RevealOnScroll className="section container">
        <h2 className="section-title"><Award className="mr-2" size={40} /> {dict.volunteering.title}</h2>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
            <h3 className="card-title mb-0">{dict.volunteering.ajma_title}</h3>
            <span className="badge">{dict.volunteering.ajma_date}</span>
          </div>
          <ul className="card-list">
            <li><strong style={{ color: 'var(--text-primary)' }}>{dict.volunteering.ajma_l1_bold}</strong> {dict.volunteering.ajma_l1}</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>{dict.volunteering.ajma_l2_bold}</strong> {dict.volunteering.ajma_l2}</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>{dict.volunteering.ajma_l3_bold}</strong> {dict.volunteering.ajma_l3}</li>
          </ul>
        </div>
      </RevealOnScroll>

      {/* Education Section */}
      <RevealOnScroll className="section container">
        <h2 className="section-title"><GraduationCap className="mr-2" size={40} /> {dict.education.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="glass-card justify-center text-center">
            <h3 className="card-title">{dict.education.daw}</h3>
            <p className="card-subtitle">STUCOM Pelai (Barcelona)</p>
            <p className="card-date mb-0">{dict.education.daw_date}</p>
          </div>
          <div className="glass-card justify-center text-center">
            <h3 className="card-title">{dict.education.smr}</h3>
            <p className="card-subtitle">STUCOM Pelai (Barcelona)</p>
            <p className="card-date mb-0">{dict.education.smr_date}</p>
          </div>
          <div className="glass-card justify-center text-center">
            <h3 className="card-title">{dict.education.eso}</h3>
            <p className="card-subtitle">IES Los Pedroches (Córdoba)</p>
            <p className="card-date mb-0">{dict.education.eso_date}</p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Certifications Section */}
      <RevealOnScroll className="section container">
        <h2 className="section-title"><Award className="mr-2" size={40} /> {dict.certifications.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="glass-card flex-row justify-between items-center" style={{ padding: '1.5rem 2rem' }}>
            <h3 className="card-title mb-0" style={{ fontSize: '1.1rem' }}>{dict.certifications.c1}</h3>
            <span className="badge badge-orange">{dict.certifications.c1_status}</span>
          </div>
          <div className="glass-card flex-row justify-between items-center" style={{ padding: '1.5rem 2rem' }}>
            <h3 className="card-title mb-0" style={{ fontSize: '1.1rem' }}>{dict.certifications.c2}</h3>
            <span className="badge">{dict.certifications.c2_status}</span>
          </div>
          <div className="glass-card flex-row justify-between items-center" style={{ padding: '1.5rem 2rem' }}>
            <h3 className="card-title mb-0" style={{ fontSize: '1.1rem' }}>{dict.certifications.c3}</h3>
            <span className="badge">{dict.certifications.c3_status}</span>
          </div>
          <div className="glass-card flex-row justify-between items-center" style={{ padding: '1.5rem 2rem' }}>
            <h3 className="card-title mb-0" style={{ fontSize: '1.1rem' }}>{dict.certifications.c4}</h3>
            <span className="badge">{dict.certifications.c4_status}</span>
          </div>
        </div>
      </RevealOnScroll>

      {/* Skills Section */}
      <RevealOnScroll className="section container">
        <h2 className="section-title"><Monitor className="mr-2" size={40} /> {dict.skills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="skills-group">
            <h3 className="skills-title"><Monitor size={20} className="text-accent" style={{color: 'var(--accent-color)'}} /> {dict.skills.frontend}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {dict.skills.frontend_skills?.map(skill => <span key={skill} className="badge">{skill}</span>)}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-title"><Server size={20} className="text-accent" style={{color: '#FCD34D'}} /> {dict.skills.backend}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {dict.skills.backend_skills?.map(skill => <span key={skill} className="badge badge-yellow">{skill}</span>)}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-title"><Cloud size={20} className="text-accent" style={{color: '#10B981'}} /> {dict.skills.devops}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {dict.skills.devops_skills?.map(skill => <span key={skill} className="badge badge-green">{skill}</span>)}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-title"><Database size={20} className="text-accent" style={{color: '#F87171'}} /> {dict.skills.systems}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {dict.skills.systems_skills?.map(skill => <span key={skill} className="badge badge-red">{skill}</span>)}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-title"><Code2 size={20} className="text-accent" style={{color: '#A78BFA'}} /> {dict.skills.markup} & {dict.skills.tools}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {[...(dict.skills.markup_skills || []), ...(dict.skills.tools_skills || [])]?.map(skill => <span key={skill} className="badge badge-purple">{skill}</span>)}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-title"><PenTool size={20} className="text-accent" style={{color: '#93C5FD'}} /> {dict.skills.soft}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {dict.skills.soft_skills?.map(skill => <span key={skill} className="badge badge-blue">{skill}</span>)}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Projects Section */}
      <RevealOnScroll className="section container">
        <h2 className="section-title"><Layers className="mr-2" size={40} /> {dict.projects.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[
            { title: dict.projects.p1_title, tech: dict.projects.p1_tech, feats: dict.projects.p1_features },
            { title: dict.projects.p2_title, tech: dict.projects.p2_tech, feats: dict.projects.p2_features },
            { title: dict.projects.p3_title, tech: dict.projects.p3_tech, feats: dict.projects.p3_features },
            { title: dict.projects.p4_title, tech: dict.projects.p4_tech, feats: dict.projects.p4_features },
            { title: dict.projects.p5_title, tech: dict.projects.p5_tech, feats: dict.projects.p5_features }
          ].map((proj, i) => (
            <div key={i} className="glass-card">
              <h3 className="card-title">{proj.title}</h3>
              <p className="card-subtitle mt-2 mb-4"><strong style={{ color: 'var(--text-primary)' }}>{dict.projects.tech}:</strong> {proj.tech}</p>
              <ul className="card-list">
                {proj.feats?.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* GitHub Stats Section */}
      <RevealOnScroll className="section container text-center">
        <h2 className="section-title"><Github className="mr-2" size={40} /> {dict.stats.title}</h2>
        <div className="glass-card items-center gap-6" style={{ padding: '3rem 2rem' }}>
          <img src="https://komarev.com/ghpvc/?username=IgnacioBrenas&color=38bdf8&style=for-the-badge" alt="Profile views" style={{ borderRadius: '8px' }} />
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <img style={{ maxHeight: '190px' }} src="https://github-readme-stats.vercel.app/api?username=IgnacioBrenas&show_icons=true&theme=dark&include_all_commits=true&count_private=true&bg_color=0f172a&title_color=38bdf8&text_color=94a3b8&icon_color=38bdf8&border_color=334155" alt="GitHub Stats"/>
            <img style={{ maxHeight: '190px' }} src="https://github-readme-stats.vercel.app/api/top-langs/?username=IgnacioBrenas&layout=compact&langs_count=8&theme=dark&bg_color=0f172a&title_color=38bdf8&text_color=94a3b8&border_color=334155" alt="Top Langs"/>
          </div>
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=IgnacioBrenas&theme=dark&background=0f172a&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8&sideNums=38bdf8&currStreakNum=38bdf8&dates=94a3b8&sideLabels=94a3b8&border=334155" alt="GitHub Streak Stats" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </div>
      </RevealOnScroll>

      <footer>
        <div className="container flex flex-col items-center gap-4">
          <a href="#" className="logo-container">
            <img src="/1.png" alt="Logo Footer" className="logo-img" style={{ opacity: 0.8 }} />
          </a>
          <p className="footer-text">© {new Date().getFullYear()} Ignacio Breñas Muñoz. {dict.footer.created_with}</p>
        </div>
      </footer>
    </main>
  );
}
