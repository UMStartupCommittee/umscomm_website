import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Sorry, this page isn’t available</h2>
      <p className="text-lg text-muted-foreground text-center">You may have mistyped the address or the page has been removed</p>
      <Button asChild className="mt-2">
        <Link href="/">Return to home page</Link>
      </Button>
    </div>
  )
}