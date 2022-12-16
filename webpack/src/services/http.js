export {
  loginSupabase,
  fileRequest,
  getFileRequest,
  signUpSupabase,
  logoutSupabase,
  recoverPasswordSupabase,
  getData,
  updateData,
  createData,
};

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhamZ6cWtxb2hnYWhvYW1lZmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA5ODIyOTksImV4cCI6MTk4NjU1ODI5OX0.MIof23JM1j2NZEat7zDUgYtoEYKkqlsI9D86qG71aRo";
const urlBase = "https://tajfzqkqohgahoamefgi.supabase.co";
const headers = {
  apiKey: SUPABASE_KEY,
  "Content-Type": "application/json",
};

async function supaRequest(url, method, headers, body) {
  let response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  if (response.status == 200 && response.status <= 300) {
    if (response.headers.get("content-type")) {
      return await response.json();
    }
    return {};
  } else {
    return Promise.reject(await response.json());
  }
}
async function fileRequest(url, body, token) {
  const headersFile = {
    apiKey: SUPABASE_KEY,
    Authorization: `Bearer ${token}`,
    "x-upsert": true, // Necessari per a sobreescriure
  };
  let response = await fetch(`${urlBase}${url}`, {
    method: "POST",
    headers: headersFile,
    body,
  });
  if (response.status >= 200 && response.status <= 300) {
    if (response.headers.get("content-type")) {
      let datos = await response.json(); // Retorna un json amb la ruta relativa.
      datos.urlAvatar = `${urlBase}${url}`; // El que
      return datos;
    }
    return {};
  } else {
    return Promise.reject(await response.json());
  }
}

async function getFileRequest(url, token) {
  const headersFile = {
    apiKey: SUPABASE_KEY,
    Authorization: `Bearer ${token}`,
  };
  let response = await fetch(`${url}`, {
    method: "GET",
    headers: headersFile,
  });
  if (response.status >= 200 && response.status <= 300) {
    if (response.headers.get("content-type")) {
      let datos = await response.blob();
      return datos;
    }
    return {};
  } else {
    return Promise.reject(await response.json());
  }
}

async function loginSupabase(email, password) {
  let url = `${urlBase}/auth/v1/token?grant_type=password`;
  let data = await supaRequest(url, "post", headers, { email, password });
  return data;
}

async function signUpSupabase(email, password) {
  let url = `${urlBase}/auth/v1/signup`;
  let data = await supaRequest(url, "post", headers, { email, password });
  return data;
}

async function logoutSupabase(token) {
  let url = `${urlBase}/auth/v1/logout`;
  let headersAux = { ...headers, Authorization: "Bearer " + token };
  let data = await supaRequest(url, "post", headersAux, {});
  return data;
}

async function recoverPasswordSupabase(email) {
  let url = `${urlBase}/auth/v1/recover`;
  let headersAux = { ...headers };
  let data = await supaRequest(url, "post", headersAux, { email });
  return data;
}

async function getData(URI, token) {
  let url = `${urlBase}/rest/v1/${URI}`;
  let headersAux = { ...headers, Authorization: "Bearer " + token };
  let data = await supaRequest(url, "get", headersAux);
  return data;
}

async function updateData(URI, token, data) {
  let url = `${urlBase}/rest/v1/${URI}`;
  let headersAux = {
    ...headers,
    Authorization: "Bearer " + token,
    Prefer: "return=representation",
  };
  let response = await supaRequest(url, "PATCH", headersAux, data);
  return response;
}

async function createData(URI, token, data) {
  let url = `${urlBase}/rest/v1/${URI}`;
  let headersAux = {
    ...headers,
    Authorization: "Bearer " + token,
    Prefer: "return=representation",
  };
  let response = await supaRequest(url, "post", headersAux, data);
  return response;
}
