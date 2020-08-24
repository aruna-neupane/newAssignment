import { notification } from 'antd';

export const Notification = () => {
    notification.open({
      message: 'Login Failed',
      description:
        'Username and/or Password invalid',
        placement: 'topRight',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
