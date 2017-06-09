import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('user');
  },
});


// .get('store').findAll actually does a GET request. https://guides.emberjs.com/v2.13.0/models/finding-records/#toc_retrieving-multiple-records
