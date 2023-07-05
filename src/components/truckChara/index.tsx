import React, { useMemo } from 'react'
import Image from 'next/image'
import { TruckType } from './truck-type'
import { CarType } from '@/types/base.d'

interface IProps {
 data: any
}


export const TruckCharacteristic = ({ data }: IProps): JSX.Element | null => {
  const truck = useMemo(() => {
    switch (data.car_type) {
      case [CarType.Container]: return {
        text: 'Container',
        src: '/home/container.jpg',
      }
      case [CarType.EuroTrack]: return {
        text: 'EuroTrack',
        src: '/home/euroo.jpg',
      }
      case [CarType.Refrigerator]: return {
        text: 'Refrigerator',
        src: '/home/refrej.jpg',
      }
      case [CarType.Tank]: return {
        text: 'Tank',
        src: '/home/cistern.jpg',
      }
      default: return null
    }
  }, [data])

  if (!data) {
    return null
  }
  return (
    <div className="w-full">
      <div className="flex-col w-full bg-white">
        <h2 className="text-3xl font-bold my-4">Trucks characteristic</h2>
        <div className="flex justify-between mb-10">
          <TruckType
            src={truck?.src}
            text={truck?.text}
          />
        </div>
        <div className="flex gap-x-5 justify-between w-full">
          <div className="w-full">
            <Image
              width="250"
              height="250"
              className="object-cover w-full"
              alt="truck image"
              src={data.car_image || '/home/truckMask.png'}
            />
          </div>
          <table className="w-full border-collapse ">
            <tbody>
              <tr className="w-full">
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full">Year of release</td>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full">{data.year_of_manufacture}</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full bg-gray-300">Body type</td>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full bg-gray-300">{data.car_type}</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full">Length,</td>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full">{data.length} inch</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full bg-gray-300">Width,</td>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full bg-gray-300">{data.width} inch</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full">Height,</td>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full">{data.height} inch</td>
              </tr>
              <tr>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full">Load Capacity,</td>
                <td className="border-solid border-2 border-gray-400 py-0.5 px-10 w-full">{data.load_capacity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

