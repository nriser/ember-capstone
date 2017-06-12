import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPalette (data) {
      let newPalette = this.get('store').createRecord('palette', data);
      console.log('palette is', newPalette);
      console.log('data is', data);
      newPalette.save();
    },
  },
});
