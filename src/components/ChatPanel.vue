<template>
	<div class="panel bg-white rounded p-3 h-100 overflow-hidden">
		<h2>{{panelTitle}}</h2>
		<b-form class="pt-4 pb-4">
			<b-form-input
				v-model="form.search"
				placeholder="Search here"
			></b-form-input>
		</b-form>
		<b-tabs>
			<!-- <b-tab v-for="(tab, key) in tabs" :key="key" :title="tab"></b-tab> -->
			<b-tab title="Recent">
				<vuescroll :ops="ops">
					<div class="holder">
						<strong class="d-block pt-3 pb-2 mb-2 border-bottom">
							<a href="#" class="float-right ml-3"><b-icon icon="filter" scale="1.3" /></a>
							Favourites
						</strong>
						<ul class="contact-list list-unstyled pt-3">
							<li v-for="chatUser in favouriteUsers" :key="chatUser.key" class="py-2">
								<a href="/chat/1" class="d-flex align-items-center">
									<span class="avatar d-block rounded-circle status" :status="chatUser.status"><img class="w-100" :src="chatUser.img" alt="image description"></span>
									<span class="info-area px-3">
										<span class="name d-block">{{chatUser.name}}</span>
										<span class="descr d-block">{{chatUser.lastMsg}}</span>
										<span class="count text-center text-white rounded-circle bg-primary overflow-hidden position-absolute" v-if="chatUser.unreadCount !== null">{{chatUser.unreadCount}}</span>
										<span class="date text-right position-absolute" v-if="chatUser.unreadCount === null">{{chatUser.lastSeen}}</span>
									</span>
								</a>
							</li>
							<li v-for="chatDepartment in favouriteDepts" :key="chatDepartment.key" class="py-2">
								<a href="#" class="d-flex align-items-center">
									<span class="avatar d-block rounded-circle"><img class="w-100" :src="chatDepartment.img" alt="image description"></span>
									<span class="info-area px-3">
										<span class="name d-block">{{chatDepartment.name}}</span>
										<span class="count text-center text-white rounded-circle bg-primary overflow-hidden position-absolute" v-if="chatDepartment.unreadCount !== null">{{chatDepartment.unreadCount}}</span>
										<span class="date text-right overflow-hidden position-absolute" v-if="chatDepartment.unreadCount === null">{{chatDepartment.lastSeen}}</span>
									</span>
								</a>
							</li>
						</ul>
						<strong class="d-block pt-3 pb-2 mb-2 border-bottom">Users</strong>
						<ul class="contact-list list-unstyled pt-3">
							<li v-for="chatUser in chatUsers" :key="chatUser.key" class="py-2">
								<a href="#" class="d-flex align-items-center">
									<span class="avatar d-block rounded-circle status" :status="chatUser.status"><img class="w-100" :src="chatUser.img" alt="image description"></span>
									<span class="info-area px-3">
										<span class="name d-block">{{chatUser.name}}</span>
										<span class="descr d-block">{{chatUser.lastMsg}}</span>
										<span class="count text-center text-white rounded-circle bg-primary overflow-hidden position-absolute" v-if="chatUser.unreadCount !== null">{{chatUser.unreadCount}}</span>
										<span class="date text-right position-absolute" v-if="chatUser.unreadCount === null">{{chatUser.lastSeen}}</span>
									</span>
								</a>
							</li>
						</ul>
						<strong class="d-block pt-3 pb-2 mb-2 border-bottom">Channels</strong>
						<ul class="contact-list list-unstyled pt-3">
							<li v-for="chatDepartment in chatDepartments" :key="chatDepartment.key" class="py-2">
								<a href="#" class="d-flex align-items-center">
									<span class="avatar d-block rounded-circle"><img class="w-100" :src="chatDepartment.img" alt="image description"></span>
									<span class="info-area px-3">
										<span class="name d-block">{{chatDepartment.name}}</span>
										<span class="count text-center text-white rounded-circle bg-primary overflow-hidden position-absolute" v-if="chatDepartment.unreadCount !== null">{{chatDepartment.unreadCount}}</span>
										<span class="date text-right overflow-hidden position-absolute" v-if="chatDepartment.unreadCount === null">{{chatDepartment.lastSeen}}</span>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</vuescroll>
			</b-tab>
			<b-tab title="Teams">
				<vuescroll :ops="ops">
					<div class="holder">
						<strong class="d-block pt-3 pb-2 mb-2 border-bottom">Channels</strong>
						<ul class="contact-list list-unstyled pt-3">
							<li v-for="chatDepartment in chatDepartments" :key="chatDepartment.key" class="py-2">
								<a href="#" class="d-flex align-items-center">
									<span class="avatar d-block rounded-circle"><img class="w-100" :src="chatDepartment.img" alt="image description"></span>
									<span class="info-area px-3">
										<span class="name d-block">{{chatDepartment.name}}</span>
										<span class="count text-center text-white rounded-circle bg-primary overflow-hidden position-absolute" v-if="chatDepartment.unreadCount !== null">{{chatDepartment.unreadCount}}</span>
										<span class="date text-right overflow-hidden position-absolute" v-if="chatDepartment.unreadCount === null">{{chatDepartment.lastSeen}}</span>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</vuescroll>
			</b-tab>
			<b-tab title="Users">
				<vuescroll :ops="ops">
					<div class="holder">
						<strong class="d-block pt-3 pb-2 mb-2 border-bottom">Users</strong>
						<ul class="contact-list list-unstyled pt-3">
							<li v-for="chatUser in chatUsers" :key="chatUser.key" class="py-2">
								<a href="#" class="d-flex align-items-center">
									<span class="avatar d-block rounded-circle status" :status="chatUser.status"><img class="w-100" :src="chatUser.img" alt="image description"></span>
									<span class="info-area px-3">
										<span class="name d-block">{{chatUser.name}}</span>
										<span class="descr d-block">{{chatUser.lastMsg}}</span>
										<span class="count text-center text-white rounded-circle bg-primary overflow-hidden position-absolute" v-if="chatUser.unreadCount !== null">{{chatUser.unreadCount}}</span>
										<span class="date text-right overflow-hidden position-absolute" v-if="chatUser.unreadCount === null">{{chatUser.lastSeen}}</span>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</vuescroll>
			</b-tab>
			<b-tab title="Channels">
				<vuescroll :ops="ops">
					<div class="holder">
						<strong class="d-block pt-3 pb-2 mb-2 border-bottom">Channels</strong>
						<ul class="contact-list list-unstyled pt-3">
							<li v-for="chatDepartment in chatDepartments" :key="chatDepartment.key" class="py-2">
								<a href="#" class="d-flex align-items-center">
									<span class="avatar d-block rounded-circle"><img class="w-100" :src="chatDepartment.img" alt="image description"></span>
									<span class="info-area px-3">
										<span class="name d-block">{{chatDepartment.name}}</span>
										<span class="count text-center text-white rounded-circle bg-primary overflow-hidden position-absolute" v-if="chatDepartment.unreadCount !== null">{{chatDepartment.unreadCount}}</span>
										<span class="date overflow-hidden position-absolute" v-if="chatDepartment.unreadCount === null">{{chatDepartment.lastSeen}}</span>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</vuescroll>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import vuescroll from 'vuescroll';

