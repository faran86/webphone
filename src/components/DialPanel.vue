<template>
	<div class="panel bg-white rounded p-3 h-100">
		<h2 class="d-flex flex-wrap align-items-center justify-content-between">
			<span class="d-block title">{{panelTitle}}</span>
			<b-dropdown varient="link" no-caret class="ico-filter">
				<template v-slot:button-content>
					<b-icon icon="filter" scale="1.3" />
					<span class="sr-only">Filter</span>
				</template>
				<b-dropdown-item href="#">Action</b-dropdown-item>
				<b-dropdown-item href="#">Another action</b-dropdown-item>
				<b-dropdown-item href="#">Something else here</b-dropdown-item>
			</b-dropdown>
		</h2>
		<b-form class="pt-4 pb-4">
			<b-form-input
				v-model="form.search"
				placeholder="Search here"
			></b-form-input>
		</b-form>
		<div class="list-area">
			<vuescroll :ops="ops">
				<div class="holder">
					<strong class="d-block pb-2 mb-2 border-bottom">Thur 14 May</strong>
					<ul class="phone-list list-unstyled pt-3">
						<li v-for="(call, key) in calls" :key="key" class="py-2">
							<a href="#" class="d-flex justify-content-between shadow p-3 text-dark rounded border border-light">
								<span :status="call.status" class="ico text-white rounded d-flex align-items-center justify-content-center align-self-center">
									<template v-if="call.status === 'missed'">
										<font-awesome-icon icon="phone-slash" scale="1.3" />
									</template>
									<template v-if="call.status === 'received'">
										<b-icon icon="headphones" scale="1.3" />
									</template>
									<template v-if="call.status === 'dialed'">
										<font-awesome-icon icon="phone-alt" scale="1.3" />
									</template>
								</span>
								<span class="info-area px-2">
									<strong class="d-block">{{call.myNumber}}</strong>
									<span class="text-secondary small text-capitalize">{{call.status}} Call: {{call.connectedTo}}</span>
								</span>
								<small class="duration">{{call.duration}}</small>
							</a>
						</li>
					</ul>
				</div>
			</vuescroll>
		</div>
	</div>
</template>

<script>
import vuescroll from 'vuescroll';

export default {
	name: 'ChatPanel',
	data() {
		return {
			panelTitle: "Dial History",
			calls: [
				{
					status: "missed",
					duration: "13:46",
					myNumber: "170358418996",
					connectedTo: "7035541899"
				},
				{
					status: "dialed",
					duration: "03:46",
					myNumber: "170358418996",
					connectedTo: "7035541899"
				},
				{
					status: "received",
					duration: "05:00",
					myNumber: "170358418996",
					connectedTo: "7035541899"
				},
				{
					status: "missed",
					duration: "07:18",
					myNumber: "170358418996",
					connectedTo: "7035541899"
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
	components: {
		vuescroll
	}
}

</script>