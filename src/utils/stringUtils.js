import moment from 'moment-jalaali'

export const parseQueryString = (str) => {
  var objURL = {}

  var objURL = {}

  str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function($0, $1, $2, $3) {
    objURL[$1] = $3
  })
  return objURL
}

export const numberWithCommas = (x) => {
  if (!!x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return x
}

export const stringToBase64 = (str) => {
  return btoa(str)
}

export const ticksToDate = (ticks) => {
  if (!!ticks) return new Date(ticks)
  return new Date()
}

export const getDateJalali = (date, format = 'jYYYY/jM/jD HH:mm') => {
  const d = moment(date)

  if (isNaN(d.format('jM'))) return ''
  return d.format(format)
}

export const getYearJalali = (date) => {
  const d = moment(date)
  if (isNaN(d.format('jM'))) return ''
  return d.jYear()
}

export const getMonthJalali = (date) => {
  const d = moment(date)
  if (isNaN(d.format('jM'))) return ''
  return d.jMonth() + 1
}

export const getDayJalali = (date) => {
  const d = moment(date)
  if (isNaN(d.format('jM'))) return ''
  return d.jDate()
}

export const formatNumber = (num, size) => {
  var s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

export default parseQueryString
