import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

export function ChatsPage({user}) {
  return (
    <div style={{height:"100vh"}}>
    <PrettyChatWindow
      projectId="52b37a43-ace6-4326-9fd9-8f57b0631cf6"
      username={user.username}
      secret={user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  );
}


  //52b37a43-ace6-4326-9fd9-8f57b0631cf6