import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

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
