import Api from "./api";

const ContactService = {
    index: () => Api.get('/contacts', {
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    create: async (params) => await Api.post('/contacts',params,{
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    update: async (id,params) => await Api.put(`/contacts/${id}`,params,{
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    get: async (name) => await Api.get(`/contacts/${name}`,{
        headers: {'x-access-token': localStorage.getItem('token')}
    }),
    delete: async (id) => await Api.delete(`/contacts/${id}`,{
        headers: {'x-access-token': localStorage.getItem('token')}
    })
}

export default ContactService