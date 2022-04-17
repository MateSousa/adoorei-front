import type { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtCookies } from 'cookie-universal-nuxt'

/* eslint-disable import/no-mutable-exports */
let $axios: NuxtAxiosInstance
let $cookies: NuxtCookies

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}


export const initializeCookies = (cookiesInstance: NuxtCookies) => {
  $cookies = cookiesInstance
}

export { $axios, $cookies }