import { CryptoOrder } from '@/models/crypto_order';
import EmployeesTable from './EmployeesTable';

function EmployeesList() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      name: 'آقای محمد',
      family: 'شعبانی',
      fatherName: 'عباس',
      status: 'completed',
      nationalCode: '0024116985',
      phoneNumber: '09011091910',
      personnelCode: '59695486'
    }
  ];


  return (
      <EmployeesTable cryptoOrders={cryptoOrders} />
  );
}

export default EmployeesList;
