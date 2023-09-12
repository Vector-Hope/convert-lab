const formatTime = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const getType = (variable) => {
  const type = Object.prototype.toString.call(variable).split(' ')[1].split('').slice(0, -1).join('')
  return type
}

module.exports = {
  formatTime,
  getType,
}
