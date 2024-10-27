import { ThemeToggle } from '@/components/ThemeToggle'
import UseSonner from '@/components/UseSonner'

export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      Hello World
      <ThemeToggle />
      <UseSonner message='Hello World' />
    </div>
  )
}
