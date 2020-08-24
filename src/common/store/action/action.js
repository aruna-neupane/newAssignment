import React from 'react';
import { FormattedMessage } from 'react-intl';
import { createBrowserHistory } from 'history';
import * as v from 'voca';
import { push, go } from 'connected-react-router';
import { submit, reset, change, clearFields, clearSubmitErrors } from 'redux-form';
import { AtiMessage } from 'ati-react-web';
import { Notification } from './../../component/notification';
import { NotificationError } from './../../component/notificationError';
import LanguageProvider from './../../../common/utils/languageprovider/index';
import { DEFAULT_LOCALE } from './../../../common/utils/languageprovider/constants';
import menu from '../../appMenu.properties.js';
import { SET_USER, SELECT_MENU } from './../../layout/store/layout-action-type';
import { TOTAL_ROW_TABLE } from '../action/action-type';
import { MESSAGE, SUCCESS } from './../../utils/app-message-constants';
import { message } from 'antd';

const baseUrl = process.env.PUBLIC_URL;

export const navigate = (key, additionalLink = '', query = null) => {
    return (dispatch) => {
        const history = createBrowserHistory();
        if (menu[key]) {
            if (history.location.pathname !== menu[key].link || (!v.isEmpty(additionalLink) || query !== null)) {
                if (!v.isEmpty(additionalLink)) {
                    dispatch(push(`${baseUrl}${menu[key].link}/${additionalLink}`));
                } else {
                    dispatch(push(`${baseUrl}${menu[key].link}`));
                }
            } else {
                dispatch(go(0));
            }
        }
    };
};

export const actionButtonSubmit = (formId) => {
    return (dispatch) => {
        dispatch(submit(formId));
    };
};
