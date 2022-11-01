import { CryptoOrder } from '@/models/crypto_order';
import BuildingTable from './BuildingTable';

function BuildingsList() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      buildingType: 'مسکونی',
      buildingName: 'شبنم',
      address: 'تهران، خیابان دیباجی شمالی، کوچه شکوری گرکانی، پلاک ۲۸',
      numberOfFloors: '13',
      numberOfUnits: '15'
    }
  ];


  return (
      <BuildingTable cryptoOrders={cryptoOrders} />
  );
}

export default BuildingsList;
