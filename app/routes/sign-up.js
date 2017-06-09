import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials) // signUp here the signUp method in service/auth.js. We are calling the ajax method here, ping the api.
      .then(() => this.get('auth').signIn(credentials)) // sign in after sign up!
      .then(() => this.transitionTo('application')) // switch the page to application page, which includes sign out. Application page also takes in my-application component, which includes change pw and other stuff.
      .then(() => {
        this.get('flashMessages')
        .success('Successfully signed-up! You have also been signed-in.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
