import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  // classNames: ['form-horizontal'],

  init() {
    this._super(...arguments);
    this.set('passwords', {});
  },

  passwords: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('passwords')); // sending submit action up the chain, along with the password informaiton
    },

    reset () {
      this.set('passwords', {});
    },
  },
});
