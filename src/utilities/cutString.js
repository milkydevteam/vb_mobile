const cutString = (
  string: string,
  length: number,
  type: 'default' | 'reverse' = 'default',
  expan = '...',
) => {
  if (!string) {
    return null;
  }
  if (string.length > length) {
    if (type === 'default') {
      return `${string.substr(0, length)}${expan}`;
    }
    return `${expan}${string.substr(string.length - length, length)}`;
  }
  return string;
};
export default cutString;
