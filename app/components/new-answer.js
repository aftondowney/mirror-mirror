import Ember from 'ember';

export default Ember.Component.extend({
  // Display form to add new answer
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    // Save a new answer
    saveAnswer1() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
