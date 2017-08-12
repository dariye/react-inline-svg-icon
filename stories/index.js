import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Icon } from 'react-inline-svg-icon';

const stories = storiesOf('Icons', module);

stories.addDecorator(withKnobs);

stories
  .add('default',
    withInfo('without any props')
    (() => (
      <Icon color={text('Color', '#E74C3C')} size={number('Size', 25)} title={text('Title', 'I heart you')} />
    ))
  )
  .add('add',
    withInfo('without any props')
    (() => (
      <Icon />
    ))
  )
