'use client'

import { PrimaryButton } from '@/components/button/primary'
import Image from 'next/image'
import { MainInfo } from '@/components/mainInfo'
import { AboutInfo } from '@/components/aboutInfo'
import { ContactInfo } from '@/components/contactInfo'
import { TruckCharacteristic } from '@/components/truckChara'
import { InfoModal } from '@/components/modal/info'
import { useState } from 'react'
import { useGetDriver } from '@/helpers/hooks/useGetDriver'


interface IProps {
  params: {
    id: string
  }
}


export default function ProfileDriverPage({ params: { id } }: IProps): JSX.Element | any {
  const [isOpen, setIsOpen] = useState(false)

  const { data, loading, error } = useGetDriver(id)

  console.log({ data, loading, error })

  if (!data) {
    return null
  }

  return (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <div className="flex w-2/3 gap-x-6">
          <Image
            width="150"
            height="150"
            className="object-cover"
            alt="driver avatar"
            src={data.image || '/home/avatarMask.png'}
          />
          <div className="flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">{data.first_name} {data.last_name}</h1>
              <span className="font-black text-green-800 mb-5">(Driver)</span>
            </div>
            <div className="flex mt-8 gap-x-5 w-full">
              <PrimaryButton className="bg-gray-500 hover:bg-black">Message</PrimaryButton>
              <PrimaryButton className="bg-gray-500 hover:bg-black">Like</PrimaryButton>
              <PrimaryButton className="bg-gray-500 hover:bg-black">Plan</PrimaryButton>
              <PrimaryButton onClick={() => setIsOpen(true)} className="bg-gray-500 hover:bg-black">Truck Info</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="flex gap-x-10">
          {
            data?.company_name ? <h1 className="text-3xl font-bold bg-black text-white p-4 rounded-lg h-16">{}</h1> : <></>
          }
          <h1 className="text-3xl font-bold bg-green-800 text-white p-4 rounded-lg h-16">{data.status}</h1>
        </div>
      </div>
      <div className="flex my-10 justify-evenly gap-x-5">
        <MainInfo data={data} />
        <AboutInfo data={data.bio} />
        {/* <ContactInfo /> */}
      </div>
      <InfoModal title="" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <TruckCharacteristic data={data} />
      </InfoModal>
      <div />
    </div>
  )
}