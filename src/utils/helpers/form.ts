import { DateCalendar } from 'types/type/form';
import { INDEX_ALIGMENT_MONTH, NUMBER_TEN, NUMBER_ZERO } from 'utils/constants/other';

export const convertDate = (value?: string) => (value ? JSON.stringify(new Date(value)) : null);

export const getYearDayMonth = (dateString: string) => {
  const getDate = new Date(dateString);
  let month: DateCalendar = getDate.getMonth() + INDEX_ALIGMENT_MONTH;
  let day: DateCalendar = getDate.getDate();
  if (month < NUMBER_TEN) {
    month = `${NUMBER_ZERO}${month}`;
  }
  if (day < NUMBER_TEN) {
    day = `${NUMBER_ZERO}${day}`;
  }
  return `${day}.${month}.${getDate.getFullYear()}`;
};

export const updateDateBirthday = (date: string) => {
  const convert = convertDate(date);
  if (!convert) {
    throw Error('uncorrect date');
  }
  const parseDate = JSON.parse(convert) as string;
  const changeDate = getYearDayMonth(parseDate);
  return changeDate;
};
