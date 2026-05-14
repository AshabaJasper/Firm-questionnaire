/* ============================================================
   FEATURE MODULE DATA  — rendered into .ftable[data-module]
   ============================================================ */
const MODULES = {
  mod_4_1: [
    ["aup_universe","Audit universe / client register","Central register of all current and prospective clients with risk ratings and key attributes."],
    ["aup_plan","Annual audit plan / engagement calendar","Schedule engagements across the year with target start, fieldwork and reporting dates."],
    ["aup_pipeline","Engagement pipeline &amp; status board","One view of every live engagement and the stage it has reached."],
    ["aup_capacity","Capacity vs. plan view","Compares planned engagements against available staff hours to flag overload."]
  ],
  mod_4_2: [
    ["acc_independence","Independence &amp; conflict-of-interest checks","Records and clears independence threats before an engagement is accepted."],
    ["acc_kyc","Client due diligence / KYC / AML records","Captures and stores the anti-money-laundering and know-your-client checks."],
    ["acc_letter","Engagement letter generation","Produces the engagement letter from a template, pre-filled with client data."],
    ["acc_esign","Engagement letter e-signature","Lets the client sign the engagement letter electronically."],
    ["acc_approval","Acceptance / continuance approval workflow","Routes new and recurring engagements to a partner for documented approval."],
    ["acc_fee","Fee proposal / quotation","Builds and stores the fee quote linked to the engagement."]
  ],
  mod_4_3: [
    ["pl_materiality","Materiality calculator","Computes overall and performance materiality and the trivial threshold from chosen benchmarks."],
    ["pl_riskreg","Risk register / risk matrix","Documents identified risks, their assessment and rating (ISA 315)."],
    ["pl_entity","Understanding the entity &amp; environment","Structured documentation of the client&rsquo;s business, controls and environment."],
    ["pl_fraud","Fraud risk assessment","Dedicated fraud-risk documentation and response planning (ISA 240)."],
    ["pl_strategy","Audit strategy &amp; audit plan documents","Generates the overall strategy and detailed plan from the planning inputs."],
    ["pl_link","Link risks &rarr; assertions &rarr; procedures","Connects each risk to the assertions affected and the procedures that respond to it."]
  ],
  mod_4_4: [
    ["tb_import","Trial balance import","Imports the trial balance from Excel, CSV or accounting software."],
    ["tb_mapping","Account grouping &amp; mapping to FS lines","Maps ledger accounts to financial-statement line items and groupings."],
    ["tb_leads","Auto-generated lead schedules","Builds lead schedules automatically from the mapped trial balance."],
    ["tb_compare","Prior-year comparatives &amp; variance analysis","Pulls prior-year balances and highlights significant movements."],
    ["tb_je","Journal entry import &amp; testing","Imports the journal listing and supports journal-entry testing (ISA 240)."],
    ["tb_multi","Multi-currency / consolidation support","Handles foreign-currency balances and group consolidations."]
  ],
  mod_4_5: [
    ["wp_file","Central electronic working paper file","One indexed engagement file holding every working paper."],
    ["wp_index","Methodology-aligned folder / index structure","Folder and index structure that mirrors the firm&rsquo;s methodology."],
    ["wp_version","Version control &amp; change history","Tracks every change to a working paper with who and when."],
    ["wp_templates","Working paper template library","Reusable, firm-approved working paper templates."],
    ["wp_xref","Cross-referencing between papers","Hyperlinked references that jump between related working papers."],
    ["wp_tickmarks","Tickmarks &amp; annotations","Standard tickmarks and annotation tools on documents."],
    ["wp_complete","&lsquo;Experienced auditor&rsquo; completeness checks","Prompts that the file would stand up to ISA 230 review by an outsider."],
    ["wp_lock","Document locking after archive","Prevents edits to working papers once the file is archived."]
  ],
  mod_4_6: [
    ["fw_programmes","Audit programmes / procedure checklists","Step-by-step procedure lists per audit area, with completion tracking."],
    ["fw_builder","Customisable checklist / template builder","Lets the firm create and edit its own checklists and programmes."],
    ["fw_sampling","Sampling tools","Statistical and judgemental sample selection with documentation."],
    ["fw_evidence","Evidence capture (upload, scan, photo)","Attaches supporting evidence to procedures from file, scan or camera."],
    ["fw_confirm","Confirmations management","Tracks bank, debtor, creditor and lawyer confirmations end to end."],
    ["fw_status","Test status &amp; completion tracking","Shows how far each area and the whole engagement has progressed."],
    ["fw_offline","Offline fieldwork capability","Allows fieldwork with no connection, syncing when back online."]
  ],
  mod_4_7: [
    ["fd_register","Findings / exceptions register","Central log of every exception and finding raised during the audit."],
    ["fd_sum","Summary of adjusted &amp; unadjusted misstatements","Maintains the SUM / SAD schedule and its effect on the financials."],
    ["fd_control","Control deficiencies log","Records control weaknesses for the management letter."],
    ["fd_severity","Severity / risk classification","Classifies each finding by significance and risk."],
    ["fd_link","Link findings to working papers &amp; evidence","Ties every finding back to the paper and evidence that supports it."]
  ],
  mod_4_8: [
    ["rv_notes","Review notes / coaching notes workflow","Raise, assign, respond to and clear review notes inside the file."],
    ["rv_multi","Multi-level review (senior &rarr; manager &rarr; partner)","Supports sequential review at each level of the team."],
    ["rv_eqcr","Engagement quality review (EQCR)","Dedicated workflow for the engagement quality reviewer (ISA 220 Revised)."],
    ["rv_sign","Time-stamped electronic sign-off","Records each sign-off with identity and timestamp."],
    ["rv_clear","Review note clearing &amp; status","Shows which notes are open, answered or cleared."],
    ["rv_gate","Completion checklist &amp; partner approval gate","A final checklist that must clear before the partner can sign."]
  ],
  mod_4_9: [
    ["rp_report","Auditor&rsquo;s report generation","Produces the auditor&rsquo;s report aligned to ISA 700 / 701."],
    ["rp_kam","Key Audit Matters drafting support","Helps identify and draft KAM where required (ISA 701)."],
    ["rp_ml","Management letter / letter of weaknesses","Builds the management letter from the logged control deficiencies."],
    ["rp_fs","Financial statements drafting / linkage","Drafts or links the financial statements to the mapped trial balance."],
    ["rp_rep","Representation letter generation","Generates the management representation letter (ISA 580)."],
    ["rp_brand","Report template library &amp; firm branding","Firm-branded, reusable report and letter templates."],
    ["rp_export","Export to Word / PDF","Exports finished deliverables to editable Word and final PDF."]
  ],
  mod_4_10: [
    ["ar_archive","Engagement archive &amp; lock","Formally archives and locks the file within the assembly period."],
    ["ar_retention","Retention enforcement &amp; retrieval","Enforces the retention period and allows controlled retrieval."],
    ["ar_rollforward","Year-on-year rollforward / carry-forward","Carries forward structure, templates and prior data to the next year."],
    ["ar_trail","Audit trail of post-archive access","Logs any access to a file after it has been archived."]
  ],
  mod_4_11: [
    ["fu_track","Action / recommendation tracking","Tracks every recommendation with an owner and a due date."],
    ["fu_remediation","Client remediation status &amp; reminders","Monitors whether the client has acted, with automated reminders."],
    ["fu_link","Follow-up audit linkage","Links open actions into the next period&rsquo;s engagement."],
    ["fu_escalate","Overdue action escalation","Escalates actions that pass their due date."]
  ],
  mod_5: [
    ["co_pbc","&lsquo;Prepared by client&rsquo; (PBC) request lists","Builds and tracks the list of documents the client must provide."],
    ["co_portal","Secure client document portal","A secure space for the client to upload and exchange files."],
    ["co_comments","In-app comments &amp; @mentions","Team members discuss and tag each other inside the engagement."],
    ["co_notify","Notifications &amp; reminders","Email and in-app alerts for assignments, due dates and changes."],
    ["co_realtime","Real-time multi-user editing","Several team members work in the same engagement at once."],
    ["co_mobile","Mobile access for review on the go","Partners and managers can review and respond from a phone or tablet."]
  ],
  mod_6: [
    ["da_import","Import from accounting / ERP systems","Pulls ledgers and balances directly from common accounting systems."],
    ["da_bank","Bank statement / GL ingestion","Ingests bank statements and general-ledger detail for testing."],
    ["da_caat","Full-ledger analytics / CAATs","Tests entire populations rather than samples."],
    ["da_anomaly","Anomaly &amp; risk scoring (AI)","Surfaces unusual transactions and scores them by risk."],
    ["da_ocr","Document data extraction (OCR)","Reads figures and details out of PDFs and scanned documents."],
    ["da_aidraft","AI drafting &amp; summarisation","Drafts narratives and summarises client documents to speed up the file."],
    ["da_recalc","Automated lead schedules &amp; recalculation","Rebuilds schedules and recalculates automatically when data changes."]
  ],
  mod_7: [
    ["pm_time","Time recording / timesheets","Staff log time against engagements and tasks."],
    ["pm_budget","Budget vs. actual (hours &amp; fees)","Compares budgeted hours and fees against what was actually spent."],
    ["pm_billing","Billing, invoicing &amp; WIP tracking","Raises invoices and tracks work in progress and recoverability."],
    ["pm_profit","Engagement profitability reporting","Shows the margin on each engagement and client."],
    ["pm_resource","Staff scheduling / resource allocation","Assigns people to engagements and avoids clashes."],
    ["pm_crm","Client / contact database (CRM-lite)","A single source for client details, contacts and history."],
    ["pm_cpd","CPD / staff competency tracking","Tracks each staff member&rsquo;s competencies and CPD hours."]
  ],
  mod_8: [
    ["db_partner","Partner / portfolio dashboard","At-a-glance view of every engagement, its risk and its deadline."],
    ["db_status","Engagement status &amp; milestone tracking","Shows where each engagement sits against its milestones."],
    ["db_profit","Realisation &amp; profitability dashboards","Visualises recovery, realisation and profitability across the firm."],
    ["db_qa","ICPAU QA-readiness / file completeness dashboard","Flags files that are not yet complete or review-ready."],
    ["db_builder","Custom report builder &amp; exports","Lets the firm build its own reports and export them."],
    ["db_kpi","Audit KPIs (cycle time, review notes, overruns)","Tracks the firm&rsquo;s own performance metrics over time."]
  ],
  mod_9: [
    ["ac_rbac","Role-based access control","Each role sees and does only what its role permits."],
    ["ac_granular","Per-engagement permissions","Access can be granted or withheld engagement by engagement."],
    ["ac_sod","Segregation of duties enforcement","Stops the same person performing and approving the same step."],
    ["ac_guest","Guest / external reviewer access","Time-limited, restricted access for outside reviewers or regulators."],
    ["ac_trail","User activity audit trail","A complete, tamper-evident log of who did what and when."]
  ],
  mod_10: [
    ["in_accounting","Accounting software connectors","Direct connectors to QuickBooks, Sage, Tally and similar."],
    ["in_erp","ERP system integration","Connects to larger ERP platforms used by bigger clients."],
    ["in_email","Email &amp; calendar integration","Links with Outlook or Google for mail and scheduling."],
    ["in_esign","E-signature service integration","Connects to an e-signature provider for letters and reports."],
    ["in_tax","URA / tax portal integration","Connects with URA systems where relevant to the engagement."],
    ["in_storage","Document storage integration","Links to SharePoint, Google Drive or similar storage."],
    ["in_api","Open API / webhooks","An API so the firm can connect future tools itself."],
    ["in_sso","Single sign-on (SSO)","Staff sign in with existing firm credentials."]
  ]
};

