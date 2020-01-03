import moment from 'moment';

export const timeToDateString = (
  number: number = undefined,
  select: 'date' | 'month' | 'year' | 'all' = 'all',
) => {
  const date = new Date();
  if (number) {
    date.setTime(number);
  }
  let dd = date.getDate();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (select === 'date') {
    return dd;
  }
  let mm = date.getMonth() + 1;
  if (mm < 10) {
    mm = `0${mm}`;
  }
  if (select === 'month') {
    return mm;
  }

  const yyyy = date.getFullYear();
  if (select === 'year') {
    return yyyy;
  }

  return `${dd}/${mm}/${yyyy}`;
};

export default number => {
  const date = new Date();
  const date2 = new Date(number);
  const time = date2.toLocaleTimeString();
  const tmpTime = date.getTime();
  const diff = tmpTime - number;
  const numberDate = diff / (86400 * 1000);
  if (numberDate >= 1 && numberDate < 2) {
    return `${time} Hôm qua`;
  }
  if (numberDate >= 2 && numberDate < 4) {
    return `${Math.floor(numberDate)} ngày trước`;
  }
  if (numberDate >= 4) {
    return `Từ ${timeToDateString(number)}`;
  }
  const hours = diff / (3600 * 1000);
  if (hours >= 1) {
    return `${Math.floor(hours)} giờ trước`;
  }
  const min = diff / (60 * 1000);
  if (min >= 1) {
    return `${Math.floor(min)} phút trước`;
  }
  const s = diff / 1000;
  if (s >= 20) {
    return `${Math.floor(s)} giây trước`;
  }
  return 'Vừa đăng';
};

export const getWeek = (nextWeek = 0) => {
  if (nextWeek < 0) {
    return [];
  }
  const weekData = [];
  let dayOfWeek = new Date().getDay() + 1;
  const dayToAdd = 7 * nextWeek;
  if (nextWeek > 0) {
    dayOfWeek = 6;
  }
  for (let i = 2; i < 7; i++) {
    const dif = i - dayOfWeek;
    const tmp = moment()
      .add(dif + dayToAdd, 'days')
      .format('DD/MM/YYYY');
    weekData.push({thu: i, ngay: tmp});
  }
  return weekData;
};

export const convertRangeTime = (time = 8) => `${time}:00-${time + 1}:00`;
