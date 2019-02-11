export default {
	name: 'todo-controls',
	data: function() {
		return {
			value: '',
			show: true
		};
	},
	methods: {
		submitNote: function(value) {
			this.$emit('addnote', this.value);
			this.value = '';
		},
		showOrHide: function() {
			this.show = !this.show;
			this.$emit('showhide', this.show);
		}
	},
	template: `
    <div class="controls">
				<div class="controls__btn" v-on:click="showOrHide">
				<i class="fas fa-list-ul"></i>
				</div>
				<input
					type="text"
					name="todoInpt"
					id="todoInpt"
					required
                    class="controls__input"
                    v-model="value"
                    v-on:keyup.enter="submitNote(this.value)"
				/>
				<div class="controls__btn" v-on:click="submitNote(this.value)">
				<i class="fas fa-plus"></i>
				</div>
			</div>
    `
};
