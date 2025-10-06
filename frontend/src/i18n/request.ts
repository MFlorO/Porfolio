import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { Languages } from '@/interfaces';
 
export default getRequestConfig(async () => {

  const store = await cookies();
  const locale = store.get('locale')?.value || Languages.SPANISH;
 
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});