/* ============================================================
   RENDER FEATURE TABLES
   ============================================================ */
function segHTML(name){
  const opts = [["must","Must","l-must"],["should","Should","l-should"],["could","Could","l-could"],["no","N/A","l-no"]];
  let h = '<div class="seg" role="radiogroup" aria-label="Priority">';
  opts.forEach(o=>{
    h += '<label class="'+o[2]+'"><input type="radio" name="'+name+'" value="'+o[0]+'">'+o[1]+'</label>';
  });
  return h + '</div>';
}
document.querySelectorAll('.ftable[data-module]').forEach(box=>{
  const key = box.getAttribute('data-module');
  const rows = MODULES[key] || [];
  let h = '<div class="frow fhead"><div>Feature</div><div>Priority for v1</div><div>Notes / exceptions / examples</div></div>';
  rows.forEach(r=>{
    const [id,name,desc] = r;
    h += '<div class="frow">'
       +   '<div class="fcell-name"><div class="fn">'+name+'</div><div class="fd">'+desc+'</div></div>'
       +   '<div class="fcell-prio">'+segHTML('prio_'+id)+'</div>'
       +   '<div class="fcell-note"><input type="text" name="note_'+id+'" placeholder="Notes…"></div>'
       + '</div>';
  });
  box.innerHTML = h;
});

