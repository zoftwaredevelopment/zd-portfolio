import './globals.css'

export const metadata = {
  title: 'Zoftware Development — Selected Work',
  description: 'Custom websites and online stores for Ottawa businesses and founders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
