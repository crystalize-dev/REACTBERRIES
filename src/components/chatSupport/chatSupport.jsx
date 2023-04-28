import React, {useState} from 'react';
import cl from "./chatSupport.module.css";
import Icon from "../icon/icon";
import logo from "../../img/logo.png"
import classes from "classnames";
import TextareaAutosize from 'react-textarea-autosize';

const ChatSupport = ({modal, setModal}) => {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])

    const addMessage = () => {
        setMessages([...messages, {id: messages.length + 1, text: text}])

        setText('')
    }

    const checkForEnter = (e) => {
        const code = e.keyCode || e.which;
        const activeEl = document.activeElement.id;

        if ((code === 13) && (e.ctrlKey) && (activeEl === "text_area")) {
            setText(text + "\n");
        } else if ((code === 13) && (activeEl === "text_area")) {
            let text_redirect = text;

            text_redirect = text_redirect.replace(/^\s+/, "");

            if (text_redirect !== "") {
                addMessage();
                e.preventDefault()
            } else {
                e.preventDefault()
            }
        }
    }

    return (
        <div className={modal ? cl.wrapper : classes(cl.wrapper, cl.hide)} onMouseDown={() => setModal(false)}>
            <form className={cl.window} onMouseDown={(e) => e.stopPropagation()} onSubmit={() => addMessage()}>
                <div className={cl.header}>
                    <div>
                        <img src={logo} alt={'logo'}/>
                        <p>Поддержка ReactShop</p>
                        <Icon className={cl.done}>check_circle</Icon>
                    </div>

                    <div>
                        <Icon>search</Icon>
                        <Icon onClick={() => setModal(false)}>close</Icon>
                    </div>
                </div>

                <div className={cl.msgArea}>
                    <div className={classes(cl.message, cl.her)}>Я Лина - виртуальный помощник службы поддержки. Если у
                        Вас возник вопрос задайте его в этом чате, и я с удовольствием отвечу на него.
                    </div>

                    {messages.map(message => <div key={message.id} className={classes(cl.message, cl.me)}>{message.text}</div>)}
                </div>

                <div className={cl.inputArea}>
                    <div className={cl.inputWrapper}>
                        <TextareaAutosize value={text}
                                          onChange={(e) => setText(e.target.value)}
                                          placeholder={"Ваше сообщение..."}
                                          onKeyDown={(e) => checkForEnter(e)} id={"text_area"} autoFocus/>

                        <Icon>attach_file</Icon>
                    </div>

                    <button onClick={() => addMessage()} type={"submit"} disabled={text.length === 0}>
                        <Icon>arrow_upward</Icon></button>
                </div>
            </form>
        </div>
    );
};

export default ChatSupport;