import { memo } from "react";
import type { FC } from "react";

import resets from "../../_resets.module.css";
import { Rectangle2_Property1Default } from "./Rectangle2_Property1Default/Rectangle2_Property1Default";
import classes from "./unnamed.module.css";

interface Props {
  className?: string;
}
/* @figmaId 33:543 */
export const Unnamed: FC<Props> = memo(function Unnamed(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.rectangle10}></div>
      <div className={classes.frame35}>
        <div className={classes.group51}>
          <div className={classes.newbarber1}></div>
          <div className={classes.frame2}>
            <div className={classes.unnamed}>הזמן תור </div>
          </div>
        </div>
        <div className={classes.group50}>
          <div className={classes.unnamed2}>קצת עלינו</div>
          <div className={classes.barberShop}></div>
          <Rectangle2_Property1Default className={classes.rectangle2} />
          <div className={classes.unnamed3}>המוצרים שלנו</div>
          <div className={classes.cart}></div>
          <Rectangle2_Property1Default className={classes.rectangle3} />
          <div className={classes.unnamed4}>איפה אנחנו</div>
          <div className={classes.placeholder}></div>
          <Rectangle2_Property1Default className={classes.rectangle4} />
          <div className={classes.unnamed5}>אינסטרגם</div>
          <div className={classes.instagram4}></div>
          <Rectangle2_Property1Default className={classes.rectangle5} />
          <div className={classes.unnamed6}>יוסף</div>
          <div className={classes.whatsapp}></div>
          <Rectangle2_Property1Default className={classes.rectangle6} />
          <div className={classes.unnamed7}>מתן</div>
          <div className={classes.whatsapp2}></div>
          <Rectangle2_Property1Default className={classes.rectangle7} />
        </div>
      </div>
    </div>
  );
});
