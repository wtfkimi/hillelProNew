export default class HTTP {
  constructor(url) {
    this.url = url;
  }
  async get(endpoint) {
    const res = await fetch(endpoint).then((r) => r.json());
    return res;
  }

  async post(endpoint, data) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((r) => r.json());
    return res;
  }

  put(endpoint, data) {
    const res = fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((r) => r.json());
    return res;
  }

  delete(endpoint, id) {
    const res = fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }).then((r) => r.json());
    return res;
  }
}
