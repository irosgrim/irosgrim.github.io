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
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25">
						<path
							fill="#000"
							fill-rule="nonzero"
							d="M27.75 4.5H9.825A1.857 1.857 0 0 1 7.95 2.625c0-1.05.825-1.875 1.875-1.875H27.75c1.05 0 1.875.825 1.875 1.875S28.8 4.5 27.75 4.5zm1.875 7.875c0-1.05-.825-1.875-1.875-1.875H9.825c-1.05 0-1.875.825-1.875 1.875s.825 1.875 1.875 1.875H27.75c1.05 0 1.875-.825 1.875-1.875zm0 9.75c0-1.05-.825-1.875-1.875-1.875H9.825c-1.05 0-1.875.825-1.875 1.875S8.775 24 9.825 24H27.75c1.05 0 1.875-.825 1.875-1.875zM4.5 2.625c0-1.275-.975-2.25-2.25-2.25C1.05.375 0 1.35 0 2.625c0 1.2.975 2.25 2.25 2.25S4.5 3.9 4.5 2.625zm0 9.75c0-1.275-.975-2.25-2.25-2.25-1.2 0-2.25.975-2.25 2.25 0 1.2.975 2.25 2.25 2.25s2.25-.975 2.25-2.25zm0 9.75c0-1.275-.975-2.25-2.25-2.25-1.2 0-2.25.975-2.25 2.25 0 1.2.975 2.25 2.25 2.25s2.25-.975 2.25-2.25z"
						/>
					</svg>
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
					<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29">
						<g
							fill="none"
							fill-rule="nonzero"
							stroke="#000"
							stroke-linecap="round"
							stroke-width="4"
						>
							<path d="M2 14.5h25M14.5 2v25" />
						</g>
					</svg>
				</div>
			</div>
    `
};
