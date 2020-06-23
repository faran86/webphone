<template>
	<div class="sidebar position-relative h-100">
		<vuescroll>
			<div class="logo"><a href="#" class="d-block"><img class="d-block" src="../assets/images/voip-logo.png" alt="VOIP"></a></div>
			<nav class="nav">
				<ul class="list-unstyled text-center px-2 w-100">
					<li class="py-3"><a href="#"><font-awesome-icon :icon="['far', 'comment']"/></a></li>
					<li class="py-3"><a href="#"><font-awesome-icon icon="blender-phone"/></a></li>
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
							<img class="d-block w-100 rounded-circle" src="../assets/images/user-avatar.jpg" alt="image description">
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
	components: {
		vuescroll
	}
}

</script>
