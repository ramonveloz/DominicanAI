import './dashboardPage.css'

const DashboardPage = () => {
    return (
        <div className='dashboardPage'>
            <div className="texts">
                <div className="logo">
                    <img src="/logodr.png"/>
                    <h1>Dominican AI</h1>
                </div>
                <div className="options">
                    <img src="/chat.png"/>
                    <span>Create a New Chat</span>
                </div>
                <div className="options">
                    <img src="/image.png"/>
                    <span>Analyze Images</span>
                </div>
                <div className="options">
                    <img src="/code.png"/>
                    <span>Help me with my code</span>
                </div>
            </div>
            <div className="formContainer">
                <form >
                    <input type="text" placeholder="Ask me anything..."/>
                    <button>
                        <img src="/arrow.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DashboardPage