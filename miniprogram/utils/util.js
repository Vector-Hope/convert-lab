const formatTime = (time) => {
  const hour = parseInt(time / 3600 + '')
    time %= 3600
    const minute = parseInt(time / 60 + '')
    time = parseInt((time % 60) + '')
    const second = time
    return [hour, minute, second]
      .map((n) => {
        n = n.toString()
        return n[1] ? n : `0${n}`
      })
      .join(':')
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
  // console.log('before format: ', data)
  if (!data) {
    return data;
  }
  const ownKeys = Object.getOwnPropertyNames(data);
  let newData = {};
  for (let key of ownKeys) {
    if (getType(data[key]) === 'Function') {
      newData[key] = 'f( )';
    } else {
      newData[key] = data[key];
    }
  }
  // console.log('before format: ', newData)
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
