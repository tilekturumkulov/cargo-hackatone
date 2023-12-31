'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton } from '@/components/button/primary'
import { MainShipperInfo } from '@/components/mainShipperInfo'
import { AboutShipperInfo } from '@/components/aboutShipperInfo'
import { useGetShipper } from '@/helpers/hooks/useGetShipper'


interface IProps {
  params: {
    id: string
  }
}

export default function ProfileShipperPage({ params: { id } }: IProps): JSX.Element | null {
  const { data, loading, error } = useGetShipper(id)

  console.log({ data, loading, error })

  if (!data) return null
  return (
    <div className="responsive py-10">
      <div className="flex justify-between">
        <div className="flex w-2/3 gap-x-6">
          <Link href="/home/driver.jpg">
            <Image
              width="200"
              height="200"
              className="object-cover"
              alt="driver avatar"
              src="/home/shipper.jpg"
            />
          </Link>
          <div className="flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">James Smith</h1>
              <span className="font-black text-green-800 mb-5">(Shipper)</span>
            </div>
            <div className="flex mt-8 gap-x-5 w-full">
              <PrimaryButton className="bg-gray-500 hover:bg-black">Message</PrimaryButton>
              <PrimaryButton className="bg-gray-500 hover:bg-black">Like</PrimaryButton>
              {
                localStorage.getItem('userId') === id && (
                  <Link href={`/shipper/profile/${id}/edit`}>
                    <PrimaryButton className="bg-gray-500 hover:bg-black">Edit</PrimaryButton>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
        <div className="flex gap-x-10">
          {/* <h1 className="text-3xl font-bold bg-black text-white p-4 rounded-lg h-16">Company Name</h1> */}
          {/* <h1 className="text-3xl font-bold bg-green-800 text-white p-4 rounded-lg h-16">{data.status}</h1> */}
        </div>
      </div>
      {/* <p>{id}</p> */}
      <div className="flex my-10 justify-evenly gap-x-5">
        {/* <MainShipperInfo data={data} />
        <AboutShipperInfo data={data} /> */}
        {/* <ContactInfo /> */}
      </div>
      <div />
    </div>
  )
}