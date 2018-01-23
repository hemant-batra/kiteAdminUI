import {AdminComponent} from '../components/admin/admin.component';
import {ManualRefundComponent} from '../components/admin/manual-refund/manual-refund.component';
import {MailMerchantComponent} from '../components/admin/mail-merchant/mail-merchant.component';

/*
  this constant contains the display name of the menu item, its url path
  relative to the admin welcome page, the component that is invoked
  when the menu item is selected and the child (sub) menus
 */
export const paths = [
  {code: 'home', label: '', path: '', component: AdminComponent},
  {code: 'manualRefund', label: 'Manual Refund', path: 'manualRefund', component: ManualRefundComponent},
  {code: 'sendMailToMerchant', label: 'Send Mail to Merchant', path: 'sendMailToMerchant', component: MailMerchantComponent},
  {code: 'agentList', label: 'Agent List', path: 'agentList', component: AdminComponent, children: [
    {code: 'addAgent', label: 'Add Agent', path: 'addAgent', component: AdminComponent},
    {code: 'addKycAgent', label: 'Add KYC Agent', path: 'addKycAgent', component: AdminComponent},
    {code: 'updateAgent', label: 'Update Agent', path: 'updateAgent', component: AdminComponent},
    {code: 'calculateAgentCommission', label: 'Calculate Agent Commission', path: 'calculateAgentCommission', component: AdminComponent}
  ]},
  {code: 'userList', label: 'User List', path: 'userList', component: AdminComponent, children: [
    {code: 'createRemoveAnInfluencer', label: 'Create/Remove an Influencer', path: 'createRemoveAnInfluencer', component: AdminComponent},
    {code: 'suspendUser', label: 'Suspend User', path: 'suspendUser', component: AdminComponent},
    {code: 'reactivateUser', label: 'Reactivate User', path: 'reactivateUser', component: AdminComponent}
  ]},
  {code: 'verifiedUsersList', label: 'Verified Users List', path: 'verifiedUsersList', component: AdminComponent},
  {code: 'systemAccountList', label: 'System Account List', path: 'systemAccountList', component: AdminComponent, children: [
    {code: 'addAdmin', label: 'Add New Admin', path: 'addAdmin', component: AdminComponent}
  ]},
  {code: 'getAgentAdminsAccountId', label: 'Get Agent Admins Account Id', path: 'getAgentAdminsAccountId', component: AdminComponent},
  {code: 'registerSupportExecutive', label: 'Register Support Executive', path: 'registerSupportExecutive', component: AdminComponent},
  {code: 'setTemporaryPassword', label: 'Set Temporary Password', path: 'setTemporaryPassword', component: AdminComponent},
  {code: 'reverseTransactionsList', label: 'Reverse Transactions List', path: 'reverseTransactionsList', component: AdminComponent},
  {code: 'commissionChargeList', label: 'Commission Charge List', path: 'commissionChargeList', component: AdminComponent, children: [
    {code: 'addCommissionCharge', label: 'Add Commission Charge', path: 'addCommissionCharge', component: AdminComponent}
  ]},
  {code: 'addServiceCharge', label: 'Add Service Charge', path: 'addServiceCharge', component: AdminComponent},
  {code: 'pendingRequestsList', label: 'Pending Requests List', path: 'pendingRequestsList', component: AdminComponent},
  {code: 'initiateManualFundTransfer', label: 'Initiate Manual Fund Transfer', path: 'initiateManualFundTransfer', component: AdminComponent, children: [
    {code: 'bulkFundTransfer', label: 'Bulk Fund Transfer', path: 'bulkFundTransfer', component: AdminComponent}
  ]},
  {code: 'initiateSystemFundTransfer', label: 'Initiate System Fund Transfer', path: 'initiateSystemFundTransfer', component: AdminComponent},
  {code: 'emergencyPaymentRequestsList', label: 'Emergency Payment Requests List', path: 'emergencyPaymentRequestsList', component: AdminComponent},
  {code: 'userReportList', label: 'User Report List', path: 'userReportList', component: AdminComponent},
  {code: 'userFeedbackList', label: 'User Feedback List', path: 'userFeedbackList', component: AdminComponent},
  {code: 'invitationWaitList', label: 'Invitation Wait List', path: 'invitationWaitList', component: AdminComponent},
  {code: 'bulkManualFundCheckerList', label: 'Bulk Manual Fund Checker List', path: 'bulkManualFundCheckerList', component: AdminComponent},
  {code: 'createReferralCategory', label: 'Create Referral Category', path: 'createReferralCategory', component: AdminComponent, children: [
    {code: 'createReferralCode', label: 'Create Referral Code', path: 'createReferralCode', component: AdminComponent}
  ]},
  {code: 'sendLaunchNewsLetter', label: 'Send Launch News Letter', path: 'sendLaunchNewsLetter', component: AdminComponent},
  {code: 'requestCashOutEmail', label: 'Request Cash Out Email', path: 'requestCashOutEmail', component: AdminComponent},
  {code: 'getFraudAccountList', label: 'Get Fraud Account List', path: 'getFraudAccountList', component: AdminComponent, children: [
    {code: 'addFraudAccount', label: 'Add Fraud Account', path: 'addFraudAccount', component: AdminComponent},
    {code: 'updateFraudAccount', label: 'Update Fraud Account', path: 'updateFraudAccount', component: AdminComponent}
  ]}
];

// TODO remove undefined role code once it is available in the login API response
// TODO return user name in the login API response
/*
  this constant defines the menu items that have to be shown to different user categories
 */
export const roles = {
  undefined: [{code: 'manualRefund'},
              {code: 'sendMailToMerchant'},
              {code: 'userList', children: ['createRemoveAnInfluencer', 'suspendUser', 'reactivateUser']},
              {code: 'verifiedUsersList'},
              {code: 'systemAccountList', children: ['addAdmin']},
              {code: 'getAgentAdminsAccountId'},
              {code: 'registerSupportExecutive'},
              {code: 'setTemporaryPassword'},
              {code: 'reverseTransactionsList'},
              {code: 'commissionChargeList', children: ['addCommissionCharge']},
              {code: 'addServiceCharge'},
              {code: 'pendingRequestsList'},
              {code: 'initiateManualFundTransfer', children: ['bulkFundTransfer']},
              {code: 'initiateSystemFundTransfer'},
              {code: 'emergencyPaymentRequestsList'},
              {code: 'userReportList'},
              {code: 'userFeedbackList'},
              {code: 'invitationWaitList'},
              {code: 'bulkManualFundCheckerList'},
              {code: 'createReferralCategory', children: ['createReferralCode']},
              {code: 'sendLaunchNewsLetter'},
              {code: 'getFraudAccountList', children: ['addFraudAccount', 'updateFraudAccount']},
              {code: 'agentList', children: ['addAgent', 'addKycAgent', 'updateAgent', 'calculateAgentCommission']},
              {code: 'requestCashOutEmail'}],
  KYC_ADMIN: [],
  SUPER_ADMIN: [],
  FINANCE_ADMIN: [],
  AGENT_ADMIN: [],
  NON_AMITY: [],
  NON_KITE: [],
  OPERATIONS_ADMIN: [],
  SUPPORT_ADMIN: [],
  SUPPORT_EXECUTIVE: [],
  AGENT: [],
  NETWORK_ADMIN: [],
  AMITY: []
};
