const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

const getType = (variable) => {
  const type = Object.prototype.toString.call(variable).split(' ')[1].split('').slice(0, -1).join('');
  return type;
};

const formatJson = (data) => {
  const ownKeys = Object.getOwnPropertyNames(data);
  let newData = {};
  for (let key of ownKeys) {
    newData[key] = data[key];
  }
  try {
    JSON.stringify(newData);
    return JSON.parse(JSON.stringify(newData));
  } catch (err) {
    const cache = new Map();
    const JSONStr = JSON.stringify(newData, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          return;
        }
        cache.set(value, value);
      }
      return value;
    });
    cache.clear();
    return JSON.parse(JSONStr);
  }
};

module.exports = {
  getType,
  formatTime,
  formatJson,
};
