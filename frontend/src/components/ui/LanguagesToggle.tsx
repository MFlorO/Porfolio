"use client";
import { useEffect, useState } from "react";
import { Languages, TypeLanguages } from "@/interfaces";
import Image from "next/image";

export default function LanguagesToggle() {

  const [language, setLanguage] = useState<TypeLanguages>(Languages.SPANISH);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as TypeLanguages;
    if (savedLanguage === Languages.ENGLISH) {
      setLanguage(Languages.ENGLISH);
    } else {
      setLanguage(Languages.SPANISH);
    }
  }, []);

  const toggleLanguage = () => {

    const newLang = language === Languages.SPANISH ? Languages.ENGLISH : Languages.SPANISH;

    setLanguage(newLang);
    localStorage.setItem("language", newLang);

    document.cookie = `locale=${newLang}; path=/; max-age=${31536000}`;

    window.location.reload();
  };


  return (
    <button
      onClick={toggleLanguage}
      className="flex p-0 m-0 bg-transparent border-none cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      {
        language === Languages.SPANISH 
        ? <Image src="/flags-languages/es.png" alt="ES" width={20} height={20} priority />
        : <Image src="/flags-languages/en.png" alt="EN" width={20} height={20} priority />
      }
    </button>
  );
}
