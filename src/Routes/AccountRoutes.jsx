import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BankStatement from '../Components/Account/AccountCompoents/BankStatement/BankStatement';
import ClearSuspense from '../Components/Account/AccountCompoents/BankStatement/ClearSuspense';
import DownloadStatement from '../Components/Account/AccountCompoents/BankStatement/DownloadStatement';
import EntryDonePayment from '../Components/Account/AccountCompoents/BankStatement/EnteryDonePaymentAndReceipt';
import MAtchClosingBlance from '../Components/Account/AccountCompoents/BankStatement/MAtchClosingBlance';


//importing other  purchaseBill

import AdvancePayment from '../Components/Account/AccountCompoents/PurchaseBill/AdvancePayemt';
import BalancePayment from '../Components/Account/AccountCompoents/PurchaseBill/BalancePayemt';
import EnterBillTally from '../Components/Account/AccountCompoents/PurchaseBill/EnterBillInTally';
import MaterialAndTaxInvoice from '../Components/Account/AccountCompoents/PurchaseBill/MaterialAndTaxInvoice';
import ProformaInvoice from '../Components/Account/AccountCompoents/PurchaseBill/ProformaInvoice';
import PurchaseBill from '../Components/Account/AccountCompoents/PurchaseBill/PurchaseBill';
import SendPurchaseOrder from '../Components/Account/AccountCompoents/PurchaseBill/SendPurchaseOrder';
import TallyLedger from '../Components/Account/AccountCompoents/PurchaseBill/TallyLedger';

//importing other SaleBill
import BillSentOwnerAndTra from '../Components/Account/AccountCompoents/SaleBill/BillSentOwnerAndTransporter';
import CheckedReceiptAmt from '../Components/Account/AccountCompoents/SaleBill/CheckedReceiptAmt';
import DepositShortAmount from '../Components/Account/AccountCompoents/SaleBill/DepositShortAmount';
import PreparedBill from '../Components/Account/AccountCompoents/SaleBill/PreparedBill';
import RequiredGSTNo from '../Components/Account/AccountCompoents/SaleBill/RequiredGSTNo';
import SaleBill from '../Components/Account/AccountCompoents/SaleBill/SaleBill';
import TallyLedgerSale from '../Components/Account/AccountCompoents/SaleBill/TallyLedger';
import VehicleNo from '../Components/Account/AccountCompoents/SaleBill/VehicleNo';
import WithdrawExtraAmount from '../Components/Account/AccountCompoents/SaleBill/WithdrawExtraAmount';

//importing other VendorPayment
import PendingPaymentList from '../Components/Account/AccountCompoents/VenderPayment/PandingPaymentList';
import PaymentTransactionDetails from '../Components/Account/AccountCompoents/VenderPayment/PaymentTransactionDone';
import TransactionDetailsSnapshot from '../Components/Account/AccountCompoents/VenderPayment/TransactionDetailsSnedTOVendor';
import VendorePayment from '../Components/Account/AccountCompoents/VenderPayment/VendorePayemt';
import Dashboard from '../Components/Account/AccountPage/DashBoard';


function AccountRoutes() {
  return (
    
      <Routes>
         <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bank-statement" element={<BankStatement />} />
        <Route path="/clear-suspense" element={<ClearSuspense />} />
        <Route path="/download-statement" element={<DownloadStatement />} />
        <Route path="/entry-done-payment" element={<EntryDonePayment />} />
        <Route path="/match-closing-balance" element={<MAtchClosingBlance />} />
        <Route path="/advance-payment" element={<AdvancePayment />} />
        <Route path="/balance-payment" element={<BalancePayment />} />
        <Route path="/enter-bill-tally" element={<EnterBillTally />} />
        <Route path="/material-and-tax-invoice" element={<MaterialAndTaxInvoice />} />
        <Route path="/proforma-invoice" element={<ProformaInvoice />} />
        <Route path="/purchase-bill" element={<PurchaseBill />} />
        <Route path="/send-purchase-order" element={<SendPurchaseOrder />} />
        <Route path="/tally-ledger" element={<TallyLedger />} />
        <Route path="/bill-sent-owner" element={<BillSentOwnerAndTra />} />
        <Route path="/checked-receipt-amt" element={<CheckedReceiptAmt />} />
        <Route path="/deposit-short-amount" element={<DepositShortAmount />} />
        <Route path="/prepared-bill" element={<PreparedBill />} />
        <Route path="/required-gst-no" element={<RequiredGSTNo />} />
        <Route path="/sale-bill" element={<SaleBill />} />
        <Route path="/tally-ledger-sale" element={<TallyLedgerSale />} />
        <Route path="/vehicle-no" element={<VehicleNo />} />
        <Route path="/withdraw-extra-amount" element={<WithdrawExtraAmount />} />
        <Route path="/pending-payment-list" element={<PendingPaymentList />} />
        <Route path="/payment-transaction-details" element={<PaymentTransactionDetails />} />
        <Route path="/transaction-details-snapshot" element={<TransactionDetailsSnapshot />} />
        <Route path="/vendore-payment" element={<VendorePayment />} />
       
      </Routes>
    
  );
}

export default AccountRoutes;