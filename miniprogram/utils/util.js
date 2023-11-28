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

const myJSONStringify = (obj) => {
  try {
    let JSONStr = JSON.stringify(obj, (key, value) => {
        return getType(value) === 'Function' ? 'f ( )' : value;
    })
    return JSONStr;
  } catch (err) {
    let cache = new WeakMap();
    let JSONStr = JSON.stringify(obj, (key, value) => {
      if (getType(value) === 'Function') {
        return 'f ( )';
      }
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          return `[Circular ${cache.get(value)}]`;
        }
        cache.set(value, key || 'root');
      }
      return value;
    });
    cache = null;
    return JSONStr;
  }
}

module.exports = {
  getType,
  formatTime,
  myJSONStringify,
};
