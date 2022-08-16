import { memo, SVGProps } from 'react';

const Rectangle2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 97 93' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.1} d='M0 0H96.1158V92.1776H0V0Z' fill='#C4C4C4' />
  </svg>
);

const Memo = memo(Rectangle2Icon);
export { Memo as Rectangle2Icon };
