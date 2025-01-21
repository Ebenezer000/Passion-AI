// import React from 'react'
import { MainContainer } from './style'
import vec from '../../assets/newchaticon.svg'
import vec1 from '../../assets/closesidebar.svg'
import vec2 from '../../assets/arrowicon.svg'
import vec3 from '../../assets/attachfileicon.svg'
import vec4 from '../../assets/proceedarrowicon.svg'
import logout from '../../assets/logout-svgrepo-com.svg'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const ChatApp = () => {

    //add state for input
    const [input, setInput] = useState('')
    const [chatlog, setChatlog] = useState([])
    const [chatHistory, setChatHistory] = useState([]);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state
    const [loggedIn, setLoggedIn] = useState(true); // User logged-in state

    // useNavigate
    const navigate = useNavigate()


    const handleInputChange = (e) => {
        setInput(e.target.value); // Updates the input state
    };

    const handleNewChat = () => {
        if (chatlog.length > 0) {
            setChatHistory((prevHistory) => [...prevHistory, chatlog]);
            setChatlog([]); // Clear the current chat log for a new chat session
        }
    };

    const handleLogout = () => {
        setLoggedIn(false); // Set loggedIn state to false
        setChatlog([]); // Clear current chat log
        setChatHistory([]); // Clear chat history
        setInput(''); // Clear input field

        // Redirect to the homepage ("/")
        navigate('/');
    };

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        if (loading || input.trim() === '') return;

        setLoading(true);

        const newMessage = { sender: 'user', text: input };
        setChatlog((prevChatlog) => [...prevChatlog, newMessage]);

        try {
            const response = await axios.post('https://passion-ai.onrender.com', {
                prompt: input, // Send user input as prompt
            });

            console.log('API Response:', response.data); // Debugging the API response

            const PassionAiReply = response.data.result;
            setChatlog((prevChatlog) => [
                ...prevChatlog,
                { sender: 'gemini', text: PassionAiReply },
            ]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
            setInput(''); // Clear the input field
        }
    }


    return (
        <MainContainer>
            <aside className={`sidemenu ${isSidebarVisible ? 'sidemenu_none' : ''}`}>
                <div className='sidemenu_header'>
                    <div className='sidemenu_buttons'>
                        <button title='Sidebar' onClick={toggleSidebar}><img src={vec1} alt='' /></button>
                        {/* <h1>Aside</h1> */}
                        <button title='Newchat' onClick={handleNewChat}><img src={vec} alt='' /></button>
                    </div>
                    <div>
                        <button className='new_chat' onClick={handleNewChat}>
                            {/* <span>+</span> */}
                            <h2>New Chat</h2>
                            <button><img src={vec} alt='' /></button>
                        </button>
                    </div>
                </div>
                <div className='history'>
                    <div>
                        <h2>History</h2>
                    </div>
                    {chatHistory.length === 0 ? (
                        <span>No Chats Yet</span>
                    ) : (
                        chatHistory.map((session, idx) => (
                            <div key={idx} className='history_item'>
                                <button title='Reopen' onClick={() => setChatlog(session)}>
                                    {/* Chat {idx + 1} */}
                                    {session.length > 0
                                        ? session[session.length - 1].text.split(' ').slice(0, 5).join(' ') + '...'
                                        : 'No messages yet'}
                                </button>
                                <p>
                                </p>
                            </div>
                        ))
                    )}
                </div>
                {/* <div className='sidemenu_footer'>
                    <button>
                        <div><img src="" alt="" /></div>
                        <div>
                            <h2>Dark Mode</h2>
                            <p>coming soon ...</p>
                        </div>
                    </button>
                </div> */}
                {loggedIn && (
                    <span title='logout' className='logout' onClick={handleLogout}>
                        <img src={logout} alt="" />
                        <h1>Log out</h1>
                    </span>
                )}
            </aside>
            {/* main chat */}
            <div className='chatbox'>
                <div className='chatbox_header'>
                    <div className='chatbox_logo'>
                        <button title='Sidebar' className={`open_sidebar ${isSidebarVisible ? '' : 'open_sidebar_none'}`} onClick={toggleSidebar}><img src={vec1} alt='' /></button>
                        <h2>PassionAI</h2>
                        <img src={vec2} alt="" />
                    </div>
                    <div>
                        <div className='chatbox_image'>
                            <h2>OB</h2>
                        </div>
                    </div>
                </div>
                <div className='chatbox_body'>
                    <div className='chatbox_reply'>
                        <div className='user_message'>
                            <div className='hover_purpose'>
                                <div className='user_message_rightlogo'>
                                    <button><img src={vec} alt='' /></button>
                                </div>
                            </div>
                        </div>
                        {chatlog.map((msg, idx) => (
                            <div key={idx} className='user_message_right'>
                                {msg.sender === 'user' && (
                                    <div className='user_message'>
                                        <span className='user_text'>{msg.text}</span>
                                    </div>
                                )}
                                {msg.sender === 'gemini' && (
                                    <div className='ai_response'>
                                        <div className='chatbox_img'>
                                            <h2>PAI</h2>
                                        </div>
                                        <span className='ai_text'>{msg.text}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className='ai_response'>

                            <div>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className='chatbox_userinput'>
                        <form className='userinput' onSubmit={handleSubmit}>
                            <input
                                value={input}
                                onChange={handleInputChange}
                                type='text'
                                placeholder='Message PassionAI'
                                disabled={loading} // Disable input while loading
                            />
                            <div className='userinput_extra_buttons'>
                                <img src={vec3} alt="" />
                                <button ><img className='send_button' src={vec4} alt="" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainContainer>
    )

}

export default ChatApp