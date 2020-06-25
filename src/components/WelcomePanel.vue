<template>
	<div class="panel-wide pl-4 d-flex align-items-center justify-content-center h-100">
		<div class="welcome-box ml-auto mr-auto text-center w-100">
			<h1 class="mb-5">Welcome, {{user.userName}}</h1>
			<div class="position-relative d-inline-block">
				<div class="user-avatar rounded-circle overflow-hidden ml-auto mr-auto mb-5">
					<img class="fit" :src="user.img" :alt="user.userName">
					<a href="#" class="ico-edit position-absolute display-4"><b-icon icon="pencil" class="bg-dark rounded-circle p-2" variant="light"></b-icon></a>
				</div>
			</div>
			<b-form>
				<b-input-group class="mb-5">
					<b-form-input
						type="text"
						placeholder="Tell your friends what you are up to..."
						v-model="user.mindFocus"
						:disabled="form.disabled"
						></b-form-input>
					<b-input-group-append>
						<b-button variant="primary" @click="form.disabled = !form.disabled"><b-icon-pencil-square /></b-button>
					</b-input-group-append>
				</b-input-group>
				<b-button type="submit" variant="primary" size="lg" pill>Start Conversation</b-button>
			</b-form>
			<div class="text-secondary py-5">
				<p>Search for someone to start chatting with or go to contacts to see who is available.</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'WelcomePanel',
	data() {
		return {
			user: {
				userName: "Arif Gull",
				img: require('@/assets/images/chat-image.jpg'),
				mindFocus: ""
			},
			form: {
				disabled: true
			}
		}
	}
}

</script>