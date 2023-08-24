import { Card } from '../../common';
import {
  formatCreationDate,
  getAuthorsNames,
  getCourseDuration,
} from '../../helpers';

import css from './CourceCard.module.css';

interface Action {
  label: string;
  onClick: () => void;
}

interface CourceCardProps {
  actions: Action[];
  authorsMap: {
    [id: string]: Author;
  };
  title: string;
  description: string;
  metadata: {
    authors: string[];
    duration: number;
    creationDate: string;
  };
}

export const CourceCard: React.FunctionComponent<CourceCardProps> = ({
  actions,
  authorsMap,
  description,
  metadata,
  title,
}) => (
  <Card title={title}>
    <div className={css.content}>
      <p className={css.description}>{description}</p>
      <section className={css.metadata}>
        <ul>
          <li>
            <strong>Authors: </strong>
            {getAuthorsNames(metadata.authors)}
          </li>
          <li>
            <strong>Duration: </strong>
            {getCourseDuration(metadata.duration)}
          </li>
          <li>
            <strong>Created: </strong>
            {formatCreationDate(metadata.creationDate)}
          </li>
        </ul>
      </section>
      <section className={css.actionGroup}>
        {actions.map(({ label, onClick }) => (
          <button className={css.actionBtn} onClick={onClick}>
            {label}
          </button>
        ))}
      </section>
    </div>
  </Card>
);
