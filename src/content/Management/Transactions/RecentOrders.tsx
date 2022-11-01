import { Card } from '@mui/material';
import { CryptoOrder } from '@/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      title: 'اتمام صفحه update report',
      Date:  new Date().getFullYear()  +'/'+  new Date().getMonth() +'/'+ new Date().getDate() ,
      status: 'completed',
      referredTo: 'محسن گنابادی',
      observer: 'سارا یداللهی',
      priority: 'کم اهمیت '
    }
  ];


  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
