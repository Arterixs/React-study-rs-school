import { Button } from 'components/button';
import { Svg } from 'components/svg';
import { Component } from 'react';
import { ButtonClasses, SVGClasses } from 'types/enums/classes';
import { SvgId } from 'types/enums/svg';
import { IAudioState } from 'types/interface/states';
import { Control } from '../control';

export class Audio extends Component<Readonly<unknown>, IAudioState> {
  constructor(props: Readonly<unknown>) {
    super(props);
    this.state = {
      stateBtn: false,
    };
  }

  handleClick = () => {
    const { stateBtn } = this.state;
    this.setState({ stateBtn: !stateBtn });
  };

  render() {
    const { stateBtn } = this.state;
    return (
      <>
        <Button onClick={this.handleClick} className={ButtonClasses.AUDIO}>
          <Svg id={stateBtn ? SvgId.PAUSE : SvgId.PLAY} className={SVGClasses.AUDIO} />
        </Button>
        <Control {...{ stateBtn }} />
      </>
    );
  }
}
