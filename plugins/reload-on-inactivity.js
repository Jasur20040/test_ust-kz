export default ({ app }) => {
  // Устанавливаем таймер и порог бездействия
  let timer;
  const inactivityThreshold = 3 * 60 * 60 * 1000; // 5 минут

  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // Устанавливаем флаг в localStorage перед перезагрузкой
      localStorage.setItem('needsReload', 'true');
    }, inactivityThreshold);
  }

  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      resetTimer();
    } else if (document.visibilityState === 'visible') {
      clearTimeout(timer);
      // Проверяем флаг в localStorage перед возможной перезагрузкой
      if (localStorage.getItem('needsReload') === 'true') {
        localStorage.removeItem('needsReload');
        window.location.reload();
      }
    }
  }

  // Добавляем слушатели событий при загрузке приложения
  window.onNuxtReady(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    resetTimer();
  });

  // Убираем слушатели перед уничтожением приложения (опционально)
  window.onbeforeunload = () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    clearTimeout(timer);
  };
};