/* ============================================================
   PROGRESS, NAV & SCORING
   ============================================================ */
const form = document.getElementById('doc');
const STORAGE_KEY = 'audit-discovery-questionnaire-draft-v2';
let saveTimer = null;

function trackables(){
  // returns {total, done}
  let total=0, done=0;
  // text/number/date/textarea with a name
  form.querySelectorAll('input[type=text],input[type=number],input[type=date],textarea').forEach(el=>{
    if(!el.name) return;
    total++;
    if(el.value && el.value.trim()!=='') done++;
  });
  // radio groups
  const radioNames = new Set();
  form.querySelectorAll('input[type=radio]').forEach(el=>{ if(el.name) radioNames.add(el.name); });
  radioNames.forEach(n=>{
    total++;
    if(form.querySelector('input[name="'+CSS.escape(n)+'"]:checked')) done++;
  });
  // checkbox groups
  document.querySelectorAll('[data-checkgroup]').forEach(g=>{
    total++;
    if(g.querySelector('input[type=checkbox]:checked')) done++;
  });
  return {total,done};
}

function sectionState(id){
  const sec = document.getElementById(id);
  if(!sec) return 'empty';
  let total=0, done=0;
  sec.querySelectorAll('input[type=text],input[type=number],input[type=date],textarea').forEach(el=>{
    if(!el.name) return; total++; if(el.value && el.value.trim()!=='') done++;
  });
  const rn = new Set();
  sec.querySelectorAll('input[type=radio]').forEach(el=>{ if(el.name) rn.add(el.name); });
  rn.forEach(n=>{ total++; if(sec.querySelector('input[name="'+CSS.escape(n)+'"]:checked')) done++; });
  sec.querySelectorAll('[data-checkgroup]').forEach(g=>{ total++; if(g.querySelector('input:checked')) done++; });
  if(total===0) return 'empty';
  if(done===0) return 'empty';
  if(done>=total) return 'done';
  return 'part';
}

