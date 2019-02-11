import controls from './components/TodoControls.js';
import entry from './components/TodoEntry.js';

new Vue({
	el: '#app',
	data: {
		todolist: [
			{
				entry: 'Hello world',
				done: false
			},
			{
				entry: 'Learn more vue js',
				done: false
			},
			{
				entry: 'Work on motorcycle',
				done: true
			},
			{
				entry: 'Become rich',
				done: false
			}
		],
		todoContainer: document.getElementById('todoContainer')
	},
	methods: {
		addNote: function(e) {
			this.todolist.push({ entry: e, done: false });
		},
		done: function(index) {
			this.todolist[index].done = !this.todolist[index].done;
		},
		deleteNote: function(index) {
			this.todolist.splice(index, 1);
		},
		editNote: function(index, val) {
			this.todolist[index].entry = '123';
			console.log(this.todolist[index].entry);
		},
		showHideTodos: function(e) {
			if (e === true) {
				todoContainer.style = 'opacity: 1';
			} else {
				todoContainer.style = 'opacity: 0';
			}
		}
	},
	components: {
		'controls-component': controls,
		'entry-component': entry
	}
});

const todoInpt = document.getElementById('todoInpt');
const inptLabel = document.getElementById('input-label');

todoInpt.addEventListener('focus', function() {
	inptLabel.style = 'top: 20px; left: -50px; font-size: 0.9rem';
});

todoInpt.addEventListener('focusout', function() {
	if (todoInpt.value === '') {
		inptLabel.style = 'top: 60px';
	}
});
