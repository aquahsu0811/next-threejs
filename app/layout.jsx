import '@styles/globals.scss';


export const metadata = {
  title: "Next Fiber",
  description: 'Discover & Show Text'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>

          {children}
        </main>

      </body>
    </html>
  )
}

export default RootLayout