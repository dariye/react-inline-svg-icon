import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Icon from '../../lib/components/icon';

describe('Icons', () => {
  it('menu icon exists', () => {
   expect(mount(<Icon name="menu" size={25} />).find('path').length).toBe(1);
  })

  it('close icon exists', () => {
   expect(mount(<Icon name="close" size={25} />).find('path').length).toBe(1);
  })

  it('search icon exists', () => {
    expect(mount(<Icon name="search" size={25} />).find('path').length).toBe(1);
  })

  it('download icon exists', () => {
    expect(mount(<Icon name="download" size={25} />).find('path').length).toBe(1);
  })

  it('yeet icon chould not exist', () => {
    expect(mount(<Icon name="yeet" size={25} />).find('path').length).toBe(0);
  })
});

