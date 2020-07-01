<template>
	<div class="panel-wide d-flex flex-column pl-4 h-100 overflow-hidden">
		<div class="chat-info border-bottom pb-3">
			<div class="row align-items-center">
				<div class="col-6">
					<strong class="d-block h2 mb-0">{{callDetail.incomingNumber}}</strong>
					<strong class="font-weight-normal d-block call-duration">00:44</strong>
				</div>
				<div class="col-6">
					<ul class="list-unstyled mb-0 text-right">
						<li class="d-inline-block px-1"><a href="#" class="ico-chat bg-danger text-white"><font-awesome-icon icon="phone-slash" /></a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="dial-pad d-flex align-items-center py-4">
			<div class="w-100">
				<ul class="mx-auto list-unstyled d-flex flex-wrap text-center w-100 incall-pad justify-content-between">
					<li class="mx-3 mb-4">
						<button :state="state.mute" @click="state.mute = !state.mute" class="rounded-circle border-0  mb-2 d-flex align-items-center justify-content-center">
							<font-awesome-icon icon="volume-mute" />
						</button>
						<span class="d-block text-capitalize">mute</span>
					</li>
					<li class="mx-3 mb-4">
						<button @click="toDialer" class="rounded-circle border-0 mb-2 d-flex align-items-center justify-content-center">
							<b-icon icon="grid3x3-gap-fill"/>
						</button>
						<span class="d-block text-capitalize">keyboard</span>
					</li>
					<li class="mx-3 mb-4">
						<button :state="state.speaker" @click="state.speaker = !state.speaker" class="rounded-circle border-0 mb-2 d-flex align-items-center justify-content-center">
							<font-awesome-icon icon="volume-up" />
						</button>
						<span class="d-block text-capitalize">speaker</span>
					</li>
					<li class="mx-3 mb-4">
						<button class="rounded-circle border-0 mb-2 d-flex align-items-center justify-content-center">
							<font-awesome-icon icon="random" />
						</button>
						<span class="d-block text-capitalize">transfer</span>
					</li>
					<li class="mx-3 mb-4">
						<button :state="state.pause" @click="state.pause = !state.pause" class="rounded-circle border-0 mb-2 d-flex align-items-center justify-content-center">
							<font-awesome-icon icon="pause" />
						</button>
						<span class="d-block text-capitalize">hold</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InCall',
	data() {
		return {
			state: {
				mute: false,
				speaker: false,
				pause: false
			},
			callDetail: {
				userNumber: "170358418996",
				incomingNumber: "07397909344"
			},
			alertBox: {
				icn: require('@/assets/images/voip-logo.png'),
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
		}
	},

	methods: {
		toDialer: function(){
			this.$router.push({path: 'dialer', query: {incall: true}})
		}
	}

}

</script>