import cn from 'classnames';
import { Person } from '../../types';
import React from 'react';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => {
  return (
    <a
      href="#/people/jan-van-brussel-1714"
      className={cn({ 'has-text-danger': person.sex === 'f' })}
    >
      {person.name}
    </a>
  );
};
