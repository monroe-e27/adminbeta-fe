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

export function convertToCSV(data: any): object {
  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));
  for (const row of data) {
    const values = headers.map((header) => {
      const value = row[header];
      return value ? value.toString().replace(/"/g, '""') : "";
    });
    csvRows.push(values.join(","));
  }
  return csvRows.join("\n");
};

