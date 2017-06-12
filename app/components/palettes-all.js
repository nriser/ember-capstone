import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePalette (palette) {
      this.sendAction('deletePalette', this.get('palette'));
    },
  },
});
