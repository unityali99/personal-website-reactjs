const ContactReducer = (state, action) =>
{
    switch (action.type) 
    {
        case 'MESSAGE_SENT':
            return{
                ...state,
                sent: true
            }
        case 'MESSAGE_NOT_SENT':
            return{
                ...state,
                sent: false
            }
        default:
            break;
    }
}

export default ContactReducer;