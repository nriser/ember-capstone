import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // index method, gets all palettes
    console.log('get all palettes', this.get('store').findAll('palette'));
    return this.get('store').findAll('palette');
  },
  actions: {
    deletePalette (palette) {
      palette.destroyRecord()
      .then(() => {
        this.get('flashMessages')
        .success('Palette successfully deleted.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('Error: Please try again.');
      });
    },
  },
});
