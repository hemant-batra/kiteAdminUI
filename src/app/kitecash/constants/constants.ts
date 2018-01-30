import {environment} from '../../../environments/environment';

export const Constants = {

  Messages: {
    USERNAME_REQUIRED_MESSAGE: 'Please enter username',
    USERNAME_INVALID_PATTERN_MESSAGE: 'Username should be a valid email ID',
    PASSWORD_REQUIRED_MESSAGE: 'Please enter password',
    PASSWORD_INVALID_PATTERN_MESSAGE: 'Password is not as per the policy',
    INTERNAL_SERVER_ERROR: 'Internal server error. Please contact system administrator',
    WELCOME_MESSAGE: 'Welcome {fullName}',
    LOGOUT_MESSAGE: 'You have successfully logged out from the application',
    NO_MENU_FOUND: 'No menu found for this user',
    NO_INTERNET: 'Please check your internet connection',
    EXPIRY_MESSAGE: 'Your session has expired, please login again',
    UNAUTHORIZED_OPERATION: 'You are not authorized to perform this operation',
    OLD_PASSWORD_REQUIRED_MESSAGE: 'Old Password is a required field',
    NEW_PASSWORD_REQUIRED_MESSAGE: 'New Password is a required field',
    CONFIRM_NEW_PASSWORD_REQUIRED_MESSAGE: 'Confirm New Password is a required field',
    NEW_AND_CONFIRM_NEW_PASSWORDS_MISMATCH: 'New Password and Confirm New Password values do not match',
    PASSWORD_CHANGE_SUCCESSFUL: 'Your password has been successfully changed',
    SYSTEM_ACCOUNT_NUMBER_REQUIRED_MESSAGE: 'System Account Number is a required field',
    REFUND_TYPE_REQUIRED_MESSAGE: 'Refund Type is a required field',
    MOBILE_NUMBER_REQUIRED_MESSAGE: 'Mobile Number is a required field',
    MOBILE_NUMBER_PATTERN_MESSAGE: 'Mobile Number should be 10 digits numeric',
    TRANSACTION_ID_REQUIRED_MESSAGE: 'Transaction ID is a required field',
    AMOUNT_REQUIRED_MESSAGE: 'Amount is a required field',
    AMOUNT_NUMERIC_MESSAGE: 'Amount should be numeric'
  },

  TextLabels: {
    ENTER_USERNAME: 'Enter Username',
    ENTER_PASSWORD: 'Enter Password',
    VERSION: 'v1.0.1',
    COPYRIGHT: 'Copyright © 2017 Kite',
    APPLICATION_NAME: 'Kite Tab',
    MERCHANT_NAME: 'Merchant Name',
    MERCHANT_EMAIL_ID: 'Merchant Email ID',
    SYSTEM_ACCOUNT_NUMBER: 'System Account Number',
    REFUND_TYPE: 'Refund Type',
    MOBILE_NUMBER: 'Mobile Number',
    TRANSACTION_ID: 'Transaction ID',
    AMOUNT: 'Amount',
    REMARKS: 'Remarks',
    OLD_PASSWORD: 'Old Password',
    NEW_PASSWORD: 'New Password',
    CONFIRM_NEW_PASSWORD: 'Confirm New Password',
    USER_NAME: 'Login Name',
    FULL_NAME: 'Full Name',
    USER_ROLE: 'User Role',
  },

  ButtonLabels: {
    LOGIN: 'Log In',
    LOGOUT: 'Log Out',
    FORGOT_PASSWORD: 'Forgot Password',
    CHANGE_PASSWORD: 'Change Password',
    MY_PROFILE: 'My Profile',
    SEND: 'Send',
    RESET: 'Reset',
    SUBMIT: 'Submit',
    CHANGE: 'Change'
  },

  DropDownOptions: {
    PLEASE_SELECT: '--- Please Select ---',
    REFUND_TYPE: [
      {value: 'IMPS', label: 'IMPS'},
      {value: 'NEFT', label: 'NEFT'}
    ]
  },

  PageTitles: {
    NULL: '',
    MANUAL_REFUND: 'Manual Refund',
    MAIL_MERCHANT: 'Say Welcome to Merchant!',
    CHANGE_PASSWORD: 'Change Password',
    MY_PROFILE: 'My Profile'
  },

  URL: {
    LOGIN: environment.serverUrl + '/login',
    LOGOUT: environment.serverUrl + '/logout',
    CHANGE_PASSWORD: environment.serverUrl + '/changePassword',
    MANUAL_REFUND: environment.serverUrl + '/initiate/manualrefund'
  },

  Images: {
    kiteBlue: {src: '/assets/images/kite_blue.png', altText: 'Blue Kite'},
    kiteGreen: {src: '/assets/images/kite_green.png', altText: 'Green Kite'},
    kiteOrange: {src: '/assets/images/kite_orange.png', altText: 'Orange Kite'},
    kiteRed: {src: '/assets/images/kite_red.png', altText: 'Red Kite'},
    kiteYellow: {src: '/assets/images/kite_yellow.png', altText: 'Yellow Kite'},
    kiteLogo: {src: '/assets/images/KiteLogo.png', altText: 'Kite Logo'},
    kiteLogoBig: {src: '/assets/images/KiteLogoBig.png', altText: 'Kite'},
    ripple: {src: '/assets/images/Ripple.gif', altText: 'Loading...'},
    preloader_gif: {src: '/assets/images/preloader.gif', altText: 'Loading...'},
    preloader: {src: '/assets/images/preloader.svg', altText: 'Loading...'},
    hamburger: {src: '/assets/images/hamburger.png', altText: 'Hamburger Menu'},
    logout: {src: '/assets/images/logout.png', altText: 'Logout'},
    logout_inverted: {src: '/assets/images/logout_inverted.png', altText: 'Logout'},
    changePassword: {src: '/assets/images/change_password.png', altText: 'Change Password'},
    changePassword_inverted: {src: '/assets/images/change_password_inverted.png', altText: 'Change Password'},
    myProfile: {src: '/assets/images/my_profile.png', altText: 'My Profile'},
    myProfile_inverted: {src: '/assets/images/my_profile_inverted.png', altText: 'My Profile'}
  },

  RegEx: {
    EMAIL_ID: new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    PASSWORD: new RegExp(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,160})$/)
  },
};
