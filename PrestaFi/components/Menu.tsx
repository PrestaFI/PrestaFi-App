"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"

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

import AddressDisplayComponent from "./AddressDisplay"

const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: FREIGHTER_ID,
  modules: [
    new FreighterModule(),
  ]
});

export default function MenuComponent() {

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

  const disconnectWallet = async () => {
    try {
      // Your logic to disconnect the wallet
      setStellarWalletAddress("");
      console.log('Wallet disconnected successfully');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

    return (
      <div className="bg-[#7D4AEA] text-white p-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold ml-4">PrestaFI</div>
        </Link>
        <div className="flex space-x-4">
          <Link href="/send-money" className="hover:underline mt-2">
            Send(Money)
          </Link>
          {/* <a href="/send-money" className="hover:underline mt-2">
            Send(Money)
          </a> */}
          <Link href="/pay-credit" className="hover:underline mt-2">
            Pay(Credit)
          </Link>
          {/* <a href="/pay-credit" className="hover:underline mt-2">
            Pay(Credit)
          </a> */}
          <Link href="#" className="hover:underline mt-2">
          Profile
          </Link>          
          {/* <a href="#" className="hover:underline mt-2">
            Profile
          </a> */}
          {/* <a href="#" className="hover:underline">
            Logout
          </a> */}

          { !stellarWalletAddress && (
            <Button className="bg-[#7D4AEA] mr-8  " variant="outline" onClick={connectToStellar}>
              Connect
            </Button>
          )}

            { stellarWalletAddress && (
              <div className="flex">
                <AddressDisplayComponent />
                <Button className="mr-8 bg-[#7D4AEA]" variant="outline" onClick={disconnectWallet}>
                  Disconnect
                </Button>
              </div>
          )}

        </div>
      </div>
    )
  }