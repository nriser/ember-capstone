import Ember from 'ember';

export default Ember.Component.extend({
  imageUrl: null, // reset
  classNames: ['palette-analysis-wrapper'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },
    callColorApi() {
      console.log('call impalette image analysis api inside palette-analysis-form.js');
      let imageUrl = this.get('imageUrl');
      this.sendAction('callColorApi', imageUrl);
    },
  },
});
