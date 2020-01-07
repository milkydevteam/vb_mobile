const status = ['Approve', 'Pending'];
const labels = [
  'Beneficiary List',
  'In house transfer',
  'Pending Task',
  'Exchange Rate',
];
export const randomActivity = () => {
  const timestamp = new Date().getTime();
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      status: status[Math.floor(Math.random() * status.length)],
      label: labels[Math.floor(Math.random() * labels.length)],
      idCard: timestamp + i,
    });
  }
  return data;
};

// total: Number,
// numberOfAccounts: Number,
// listAccount: Array<{
//   id: String,
//   accountName: String,
//   balance: Number,
//   type: String,
// }>,
export const randomDataAccount = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    const listAccounts = [];
    const numberOfAccounts = Math.floor(Math.random() * 10);
    let total = 0;
    for (let j = 0; j < numberOfAccounts; j++) {
      const timestamp = new Date().getTime();
      const balance = timestamp / 100000;
      listAccounts.push({
        id: '112233445',
        accountName: 'vuchien' + j,
        balance,
        type: j % 2 ? 'VND' : 'USD',
      });
      total += balance;
    }
    data.push({
      total,
      numberOfAccounts,
      listAccounts,
    });
  }
  return data;
};
