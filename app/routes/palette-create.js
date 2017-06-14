import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPalette (data) {
      console.log('this in routes/palette-create.js is ', this);
      let newPalette = this.get('store').createRecord('palette', data);
      console.log('newPalette is', newPalette);
      console.log('data is', data);
      newPalette.save()
      .then(() => {
        this.get('flashMessages')
        .success('Palette has been saved');
      })
      .then(() => this.transitionTo('palettes'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Error: Please do not leave any field empty.');
      });
    },
  },
});
