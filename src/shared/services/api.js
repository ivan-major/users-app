
import { headersWithCredentials } from "@/shared/utils/apiHeaders.js";

import { ofetch } from "ofetch";

export const apiInstance = {
	fetch: ofetch.create({
		baseURL: "https://jsonplaceholder.typicode.com",
		headers: headersWithCredentials,
		credentials: "include",
	}),
}

export const apiService = {
	getUsers() {
		return apiInstance.fetch(`/users`)
	},

	getUserId(id) {
		return apiInstance.fetch(`/users/${id}`)
	},
};
