"use client";
import { useState } from "react";
import { validateFormContact } from "@/utils/validateFormContact";
import emailjs from "@emailjs/browser";
import LinkContact from "./LinkContact";
import { NEXT_PUBLIC_SERVICE_ID_EMAIL_JS, NEXT_PUBLIC_TEMPLATE_ID_EMAIL_JS, NEXT_PUBLIC_USER_ID_EMAIL_JS } from "../../../env";
import { Seccion, StatusForm } from "@/interfaces";
import { useTranslations } from "next-intl";
import { Button, FormInput, Title } from "../ui";

export interface FormContactData {
  user_name: string;
  user_email: string;
  message: string;
}

const formInitialData: FormContactData = {
  user_name: "",
  user_email: "",
  message: "",
};

export default function FormContact() {

  const t = useTranslations("contact");

  const [value, setValue] = useState<FormContactData>(formInitialData);
  const [error, setError] = useState<Partial<FormContactData>>({});
  const [statusForm, setStatusForm] = useState<StatusForm>(StatusForm.IDLE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = { ...value, [e.target.name]: e.target.value };
    setValue(newValue);
    setError(validateFormContact(newValue));
  };

  const isDisabled =
    statusForm === StatusForm.SENDING ||
    JSON.stringify(error) !== "{}" ||
    !value.user_name ||
    !value.user_email ||
    !value.message;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatusForm(StatusForm.SENDING);

    try {
      await emailjs.send(
        NEXT_PUBLIC_SERVICE_ID_EMAIL_JS!,
        NEXT_PUBLIC_TEMPLATE_ID_EMAIL_JS!,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value as any,
        NEXT_PUBLIC_USER_ID_EMAIL_JS!
      );

      setStatusForm(StatusForm.SUCCESS);
      setValue(formInitialData);
    } catch (err) {
      console.error("Error sending email:", err);
      setStatusForm(StatusForm.ERROR);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center gap-8 px-12 md:px-28 bg-white dark:bg-[#ffabc84f]"
      id={Seccion.CONTACTO}
    >
      <Title className="flex w-full justify-center">{t("title")}</Title>

      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full md:w-2/3 gap-4"
      >
        <FormInput
          type="text"
          name="user_name"
          placeholder={t("placeholderName")}
          value={value.user_name}
          onChange={handleChange}
          error={error.user_name}
        />

        <FormInput
          type="email"
          name="user_email"
          placeholder="Email"
          value={value.user_email}
          onChange={handleChange}
          error={error.user_email}
        />

        <textarea
          name="message"
          placeholder={t("placeholderMessage")}
          value={value.message}
          onChange={handleChange}
          rows={4}
          disabled={statusForm === StatusForm.SENDING}
          className={`
            border rounded w-full p-3 bg-transparent text-white placeholder-gray-400 hover:border-gray-400
            focus:outline-none focus:ring-2 focus:border-[var(--color-accent-light)] focus:ring-[var(--color-accent-light)]
            dark:focus:border-[var(--color-accent-dark)] dark:focus:ring-[var(--color-accent-dark)]
            active:border-[var(--color-accent-light)]
            dark:active:border-[var(--color-accent-dark)]
            ${error.message ? "border-red-500" : "border-gray-300"}
          `}
        />

        {error.message && <p className="text-red-500 text-sm">{error.message}</p>}

        <div className="w-full">
          <Button
            className="w-full"
            type="submit"
            disabled={isDisabled}
            variant="solid"
          >
            {statusForm === StatusForm.SENDING ? t("sending") : t("button")}
          </Button>

          {statusForm === StatusForm.SUCCESS && (
            <p className="text-green-500 font-medium mt-2">{t("messageSuccess")}</p>
          )}
          {statusForm === StatusForm.ERROR && (
            <p className="text-red-500 font-medium mt-2">{t("messageError")}</p>
          )}
        </div>
      </form>

      <LinkContact />
    </div>
  );
}
