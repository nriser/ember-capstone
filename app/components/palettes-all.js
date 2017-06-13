import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePalette () {
      this.sendAction('deletePalette', this.get('palette'));
    },
  },
});
