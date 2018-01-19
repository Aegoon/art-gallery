const setLanguageStorage = (lang) => {
  localStorage.setItem('lang', lang);
}

const getLanguageStorage = () => {
  if (typeof(Storage) === "undefined" || !localStorage.getItem('lang')) return 'JPN';
  return localStorage.getItem('lang')
}

module.exports = {
  setLanguageStorage,
  getLanguageStorage
};