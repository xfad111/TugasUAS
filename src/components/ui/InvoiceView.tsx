import React from 'react';
import { Invoice, Order } from '../../types';
import { FileText, Calendar, DollarSign, User, Building } from 'lucide-react';

interface InvoiceViewProps {
  invoice: Invoice;
  order: Order;
  user: { name: string };
}

const InvoiceView: React.FC<InvoiceViewProps> = ({ invoice, order, user }) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Invoice Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-2 text-primary-700 mb-2">
            <FileText className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Invoice</h2>
          </div>
          <p className="text-gray-600">#{invoice.id}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-primary-700 mb-2">
            <Building className="h-6 w-6" />
            <h3 className="text-xl font-bold">IFA FOUNDATION</h3>
          </div>
          <p className="text-gray-600">123 Creative Street</p>
          <p className="text-gray-600">Design District, NY 10001</p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <User className="h-4 w-4" />
            Bill To
          </h4>
          <p className="text-gray-800 font-medium">{user.name}</p>
          <p className="text-gray-600">Client ID: {order.userId}</p>
        </div>
        <div className="text-right">
          <div className="space-y-2">
            <p className="flex items-center justify-end gap-2 text-gray-700">
              <Calendar className="h-4 w-4" />
              <span>
                <strong>Date:</strong> {formatDate(invoice.createdAt)}
              </span>
            </p>
            <p className="flex items-center justify-end gap-2 text-gray-700">
              <Calendar className="h-4 w-4" />
              <span>
                <strong>Due Date:</strong> {formatDate(invoice.dueDate)}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-700">{order.serviceType}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{order.description}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-right">{formatCurrency(invoice.amount)}</td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td colSpan={2} className="px-6 py-4 text-sm font-semibold text-gray-700 text-right">Total</td>
              <td className="px-6 py-4 text-sm font-semibold text-gray-700 text-right">{formatCurrency(invoice.amount)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Payment Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-gray-600" />
          <span className="font-medium text-gray-700">Payment Status:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            invoice.status === 'Paid' ? 'bg-green-100 text-green-800' :
            invoice.status === 'Overdue' ? 'bg-red-100 text-red-800' :
            'bg-amber-100 text-amber-800'
          }`}>
            {invoice.status}
          </span>
        </div>
        <button 
          onClick={() => window.print()} 
          className="btn-outline flex items-center gap-2"
        >
          <FileText className="h-4 w-4" />
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceView;