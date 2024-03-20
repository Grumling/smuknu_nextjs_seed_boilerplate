import { QuicksandFont } from '@/utils/fonts'
import './globals.css'
import { BasketContextProvider } from '@/context/basket'

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={QuicksandFont.className}>
        <BasketContextProvider>{children}</BasketContextProvider>
      </body>
    </html>
  )
}
