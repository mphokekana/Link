import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return ( 
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='ca63df8f-cd30-45b4-af4d-ddacbaae1c41'
                username={props.user.username}
                secret={props.user.username}
                style={{ height: '100%' }}
            />
        </div>
    ) 
}

export default ChatsPage;