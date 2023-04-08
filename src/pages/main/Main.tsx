import { Component } from 'react';
import { Sprite } from '../../components/sprite/sprite';
import { IBirdsCard } from '../../types/interface/card';
import { IMainProps } from '../../types/interface/props';
import { IMainState } from '../../types/interface/states';
import { setCopyBirds } from '../../utils/helpers/copy-elements';
import { searchCards } from '../../utils/helpers/search-components';
import { CardBlock } from './components/card-block';
import { Search } from './components/search/search';
import styles from './main.module.css';

export class Main extends Component<IMainProps, IMainState> {
  private searchContentCard: (stateInput: string) => void;

  constructor(props: IMainProps) {
    super(props);
    this.state = {
      contentCard: props.contentCard[0],
      filterCard: props.contentCard[0],
    };

    const { contentCard } = this.state;
    const copyContentCard = setCopyBirds(contentCard);

    this.searchContentCard = (stateInput: string) => {
      const resultSearch = searchCards(copyContentCard, stateInput);
      this.updateSearch(resultSearch);
    };
  }

  updateSearch(result: IBirdsCard[]) {
    this.setState({ filterCard: result });
  }

  render() {
    const { filterCard } = this.state;
    return (
      <section className={styles.container}>
        <section className={styles['search-block']}>
          <p className={styles['search-block__title']}>Search</p>
          <Search func={this.searchContentCard} />
        </section>
        <CardBlock contentCard={filterCard} />
        <Sprite />
      </section>
    );
  }
}
