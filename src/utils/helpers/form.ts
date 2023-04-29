import { Date } from 'types/type/form';

export const convertDate = (value: string | undefined) => (value ? JSON.stringify(new Date(value)) : '');

export const getYearDayMonth = (dateString: string) => {
  const getDate = new Date(dateString);
  let month: Date = getDate.getMonth();
  let day: Date = getDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${day}.${month}.${getDate.getFullYear()}`;
};
