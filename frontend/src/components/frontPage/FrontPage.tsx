"use server";
import React from "react";
import { getTranslations } from "next-intl/server";
import FrontPageClient from "./FrontPageClient";

const FrontPage = async () => {
  
  const t = await getTranslations("frontPage");

  return (
    <FrontPageClient
      title={t("title")}
      role={t("role")}
      button={t("button")}
    />
  );
};

export default FrontPage;