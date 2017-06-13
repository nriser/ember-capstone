import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPalette (data) {
      console.log('this in routes/create.js is ', this);
      let newPalette = this.get('store').createRecord('palette', data);
      console.log('newPalette is', newPalette);
      console.log('data is', data);
      newPalette.save();
    },
  },
});
