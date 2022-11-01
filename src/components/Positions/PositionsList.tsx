import { CryptoOrder } from '@/models/crypto_order';
import PositionTable from './PositionTable';

function PositionsList() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      name: 'اپراتور فروش',
      unitName: 'فروش',
      parentPosition: 'کارشناس فروش',
      status: 'completed',
    }
  ];


  return (
      <PositionTable cryptoOrders={cryptoOrders} />
  );
}

export default PositionsList;
