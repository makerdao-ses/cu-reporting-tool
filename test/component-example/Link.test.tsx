import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../../src/component-example/Link';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );

  let tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  if (tree) {
    // manually trigger the callback
    renderer.act(() => {
      tree.props.onMouseEnter();
    });
    // re-rendering
    tree = component.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
      tree?.props.onMouseLeave();
    });
  }

  // re-rendering
  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});