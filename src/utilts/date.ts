export const toPTBRFormat = (date: Date) => {
  const formatedDate = new Intl.DateTimeFormat('pt-br').format(date)
  return formatedDate
}
