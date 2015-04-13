import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
   return this.modelFor('posts').findBy('id', params.site_id);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('posts', this.modelFor('posts'));
  }
});
