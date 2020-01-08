import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from 'react-native-i18n';
import en from './en';
// import fr from "./fr";
import vi from './vi';

import {register, format} from 'timeago.js';
import {vi as timeagoVi} from 'timeago.js/lib/lang';
register('vi', timeagoVi);

I18n.fallbacks = true;

I18n.translations = {
  en,
  // fr,
  vi,
};

export const withLocale = Component => {
  class WraperComponent extends React.Component {
    componentDidMount() {
      this.getLang();
    }

    getLang = async () => {
      let lang = await AsyncStorage.getItem('lang');
      if (!lang) {
        lang = 'en';
      }
      I18n.defaultLocale = lang;
      I18n.locale = lang;
    };
    render() {
      return <Component {...this.props} />;
    }
  }
  return WraperComponent;
};

export const __ = t => {
  const l = I18n.t(t);
  if (!l) {
    return t;
  }
  return l;
};

export const langService = {
  getCurrentLocale: () => {
    const currentLang: String = I18n.currentLocale();
    return currentLang;
  },
  getLocales: () => {
    const locales = [
      {name: 'en', code: 'en-US', title: 'English'},
      // { name: "fr", code: "fr-FR", title: "French" },
      {name: 'vi', code: 'vi-VN', title: 'Tiếng Việt'},
    ];
    return locales;
  },
  checkDuplicate: locale => {
    const languages = langService.getLocales();
    const language = languages.find(l => {
      return l.name === locale || l.code === locale;
    });
    return language;
  },
  setLocale: locale => {
    const languages = langService.getLocales();
    const language = languages.find(l => {
      return l.name === locale || l.code === locale;
    });
    if (!language) {
      return;
    }

    const lang = language.name;
    AsyncStorage.setItem('lang', lang);
    I18n.defaultLocale = lang;
    I18n.locale = lang;
    return locale;
  },
};

export const timeago = t => {
  return format(t, I18n.currentLocale());
};
