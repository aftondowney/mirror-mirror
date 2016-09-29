import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
actions: {
  // display update question form
  updateQuestionForm() {
    this.set('updateQuestionForm', true);
  },
  // save updates to question
  update(question) {
    var params = {
      content: this.get('content'),
      author: this.get('author'),
      notes: this.get('notes'),
    };
    this.set('updateQuestionForm', false);
    this.sendAction('update', question, params);
  }
}
});
