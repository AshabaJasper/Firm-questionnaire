# Firm Questionnaire

An interactive audit management system discovery questionnaire for capturing client requirements, feature priorities, constraints, and sign-off details during a workshop.

## Project Structure

- `index.html` - questionnaire markup and form fields.
- `styles.css` - layout, responsive styling, and print styles.
- `app.js` - feature table rendering, progress tracking, import/export, print/PDF preparation, Word export, Excel export, and reset behavior.
- `tests/structure.test.mjs` - Node tests for the file split and key questionnaire behavior.

## How To Use

Open `index.html` in a browser and complete the questionnaire section by section. The top bar shows completion progress, autosave status, and a `Next Open` shortcut for jumping to the next incomplete section. The side navigation marks sections as empty, in progress, or complete.

The form saves a private draft in the current browser as you type. Use `Export JSON` to create a portable backup, then `Import JSON` to restore it later. Older JSON exports that used the previous single textarea fields for three pain points are still supported and are mapped into the new separate fields.

Use `Export PDF` when the questionnaire is complete. The print module builds a clean answer report for browser printing or saving as PDF. Use `Export Word` for an editable `.doc` copy, or `Export Excel` for an `.xls` response table.

Feature priority choices and their notes are exported in the same document order as the questionnaire, so each `Must / Should / Could / N/A` answer stays aligned with the correct feature and notes/examples field.

## Three-Point Fields

Questions that ask for three pain points now use three separate text fields:

- `q_painpoints_1`, `q_painpoints_2`, `q_painpoints_3`
- `q_top_pains_1`, `q_top_pains_2`, `q_top_pains_3`

## Development

Run the structure tests with:

```bash
node --test ./tests/structure.test.mjs
```

No build step is required. The app is plain HTML, CSS, and JavaScript.
