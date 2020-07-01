<template>
	<div class="panel-wide d-flex flex-column pl-4 h-100 overflow-hidden">
		<div class="chat-info border-bottom pb-3">
			<div class="row align-items-center">
				<div class="col-6">
					<b-form>
						<b-form-input
							v-model="form.number"
							placeholder="Enter number..."
							type="tel"
						></b-form-input>
					</b-form>
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
		<div class="dial-pad d-flex align-items-center justify-content-center py-4">
			<div class="dialpad d-flex flex-wrap align-items-center justify-content-between ml-auto mr-auto">
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('1')">1</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('2')">2</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('3')">3</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('4')">4</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('5')">5</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('6')">6</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('7')">7</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('8')">8</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('9')">9</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('*')">*</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('0')">0</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('#')">#</button>
				<button class="btn-key d-block rounded-circle border-0 mb-3 bg-success text-white" @click="dial('dial')"><font-awesome-icon icon="phone-alt" /></button>
				<button v-if="incall" class="btn-key d-block rounded-circle border-0 mb-3 bg-warning text-white" @click="attend"><font-awesome-icon icon="undo-alt" /></button>
				<button class="btn-key d-block rounded-circle border-0 mb-3" @click="dial('remove')"><font-awesome-icon icon="backspace" /></button>
			</div>
		</div>
	</div>
</template>

<script>
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
				number: ""
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
			},
			incall: this.$route.query.incall
		}
	},
	methods: {
		dial(x){
			if(x === 'remove'){
				let str = this.form.number;
				str = str.substring(str.length - 1 , str.lenght - 1);
				this.form.number = str;
			} else if(x === 'dial'){
				console.log('Dial is pressed');
			} else{
				this.form.number += x;
			}
		},

		attend: function(){
			this.$router.push('incall');
		}
	}
}

</script>