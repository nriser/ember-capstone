import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // index method, gets all palettes
    return this.get('store').findAll('palette');
  },
});
