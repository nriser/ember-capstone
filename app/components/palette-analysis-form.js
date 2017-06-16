import Ember from 'ember';

export default Ember.Component.extend({
  imageUrl: null, // reset
  classNames: ['palette-analysis-wrapper'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },
    callColorApi() {
      let imageUrl = this.get('imageUrl');
      this.sendAction('callColorApi', imageUrl);
    },
  },
});
