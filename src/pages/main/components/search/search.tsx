import React, { ChangeEvent, Component } from 'react';
import { ISearchState } from '../../../../types/interface/search';
import { getValueLocalStorage, setItemLocalStorage } from '../../../../utils/helpers/search';
import style from './search.module.css';

export class Search extends Component<Readonly<unknown>, ISearchState> {
  myRef: React.RefObject<HTMLInputElement>;

  constructor(props: Readonly<unknown>) {
    super(props);
    this.myRef = React.createRef();
    const valueInput = getValueLocalStorage();
    this.state = {
      valueInput,
    };
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
    return (
      <input type='text' className={style.input} value={valueInput} ref={this.myRef} onChange={this.handleChange} />
    );
  }
}
