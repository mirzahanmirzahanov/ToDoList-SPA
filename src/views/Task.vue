<template>
	<div class="row">
		<div v-if="task" class="col s6 offset-s3">
			<h2>{{task.title}}</h2>
			<form @submit.prevent="taskUpdate">

				<div class="chips" ref="chips"></div>
				<div class="input-field">
					<textarea
						style="min-height: 100px;"
						v-model="description"
						id="description"
						class="materialize-textarea"
						data-length="2048"
					></textarea>
					<label for="description">Description</label>
					<span
						class="character-counter"
						style="float: right; font-size: 12px;"
					>{{ description.length }}/2048</span>
				</div>
				<input type="text" class="datepicker" ref="datepicker" />
				<button class="btn" type="submit" style="margin-right: 10px;">Update</button>
				<button class="btn blue" type="button">Complite task</button>
			</form>
		</div>
		<h1 v-else>Task not found</h1>
	</div>
</template>

<script>
export default {
	name: 'task',
	computed: {
		task() {
			return this.$store.getters.taskById(+this.$route.params.id)
		}
	},
	data: () => ({
		description: '',
		chips: null,
		date: null
	}),
	mounted() {
		this.description = this.task.description
		this.chips = M.Chips.init(this.$refs.chips, {
			placeholder: 'Task tag',
			data: this.task.tags
		})
		this.date = M.Datepicker.init(this.$refs.datepicker, {
			format: 'dd.mm.yyyy',
			defaultDate: new Date(this.task.date),
			setDefaultDate: true
		});
		setTimeout(() => {
			M.updateTextFields()
		})
	},
	methods: {
		taskUpdate() {
			
			this.$store.dispatch('updateTask',{
				id: this.task.id,
				description: this.description,
				date: this.date.date
			})
			this.$router.push('/list')
		}
	},
	destroyed() {
		if (this.date && this.date.destroy) {
			this.date.destroy()
		}
		if (this.chips && this.chips.destroy) {
			this.chips.destroy()
		}
	}
}
</script>

<style>
</style>