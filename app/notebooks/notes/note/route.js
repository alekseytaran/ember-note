import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecocrd('note', params.note_id);
  },

  actions: {
    close: function () {
      this.transitionTo('notebooks.notes');
    }
  }
});