function updateScoring(){
  let must=0,should=0,could=0,no=0;
  form.querySelectorAll('input[type=radio]:checked').forEach(el=>{
    if(el.name && el.name.indexOf('prio_')===0){
      if(el.value==='must')must++;
      else if(el.value==='should')should++;
      else if(el.value==='could')could++;
      else if(el.value==='no')no++;
    }
  });
  // total prio groups
  const prioNames = new Set();
  form.querySelectorAll('input[type=radio]').forEach(el=>{ if(el.name && el.name.indexOf('prio_')===0) prioNames.add(el.name); });
  document.getElementById('cntMust').textContent=must;
  document.getElementById('cntShould').textContent=should;
  document.getElementById('cntCould').textContent=could;
  document.getElementById('cntNo').textContent=no;
  document.getElementById('scoreMeta').textContent=(must+should+could+no)+' of '+prioNames.size+' features rated.';
}

function updateAll(){
  const {total,done} = trackables();
  const pct = total ? Math.round(done/total*100) : 0;
  document.getElementById('progFill').style.width = pct+'%';
  document.getElementById('progText').textContent = done+' / '+total;
  document.getElementById('progPct').textContent = pct+'%';
  document.getElementById('progStatus').textContent =
    done === 0 ? 'Not started' :
    pct < 50 ? 'In progress' :
    pct < 100 ? 'Nearly there' :
    'Ready to export';
  // nav dots
  document.querySelectorAll('.navlink').forEach(a=>{
    const st = sectionState(a.getAttribute('data-target'));
    const dot = a.querySelector('.dot');
    dot.classList.remove('part','done');
    if(st==='part') dot.classList.add('part');
    else if(st==='done') dot.classList.add('done');
  });
  updateScoring();
}

