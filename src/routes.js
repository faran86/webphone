import Sidebar from './components/Sidebar.vue'
import ChatPanel from './components/ChatPanel.vue'
import WelcomePanel from './components/WelcomePanel.vue'
import Chatbox from './components/Chatbox.vue'

const routes = [
	{
		path: '/chat',
		components: {
			sidebar: Sidebar,
			panel: ChatPanel,
			widepanel: WelcomePanel
		}
	},
	{
		path: '/chat/:id',
		components: {
			sidebar: Sidebar,
			panel: ChatPanel,
			widepanel: Chatbox
		}
	}
];

export default routes;