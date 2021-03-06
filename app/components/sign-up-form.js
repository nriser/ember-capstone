import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  // classNames: ['form-horizontal'],

  credentials: {}, // fill in this object later with user inputted credential info in sign-up-form.hbs

  init() {
    this._super(...arguments);
    this.set('credentials', {});
  },

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
