import Vue from 'vue'
import Router from 'vue-router'
import ContactList from '@/views/ContactList'
import ContactDetails from '@/views/ContactDetails'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ContactList
        },
        {
            path: '/contact-details:id',
            component: ContactDetails,
            name: 'contactDetails',
            props: true
        }
    ]
})
