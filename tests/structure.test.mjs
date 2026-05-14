import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('page uses separate CSS and JavaScript files', () => {
  assert.match(html, /<link rel="stylesheet" href="styles\.css">/);
  assert.match(html, /<script src="app\.js" defer><\/script>/);
  assert.doesNotMatch(html, /<style[\s>]/);
  assert.doesNotMatch(html, /<script>(?!<\/script>)/);
});

test('three-point questions use three dedicated text fields', () => {
  for (const name of ['q_painpoints', 'q_top_pains']) {
    assert.doesNotMatch(html, new RegExp(`<textarea name="${name}"`));
    for (const index of [1, 2, 3]) {
      assert.match(html, new RegExp(`name="${name}_${index}"`));
    }
  }
});

test('print button uses a dedicated print preparation module', () => {
  const js = readFileSync(new URL('../app.js', import.meta.url), 'utf8');

  assert.match(js, /function preparePrintView\(/);
  assert.match(js, /function restorePrintView\(/);
  assert.match(js, /function buildPrintableReport\(/);
  assert.match(js, /function normalizeLegacyListFields\(/);
  assert.match(js, /btnPrint/);
  assert.match(js, /window\.print\(\)/);
});

test('branding is neutral and export actions include PDF, Word, Excel, and JSON', () => {
  const js = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
  const combined = `${html}\n${js}\n${css}`;

  assert.doesNotMatch(combined, /Persmon/i);
  assert.match(html, /id="btnPrint"[^>]*>Export PDF/);
  assert.match(html, /id="btnWord"[^>]*>Export Word/);
  assert.match(html, /id="btnExcel"[^>]*>Export Excel/);
  assert.match(html, /id="btnExport"[^>]*>Export JSON/);
});

test('progress UI shows a percentage and status label', () => {
  const js = readFileSync(new URL('../app.js', import.meta.url), 'utf8');

  assert.match(html, /id="progPct"/);
  assert.match(html, /id="progStatus"/);
  assert.match(js, /progPct/);
  assert.match(js, /progStatus/);
});

test('word and excel exports are generated from questionnaire responses', () => {
  const js = readFileSync(new URL('../app.js', import.meta.url), 'utf8');

  assert.match(js, /function exportWord\(/);
  assert.match(js, /function exportExcel\(/);
  assert.match(js, /application\/msword/);
  assert.match(js, /application\/vnd\.ms-excel/);
});
