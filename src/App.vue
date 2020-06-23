<template>
	<div id="app">
		<div class="container-fluid h-100">
			<div class="row h-100">
				<sidebar />
				<div class="content-area h-100 p-4">
					<chat-panel />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import ChatPanel from './components/ChatPanel.vue';

export default {
	name: 'App',
	data() {
		return{
			show: true
		}
	},
	components: {
		Sidebar,
		ChatPanel
	}
}

</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito:wght@400;600&display=swap');
	@import "./assets/scss/custom.scss";
</style>
