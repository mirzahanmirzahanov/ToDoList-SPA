<template>
	<nav class="blue darken-3">
		<div class="nav-wrapper">
			<router-link to="/" class="brand-logo">Tasks</router-link>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li>
					<router-link 
						to="/"
						active-class="active"
					>Create
					</router-link>
				</li>
				<li>
					<router-link 
						to="/list"
						active-class="active"
					>List
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'navbar'
};
</script>

<style lang="scss" scoped>
	nav{
		padding: 0 60px;
	}
</style>
