export function getLocalStorage(type: string): any | null {
  const { localStorage } = window;
  const currentLocalJSON = localStorage?.getItem(type);
  try {
    if (typeof currentLocalJSON !== 'string' || currentLocalJSON.includes('null') || currentLocalJSON.includes('undefined')) {
      return null;
    }


    const parseLocal = JSON.parse(currentLocalJSON);
    return parseLocal;
  } catch {
    if (typeof currentLocalJSON === 'string') {
      return currentLocalJSON
    }
    return null;
  }
}

export function setLocalStorage(type: string, dataSource: any): void {
  const { localStorage } = window;
  localStorage?.setItem(type, JSON.stringify(dataSource));
}
