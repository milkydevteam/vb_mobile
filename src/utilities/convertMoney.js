export const convertMoney = (tmp = 0, prevMoney = '') => {
  const tmpMoney = Number.parseInt(tmp, 10);
  let money = tmpMoney;
  if (typeof tmpMoney === 'number') {
    money = tmpMoney.toString();
  }
  if (money.length <= 3) {
    return `${money}${prevMoney}`;
  }
  const firstMoney = money.substr(0, money.length - 3);
  const lastMoney = money.substr(money.length - 3, money.length) + prevMoney;
  return convertMoney(firstMoney, '.' + lastMoney);
};
