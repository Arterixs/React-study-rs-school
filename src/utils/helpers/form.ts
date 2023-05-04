import { DateCalendar } from 'types/type/form';
import { INDEX_ALIGMENT_MONTH, NUMBER_TEN, NUMBER_ZERO } from 'utils/constants/other';

export const convertDate = (value: string | undefined) => (value ? JSON.stringify(new Date(value)) : null);

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

export const checkedFileImage = (value: null | FileList | undefined) => (value ? value[0] : null);
