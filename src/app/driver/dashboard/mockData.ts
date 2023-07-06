import { ShipmentStatuses } from '@/types/base.d'

export const mockShipments = [
  {
    id: 1,
    status: ShipmentStatuses.load,
    fromDate: new Date(2022, 11, 11, 14, 33).toLocaleString(),
    toDate: new Date(2024, 4, 2, 21, 20).toLocaleString(),
    locationFrom: 'Chikago',
    locationTo: 'NY',
    wayPercentage: 45,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perspiciatis nihil amet vero rerum.',
    driverInfo: 'John Smith (GoCargo company)',
  },
  {
    id: 2,
    status: ShipmentStatuses.load,
    fromDate: new Date(2022, 10, 5, 10, 0).toLocaleString(),
    toDate: new Date(2023, 2, 15, 16, 45).toLocaleString(),
    locationFrom: 'Los Angeles',
    locationTo: 'San Francisco',
    wayPercentage: 75,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error alias deleniti aut.',
    driverInfo: 'Emily Johnson (FastLogistics)',
  },
  {
    id: 3,
    status: ShipmentStatuses.delivering,
    fromDate: new Date(2023, 1, 20, 8, 15).toLocaleString(),
    toDate: new Date(2023, 5, 10, 12, 30).toLocaleString(),
    locationFrom: 'Miami',
    locationTo: 'Atlanta',
    wayPercentage: 30,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, modi cum placeat accusantium iure.',
    driverInfo: 'Michael Davis (SwiftShipping)',
  },
  {
    id: 4,
    status: ShipmentStatuses.done,
    fromDate: new Date(2023, 4, 1, 9, 0).toLocaleString(),
    toDate: new Date(2023, 4, 10, 18, 0).toLocaleString(),
    locationFrom: 'Seattle',
    locationTo: 'Portland',
    wayPercentage: 100,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus incidunt quas aut id quo.',
    driverInfo: 'Olivia Anderson (ExpressMove)',
  },
  {
    id: 5,
    status: ShipmentStatuses.load,
    fromDate: new Date(2023, 6, 15, 13, 30).toLocaleString(),
    toDate: new Date(2023, 6, 22, 9, 15).toLocaleString(),
    locationFrom: 'Dallas',
    locationTo: 'Houston',
    wayPercentage: 60,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laboriosam modi accusamus error ipsa.',
    driverInfo: 'Daniel Martinez (SuperTransit)',
  },
]