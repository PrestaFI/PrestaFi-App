

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function SendMoneyComponent() {
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
<div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        <DollarSignIcon className="inline-block mr-2 w-6 h-6" />
        Send Money
      </h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount">You Send</Label>
          <Input id="amount" placeholder="$300" defaultValue="$300" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recipient">To This Recipient</Label>
          <Select>
            <SelectTrigger id="recipient">
              <SelectValue placeholder="Mother - GBH4...GIYI" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mother">Mother - GBH4...GIYI</SelectItem>
              <SelectItem value="father">Father - GBH4...GIYI</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="payment-method">Your Payment Method</Label>
          <Select>
            <SelectTrigger id="payment-method">
              <SelectValue placeholder="PrestaFI Credit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="prestafi">PrestaFI Credit</SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Maximum Credit Available</Label>
            <div className="p-2 text-center bg-gray-100 rounded">$300</div>
          </div>
          <div className="space-y-2">
            <Label>Collateral Provided</Label>
            <div className="p-2 text-center bg-gray-100 rounded">$600 (5,919 XLM)</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-bold">Credit Conditions & Terms:</p>
          <p>4 monthly installments ($75). 1% interest per month ($3). For a total of $312. No additional fees.</p>
        </div>
        <div className="space-y-2">
          <Label>They Receive</Label>
          <Input placeholder="$5,547 MXN" defaultValue="$5,547 MXN" />
        </div>
        <div className="text-sm text-center text-muted-foreground">
          <p className="font-bold">And We Give You These Conditions:</p>
          <p>$12 as the total fee (interest + transfer fee)</p>
          <p>19.49 MXN as the exchange rate</p>
          <p>
            You will pay just <span className="font-bold">$312</span>, splitted in 4 monthly installments of{" "}
            <span className="font-bold">$78</span>
          </p>
          <p>No additional fees</p>
        </div>
        <Button className="w-full bg-[#7c25cc] text-white">Get Credit & Send Money</Button>
      </div>
    </div>
</div>


  )
}

function DollarSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}