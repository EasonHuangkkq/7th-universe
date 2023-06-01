import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <iframe 
        src="https://gamma.app/embed/ajv2ye0qs0zazc0" 
        style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }} 
        allow="fullscreen" 
        title="七号宇宙"
      />
    </main>
  )
}

