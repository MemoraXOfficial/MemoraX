import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Signup() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" className="w-full">Create Account</Button>
        </form>
      </div>
    </main>
  )
}