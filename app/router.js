import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('palettes');
  // this.route('create');
  this.route('palette-create', {path: 'palettes/create'});
  // this.route('edit');
  this.route('palette-edit', {path: 'palettes/:palette_id/edit'});
});

export default Router;
