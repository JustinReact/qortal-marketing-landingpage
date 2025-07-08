// admin.js
import { renderTable, toggleLoader, showDownloadButtons, downloadAsCsv, downloadAsExcel } from './ui.js';

const apiKeyInput = document.getElementById('apiKey');
const fetchBlurbsBtn = document.getElementById('fetchBlurbsBtn');
const fetchSubscribersBtn = document.getElementById('fetchSubscribersBtn');
const downloadCsvBtn = document.getElementById('downloadCsvBtn');
const downloadExcelBtn = document.getElementById('downloadExcelBtn');
const logoutBtn = document.getElementById('logoutBtn');

let currentData = [];

logoutBtn.addEventListener('click', async () => {
  try {
    await auth.signOut();
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    document.cookie = 'firebase_id_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = '/api/admin/login';
  } catch (err) {
    console.error('Logout failed:', err);
  }
});

fetchBlurbsBtn.addEventListener('click', () => fetchData('blurbs'));
fetchSubscribersBtn.addEventListener('click', () => fetchData('subscribers'));

async function fetchData(type) {
  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) return alert('Please enter the API key.');

  toggleLoader(true);
  showDownloadButtons(false);
  document.getElementById('tableTitle').textContent = type === 'blurbs' ? 'Blurbs' : 'Subscribers';

  try {
    const res = await fetch(`/api/admin/${type}`, {
      headers: { 'Authorization': `Bearer ${apiKey}` }
    });

    if (!res.ok) throw new Error('Unauthorized or failed to fetch data.');
    currentData = await res.json();

    renderTable(currentData);
    if (currentData.length) showDownloadButtons(true);
  } catch (err) {
    alert(err.message);
  } finally {
    toggleLoader(false);
  }
}

downloadCsvBtn.addEventListener('click', () => {
  if (currentData.length) downloadAsCsv(currentData);
});

downloadExcelBtn.addEventListener('click', () => {
  if (currentData.length) downloadAsExcel(currentData);
});
