import { MapPin, Mail, Phone, ExternalLink, Code2, Monitor, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function Home() {
  return (
    <main className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero container">
        <div className="flex flex-col items-center text-center w-full">
          <div className="profile-img-container">
            <img src="/fotomia.png" alt="Ignacio Breñas Muñoz" className="profile-img" />
          </div>
          <h1 className="hero-title">Ignacio Breñas Muñoz</h1>
          <p className="hero-subtitle">Desarrollador de Aplicaciones Web & Técnico TI Junior</p>
          
          <div className="flex gap-4 justify-center" style={{ marginBottom: '2rem' }}>
            <a href="https://github.com/Ignaciobrenas" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
              <Code2 size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ignaciobrenas" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
              <ExternalLink size={20} /> LinkedIn
            </a>
          </div>

          <div className="flex gap-6 justify-center flex-wrap" style={{ color: 'var(--text-secondary)' }}>
            <span className="flex items-center gap-2"><MapPin size={18} /> Mataró, Barcelona</span>
            <span className="flex items-center gap-2"><Mail size={18} /> ignaciobrenas@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={18} /> 640 770 380</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section container">
        <h2 className="section-title">Sobre mí</h2>
        <div className="glass-card text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Soy un estudiante de Grado Superior en Desarrollo de Aplicaciones Web, con una sólida base técnica adquirida tanto en mi formación académica como en experiencias prácticas.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Me considero una persona proactiva, resolutiva y con gran capacidad de adaptación, siempre dispuesta a asumir nuevos retos y aprender de ellos. Estoy interesado en participar en proyectos reales y dinámicos para combinar el aprendizaje con la experiencia en empresa.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section container">
        <h2 className="section-title"><Briefcase className="inline-block mr-2" /> Experiencia Profesional</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="glass-card">
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Desarrollador de Software (Prácticas)</h3>
              <span className="badge">Actualidad</span>
            </div>
            <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Soterguard</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Prácticas de Desarrollo de Aplicaciones Web (DAW).</p>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              <li>Desarrollo y mantenimiento de software.</li>
              <li>Aplicación de conocimientos adquiridos en el CFGS DAW en un entorno empresarial real.</li>
            </ul>
          </div>

          <div className="glass-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Técnico Informático (Prácticas)</h3>
                <h4 style={{ color: 'var(--accent-color)' }}>VimTech - El Masnou</h4>
              </div>
              <img src="/vimtech.png" alt="VimTech Logo" style={{ height: '40px', borderRadius: '4px' }} />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Septiembre 2024 - Marzo 2025</p>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              <li>Especialización en servicios informáticos y reparación de dispositivos Apple.</li>
              <li>Diagnósticos, mantenimiento, instalación de sistemas operativos y sustitución de componentes.</li>
              <li>Asesoramiento personalizado con soluciones tecnológicas a medida.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Volunteering Section */}
      <section className="section container">
        <h2 className="section-title"><Award className="inline-block mr-2" /> Voluntariado</h2>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="flex justify-between items-center mb-4">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AJMA (Asociación de Jóvenes de Medios Audiovisuales)</h3>
            <span className="badge">Mar 2023 - Ago 2025</span>
          </div>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li><strong>Desarrollador web:</strong> diseño y mantenimiento de la página oficial de la asociación.</li>
            <li><strong>Técnico informático:</strong> mantenimiento y soporte de equipos.</li>
            <li><strong>Cámara & Sonido:</strong> grabación de eventos, montaje y control de equipos de audio.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="section container">
        <h2 className="section-title"><GraduationCap className="inline-block mr-2" /> Formación</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card">
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>CFGS Desarrollo de Aplicaciones Web</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>STUCOM Pelai (Barcelona)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2025 - Actualmente</p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>CFGM Sistemas Microinformáticos y Redes</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>STUCOM Pelai (Barcelona)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2023 - 2025</p>
          </div>
          <div className="glass-card">
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Educación Secundaria Obligatoria</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>IES Los Pedroches (Córdoba)</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2017 - 2021</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section container">
        <h2 className="section-title"><Monitor className="inline-block mr-2" /> Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>Desarrollo & Programación</h3>
            <div className="flex flex-wrap gap-3">
              {['HTML5', 'CSS3', 'JavaScript', 'Java', 'PHP', 'React', 'Node.js', 'Next.js', 'Bases de Datos (SQL)', 'POO', 'Git / GitHub', 'VS Code', 'UX/UI (Figma)', 'WordPress'].map(skill => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>Soporte TI & Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Reparación de Equipos', 'Redes Básicas', 'Copias de Seguridad', 'Soporte Presencial/Remoto', 'Microsoft Office / LibreOffice', 'Liderazgo', 'Resolución de problemas', 'Trabajo en equipo', 'Proactividad'].map(skill => (
                <span key={skill} className="badge" style={{ background: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', borderColor: 'rgba(129, 140, 248, 0.2)' }}>{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Ignacio Breñas Muñoz. Creado con Next.js y React.</p>
        </div>
      </footer>
    </main>
  );
}
