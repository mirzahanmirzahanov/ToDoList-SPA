<template>
	<h1>List</h1>

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
			<tr v-for="(task, index) of tasks" :key="task.id">
				<td>{{index + 1}}</td>
				<td>{{task.title}}</td>
				<td>{{new Date(task.date).toLocaleDateString()}}</td>
				<td class="td-text">
					<div class="text">
						{{task.description}}
					</div>
				</td>
				<td>{{task.status}}</td>
				<td>
					<router-link 
						tag="button"
						class="btn btn-small" 
						:to="'/task/' + task.id"
					>
						Open
					</router-link>
				</td>
			</tr>
		</tbody>
	</table>
	<h5 v-else>No tasks</h5>
</template>

<script>
export default {
	name: 'list',
	computed: {
		tasks() {
			return this.$store.getters.tasks
		}
	}
}
</script>

<style lang="scss" scoped>
.td-text{
	max-width: 400px;
}
.text{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>