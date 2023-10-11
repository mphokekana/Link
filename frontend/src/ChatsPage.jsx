import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return ( 
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='1bd39411-66ff-4f5c-9e40-b608b35c3a98'
                username={props.user.username}
                secret={props.user.username}
                style={{ height: '100%' }}
            />
        </div>
    ) 
}

export default ChatsPage