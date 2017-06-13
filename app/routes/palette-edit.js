import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').find('palette', params.palette_id);
  },
  actions: {
    editPalette(newPalette) {
      console.log('edited palette in edit.js is', newPalette);
      newPalette.save();
    }
  }
});
