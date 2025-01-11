import { createRouter, createWebHistory } from 'vue-router'
import UsersPage from "@/views/UsersPage/UsersPage.vue";

const routes = [
	{
		path: '/',
		name: 'home',
		component: UsersPage
	},
	{
		path: '/about',
		name: 'about',
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
