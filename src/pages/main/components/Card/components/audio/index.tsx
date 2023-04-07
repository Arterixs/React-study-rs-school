import { Button } from '../../../../../../components/button';
import { Svg } from '../../../../../../components/svg';
import { ButtonClasses, SVGClasses } from '../../../../../../types/enums/classes';
import { SvgId } from '../../../../../../types/enums/svg';
import { Control } from '../control';

export const Audio = () => (
  <>
    <Button onClick={() => console.log('func')} className={ButtonClasses.AUDIO}>
      <Svg id={SvgId.PLAY} className={SVGClasses.AUDIO} />
    </Button>
    <Control />
  </>
);
