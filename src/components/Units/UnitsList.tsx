import { CryptoOrder } from '@/models/crypto_order';
import UnitsTable from './UnitsTable';

function UnitsList() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      name: 'فروش',
      parentUnit:'مدیریت',
      status: 'completed'
    }
  ];

  return (
      <UnitsTable cryptoOrders={cryptoOrders} />
  );
}

export default UnitsList;
