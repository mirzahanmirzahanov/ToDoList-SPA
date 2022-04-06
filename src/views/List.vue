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
				<td>{{task.date}}</td>
				<td>
					<div>
						{{task.description}}
					</div>
				</td>
				<td>{{task.status}}</td>
				<td>
					<router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">Open</router-link>
				</td>
			</tr>
		</tbody>
	</table>
	<p v-else>No tasks</p>
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

<style>
</style>