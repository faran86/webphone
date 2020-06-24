import ChatPanel from './components/ChatPanel.vue'
import WelcomePanel from './components/WelcomePanel.vue'
import Chatbox from './components/Chatbox.vue'

const routes = [
	{
		path: '/',
		components: {
			chatpanel: ChatPanel,
			welcomepanel: WelcomePanel
		}
	},
	{
		path: '/chat',
		components: {
			chatpanel: ChatPanel,
			chatbox: Chatbox
		}
	}
];

export default routes;