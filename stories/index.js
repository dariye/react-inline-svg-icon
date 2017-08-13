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
    withInfo('without specifying an icon name')
    (() => (
      <Icon title={text('Title', 'I heart you')} color={text('Color', '#E74C3C')} size={number('Size', 25)}  />
    ))
  )
  .add('by name',
    withInfo('pass in the right name prop to render desired icon from the following: add, arrow-down, arrow-left, arrow-right, bell, bookmark, bookmarked, bulb, chat-group, caht, down, clock, close, compass, delete, download, facebook, heart, hearted, location, linkedin, menu, more, paperclip-attachment, paperclip, path, pencil, plus, quote-left, search, send, share, sidebar-close, tag, twitter, upvote, upvoted, user-group, user')
    (() => (
      <Icon name={text('Name', 'add')} title={text('Title', 'I choose an icon :)')}  color={text('Color', '#E74C3C')} size={number('Size', 25)} />
    ))
  )
