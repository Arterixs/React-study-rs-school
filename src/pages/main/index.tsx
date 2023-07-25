import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Input } from 'components/input';
import { Sprite } from 'components/sprite/sprite';
import { InputClasses } from 'types/enums/classes';
import { InputTypes } from 'types/enums/types-components';
import { IMainProps } from 'types/interface/props';
import { IMainState } from 'types/interface/states';
import { setCopyBirds } from 'utils/helpers/copy-elements';
import { searchContentCard } from 'utils/helpers/main';
import { getValueLocalStorage, setItemLocalStorage } from 'utils/helpers/local-storage-api';
import { searchCards } from 'utils/helpers/search-components';
import { CardBlock } from './components/card-block';
import styles from './main.module.css';

export const Main = ({ contentCard }: IMainProps) => {
  const [state, setState] = useState<IMainState>({
    contentCard: contentCard[0],
    filterCard: searchCards(setCopyBirds(contentCard[0]), getValueLocalStorage()),
    valueSearch: getValueLocalStorage(),
  });
  const changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    const resultSearch = searchContentCard(state.contentCard, e.target.value);
    setState({ ...state, filterCard: resultSearch, valueSearch: e.target.value });
  };

  const inputValue = useRef(state.valueSearch);

  useEffect(() => () => setItemLocalStorage(inputValue.current), []);

  useEffect(() => {
    inputValue.current = state.valueSearch;
  }, [state]);

  return (
    <section className={styles.container}>
      <section className={styles['search-block']}>
        <p className={styles['search-block__title']}>Search</p>
        <Input
          onChange={changeValueInput}
          value={state.valueSearch}
          type={InputTypes.TEXT}
          className={InputClasses.SEARCH}
        />
      </section>
      <CardBlock contentCard={state.filterCard} />
      <Sprite />
    </section>
  );
};
