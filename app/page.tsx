import InitiateSonner from '@/components/UseSonner'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      Hello World
      <ThemeToggle />
      <InitiateSonner message='Hello World' />
    </div>
  )
}
