export function getUserSessionObject() {
  try {
    const stored = localStorage.getItem("user-store");
    if (!stored) return null;
    const obj = JSON.parse(stored);
    return obj.state;
  } catch (e) {
    return null;
  }
}

export function atobUri(val: string) {
  return atob(val);
}

export function btoaUri(val: string) {
  return btoa(val);
}
