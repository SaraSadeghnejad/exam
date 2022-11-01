import { CryptoOrder } from '@/models/crypto_order';
import BuildingUnitsTable from './BuildingUnitsTable';

function BuildingUnitsList() {
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
      <BuildingUnitsTable cryptoOrders={cryptoOrders} />
  );
}

export default BuildingUnitsList;
