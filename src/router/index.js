import { createRouter, createWebHistory } from 'vue-router'
import UsersPage from "@/views/UsersPage/UsersPage.vue"
import UserPage from "@/views/UserCardPage/UserPage.vue"
import Error from "@/views/Error/Error.vue"

const routes = [
	{
		path: '/',
		name: 'home',
		component: UsersPage
	},
	{
		path: '/:id',
		name: 'user',
		component: UserPage
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/error',
	},
	{
		path: '/error', // Сторінка помилки
		name: 'Error',
		component: Error,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
