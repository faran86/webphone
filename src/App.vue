<template>
	<div id="app">
		<div class="container-fluid h-100">
			<div class="row h-100">
				<sidebar />
				<div class="content-area d-flex h-100 p-4">
					<router-view name="chatpanel" />
					<router-view name="welcomepanel" />
					<router-view name="chatbox" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
	name: 'App',
	data() {
		return{

		}
	},
	components: {
		Sidebar
	}
}

</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito:wght@400;600&display=swap');
	@import "./assets/scss/custom.scss";
</style>
