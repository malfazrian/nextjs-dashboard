import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Loan',
};
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Loans', href: '/dashboard/loans' },
          {
            label: 'Create Loan',
            href: '/dashboard/loans/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}