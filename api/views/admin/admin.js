// admin.js
import { renderTable, toggleLoader, showDownloadButtons, downloadAsCsv, downloadAsExcel } from './ui.js';

const apiKeyInput = document.getElementById('apiKey');
const fetchBlurbsBtn = document.getElementById('fetchBlurbsBtn');
const fetchSubscribersBtn = document.getElementById('fetchSubscribersBtn');
const downloadCsvBtn = document.getElementById('downloadCsvBtn');
const downloadExcelBtn = document.getElementById('downloadExcelBtn');
const logoutBtn = document.getElementById('logoutBtn');
const tableTitle = document.getElementById('tableTitle');

const cache = {
  blurbs: null,
  subscribers: null,
};
let currentType = null;

logoutBtn.addEventListener('click', async () => {
  try {
    await auth.signOut();
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    document.cookie = 'firebase_id_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = '/api/admin/login';
  } catch (err) {
    alert('Logout failed.');
  }
});

fetchBlurbsBtn.addEventListener('click', () => showData('blurbs'));
fetchSubscribersBtn.addEventListener('click', () => showData('subscribers'));

async function showData(type) {
  tableTitle.textContent = type === 'blurbs' ? 'Blurbs' : 'Subscribers';
  showDownloadButtons(false);

  if (cache[type]) {
    renderTable(cache[type]);
    if (cache[type].length) showDownloadButtons(true);
    currentType = type;
    return;
  }

  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) return alert('Please enter the API key.');

  toggleLoader(true);
  try {
    const res = await fetch(`/api/admin/${type}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });
    if (!res.ok) throw new Error('Unauthorized or failed to fetch data.');
    const data = await res.json();
    cache[type] = data;
    renderTable(data);
    if (data.length) showDownloadButtons(true);
    currentType = type;
  } catch (err) {
    alert(err.message);
  } finally {
    toggleLoader(false);
  }
}

downloadCsvBtn.addEventListener('click', () => {
  if (currentType && cache[currentType]?.length)
    downloadAsCsv(cache[currentType], currentType);
});

downloadExcelBtn.addEventListener('click', () => {
  if (currentType && cache[currentType]?.length)
    downloadAsExcel(cache[currentType], currentType);
});
