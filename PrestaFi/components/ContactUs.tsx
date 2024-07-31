

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ContactUsComponent() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <h1 className="text-4xl font-bold text-purple-800">Join the Waiting List</h1>
        <Card className="p-6 bg-white rounded-lg shadow-lg w-[350px]">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="Email address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">Zip Code</Label>
              <Input id="zip" placeholder="Zip Code" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Where are you sending money?</Label>
              <Input id="location" placeholder="Where are you sending money?" />
            </div>
            <Button className="w-full bg-purple-600 text-white">SEND</Button>
          </form>
        </Card>
      </div>
    </div>
  )
}