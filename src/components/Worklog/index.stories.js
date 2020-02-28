import React from 'react';
import { storiesOf } from '@storybook/react';

import WorkLog from './index';
import WorklogTab from './WorklogTab/index';
import WorkDifficulties from './WorkDifficulties/index';
import Requirements from './Requirements/index';
import Card from './Card/index';

import dataWorklog from '../../data/worklog';
import dataDifficulties from '../../data/difficulties';
import dataRequirements from '../../data/difficulties';



storiesOf('WorkLog', module)
  // .add('WorkLog UI representation', () => (
  //   <WorkLog/>
  // ))
  .add('WorkLogTabs UI representation', () => (
      <WorklogTab data={dataWorklog.ru.data}/>
  ))
  .add('Requirements UI representation', () => (
      <Requirements data={dataRequirements.ru.data}/>
  ))
  .add('Card UI representation', () => {
    const {icon, title, description} = dataDifficulties.ru.data[1];
    return (
        <Card
            src={icon}
            title={title}
            p={description}
        />
    )
  })
  .add('WorkDifficulties (Cards) UI representation', () => (
      <WorkDifficulties data={dataDifficulties.ru.data}/>
  ));

