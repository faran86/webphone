import Sidebar from './components/Sidebar.vue'
import ChatPanel from './components/ChatPanel.vue'
import DialPanel from './components/DialPanel.vue'
import WelcomePanel from './components/WelcomePanel.vue'
import Chatbox from './components/Chatbox.vue'
import Dialpad from './components/Dialpad.vue'
import IncomingCall from './components/IncomingCall.vue'

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
		path: '/chat/user/:id',
		components: {
			sidebar: Sidebar,
			panel: ChatPanel,
			widepanel: Chatbox
		}
	},
	{
		path: '/chat/dept/:id',
		components: {
			sidebar: Sidebar,
			panel: ChatPanel,
			widepanel: Chatbox
		}
	},
	{
		path: '/dialer',
		components: {
			sidebar: Sidebar,
			panel: DialPanel,
			widepanel: Dialpad
		}
	},
	{
		path: '/incoming',
		components: {
			sidebar: Sidebar,
			panel: DialPanel,
			widepanel: IncomingCall
		}
	}
];

export default routes;