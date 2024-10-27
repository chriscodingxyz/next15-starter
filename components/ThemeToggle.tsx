'use client'

import * as React from 'react'
import { MoonIcon, SunIcon, DesktopIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function ThemeToggle () {
  const { theme, setTheme } = useTheme()

  const ThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className='h-[1.2rem] w-[1.2rem]' />
      case 'dark':
        return <MoonIcon className='h-[1.2rem] w-[1.2rem]' />
      default:
        return <DesktopIcon className='h-[1.2rem] w-[1.2rem]' />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <ThemeIcon />
          <span className='sr-only'>Choose theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <SunIcon className='mr-2 h-4 w-4' />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <DesktopIcon className='mr-2 h-4 w-4' />
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <MoonIcon className='mr-2 h-4 w-4' />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
