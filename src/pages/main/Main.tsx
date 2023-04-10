import { ChangeEvent, Component } from 'react';
import { Input } from '../../components/input';
import { Sprite } from '../../components/sprite/sprite';
import { InputClasses } from '../../types/enums/classes';
import { TypesComponents } from '../../types/enums/types-components';
import { IMainProps } from '../../types/interface/props';
import { IMainState } from '../../types/interface/states';
import { setCopyBirds } from '../../utils/helpers/copy-elements';
import { getValueLocalStorage, setItemLocalStorage } from '../../utils/helpers/local-storage-api';
import { searchCards } from '../../utils/helpers/search-components';
import { CardBlock } from './components/card-block';
import styles from './main.module.css';

export class Main extends Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);
    const valueInputStore = getValueLocalStorage();
    const copyContentCard = setCopyBirds(props.contentCard[0]);
    const filterCard = searchCards(copyContentCard, valueInputStore);
    this.state = {
      contentCard: props.contentCard[0],
      filterCard,
      valueSearch: valueInputStore,
    };
  }

  componentWillUnmount() {
    const { valueSearch } = this.state;
    setItemLocalStorage(valueSearch);
  }

  changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    const resultSearch = this.searchContentCard(e.target.value);
    this.setState({ filterCard: resultSearch, valueSearch: e.target.value });
  };

  searchContentCard(stateInput: string) {
    const { contentCard } = this.state;
    const copyContentCard = setCopyBirds(contentCard);
    return searchCards(copyContentCard, stateInput);
  }

  render() {
    const { filterCard, valueSearch } = this.state;
    return (
      <section className={styles.container}>
        <section className={styles['search-block']}>
          <p className={styles['search-block__title']}>Search</p>
          <Input
            onChange={this.changeValueInput}
            value={valueSearch}
            type={TypesComponents.TEXT}
            className={InputClasses.SEARCH}
          />
        </section>
        <CardBlock contentCard={filterCard} />
        <Sprite />
      </section>
    );
  }
}