export default {
	name: 'ChatPanel',
	data() {
		return {
			panelTitle: "Chats",
			tabs: ["Recent", "Teams", "Users", "Channels"],
			chatUsers: [
				{
					name: "Client Marsh",
					lastMsg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, nulla.",
					unreadCount: 5,
					status: "away",
					favourite: true,
					img: require('@/assets/images/user-image-1.png'),
					lastSeen: "FRI 20 MAY"
				},
				{
					name: "Solvina James",
					lastMsg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, nulla.",
					unreadCount: 10,
					status: "online",
					favourite: true,
					img: require('@/assets/images/user-image-2.png'),
					lastSeen: null
				},
				{
					name: "Jack Ma",
					lastMsg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, nulla.",
					unreadCount: null,
					status: "busy",
					favourite: false,
					img: require('@/assets/images/user-image-3.png'),
					lastSeen: "FRI 20 MAY"
				},
				{
					name: "Hoodie Bow",
					lastMsg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, nulla.",
					unreadCount: 2,
					status: "busy",
					favourite: false,
					img: require('@/assets/images/user-image-4.png'),
					lastSeen: "FRI 20 MAY"
				}
			],
			chatDepartments: [
				{
					name: "Sales Department",
					unreadCount: 10,
					favourite: true,
					img: require('@/assets/images/sales-icon.png'),
					lastSeen: "FRI 20 MAY"
				},
				{
					name: "Voip Business Portal",
					unreadCount: 99,
					favourite: true,
					img: require('@/assets/images/vb-portal.png'),
					lastSeen: "FRI 20 MAY"
				},
				{
					name: "Management Dept.",
					unreadCount: 50,
					favourite: false,
					img: require('@/assets/images/sales-icon.png'),
					lastSeen: "FRI 20 MAY"
				},
				{
					name: "HR Dept.",
					unreadCount: 28,
					favourite: false,
					img: require('@/assets/images/vb-portal.png'),
					lastSeen: "FRI 20 MAY"
				},
				{
					name: "Frontend Department",
					unreadCount: 28,
					favourite: false,
					img: require('@/assets/images/sales-icon.png'),
					lastSeen: "FRI 20 MAY"
				},
				{
					name: "Backend Department",
					unreadCount: null,
					favourite: false,
					img: require('@/assets/images/vb-portal.png'),
					lastSeen: "FRI 20 MAY"
				}
			],
			form: {
				search: ""
			},
			ops: {
				vuescroll: {
					wheelScrollDuration: 500
				},
				scrollPanel: {
					scrollingX: false
				},
				bar: {
					background: '#7367F0'
				}
			}
		}
	},
	computed: {
		favouriteUsers: function(){
			let favouriteUsers = [];
			this.chatUsers.forEach( function(element) {
				if(element.favourite === true){
					favouriteUsers.push(element)
				}
			})
			return favouriteUsers
		},
		favouriteDepts: function(){
			let favouriteDepts = [];
			this.chatDepartments.forEach( function(element) {
				if(element.favourite === true){
					favouriteDepts.push(element)
				}
			})
			return favouriteDepts
		}
	},
	components: {
		vuescroll
	}
}

</script>