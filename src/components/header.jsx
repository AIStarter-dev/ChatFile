'use client'
import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Header() {
  const [isLocalMode, setIsLocalMode] = useState(false)

  return (
    <header className="flex items-center justify-between p-4 bg-background border-b">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-primary">ChatFile</h1>
        <p className="text-sm text-muted-foreground hidden sm:block">
          An Opensource OpenAI Chat Files Sample
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Switch
          id="mode-switch"
          checked={isLocalMode}
          onCheckedChange={setIsLocalMode}
        />
        <Label htmlFor="mode-switch">
          {isLocalMode ? 'Local Mode' : 'Server Mode'}
        </Label>
      </div>
    </header>
  )
}