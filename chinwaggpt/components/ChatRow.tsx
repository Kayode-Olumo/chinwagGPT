import React, { useEffect, useState } from 'react';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc, query } from 'firebase/firestore';
import { db } from '../firebase';

interface Props {
  id: string;
}

function ChatRow({ id }:Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [ active, setActive ] = useState(false) 

  const [messages] = useCollection(query(
    collection(db, 'users', session?.user?.email!, 'chat', id, 'messages'),
  ));

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  },[id, pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
    router.replace('/')
  }

  return (
    <Link 
      href={`/chat/${id}`} 
      className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}
    >
      <ChatBubbleLeftIcon className='h-5 w-5' />
      <p className='flex-1 hidden md:inline-flex truncate'>{messages?.docs[messages.docs.length -1]?.data().text || "New chat"}</p>
      <TrashIcon 
        className='h-5 w-5 text-gray-700 hover:text-red-700' 
        onClick={removeChat}
      />
    </Link>
  )
}

export default ChatRow;