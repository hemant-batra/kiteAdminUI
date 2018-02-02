import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ConstantsService {

  private AdminComponent = {
      PageTitle: {},
      TextLabel: {},
      ButtonLabel: {},
      Message: {
        WELCOME_MESSAGE(fullName: string): string {
          return ConstantsService.parseMessageParams(
            'Welcome {fullName}',
            [{paramName: 'fullName', paramValue: fullName}]
          );
        },
      },
      DropDownOption: {},
      URL: {},
      Image: {},
      RegularExpression: {}
    };

  private LoginComponent = {
      PageTitle: {},
      TextLabel: {
        ENTER_USERNAME: 'Enter Username',
        ENTER_PASSWORD: 'Enter Password'
      },
      ButtonLabel: {
        LOGIN: 'Log In',
        FORGOT_PASSWORD: 'Forgot Password'
      },
      Message: {
        NO_MENU_FOUND: 'No menu found for this user',
        USERNAME_REQUIRED_MESSAGE: 'Please enter username',
        USERNAME_INVALID_PATTERN_MESSAGE: 'Username should be a valid email ID',
        PASSWORD_REQUIRED_MESSAGE: 'Please enter password',
        FORGOT_PASSWORD_EMAIL_SENT: 'An email has been sent to your registered email ID with a link to change your password'
      },
      DropDownOption: {},
      URL: {
        LOGIN: environment.serverUrl + '/login'
      },
      Image: {},
      RegularExpression: {
        EMAIL_ID: new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
      },
    };

  private ForgotPasswordComponent = {
      PageTitle: {},
      TextLabel: {},
      ButtonLabel: {
        CONFIRM: 'Confirm',
        BACK: 'Back'
      },
      Message: {
        CONFIRM_FORGOT_PASSWORD_MESSAGE: 'Your password will be reset and an email containing the new password will be sent to your registered email ID'
      },
      DropDownOption: {},
      URL: {},
      Image: {},
      RegularExpression: {}
    };

  private MyProfileComponent = {
      PageTitle: {
        MY_PROFILE: 'My Profile'
      },
      TextLabel: {
        USER_NAME: 'Login Name',
        FULL_NAME: 'Full Name',
        USER_ROLE: 'User Role',
        MOBILE_NUMBER: 'Mobile Number'
      },
      ButtonLabel: {},
      Message: {},
      DropDownOption: {},
      URL: {},
      Image: {},
      RegularExpression: {}
    };

  private ChangePasswordComponent = {
      PageTitle: {
        CHANGE_PASSWORD: 'Change Password'
      },
      TextLabel: {
        OLD_PASSWORD: 'Old Password',
        NEW_PASSWORD: 'New Password',
        CONFIRM_NEW_PASSWORD: 'Confirm New Password',
      },
      ButtonLabel: {
        CHANGE: 'Change',
        RESET: 'Reset'
      },
      Message: {
        OLD_PASSWORD_REQUIRED_MESSAGE: 'Old Password is a required field',
        NEW_PASSWORD_REQUIRED_MESSAGE: 'New Password is a required field',
        CONFIRM_NEW_PASSWORD_REQUIRED_MESSAGE: 'Confirm New Password is a required field',
        PASSWORD_INVALID_PATTERN_MESSAGE: 'Password is not as per the policy',
        NEW_AND_CONFIRM_NEW_PASSWORDS_MISMATCH: 'New Password and Confirm New Password values do not match',
        PASSWORD_CHANGE_SUCCESSFUL: 'Your password has been successfully changed'
      },
      DropDownOption: {},
      URL: {
        CHANGE_PASSWORD: environment.serverUrl + '/changePassword'
      },
      Image: {},
      RegularExpression: {
        PASSWORD: new RegExp(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,160})$/)
      }
    };

  private MessageComponent = {
      PageTitle: {},
      TextLabel: {},
      ButtonLabel: {
        LOGIN: 'Log In'
      },
      Message: {
        LOGOUT_MESSAGE: 'You have successfully logged out from the application',
        EXPIRY_MESSAGE: 'Your session has expired, please login again',
        UNAUTHORIZED_OPERATION: 'You are not authorized to perform this operation'
      },
      DropDownOption: {},
      URL: {},
      Image: {},
      RegularExpression: {}
    };

  private BodyComponent = {
      PageTitle: {},
      TextLabel: {},
      ButtonLabel: {},
      Message: {},
      DropDownOption: {},
      URL: {},
      Image: {},
      RegularExpression: {}
    };

  private FooterComponent = {
      PageTitle: {},
      TextLabel: {
        VERSION: 'v1.0.1',
        COPYRIGHT: 'Copyright © 2017 Kite'
      },
      ButtonLabel: {},
      Message: {},
      DropDownOption: {},
      URL: {},
      Image: {},
      RegularExpression: {}
    };

  private HeaderComponent = {
      PageTitle: {},
      TextLabel: {
        APPLICATION_NAME: 'Kite Tab'
      },
      ButtonLabel: {},
      Message: {},
      DropDownOption: {},
      URL: {},
      Image: {
        Source: {
          MY_PROFILE: '/assets/images/my_profile.png',
          MY_PROFILE_INVERTED: '/assets/images/my_profile_inverted.png',
          CHANGE_PASSWORD: '/assets/images/change_password.png',
          CHANGE_PASSWORD_INVERTED: '/assets/images/change_password_inverted.png',
          LOGOUT: '/assets/images/logout.png',
          LOGOUT_INVERTED: '/assets/images/logout_inverted.png',
          KITE_LOGO_BIG: '/assets/images/KiteLogoBig.png'
        },
        AlternateText: {
          MY_PROFILE: 'My Profile',
          MY_PROFILE_INVERTED: 'My Profile',
          CHANGE_PASSWORD: 'Change Password',
          CHANGE_PASSWORD_INVERTED: 'Change Password',
          LOGOUT: 'Logout',
          LOGOUT_INVERTED: 'Logout',
          KITE_LOGO_BIG: 'Kite'
        }
      },
      RegularExpression: {}
    };

  private TitleComponent = {
      PageTitle: {},
      TextLabel: {},
      ButtonLabel: {},
      Message: {},
      DropDownOption: {},
      URL: {},
      Image: {
        Source: {
          PRE_LOADER: '/assets/images/preLoader.svg',
        },
        AlternateText: {
          PRE_LOADER: 'Loading...',
        }
      },
      RegularExpression: {}
    };

  private Miscellaneous = {
      PageTitle: {
        NULL: ''
      },
      TextLabel: {},
      ButtonLabel: {},
      Message: {
        NO_INTERNET: 'Please check your internet connection',
        INTERNAL_SERVER_ERROR: 'Internal server error. Please contact system administrator'
      },
      DropDownOption: {
        PLEASE_SELECT: '--- Please Select ---'
      },
      URL: {
        LOGOUT: environment.serverUrl + '/logout'
      },
      Image: {
        Source: {
          KITE_ICON: '/assets/images/KiteLogo.png',
          KITE_GREEN: '/assets/images/kite_green.png',
          KITE_ORANGE: '/assets/images/kite_orange.png',
          KITE_BLUE: '/assets/images/kite_blue.png',
          KITE_YELLOW: '/assets/images/kite_yellow.png',
          KITE_RED: '/assets/images/kite_red.png'
        },
        AlternateText: {
          KITE_ICON: 'Kite',
          KITE_GREEN: 'Green Kite',
          KITE_ORANGE: 'Orange Kite',
          KITE_BLUE: 'Blue Kite',
          KITE_YELLOW: 'Yellow Kite',
          KITE_RED: 'Red Kite'
        }
      },
      RegularExpression: {}
    };

  private MailMerchantComponent = {
      PageTitle: {
        MAIL_MERCHANT: 'Say Welcome to Merchant!'
      },
      TextLabel: {
        MERCHANT_NAME: 'Merchant Name',
        MERCHANT_EMAIL_ID: 'Merchant Email ID'
      },
      ButtonLabel: {
        SEND: 'Send',
        RESET: 'Reset'
      },
      Message: {},
      DropDownOption: {},
      URL: {},
      Image: {},
      RegularExpression: {}
    };

  private ManualRefundComponent = {
      PageTitle: {
        MANUAL_REFUND: 'Manual Refund'
      },
      TextLabel: {
        SYSTEM_ACCOUNT_NUMBER: 'System Account Number',
        REFUND_TYPE: 'Refund Type',
        MOBILE_NUMBER: 'Mobile Number',
        TRANSACTION_ID: 'Transaction ID',
        AMOUNT: 'Amount',
        REMARKS: 'Remarks'
      },
      ButtonLabel: {
        SUBMIT: 'Submit',
        RESET: 'Reset'
      },
      Message: {
        SYSTEM_ACCOUNT_NUMBER_REQUIRED_MESSAGE: 'System Account Number is a required field',
        REFUND_TYPE_REQUIRED_MESSAGE: 'Refund Type is a required field',
        MOBILE_NUMBER_REQUIRED_MESSAGE: 'Mobile Number is a required field',
        MOBILE_NUMBER_PATTERN_MESSAGE: 'Mobile Number should be 10 digits numeric',
        TRANSACTION_ID_REQUIRED_MESSAGE: 'Transaction ID is a required field',
        AMOUNT_REQUIRED_MESSAGE: 'Amount is a required field',
        AMOUNT_NUMERIC_MESSAGE: 'Amount should be numeric'
      },
      DropDownOption: {
        REFUND_TYPE: [
          {value: 'IMPS', label: 'IMPS'},
          {value: 'NEFT', label: 'NEFT'}
        ]
      },
      URL: {
        MANUAL_REFUND: environment.serverUrl + '/initiate/manualrefund'
      },
      Image: {},
      RegularExpression: {
        MOBILE_NUMBER: new RegExp(/^[0-9]{10, 10}$/),
        AMOUNT: new RegExp(/^[1-9]\.d*(.\.d+)?$/)
      }
    };

  private static parseMessageParams(message: string, params: {paramName: string; paramValue: string}[]): string {
      for (const param of params) {
        message = message.replace('{' + param.paramName + '}', param.paramValue);
      }
      return message;
    }

  public getAdminConstants() {
      return this.AdminComponent;
    }

  public getLoginConstants() {
    return this.LoginComponent;
  }

  public getForgotPasswordConstants() {
    return this.ForgotPasswordComponent;
  }

  public getMyProfileConstants() {
    return this.MyProfileComponent;
  }

  public getChangePasswordConstants() {
    return this.ChangePasswordComponent;
  }

  public getMessageConstants() {
    return this.MessageComponent;
  }

  public getBodyConstants() {
    return this.BodyComponent;
  }

  public getFooterConstants() {
    return this.FooterComponent;
  }

  public getHeaderConstants() {
    return this.HeaderComponent;
  }

  public getTitleConstants() {
    return this.TitleComponent;
  }

  public getMiscellaneousConstants() {
    return this.Miscellaneous;
  }

  public getMailMerchantConstants() {
    return this.MailMerchantComponent;
  }

  public getManualRefundConstants() {
    return this.ManualRefundComponent;
  }
}
