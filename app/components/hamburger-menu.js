import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button', // won't be rendered as a div
  classNames: ['navbar-toggle', 'collapsed'],
  attributeBindings: [
    'toggle:data-toggle',
    'target:data-target',
    'expanded:aria-expanded',
  ],
  toggle: 'collapse',
  target: '#navigation',
  expanded: false,
});
