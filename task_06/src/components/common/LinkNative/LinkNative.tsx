import React, { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import s from './LinkNative.module.scss';

type DefaultAnchorPropsType = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type PropsType = DefaultAnchorPropsType;

export const LinkNative: FC<PropsType> = ({
  className,
  children,
  ...restProps
}) => {
  const finalClassName = `${s.link} ${className ? className : ''}`;

  return (
    <a className={finalClassName} {...restProps}>
      {children}
    </a>
  );
};
