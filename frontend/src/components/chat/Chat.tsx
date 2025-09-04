"use client";
import React, { useEffect, useRef, useState } from "react";
import AIMessage from "./AIMessage";
import TypingLoader from "./TypingLoader";
import UserMessage from "./UserMessage";
import TextMessageBox from "./TextMessageBox";
import { askAI } from "@/server-actions/chatWithOpenAi";
import { useTranslations } from 'next-intl';
import { Title } from "../ui";

interface IMessage {
  text: string;
  isAI: boolean;
}

const ChatPage = () => {

  const t = useTranslations('chat');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    const el = messagesEndRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handlePost = async (text: string) => {

    if (!text.trim()) return;

    setMessages((prev) => [...prev, { text, isAI: false }]);
    setIsLoading(true);

    try {

      const response = await askAI(text);

      if(response?.error){
        console.error('Error: ', response.error);
        setMessages((prev) => [
          ...prev,
          { text: response.error || "Ocurrió un error al generar la respuesta.", isAI: true },
        ]);
        return
      }

      setMessages((prev) => [...prev, { text: response.data, isAI: true }]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error('Error: Chat with AI. ',error);
      setMessages((prev) => [
        ...prev,
        { text: error?.message || "Ocurrió un error al generar la respuesta.", isAI: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full lg:w-[48%] h-max-[850px] h-[750px] lg:h-full lg:h-max-full flex flex-col justify-around bg-[#ff005930] p-6 rounded-xl space-y-4 text-white/90 dark:bg-[#ffabc84f] dark:text-white/70">
      <Title className="text-[#fff]!">{t('title')}</Title>

      <div className="flex flex-col flex-1 max-h-[300px] lg:max-h-[650px] mb-4 space-y-2 overflow-y-auto" ref={messagesEndRef}>
        <AIMessage text={t('presentation')} />

        {
          messages.map((message, index) =>
            message.isAI 
            ? <AIMessage key={index} text={message.text} />
            : <UserMessage key={index} text={message.text} />
          )
        }

        {isLoading && <div className="col-span-12 fade-in"><TypingLoader /></div>}

      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Hablemos..."
        isLoading={isLoading}
      />
    </section>
  );
};

export default ChatPage;
