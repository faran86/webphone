<template>
	<div class="sidebar position-relative h-100">
		<div class="logo position-absolute w-100 text-center py-3"><a href="./" class="d-inline-block"><img width="51" :src="brand.brandLogo" :alt="brand.brandName"></a></div>
		<vuescroll :ops="ops">
			<nav class="nav">
				<ul class="list-unstyled text-center px-2 w-100">
					<li class="py-3"><a href="./chat"><font-awesome-icon :icon="['far', 'comment']"/></a></li>
					<li class="py-3"><a href="#"><b-icon icon="grid3x3-gap-fill"/></a></li>
					<li class="py-3"><a href="#"><font-awesome-icon icon="cog"/></a></li>
					<li class="py-3"><a href="#"><font-awesome-icon icon="wave-square"/></a></li>
				</ul>
			</nav>
		</vuescroll>
		<nav class="nav place-bottom position-absolute w-100">
			<ul class="list-unstyled text-center px-2 w-100">
				<li class="py-1"><a href="#"><font-awesome-icon :icon="['far', 'moon']" /></a></li>
				<li class="pt-1">
					<b-dropdown varient="link" no-caret class="user-thumbnail">
						<template v-slot:button-content>
							<img class="fit rounded-circle" :src="user.img" :alt="user.userName">
							<span class="sr-only">User Menu</span>
						</template>
						<b-dropdown-item href="#">Action</b-dropdown-item>
						<b-dropdown-item href="#">Another action</b-dropdown-item>
						<b-dropdown-item href="#">Something else here</b-dropdown-item>
					</b-dropdown>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import vuescroll from 'vuescroll';

export default {
	name: 'Sidebar',
	data() {
		return {
			brand: {
				brandLogo: require('@/assets/images/voip-logo-blue.png'),
				brandName: 'VOIP'
			},
			user: {
				userName: "Arif Gull",
				img: require('@/assets/images/chat-image.jpg')
			},
			ops: {
				scrollPanel: {
					scrollingX: false
				}
			}
		}
	},
	components: {
		vuescroll
	}
}

</script>