form.addEventListener('input', updateAll);
form.addEventListener('change', updateAll);

/* ---- scroll-spy + nav ---- */
const navlinks = document.querySelectorAll('.navlink');
navlinks.forEach(a=>{
  a.addEventListener('click', ()=>{
    const t = document.getElementById(a.getAttribute('data-target'));
    if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
    document.getElementById('sidenav').classList.remove('open');
  });
});
const spyTargets = [...navlinks].map(a=>document.getElementById(a.getAttribute('data-target')));
const spy = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      navlinks.forEach(n=>n.classList.remove('active'));
      const link = [...navlinks].find(n=>n.getAttribute('data-target')===en.target.id);
      if(link) link.classList.add('active');
    }
  });
},{rootMargin:'-20% 0px -70% 0px'});
spyTargets.forEach(t=>{ if(t) spy.observe(t); });

document.getElementById('navToggle').addEventListener('click', ()=>{
  document.getElementById('sidenav').classList.toggle('open');
});

function jumpToNextIncomplete(){
  const target = [...navlinks].find(a=>sectionState(a.getAttribute('data-target')) !== 'done');
  if(!target) return;
  const section = document.getElementById(target.getAttribute('data-target'));
  if(section) section.scrollIntoView({behavior:'smooth',block:'start'});
  document.getElementById('sidenav').classList.remove('open');
}

document.getElementById('btnNextOpen').addEventListener('click', jumpToNextIncomplete);

/* ============================================================
   EXPORT / IMPORT / PRINT / CLEAR
   ============================================================ */
function serialize(){
  const data={};
  form.querySelectorAll('input,textarea,select').forEach(el=>{
    if(!el.name) return;
    if(el.type==='radio'){
      if(el.checked) data[el.name]=el.value;
      else if(!(el.name in data)) data[el.name]='';
    } else if(el.type==='checkbox'){
      if(!Array.isArray(data[el.name])) data[el.name]=[];
      if(el.checked) data[el.name].push(el.value);
    } else {
      data[el.name]=el.value;
    }
  });
  return data;
}

function normalizeLegacyListFields(data){
  const lists = ['q_painpoints','q_top_pains'];
  lists.forEach(name=>{
    if(typeof data[name] !== 'string') return;
    const items = data[name]
      .split(/\r?\n/)
      .map(item=>item.replace(/^\s*\d+[\).:-]?\s*/, '').trim())
      .filter(Boolean);
    items.slice(0,3).forEach((item,index)=>{
      const field = name + '_' + (index + 1);
      if(!data[field]) data[field] = item;
    });
  });
  return data;
}

function deserialize(data){
  data = normalizeLegacyListFields(data);
  form.querySelectorAll('input,textarea,select').forEach(el=>{
    if(!el.name || !(el.name in data)) return;
    const v=data[el.name];
    if(el.type==='radio'){ el.checked=(el.value===v); }
    else if(el.type==='checkbox'){ el.checked=Array.isArray(v)&&v.indexOf(el.value)>-1; }
    else { el.value=v; }
  });
  updateAll();
}

function updateSaveState(message, saved=false){
  const state = document.getElementById('saveState');
  if(!state) return;
  state.textContent = message;
  state.classList.toggle('saved', saved);
}

function saveDraft(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      _saved: new Date().toISOString(),
      responses: serialize()
    }));
    updateSaveState('Draft saved', true);
  }catch(err){
    updateSaveState('Draft not saved');
  }
}

function scheduleSaveDraft(){
  updateSaveState('Saving...');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveDraft, 350);
}

function restoreDraft(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return false;
    const parsed = JSON.parse(raw);
    deserialize(parsed.responses || parsed);
    updateSaveState('Draft restored', true);
    return true;
  }catch(err){
    updateSaveState('Draft not restored');
    return false;
  }
}

