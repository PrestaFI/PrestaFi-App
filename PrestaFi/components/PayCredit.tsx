"use client";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

import {
  FreighterModule,
  StellarWalletsKit,
  WalletNetwork,
  XBULL_ID, FREIGHTER_ID,
  xBullModule, 
  ISupportedWallet,
} from '@creit.tech/stellar-wallets-kit';

const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: FREIGHTER_ID,
  modules: [
    new FreighterModule(),
  ]
});

export default function PayCreditComponent() {

  const { stellarWalletAddress, setStellarWalletAddress } = useContext(GlobalContext);

  async function connectToStellar() {
    await kit.openModal({
      onWalletSelected: async (option: ISupportedWallet) => {
        kit.setWallet(option.id);
        const publicKey = await kit.getPublicKey();
        // Do something else
        setStellarWalletAddress(publicKey);
        console.log(publicKey);
      },
    });  
  }

  return (
    <>
    { stellarWalletAddress && (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">
                <DollarSignIcon className="inline-block w-6 h-6 mr-1" />
                Pay Credit
            </h2>
            <div className="space-y-4">
                <div>
                <Label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Amount to Be Paid
                </Label>
                <Input id="amount" type="text" defaultValue="$78" className="mt-1 block w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label className="block text-sm font-medium text-gray-700">Debt Balance</Label>
                    <div className="mt-1 bg-gray-100 p-2 rounded-md">$312</div>
                </div>
                <div>
                    <Label className="block text-sm font-medium text-gray-700">Total Borrowed</Label>
                    <div className="mt-1 bg-gray-100 p-2 rounded-md">$300 (+$12 interest)</div>
                </div>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Installments</h3>
                <ul className="mt-2 space-y-1">
                <li>07/22/24 - $78 payment (PENDING)</li>
                <li>08/22/24 - $78 payment (PENDING)</li>
                <li>09/22/24 - $78 payment (PENDING)</li>
                <li>10/22/24 - $78 payment (PENDING)</li>
                </ul>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Credit History</h3>
                <p className="mt-2">06/22/24 - A $300 credit requested 07/22/24</p>
            </div>
            <div className="mt-6 text-center">
                <Button className="w-full bg-[#7c25cc]">Pay Credit</Button>
            </div>
        </div>
      </div>    

    )}
    { !stellarWalletAddress && (
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg mx-auto p-6">
          <Button className="bg-[#7D4AEA] text-white mr-8  " variant="outline" onClick={connectToStellar}>
              Connect Wallet
          </Button>
        </div>
      </div>
    )}
    </>
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