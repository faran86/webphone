<template>
	<div id="app">
		<div class="container-fluid h-100">
			<div class="row h-100">
				<router-view name="sidebar" />
				<div class="content-area d-flex h-100 p-4">
					<router-view name="panel" />
					<router-view name="widepanel" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'App'
}

</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito:wght@400;600&display=swap');
	@import "./assets/scss/custom.scss";
</style>
