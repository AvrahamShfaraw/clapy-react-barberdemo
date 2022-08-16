import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../../_resets.module.css';
import classes from './Rectangle2_Property1Default.module.css';
import { Rectangle2Icon } from './Rectangle2Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 33:518 */
export const Rectangle2_Property1Default: FC<Props> = memo(function Rectangle2_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2}>
        <Rectangle2Icon className={classes.icon} />
      </div>
    </div>
  );
});
