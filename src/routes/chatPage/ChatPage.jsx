import { useRef } from 'react';
import './chatPage.css';
import { useEffect } from 'react';

const ChatPage = () => {
    const endRef = useRef(null);

    useEffect(()=>{
        endRef.current.scrollIntoView({behavior: "smooth"});
    },[]);
    return (
        <div className='chatPage'>
            <div className='wrapper'>
                <div className='chat'>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium velit ut animi quam dolorem, sed ad neque, aspernatur molestiae totam repudiandae molestias earum, officiis quia. Ea dolorem rerum ipsam.</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div className='message'>Test message from ai</div>
                    <div className='message user'>Test message from user</div>
                    <div ref={endRef}/>
                </div>
            </div>
        </div>
    )
}

export default ChatPage