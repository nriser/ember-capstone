import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // index method, gets all palettes
    // return this.get('store').findAll('palette');
    let allPalettes = this.get('store').findAll('palette');
    return allPalettes;
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
