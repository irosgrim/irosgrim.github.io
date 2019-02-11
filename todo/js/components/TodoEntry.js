export default {
	name: 'note-entry',
	props: {
		entry: String,
		done: Boolean
	},
	data: function() {
		return {
			disable: true,
			editedNote: this.entry
		};
	},
	methods: {
		doneClicked: function() {
			this.$emit('doneentry', this.entry);
		},
		deleteClicked: function() {
			this.$emit('deleteentry', this.entry);
		},
		editClicked: function() {
			this.disable = !this.disable;
		},
		edited: function() {
			this.$emit('editednote', this.editedNote);
		}
	},
	computed: {
		checkIcon: function() {
			return this.done === true ? 'far fa-check-square' : 'far fa-square';
		}
	},
	template: `     
	<div>
	  <div class="todo-container__entry">
	    <div class="entry__btn" v-on:click="deleteClicked">
	      <i class="far fa-trash-alt danger">
	      </i>
	    </div>
	    <div class="entry__text">
	      <input type="text" 
	    		 v-bind:disabled="disable" 
	    		 v-bind:value="this.editedNote" 
	    		 v-bind:class="{ 'done': done }" 
	    		 v-on:keyup.enter="edited">
	      </input>
	    </div>
	    <div class="entry__btn" v-on:click="editClicked">
	      <i class="far fa-edit">
	      </i>
	    </div>
	    <div class="entry__btn" v-on:click="doneClicked">
	      <i v-bind:class="checkIcon">
				</i>
	    </div>
      </div>
	</div>
    `
};
