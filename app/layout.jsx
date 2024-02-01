import '@styles/globals.scss';


export const metadata = {
  title: "Next Fiber",
  description: 'Discover & Show Text'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <main className='app'>

          {children}
        </main>

      </body>
    </html>
  )
}

export default RootLayout