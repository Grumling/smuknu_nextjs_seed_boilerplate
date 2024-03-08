import { QuicksandFont } from '@/utils/fonts'
import './globals.css'

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={QuicksandFont.className}>
        {/* <span>[root layout]</span> */}
        {children}
      </body>
    </html>
  )
}
