import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.site_id);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('posts', this.modelFor('posts'));
  }
});
