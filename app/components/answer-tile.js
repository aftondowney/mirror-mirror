import Ember from 'ember';

export default Ember.Component.extend({
  //Delete Answer with confirmation
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
