import React from 'react';
import { notification } from 'antd';

export const NotificationError = (placement) => {
    notification.open({
      message: 'Error',
      description:
        'Something went wrong.',
      placement,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
