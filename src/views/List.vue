<template>
	<h1>List</h1>
	<div class="row">
		<div class="col s6">
			<select ref="select" v-model="filter">
				<option value disabled selected>Choose your option</option>
				<option value="active">Active</option>
				<option value="outdated">Outdated</option>
				<option value="complited">Complited</option>
			</select>
			<label>Status filter</label>
		</div>

		<button
			style="margin-top: 13px"
			class="btn btn-small" 
			v-if="filter" 
			@click="clearFilter"
		>
			Clear filter
		</button>

	</div>

	<hr />

	<table v-if="tasks.length">
		<thead>
			<tr>
				<th>№</th>
				<th>Title</th>
				<th>Date</th>
				<th>Description</th>
				<th>Status</th>
				<th>Open</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(task, index) of displayTasks" :key="task.id">
				<td>{{ index + 1 }}</td>
				<td>{{ task.title }}</td>
				<td>{{ new Date(task.date).toLocaleDateString() }}</td>
				<td class="td-text">
					<div class="text">{{ task.description }}</div>
				</td>
				<td>{{ task.status }}</td>
				<td>
					<router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">Open</router-link>
				</td>
			</tr>
		</tbody>
	</table>
	<h5 v-else>No tasks</h5>
</template>

<script>
export default {
	data: () => ({
		filter: null
	}),
	name: 'list',
	computed: {
		tasks() {
			return this.$store.getters.tasks
		},
		displayTasks() {
			return this.tasks.filter(t => {
				if (!this.filter) {
					return true
				}
				return t.status === this.filter
			})
		}
	},
	mounted() {
		M.FormSelect.init(this.$refs.select);
	},
	methods:{
		clearFilter(){
			this.filter = null
		}
	}
}
</script>

<style lang="scss" scoped>
.td-text {
	max-width: 400px;
}
.text {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>