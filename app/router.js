import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('posts', { path: '/' }, function() {
	  this.resource('post', { path: '/:site_id' });
	});
});
