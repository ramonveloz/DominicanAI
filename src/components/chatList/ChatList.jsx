import { Link } from 'react-router-dom';
import './chatList.css';

const ChatList = () => {
    return (
        <div className="chatList">
            <span className='title'>DASHBOARD</span>
            <Link to="/dashboard">Create a new Chat</Link>
            <Link to="/">Explore Dominican AI</Link>
            <Link to="/">Contact</Link>

            <hr/>
            <span className='title'>RECENT CHATS</span>
            <div className="list">
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
                <Link to="/">My chat title</Link>
            </div>
            <hr/>
            <div className="upgrade">
                <img src="/logodr.png" alt=""/>
                <div className="texts">
                    <span>Upgrade to Dominican AI Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    )
}

export default ChatList