function escapeHtml(value){
  return String(value ?? '').replace(/[&<>"']/g, ch=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[ch]));
}

function textOf(el){
  return (el ? el.textContent : '').replace(/\s+/g, ' ').trim();
}

function clientSlug(){
  return (form.querySelector('[name=meta_client]').value || 'client')
    .trim()
    .replace(/[^a-z0-9]+/gi,'-')
    .replace(/^-|-$/g,'')
    .toLowerCase() || 'client';
}

function downloadBlob(content, type, filename){
  const blob = new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function documentTitle(){
  const client = form.querySelector('[name=meta_client]').value.trim();
  return client ? 'Audit Management System Discovery - ' + client : 'Audit Management System Discovery Questionnaire';
}

function sectionTitle(container){
  if(!container) return 'Questionnaire';
  const section = container.closest('section,.cover');
  if(!section) return 'Questionnaire';
  const heading = section.querySelector('h1,h2');
  return textOf(heading) || 'Questionnaire';
}

function labelForField(el){
  const sign = el.closest('.signline');
  if(sign) return textOf(sign.querySelector('.sll'));
  const field = el.closest('.field');
  if(field) return textOf(field.querySelector('.ftiny')) || el.name;
  const row = el.closest('.frow');
  if(row){
    const feature = textOf(row.querySelector('.fn'));
    if(feature){
      if(el.name.indexOf('prio_') === 0) return feature + ' - priority';
      if(el.name.indexOf('note_') === 0) return feature + ' - notes';
      return feature;
    }
  }
  const label = el.closest('label');
  if(label){
    const clone = label.cloneNode(true);
    clone.querySelectorAll('input,textarea,select').forEach(child=>child.remove());
    return textOf(clone) || el.name;
  }
  const block = el.closest('.qblock');
  if(block) return textOf(block.querySelector('.qlabel')) || el.name;
  return el.name;
}

function selectedChoiceLabel(input){
  const label = input.closest('label');
  if(!label) return input.value;
  const clone = label.cloneNode(true);
  clone.querySelectorAll('input,.mark').forEach(child=>child.remove());
  return textOf(clone) || input.value;
}

function collectResponseRows(){
  const rows = [];
  const radioNames = new Set();
  const checkGroups = new Set();

  form.querySelectorAll('input,textarea,select,[data-checkgroup]').forEach(el=>{
    if(el.matches?.('[data-checkgroup]')){
      if(checkGroups.has(el)) return;
      checkGroups.add(el);
      const checked = [...el.querySelectorAll('input[type=checkbox]:checked')].map(selectedChoiceLabel);
      rows.push({
        section: sectionTitle(el),
        question: textOf(el.closest('.qblock')?.querySelector('.qlabel')) || 'Selected options',
        answer: checked.join(', ')
      });
      return;
    }
    if(!el.name) return;
    if(el.type === 'checkbox') return;
    if(el.type === 'radio'){
      if(radioNames.has(el.name)) return;
      radioNames.add(el.name);
      const checked = form.querySelector('input[name="'+CSS.escape(el.name)+'"]:checked');
      rows.push({
        section: sectionTitle(el),
        question: labelForField(el) || el.name,
        answer: checked ? selectedChoiceLabel(checked) : ''
      });
      return;
    }
    rows.push({
      section: sectionTitle(el),
      question: labelForField(el),
      answer: el.value || ''
    });
  });

  return rows;
}

function groupedResponseRows(){
  return collectResponseRows().reduce((groups,row)=>{
    if(!groups[row.section]) groups[row.section] = [];
    groups[row.section].push(row);
    return groups;
  }, {});
}

function buildPrintableReport(){
  const {total,done} = trackables();
  const pct = total ? Math.round(done/total*100) : 0;
  const exported = new Date().toLocaleString();
  const groups = groupedResponseRows();
  let html = '<h1>'+escapeHtml(documentTitle())+'</h1>';
  html += '<div class="report-meta">'
    + '<div class="report-pill"><b>Completion</b><br>'+pct+'% ('+done+' of '+total+')</div>'
    + '<div class="report-pill"><b>Generated</b><br>'+escapeHtml(exported)+'</div>'
    + '<div class="report-pill"><b>Export type</b><br>Printable PDF / Word source</div>'
    + '</div>';

  Object.entries(groups).forEach(([section,rows])=>{
    html += '<h2>'+escapeHtml(section)+'</h2>';
    html += '<table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>';
    rows.forEach(row=>{
      html += '<tr><td>'+escapeHtml(row.question)+'</td><td class="answer">'+escapeHtml(row.answer || '')+'</td></tr>';
    });
    html += '</tbody></table>';
  });
  return html;
}

function reportDocumentHtml(){
  return '<!doctype html><html><head><meta charset="utf-8"><title>'
    + escapeHtml(documentTitle())
    + '</title><style>body{font-family:Arial,sans-serif;color:#111;}h1{font-size:22px;}h2{font-size:16px;margin-top:22px;}table{width:100%;border-collapse:collapse;margin-bottom:16px;}th,td{border:1px solid #999;padding:7px;vertical-align:top;text-align:left;}th{background:#eee;text-transform:uppercase;font-size:11px;}.answer{white-space:pre-wrap;}</style></head><body>'
    + buildPrintableReport()
    + '</body></html>';
}

function excelHtml(){
  const rows = collectResponseRows();
  let html = '<table><thead><tr><th>Section</th><th>Question</th><th>Answer</th></tr></thead><tbody>';
  rows.forEach(row=>{
    html += '<tr><td>'+escapeHtml(row.section)+'</td><td>'+escapeHtml(row.question)+'</td><td>'+escapeHtml(row.answer || '')+'</td></tr>';
  });
  html += '</tbody></table>';
  return '<!doctype html><html><head><meta charset="utf-8"></head><body>'+html+'</body></html>';
}

function exportWord(){
  downloadBlob(
    reportDocumentHtml(),
    'application/msword',
    'audit-ams-discovery-'+clientSlug()+'-'+new Date().toISOString().slice(0,10)+'.doc'
  );
}

function exportExcel(){
  downloadBlob(
    excelHtml(),
    'application/vnd.ms-excel',
    'audit-ams-discovery-'+clientSlug()+'-'+new Date().toISOString().slice(0,10)+'.xls'
  );
}

document.getElementById('btnExport').addEventListener('click', ()=>{
  const payload = {
    _document:'Audit Management System Discovery Questionnaire',
    _exported: new Date().toISOString(),
    responses: serialize()
  };
  downloadBlob(
    JSON.stringify(payload,null,2),
    'application/json',
    'audit-ams-discovery-'+clientSlug()+'-'+new Date().toISOString().slice(0,10)+'.json'
  );
});

document.getElementById('btnImport').addEventListener('click', ()=>{
  document.getElementById('fileInput').click();
});
document.getElementById('fileInput').addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const obj = JSON.parse(reader.result);
      const resp = obj.responses || obj;
      deserialize(resp);
      saveDraft();
      alert('Responses imported successfully.');
    }catch(err){
      alert('Could not read that file — please choose a JSON file exported from this questionnaire.');
    }
  };
  reader.readAsText(file);
  e.target.value='';
});

function restorePrintView(){
  const report = document.getElementById('printReport');
  report.innerHTML = '';
  report.setAttribute('aria-hidden','true');
}

function preparePrintView(){
  const report = document.getElementById('printReport');
  report.innerHTML = buildPrintableReport();
  report.setAttribute('aria-hidden','false');
}

window.addEventListener('beforeprint', preparePrintView);
window.addEventListener('afterprint', restorePrintView);

document.getElementById('btnPrint').addEventListener('click', ()=>{
  preparePrintView();
  window.print();
});
document.getElementById('btnWord').addEventListener('click', exportWord);
document.getElementById('btnExcel').addEventListener('click', exportExcel);

document.getElementById('btnClear').addEventListener('click', ()=>{
  if(confirm('Clear every answer in this questionnaire? This cannot be undone — export first if you want to keep your work.')){
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    updateSaveState('Draft cleared');
    updateAll();
    window.scrollTo({top:0,behavior:'smooth'});
  }
});

/* init */
restoreDraft();
updateAll();
form.addEventListener('input', scheduleSaveDraft);
form.addEventListener('change', scheduleSaveDraft);
