'use client'

import React from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'

export default function UseSonner ({ message }: { message: string }) {
  return (
    <Button onClick={() => toast(message || 'Hello World')}>toast 🍻</Button>
  )
}
