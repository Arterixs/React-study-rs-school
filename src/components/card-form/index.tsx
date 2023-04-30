import { IReadyObjectField } from 'types/interface/form';
import { getYearDayMonth } from 'utils/helpers/form';

export const CardForm = ({ data }: { data: IReadyObjectField }) => {
  const { birthday, firstName, lastName, country, gender, agree, image } = data;
  const parseDate = JSON.parse(birthday) as string;
  const date = getYearDayMonth(parseDate);
  return (
    <article>
      <img src={URL.createObjectURL(image)} alt='image_user' />
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div>
        <p>Birthday is {date}</p>
      </div>
      <div>
        <p>Country is {country}</p>
        <p>Gender is {gender}</p>
      </div>
      <p>{agree}</p>
    </article>
  );
};
