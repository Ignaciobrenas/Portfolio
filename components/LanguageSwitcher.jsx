'use client'

import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  
  // Obtenemos el idioma actual de la ruta (ej: /es/algo -> es)
  const currentLang = pathname.split('/')[1] || 'es'
  
  const languages = [
    { code: 'es', label: '🇪🇸 ES' },
    { code: 'en', label: '🇬🇧 EN' },
    { code: 'fr', label: '🇫🇷 FR' },
    { code: 'de', label: '🇩🇪 DE' },
    { code: 'ca', label: '🟥 CA' }
  ]

  return (
    <div className="language-switcher" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 100 }}>
      <select 
        value={currentLang}
        onChange={(e) => {
          const newLang = e.target.value;
          const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
          window.location.href = newPath;
        }}
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          color: 'var(--text-primary)',
          border: '1px solid var(--accent-color)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          outline: 'none',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} style={{ background: '#0f172a' }}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  )
}
