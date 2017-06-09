import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
// storageFor stores things, specifically, objects and arrays

export default Ember.Service.extend({
  ajax: Ember.inject.service(), // ajax: Ember.inject.service('ajax'),
  credentials: storageFor('auth'), // pass in what we have in this auth file to have it stored in storage, includint token and other things related to authentication. // potato
  isAuthenticated: Ember.computed.bool('credentials.token'), // token that is scored in credientials. Initially, this should be false. but once user signs in, credential will become true.

  signUp (credentials) { // strawberry // 'credentials' here is the ACTUAL data we're receiving from the user. Whatever this returns gets saved into
    return this.get('ajax').post('/sign-up', { // send the credentials data to our API. Post to /sign-up with this user-inputted data.
      // by doing .get('ajax'),
      data: {
        credentials: { // same 'credentials' as the above method. // potato
          email: credentials.email, // strawberry. map the credentials we're getting from the client to our credentials storage
          password: credentials.password, // strawberry
          password_confirmation: credentials.passwordConfirmation, // strawberry
        },
      },
    });
  },

  signIn (credentials) {
    return this.get('ajax').post('/sign-in', { // posts to a different route, /sign-in
      data: { //
        credentials: { // what the API expects. Posting this to our API, expecting it to match with what's already in our API
          email: credentials.email,
          password: credentials.password,
        },
      },
    })
    .then((result) => { // if successfully passes. Save that to credentials. Now you actually set the local storage with user info for this session. Cache it to local storage
      this.get('credentials').set('id', result.user.id); // this.get('credential') refers to storageFor // potato
      this.get('credentials').set('email', result.user.email);
      this.get('credentials').set('token', result.user.token);
    });
  },

  changePassword (passwords) {
    return this.get('ajax').patch(`/change-password/${this.get('credentials.id')}`, { // credentials.id from line 32
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next,
        },
      },
    });
  },

  signOut () {
    return this.get('ajax').del(`/sign-out/${this.get('credentials.id')}`)
    .finally(() => this.get('credentials').reset());
  },
});
