"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin_component_1 = require("../components/admin/admin.component");
var manual_refund_component_1 = require("../components/admin/manual-refund/manual-refund.component");
var mail_merchant_component_1 = require("../components/admin/mail-merchant/mail-merchant.component");
/*
  this constant contains the display name of the menu item, its url path
  relative to the admin welcome page, the component that is invoked
  when the menu item is selected and the child (sub) menus
 */
exports.paths = [
    { code: 'home', label: '', path: '', component: admin_component_1.AdminComponent },
    { code: 'manualRefund', label: 'Manual Refund', path: 'manualRefund', component: manual_refund_component_1.ManualRefundComponent },
    { code: 'sendMailToMerchant', label: 'Send Mail to Merchant', path: 'sendMailToMerchant', component: mail_merchant_component_1.MailMerchantComponent },
    { code: 'agentList', label: 'Agent List', path: 'agentList', component: admin_component_1.AdminComponent, children: [
            { code: 'addAgent', label: 'Add Agent', path: 'addAgent', component: admin_component_1.AdminComponent },
            { code: 'addKycAgent', label: 'Add KYC Agent', path: 'addKycAgent', component: admin_component_1.AdminComponent },
            { code: 'updateAgent', label: 'Update Agent', path: 'updateAgent', component: admin_component_1.AdminComponent },
            { code: 'calculateAgentCommission', label: 'Calculate Agent Commission', path: 'calculateAgentCommission', component: admin_component_1.AdminComponent }
        ] },
    { code: 'userList', label: 'User List', path: 'userList', component: admin_component_1.AdminComponent, children: [
            { code: 'createRemoveAnInfluencer', label: 'Create/Remove an Influencer', path: 'createRemoveAnInfluencer', component: admin_component_1.AdminComponent },
            { code: 'suspendUser', label: 'Suspend User', path: 'suspendUser', component: admin_component_1.AdminComponent },
            { code: 'reactivateUser', label: 'Reactivate User', path: 'reactivateUser', component: admin_component_1.AdminComponent }
        ] },
    { code: 'verifiedUsersList', label: 'Verified Users List', path: 'verifiedUsersList', component: admin_component_1.AdminComponent },
    { code: 'systemAccountList', label: 'System Account List', path: 'systemAccountList', component: admin_component_1.AdminComponent, children: [
            { code: 'addAdmin', label: 'Add New Admin', path: 'addAdmin', component: admin_component_1.AdminComponent }
        ] },
    { code: 'getAgentAdminsAccountId', label: 'Get Agent Admins Account Id', path: 'getAgentAdminsAccountId', component: admin_component_1.AdminComponent },
    { code: 'registerSupportExecutive', label: 'Register Support Executive', path: 'registerSupportExecutive', component: admin_component_1.AdminComponent },
    { code: 'setTemporaryPassword', label: 'Set Temporary Password', path: 'setTemporaryPassword', component: admin_component_1.AdminComponent },
    { code: 'reverseTransactionsList', label: 'Reverse Transactions List', path: 'reverseTransactionsList', component: admin_component_1.AdminComponent },
    { code: 'commissionChargeList', label: 'Commission Charge List', path: 'commissionChargeList', component: admin_component_1.AdminComponent, children: [
            { code: 'addCommissionCharge', label: 'Add Commission Charge', path: 'addCommissionCharge', component: admin_component_1.AdminComponent }
        ] },
    { code: 'addServiceCharge', label: 'Add Service Charge', path: 'addServiceCharge', component: admin_component_1.AdminComponent },
    { code: 'pendingRequestsList', label: 'Pending Requests List', path: 'pendingRequestsList', component: admin_component_1.AdminComponent },
    { code: 'initiateManualFundTransfer', label: 'Initiate Manual Fund Transfer', path: 'initiateManualFundTransfer', component: admin_component_1.AdminComponent, children: [
            { code: 'bulkFundTransfer', label: 'Bulk Fund Transfer', path: 'bulkFundTransfer', component: admin_component_1.AdminComponent }
        ] },
    { code: 'initiateSystemFundTransfer', label: 'Initiate System Fund Transfer', path: 'initiateSystemFundTransfer', component: admin_component_1.AdminComponent },
    { code: 'emergencyPaymentRequestsList', label: 'Emergency Payment Requests List', path: 'emergencyPaymentRequestsList', component: admin_component_1.AdminComponent },
    { code: 'userReportList', label: 'User Report List', path: 'userReportList', component: admin_component_1.AdminComponent },
    { code: 'userFeedbackList', label: 'User Feedback List', path: 'userFeedbackList', component: admin_component_1.AdminComponent },
    { code: 'invitationWaitList', label: 'Invitation Wait List', path: 'invitationWaitList', component: admin_component_1.AdminComponent },
    { code: 'bulkManualFundCheckerList', label: 'Bulk Manual Fund Checker List', path: 'bulkManualFundCheckerList', component: admin_component_1.AdminComponent },
    { code: 'createReferralCategory', label: 'Create Referral Category', path: 'createReferralCategory', component: admin_component_1.AdminComponent, children: [
            { code: 'createReferralCode', label: 'Create Referral Code', path: 'createReferralCode', component: admin_component_1.AdminComponent }
        ] },
    { code: 'sendLaunchNewsLetter', label: 'Send Launch News Letter', path: 'sendLaunchNewsLetter', component: admin_component_1.AdminComponent },
    { code: 'requestCashOutEmail', label: 'Request Cash Out Email', path: 'requestCashOutEmail', component: admin_component_1.AdminComponent },
    { code: 'getFraudAccountList', label: 'Get Fraud Account List', path: 'getFraudAccountList', component: admin_component_1.AdminComponent, children: [
            { code: 'addFraudAccount', label: 'Add Fraud Account', path: 'addFraudAccount', component: admin_component_1.AdminComponent },
            { code: 'updateFraudAccount', label: 'Update Fraud Account', path: 'updateFraudAccount', component: admin_component_1.AdminComponent }
        ] }
];
// TODO remove undefined role code once it is available in the login API response
// TODO return user's full name in the login API response
/*
  this constant defines the menu items that have to be shown to different user categories
 */
exports.roles = {
    undefined: [{ code: 'manualRefund' },
        { code: 'sendMailToMerchant' },
        { code: 'userList', children: ['createRemoveAnInfluencer', 'suspendUser', 'reactivateUser'] },
        { code: 'verifiedUsersList' },
        { code: 'systemAccountList', children: ['addAdmin'] },
        { code: 'getAgentAdminsAccountId' },
        { code: 'registerSupportExecutive' },
        { code: 'setTemporaryPassword' },
        { code: 'reverseTransactionsList' },
        { code: 'commissionChargeList', children: ['addCommissionCharge'] },
        { code: 'addServiceCharge' },
        { code: 'pendingRequestsList' },
        { code: 'initiateManualFundTransfer', children: ['bulkFundTransfer'] },
        { code: 'initiateSystemFundTransfer' },
        { code: 'emergencyPaymentRequestsList' },
        { code: 'userReportList' },
        { code: 'userFeedbackList' },
        { code: 'invitationWaitList' },
        { code: 'bulkManualFundCheckerList' },
        { code: 'createReferralCategory', children: ['createReferralCode'] },
        { code: 'sendLaunchNewsLetter' },
        { code: 'getFraudAccountList', children: ['addFraudAccount', 'updateFraudAccount'] },
        { code: 'agentList', children: ['addAgent', 'addKycAgent', 'updateAgent', 'calculateAgentCommission'] },
        { code: 'requestCashOutEmail' }],
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
