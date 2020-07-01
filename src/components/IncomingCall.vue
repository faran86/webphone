<template>
	<div class="panel-wide d-flex flex-column pl-4 h-100 overflow-hidden">
		<div class="chat-info border-bottom pb-3">
			<div class="row align-items-center">
				<div class="col-6">
					<strong class="d-block h2 mb-0">{{callDetail.incomingNumber}}</strong>
				</div>
				<div class="col-6">
					<ul class="list-unstyled mb-0 text-right">
						<li class="d-inline-block px-1"><a href="#" class="ico-chat"><font-awesome-icon icon="volume-up" /></a></li>
						<li class="d-inline-block px-1"><b-button @click="attend" class="ico-chat p-0 bg-success text-white"><font-awesome-icon icon="phone-alt" /></b-button></li>
						<li class="d-inline-block px-1"><b-button @click="decline" class="ico-chat border border-danger p-0 bg-danger text-white"><font-awesome-icon icon="phone-slash" /></b-button></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="dial-pad d-flex py-4">
			<div class="w-100 position-relative">
				<div class="row flex-column">
					<div class="col-6">
						<div class="position-relative w-100">
							<b-alert show variant="dark" class="dial-alert-box position-relative small bg-dark text-white brder-dark border"><span class="logo-icn-wrap position-absolute"><img class="img-fluid" :src="alertBox.icn" alt="logo"></span>Calling Your VoIP Business Number: {{callDetail.userNumber}}</b-alert>
						</div>
					</div>
				</div>
				<div class="dial-incoming-popwrap position-absolute">
					<div class="row justify-content-end">
						<div class="col-6">
							<div class="dp-incoming-box position-relative rounded bg-white d-flex align-items-start py-2 px-3">
								<span class="logo-wrap rounded bg-primary flex-shrink-0 mr-3 mt-1">
									<img class="img-fluid" :src="alertBox.icn" alt="logo">
								</span>
								<div class="descr-wrap position-relative flex-grow-1 d-flex">
									<div class="flex-grow-1">
										<strong class="title d-block font-weight-normal">Incoming Call</strong>
										<strong class="subtitle d-block">{{callDetail.incomingNumber}}</strong>
									</div>
									<div class="btns-wrap d-flex flex-shrink-0">
										<ul class="list-unstyled mb-0 text-right">
											<li class="d-inline-block px-1">
												<b-button @click="attend" class="ico-chat p-0 bg-success text-white">
													<font-awesome-icon icon="phone-alt" />
												</b-button>
											</li>
											<li class="d-inline-block px-1">
												<b-button @click="decline" class="ico-chat p-0 border border-danger bg-danger text-white">
													<font-awesome-icon icon="phone-slash" />
												</b-button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<span class="rounded-circle dial-watermark position-absolute">
					<img class="img-fluid" :src="alertBox.icn" alt="logo">
				</span>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'IncomingCall',
	props: ['incomingNumber'],
	
	data() {
		return {
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
			}
		}
	},

	methods: {
		attend: function(){
			this.$router.push('incall');
		},

		decline: function(){
			this.$router.push('dialer');
		}
	}
}

</script>