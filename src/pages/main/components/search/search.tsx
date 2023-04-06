import { Component } from 'react';
import style from './search.module.css';

export class Search extends Component {
  render() {
    return <input type='text' className={style.input} />;
  }
}
