import React, { useState, useRef, useContext, useEffect, useReducer } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './Contact.scss';
import { AiOutlineMail, } from 'react-icons/ai/index';
import { HiOutlineMailOpen } from 'react-icons/hi/index';
import ContactReducer from '../../reducers/Contact.Reducer';
import validateEmail from '../../utils/ValidateEmail';
import 'react-bootstrap/dist/react-bootstrap'

const Contact = () => 
{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [state, dispatch] = useReducer(ContactReducer,{sent: false});
    const inputName = useRef(null);
    const thankDiv = useRef(null);

    const onNameChange = (e) =>
    {
        setName(e.target.value);
    };

    const onPhoneChange = (e) =>
    {
        setPhone(e.target.value);
    };

    const onMessageChange = (e) =>
    {
        setMessage(e.target.value);
    };

    const onEmailChange = (e) =>
    {
        setEmail(e.target.value);
    };

    const showMessage = () =>
    {
        thankDiv.current.style.display = 'block';
    }

    const hideMessage = () =>
    {
        setTimeout(() => {
            thankDiv.current.style.display = 'none';
        }, 5000);
    }

    const handleAdd = () =>
    {
        dispatch({
            type: "MESSAGE_SENT"
        })
    }

    const onBtnClicked = () =>
    {
        if((name) && (phone) && (message) && (email))
        {
            if (!(validateEmail(email)))
            {
                thankDiv.current.innerHTML = `
                <div class="alert alert-danger">
                   لطفا ایمیل خود را بدرستی وارد کنید
                </div>`;
                showMessage();
                hideMessage();
                return;
            }
            thankDiv.current.innerHTML = `
            <div class="alert alert-success">
            ${name} عزیز‌, پیام شما ارسال شد. باتشکر
            </div>`;
            showMessage();
            hideMessage();
            console.log(`Full Name: ${name}, Phone: ${phone}, Message: ${message}`);
            handleAdd();
            return;
        }
        thankDiv.current.innerHTML = `
        <div class="alert alert-danger">
        لطفا تمامی فیلد ها را پر کنید
        </div>`;
        showMessage();
        hideMessage();
    }

    useEffect(() =>
    {
        inputName.current.focus();
    },[]);

    const themeValues = useContext(ThemeContext);

    return(
    <div style={{
        backgroundColor: themeValues.theme.backColor,
        color: themeValues.theme.foreColor,
    }} className="contact">
        <input ref={inputName} required onChange={e => onNameChange(e)} className="contact__info--input" type="text"/>
        <h1 className="contact__info--title">: نام و نام خانوادگی</h1>
        <br/>
        <input required onChange={e => onPhoneChange(e)} className="contact__info--input" type="text"/>
        <h1 className="contact__info--title">: شماره همراه</h1>
        <br/>
        <input required onChange={e => onEmailChange(e)} className="contact__info--input" type="text"/>
        <h1 className="contact__info--title">: ایمیل</h1>
        <br/>
        <h1 className="contact__message--title">: پیام خود را وارد کنید</h1>
        <textarea required onChange={e => onMessageChange(e)} className="contact__message--input">
        </textarea>
        <br/>
        <button disabled={state.sent} onClick={onBtnClicked} className="contact__btn">
            {state.sent ? <><HiOutlineMailOpen/> ارسال شد</> : <><AiOutlineMail/> ارسال</>}
        </button>
        <div ref={thankDiv} style={{fontSize: '17pt',display: 'none'}} className="text-center font-weight-bold"></div>
    </div>
    );
};

export default Contact;