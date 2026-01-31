"use client";

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '../../../i18n/routing';
import {useTransition} from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, {locale: newLocale});
    });
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onSelectChange('es')}
        disabled={isPending}
        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
          locale === 'es'
            ? 'bg-red-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => onSelectChange('en')}
        disabled={isPending}
        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
          locale === 'en'
            ? 'bg-red-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
    </div>
  );
}
