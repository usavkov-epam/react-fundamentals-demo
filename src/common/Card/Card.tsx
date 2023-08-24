import classNames from 'classnames/bind';
import { HTMLAttributes, ReactNode } from 'react';

import css from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

const cx = classNames.bind(css);

export const Card: React.FunctionComponent<CardProps> = ({
  className,
  title,
  description,
  header: headerProp,
  footer,
  children,
}) => {
  const header = headerProp || <h3 className={css.cardHeader}>{title}</h3>;
  const content = children || <p>{description}</p>;

  return (
    <article className={cx(css.wrapper, className)}>
      {header}
      {content}
      {footer}
    </article>
  );
};
