import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').find('palette', params.palette_id);
  },
  actions: {
    editPalette(newPalette) {
      newPalette.save()
      .then(() => {
        this.get('flashMessages')
        .success('Added to My Paletttes');
      })
      .then(() => this.transitionTo('palettes'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Error: Please do not leave any field empty.');
      });
    },
    cancel () {
      history.back();
    }
  }
});
