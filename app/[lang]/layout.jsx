import '../globals.css'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export const metadata = {
  title: 'Ignacio Breñas Muñoz - Portfolio',
  description: 'Portfolio de Ignacio Breñas Muñoz',
  icons: {
    icon: '/1.png',
  },
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  )
}
