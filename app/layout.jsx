import './globals.css'

export const metadata = {
  title: 'Ignacio Breñas Muñoz - Portfolio',
  description: 'Portfolio de Ignacio Breñas Muñoz, Desarrollador de Aplicaciones Web y Técnico TI Junior.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
