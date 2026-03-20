const dictionaries = {
  'pt-BR': () => import('../dictionaries/pt-BR.json').then((module) => module.default),
  'en-US': () => import('../dictionaries/en-US.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const normalizedLocale = locale?.toLowerCase() === 'en-us' ? 'en-US' : 'pt-BR';
  return dictionaries[normalizedLocale]();
};
