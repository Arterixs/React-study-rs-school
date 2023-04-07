import { Button } from '../../../../../../components/button';
import { ButtonClasses } from '../../../../../../types/enums/button';

export const Audio = () => (
  <>
    <Button onClick={() => console.log('func')} className={ButtonClasses.AUDIO}>
      <p>2</p>
    </Button>
    <div>
      <input type='text' />
      <div>
        <p>0:00</p>
        <p>0:00</p>
      </div>
    </div>
  </>
);
