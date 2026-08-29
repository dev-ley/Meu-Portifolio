import './globals.css'
import Providers from './providers'
import ScrollToTop from '../components/layout/ScrollToTop'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Providers>
          {children}
        </Providers>

        {/* Botão de voltar ao topo */}
        <ScrollToTop />
      </body>
    </html>
  )
}
