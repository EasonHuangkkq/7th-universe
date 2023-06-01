import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen m-0">
      <iframe 
        src="https://gamma.app/embed/ajv2ye0qs0zazc0" 
        className="absolute top-0 left-0 w-screen h-screen"
        allow="fullscreen" 
        title="七号宇宙"
      />
    </main>
  )
}
