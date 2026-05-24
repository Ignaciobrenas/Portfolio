'use client'

import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  const currentLang = pathname.split('/')[1] || 'es'
  
  const languages = [
    { code: 'es', label: 'Español', flag: 'es' },
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'fr', label: 'Français', flag: 'fr' },
    { code: 'ca', label: 'Català', flag: 'es-ct' } // es-ct is Catalonia flag in flagcdn
  ]

  const currentLanguageDetails = languages.find(l => l.code === currentLang) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLanguageChange = (newLang) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`)
    window.location.href = newPath
  }

  return (
    <div 
      ref={dropdownRef}
      style={{ 
        position: 'absolute', 
        top: '1.5rem', 
        right: '1.5rem', 
        zIndex: 100 
      }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          color: 'var(--text-primary)',
          border: '1px solid var(--card-border)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          outline: 'none',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          fontWeight: '600',
          fontSize: '0.95rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease',
          boxShadow: isOpen ? '0 0 10px var(--accent-glow)' : 'none',
          borderColor: isOpen ? 'var(--accent-color)' : 'var(--card-border)'
        }}
      >
        <img 
          src={`https://flagcdn.com/w40/${currentLanguageDetails.flag}.png`} 
          alt={currentLanguageDetails.label} 
          style={{ width: '24px', borderRadius: '4px' }}
        />
        {currentLanguageDetails.code.toUpperCase()}
        <ChevronDown size={16} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '120%',
          right: '0',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid var(--card-border)',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          minWidth: '140px',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
          animation: 'fadeInUp 0.2s ease-out'
        }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'transparent',
                border: 'none',
                color: lang.code === currentLang ? 'var(--accent-color)' : 'var(--text-primary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.95rem',
                transition: 'background 0.2s',
                fontWeight: lang.code === currentLang ? '600' : '400'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.05)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              <img 
                src={`https://flagcdn.com/w40/${lang.flag}.png`} 
                alt={lang.label} 
                style={{ width: '20px', borderRadius: '3px' }}
              />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
