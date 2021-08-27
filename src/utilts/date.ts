export const toPTBRFormat = (date: Date | string) => {
  let toFormat = date
  if (typeof date === 'string') toFormat = new Date(date)
  const formatedDate = new Intl.DateTimeFormat('pt-br').format(toFormat as Date)
  return formatedDate
}
