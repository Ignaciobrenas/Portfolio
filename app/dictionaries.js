const dictionaries = {
  es: () => import('../dictionaries/es.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
  de: () => import('../dictionaries/de.json').then((module) => module.default),
  ca: () => import('../dictionaries/ca.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  if (typeof dictionaries[locale] !== 'function') {
    return dictionaries['es']()
  }
  return dictionaries[locale]()
}
