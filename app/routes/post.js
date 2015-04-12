import Ember from "ember";

export default Ember.Route.extend({
 model: function(params) {
   return this.modelFor('posts').findBy('id', params.site_id);
 }
});
