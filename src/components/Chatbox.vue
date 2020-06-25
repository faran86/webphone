<template>
	<div class="panel-wide d-flex flex-column pl-4 h-100 overflow-hidden">
		<div class="chat-info border-bottom pb-3">
			<div class="row align-items-center">
				<div class="col-6">
					<div class="d-flex align-items-center">
						<div class="user-avatar rounded-circle overflow-hidden">
							<img class="fit" :src="user.img" :alt="user.userName">
						</div>
						<div class="info-area px-3">
							<h2 class="name d-block mb-1">{{user.userName}}</h2>
							<small class="text-primary">{{user.status}}</small>
						</div>
					</div>
				</div>
				<div class="col-6">
					<ul class="list-unstyled mb-0 text-right">
						<li class="d-inline-block px-1"><a href="#" class="ico-chat"><font-awesome-icon icon="volume-up" /></a></li>
						<li class="d-inline-block px-1"><a href="#" class="ico-chat"><font-awesome-icon icon="user" /></a></li>
						<li class="d-inline-block px-1"><a href="#" class="ico-chat"><font-awesome-icon icon="phone-alt" /></a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="chat-box py-4">
			<vuescroll :ops="ops">
				<div class="pr-4">
					<div class="msg-box d-flex flex-wrap justify-content-end mb-3">
						<div class="d-flex align-items-center mb-3">
							<div class="user-avatar rounded-circle overflow-hidden">
								<img class="fit" :src="user.img" :alt="user.userName">
							</div>
							<div class="info-area px-3">
								<h2 class="name d-block mb-0">{{user.userName}}</h2>
								<small class="timestamp text-secondary">{{user.timestamp}} <b-icon shift-h="8" icon="check2-all" scale="1.4" /></small>
							</div>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">Hello how are you?</span>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">hows every thing going on?</span>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">Have you completed the Design?</span>
						</div>
					</div>
					<div class="msg-box mb-3">
						<div class="d-flex align-items-center mb-3">
							<div class="user-avatar rounded-circle overflow-hidden">
								<img class="fit" :src="connectUser.img" :alt="connectUser.userName">
							</div>
							<div class="info-area px-3">
								<h2 class="name d-block mb-0">{{connectUser.userName}}</h2>
								<small class="timestamp text-secondary">{{connectUser.timestamp}} <b-icon shift-h="8" icon="check2-all" scale="1.4" /></small>
							</div>
						</div>
						<div class="w-100 mb-1">
							<span class="msg d-inline-block bg-white rounded py-2 px-3 mr-5">Yes Sir webphone Design is completed</span>
						</div>
						<div class="w-100 mb-1">
							<span class="msg d-inline-block bg-white rounded py-2 px-3 mr-5">Working on chats, Video Calling , and meeting Pages. Audio Call Pages are completed revamped the whole Layout and Styling following new Theme style.</span>
						</div>
					</div>
					<div class="msg-box d-flex flex-wrap justify-content-end mb-3">
						<div class="d-flex align-items-center mb-3">
							<div class="user-avatar rounded-circle overflow-hidden">
								<img class="fit" :src="user.img" :alt="user.userName">
							</div>
							<div class="info-area px-3">
								<h2 class="name d-block mb-0">{{user.userName}}</h2>
								<small class="timestamp text-secondary">{{user.timestamp}} <b-icon shift-h="8" icon="check2-all" scale="1.4" /></small>
							</div>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">Hello how are you?</span>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">hows every thing going on?</span>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">Have you completed the Design?</span>
						</div>
					</div>
					<div class="msg-box mb-3">
						<div class="d-flex align-items-center mb-3">
							<div class="user-avatar rounded-circle overflow-hidden">
								<img class="fit" :src="connectUser.img" :alt="connectUser.userName">
							</div>
							<div class="info-area px-3">
								<h2 class="name d-block mb-0">{{connectUser.userName}}</h2>
								<small class="timestamp text-secondary">{{connectUser.timestamp}} <b-icon shift-h="8" icon="check2-all" scale="1.4" /></small>
							</div>
						</div>
						<div class="w-100 mb-1">
							<span class="msg d-inline-block bg-white rounded py-2 px-3 mr-5">Yes Sir webphone Design is completed</span>
						</div>
						<div class="w-100 mb-1">
							<span class="msg d-inline-block bg-white rounded py-2 px-3 mr-5">Working on chats, Video Calling , and meeting Pages. Audio Call Pages are completed revamped the whole Layout and Styling following new Theme style.</span>
						</div>
					</div>
					<div class="msg-box d-flex flex-wrap justify-content-end mb-3">
						<div class="d-flex align-items-center mb-3">
							<div class="user-avatar rounded-circle overflow-hidden">
								<img class="fit" :src="user.img" :alt="user.userName">
							</div>
							<div class="info-area px-3">
								<h2 class="name d-block mb-0">{{user.userName}}</h2>
								<small class="timestamp text-secondary">{{user.timestamp}} <b-icon shift-h="8" icon="check2-all" scale="1.4" /></small>
							</div>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">Hello how are you?</span>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">hows every thing going on?</span>
						</div>
						<div class="w-100 text-right mb-1">
							<span class="msg d-inline-block bg-primary text-white rounded py-2 px-3 ml-5">Have you completed the Design?</span>
						</div>
					</div>
					<div class="msg-box mb-3">
						<div class="d-flex align-items-center mb-3">
							<div class="user-avatar rounded-circle overflow-hidden">
								<img class="fit" :src="connectUser.img" :alt="connectUser.userName">
							</div>
							<div class="info-area px-3">
								<h2 class="name d-block mb-0">{{connectUser.userName}}</h2>
								<small class="timestamp text-secondary">{{connectUser.timestamp}} <b-icon shift-h="8" icon="check2-all" scale="1.4" /></small>
							</div>
						</div>
						<div class="w-100 mb-1">
							<span class="msg d-inline-block bg-white rounded py-2 px-3 mr-5">Yes Sir webphone Design is completed</span>
						</div>
						<div class="w-100 mb-1">
							<span class="msg d-inline-block bg-white rounded py-2 px-3 mr-5">Working on chats, Video Calling , and meeting Pages. Audio Call Pages are completed revamped the whole Layout and Styling following new Theme style.</span>
						</div>
					</div>
				</div>
			</vuescroll>
		</div>
		<div class="chat-actions border-top border-secondary pt-3">
			<div class="row">
				<div class="col-12 d-flex">
					<ul class="list-unstyled mb-0 mr-3">
						<li class="d-inline-block px-1"><a href="#" class="ico-chat"><b-icon icon="emoji-smile" /></a></li>
					</ul>
					<b-form>
						<b-form-input
							class="h-100"
							v-model="form.msg"
							placeholder="Write a message..."
						></b-form-input>
					</b-form>
					<ul class="list-unstyled mb-0 ml-3">
						<li class="d-inline-block px-1"><a href="#" class="ico-chat"><font-awesome-icon icon="volume-up" /></a></li>
						<li class="d-inline-block px-1"><a href="#" class="ico-chat"><font-awesome-icon icon="paperclip" /></a></li>
						<li class="d-inline-block px-1"><a href="#" class="ico-chat bg-primary text-white"><b-icon icon="cursor" /></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import vuescroll from 'vuescroll';

export default {
	name: 'Chatbox',
	data() {
		return {
			user: {
				userName: "Faran Ahmad",
				status: "Online",
				img: require('@/assets/images/chat-image.jpg'),
				timestamp: '01:20 PM'
			},
			connectUser: {
				userName: "Client Marsh",
				img: require('@/assets/images/user-image-1.png'),
				timestamp: '01:22 PM'
			},
			form: {
				msg: ""
			},
			ops: {
				vuescroll: {
					wheelScrollDuration: 500,
					detectResize: true
				},
				scrollPanel: {
					initialScrollY: '100%',
					scrollingX: false
				},
				bar: {
					background: '#7367F0'
				}
			}
		}
	},
	components: {
		vuescroll
	}
}

</script>