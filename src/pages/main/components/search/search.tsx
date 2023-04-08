import { ChangeEvent, PureComponent } from 'react';
import { ISearchProps } from '../../../../types/interface/props';
import { ISearchState } from '../../../../types/interface/states';
import { getValueLocalStorage, setItemLocalStorage } from '../../../../utils/helpers/local-storage-api';
import style from './search.module.css';

export class Search extends PureComponent<ISearchProps, ISearchState> {
  searchCards: (stateInput: string) => void;

  constructor(props: ISearchProps) {
    super(props);
    const valueInputStore = getValueLocalStorage();
    this.state = {
      valueInput: valueInputStore,
    };
    const { valueInput } = this.state;
    this.searchCards = props.func;
    this.searchCards(valueInput);
  }

  componentDidUpdate() {
    const { valueInput } = this.state;
    this.searchCards(valueInput);
  }

  componentWillUnmount() {
    const { valueInput } = this.state;
    setItemLocalStorage(valueInput);
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ valueInput: e.target.value });
  };

  render() {
    const { valueInput } = this.state;
    return <input type='text' className={style.input} value={valueInput} onChange={this.handleChange} />;
  }
}
