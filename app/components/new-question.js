import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // display add new question form
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    // save a new question
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
