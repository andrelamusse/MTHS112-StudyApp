// ========== MTHS 112 QUIZ ENGINE — WORKSPACE + MEMO-BASED MARKING ==========
(function () {
  'use strict';

  const TOPICS_MAIN = [
    'Matrices & Systems of Equations',
    'Functions, Revenue & Break-even',
    'Linear Programming'
  ];
  const TOPICS_OTHER = [
    'Percentages & VAT',
    'Income Tax Calculations',
    'Financial Mathematics',
    'Calculus (Differentiation & Integration)'
  ];
  const TOPICS = [...TOPICS_MAIN, ...TOPICS_OTHER];

  // --- STATE ---
  let state = {
    selectedTopics: new Set(),
    selectedQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    totalMarksEarned: 0,
    easyMarksEarned: 0,
    hardMarksEarned: 0,
    totalMarksPossible: 0,
    weakQuestions: [], 
    results: [],
    answered: false,
    topicStats: {},
    lineCount: 1,
    activeInput: null,
    isEasyModeActive: false,
    usedEasyModeForCurrentQ: false,
    isRetryMode: false
  };

  // --- DOM ---
  const $ = id => document.getElementById(id);
  const startScreen = $('start-screen');
  const quizScreen = $('quiz-screen');
  const summaryScreen = $('summary-screen');
  const topicGrid = $('topic-grid');
  const btnStart = $('btn-start');
  const qCount = $('q-count');
  const qCounter = $('q-counter');
  const marksEarned = $('marks-earned');
  const progressFill = $('progress-fill');
  const topicTag = $('topic-tag');
  const marksTag = $('marks-tag');
  const questionText = $('question-text');
  const workspaceArea = $('workspace-area');
  const feedback = $('feedback');
  const btnNext = $('btn-next');
  const mathKeypad = $('math-keypad');

  // --- INIT ---
  function init() {
    buildTopicGrid();
    btnStart.addEventListener('click', startQuiz);
    btnNext.addEventListener('click', nextQuestion);
    document.getElementById('btn-retry-wrong').addEventListener('click', () => {
      state.isRetryMode = true;
      state.selectedQuestions = [...state.weakQuestions];
      state.weakQuestions = [];
      state.currentQuestionIndex = 0;
      document.getElementById('summary-screen').style.display = 'none';
      document.getElementById('quiz-screen').style.display = 'block';
      
      const btnEasy = document.getElementById('btn-easy-mode');
      state.isEasyModeActive = true;
      state.usedEasyModeForCurrentQ = true;
      btnEasy.classList.add('active');
      btnEasy.innerHTML = '🎯 Easy Mode FORCED';
      btnEasy.disabled = true;

      showQuestion();
    });

    document.getElementById('btn-easy-mode').addEventListener('click', () => {
      state.isEasyModeActive = !state.isEasyModeActive;
      state.usedEasyModeForCurrentQ = true;
      
      const btn = document.getElementById('btn-easy-mode');
      if (state.isEasyModeActive) {
          btn.classList.add('active');
          btn.innerHTML = '🎯 Easy Mode ON';
      } else {
          btn.classList.remove('active');
          btn.innerHTML = '✨ Easy Mode';
      }
      renderWorkspace();
      // Update keypad class
      if (state.isEasyModeActive) mathKeypad.classList.add('easy-mode-active');
      else mathKeypad.classList.remove('easy-mode-active');
    });

    $('btn-home').addEventListener('click', goHome);
    $('btn-exit-quiz').addEventListener('click', goHome);
    $('btn-skip').addEventListener('click', () => {
      state.totalMarksPossible += state.selectedQuestions[state.currentQuestionIndex].markingCriteria.reduce((s,c) => s + c.marks, 0);
      state.results.push({ question: state.selectedQuestions[state.currentQuestionIndex], earned: 0, total: 0, breakdown: [] });
      nextQuestion();
    });
    initKeypad();
  }

  // --- TOPIC GRID ---
  function buildTopicGrid() {
    const allBtn = document.createElement('button');
    allBtn.className = 'topic-btn select-all selected';
    allBtn.textContent = '✅ All Topics';
    allBtn.addEventListener('click', () => toggleAll(allBtn));
    topicGrid.appendChild(allBtn);
    TOPICS.forEach(t => state.selectedTopics.add(t));

    const mainHeader = document.createElement('h3');
    mainHeader.className = 'topic-group-header';
    mainHeader.textContent = 'Main Categories';
    topicGrid.appendChild(mainHeader);

    TOPICS_MAIN.forEach(topic => {
      const btn = document.createElement('button');
      btn.className = 'topic-btn selected';
      btn.textContent = topic;
      btn.addEventListener('click', () => toggleTopic(btn, topic));
      topicGrid.appendChild(btn);
    });

    const otherHeader = document.createElement('h3');
    otherHeader.className = 'topic-group-header';
    otherHeader.textContent = 'Other Units';
    topicGrid.appendChild(otherHeader);

    TOPICS_OTHER.forEach(topic => {
      const btn = document.createElement('button');
      btn.className = 'topic-btn selected';
      btn.textContent = topic;
      btn.addEventListener('click', () => toggleTopic(btn, topic));
      topicGrid.appendChild(btn);
    });
    updateStartBtn();
  }

  function toggleAll(btn) {
    const allBtns = topicGrid.querySelectorAll('.topic-btn:not(.select-all)');
    if (btn.classList.contains('selected')) {
      btn.classList.remove('selected'); btn.textContent = '☐ All Topics';
      state.selectedTopics.clear(); allBtns.forEach(b => b.classList.remove('selected'));
    } else {
      btn.classList.add('selected'); btn.textContent = '✅ All Topics';
      TOPICS.forEach(t => state.selectedTopics.add(t)); allBtns.forEach(b => b.classList.add('selected'));
    }
    updateStartBtn();
  }

  function toggleTopic(btn, topic) {
    if (state.selectedTopics.has(topic)) { state.selectedTopics.delete(topic); btn.classList.remove('selected'); }
    else { state.selectedTopics.add(topic); btn.classList.add('selected'); }
    const allBtn = topicGrid.querySelector('.select-all');
    if (state.selectedTopics.size === TOPICS.length) { allBtn.classList.add('selected'); allBtn.textContent = '✅ All Topics'; }
    else { allBtn.classList.remove('selected'); allBtn.textContent = '☐ All Topics'; }
    updateStartBtn();
  }

  function updateStartBtn() { btnStart.disabled = state.selectedTopics.size === 0; }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --- START ---
  function startQuiz() {
    let pool = window.QUESTIONS.filter(q => state.selectedTopics.has(q.topic));
    shuffle(pool);
    const count = parseInt(qCount.value);
    if (count > 0) pool = pool.slice(0, count);

    state.selectedQuestions = pool;
    state.currentQuestionIndex = 0;
    state.totalMarksEarned = 0;
    state.totalMarksPossible = 0;
    state.easyMarksEarned = 0;
    state.hardMarksEarned = 0;
    state.answered = false;
    state.weakQuestions = [];
    state.results = [];

    startScreen.style.display = 'none';
    summaryScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    showQuestion();
  }

  // --- SHOW QUESTION ---
  function showQuestion() {
    const q = state.selectedQuestions[state.currentQuestionIndex];
    state.answered = false;
    state.lineCount = 1;
    state.usedEasyModeForCurrentQ = state.isEasyModeActive;

    qCounter.textContent = `Question ${state.currentQuestionIndex + 1} / ${state.selectedQuestions.length}`;
    marksEarned.innerHTML = `Marks: <strong>${state.totalMarksEarned}</strong>`;
    progressFill.style.width = `${(state.currentQuestionIndex / state.selectedQuestions.length) * 100}%`;

    topicTag.textContent = q.topic;
    const totalMarks = q.markingCriteria.reduce((sum, c) => sum + c.marks, 0);
    marksTag.textContent = `[${totalMarks} marks]`;

    let html = '';
    if (q.scenario) html += `<div class="scenario">${q.scenario}</div>`;
    if (q.table) html += buildTable(q.table);
    html += q.question;
    questionText.innerHTML = html;

    const eBtn = document.getElementById('btn-easy-mode');
    if (state.isRetryMode) {
      eBtn.classList.add('active');
      eBtn.innerHTML = '🎯 Easy Mode FORCED';
      eBtn.disabled = true;
    } else {
      eBtn.disabled = false;
      if (state.isEasyModeActive) {
        eBtn.classList.add('active');
        eBtn.innerHTML = '🎯 Easy Mode ON';
      } else {
        eBtn.classList.remove('active');
        eBtn.innerHTML = '✨ Easy Mode';
      }
    }

    renderWorkspace();

    feedback.style.display = 'none';
    feedback.className = 'feedback';
    btnNext.style.display = 'none';
    $('btn-skip').style.display = state.answered ? 'none' : 'inline-block';
    mathKeypad.style.display = 'block';

    // Toggle easy-mode-active class on keypad for hiding New Line
    if (state.isEasyModeActive) mathKeypad.classList.add('easy-mode-active');
    else mathKeypad.classList.remove('easy-mode-active');

    renderKaTeX();
  }

  function attachInputLogic(input) {
    input.addEventListener('focus', () => { state.activeInput = input; });
    input.addEventListener('input', e => {
      let v = input.value;
      let start = input.selectionStart;
      const superMap = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','+':'⁺','-':'⁻','(':'⁽',')':'⁾','n':'ⁿ','x':'ˣ','y':'ʸ','.':'·','i':'ⁱ'};
      
      let replaced = v.replace(/(?:\*\*|\^)([0-9+\-()nxy.i])/g, (match, p1) => superMap[p1] || p1);
      
      const superChars = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁽⁾ⁿˣʸ·ⁱ';
      const reg = new RegExp(`([${superChars}]+)([0-9+\\-()nxy.i]+)`, 'g');
      replaced = replaced.replace(reg, (match, p1, p2) => {
         return p1 + Array.from(p2).map(c => superMap[c] || c).join('');
      });

      if (v !== replaced) {
        input.value = replaced;
        let diff = v.length - replaced.length;
        input.setSelectionRange(start - diff, Math.max(0, start - diff));
      }
    });
  }

  function renderWorkspace() {
    const area = document.getElementById('workspace-area');
    const q = state.selectedQuestions[state.currentQuestionIndex];
    
    if (state.isEasyModeActive && q.easyTemplate) {
      let safeTemplate = q.easyTemplate.replace(/\$([^$]+)\$/g, (match, mathContent) => {
          return '$' + mathContent.replace(/@INPUT@/g, '\\text{INPUTXYZ}') + '$';
      });
      safeTemplate = safeTemplate.replace(/@INPUT@/g, 'INPUTXYZ');

      area.innerHTML = '<div class="easy-template-container" style="font-size:1.1rem; padding: 15px;">' + safeTemplate + '</div>';
      renderMathInElement(area, { delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
      area.innerHTML = area.innerHTML.replace(/INPUTXYZ/g, '<input class="easy-box" style="width:80px; font-size:inherit; border:none; border-bottom:1px solid var(--accent); background:var(--bg); color:var(--text); text-align:center; outline:none; padding:0 2px;">');
      
      const boxes = area.querySelectorAll('.easy-box');
      if (boxes.length > 0) state.activeInput = boxes[0];
      boxes.forEach((box, idx) => {
        attachInputLogic(box);
        box.addEventListener('keydown', e => {
          if (e.key === 'Enter') document.querySelector('.key-submit').click();
          if (e.key === 'Tab') {
            e.preventDefault();
            const next = boxes[idx + 1];
            if (next) { next.focus(); state.activeInput = next; }
          }
        });
      });
      return;
    }

    const oldVals = {};
    document.querySelectorAll('.workspace-input').forEach(inp => oldVals[inp.dataset.line] = inp.value);

    let templ = q.hardTemplate || 'Final Answer: @INPUT@';
    let safeHardTempl = templ.replace(/\$([^$]+)\$/g, (match, mathContent) => {
        return '$' + mathContent.replace(/@INPUT@/g, '\\text{INPUTXYZ}') + '$';
    });
    safeHardTempl = safeHardTempl.replace(/@INPUT@/g, 'INPUTXYZ');

    area.innerHTML = '<div class="hard-template-container" style="font-size:1.1rem; padding: 15px;">' + safeHardTempl + '</div>';
    renderMathInElement(area, { delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
    area.innerHTML = area.innerHTML.replace(/INPUTXYZ/g, '<input class="workspace-input hard-box" style="width:180px; font-size:inherit; border:none; border-bottom:1px dashed var(--accent); background:transparent; color:var(--text); text-align:center; outline:none; padding:0 2px;">');

    const boxes = area.querySelectorAll('.hard-box');
    if (boxes.length > 0) state.activeInput = boxes[0];
    boxes.forEach(box => {
      attachInputLogic(box);
      box.addEventListener('keydown', e => {
        if (e.key === 'Enter') document.querySelector('.key-submit').click();
      });
    });
  }

  function buildTable(table) {
    let h = '<table class="data-table"><thead><tr>';
    table.headers.forEach(hdr => h += `<th>${hdr}</th>`);
    h += '</tr></thead><tbody>';
    table.rows.forEach(row => {
      h += '<tr>';
      row.forEach(cell => h += `<td>${cell}</td>`);
      h += '</tr>';
    });
    h += '</tbody></table>';
    return h;
  }

  function normaliseText(text) {
    const normalMap = {'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-','⁽':'(','⁾':')','ⁿ':'n','ˣ':'x','ʸ':'y','·':'.','ⁱ':'i'};
    let norm = text
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/÷/g, '/')          
      .replace(/×/g, '*')          
      .replace(/−/g, '-')          
      .replace(/\s*=\s*/g, ' = ')  
      .replace(/\s*⇒\s*/g, ' ⇒ ')
      .replace(/\*\*/g, '^')       
      .replace(/,/g, '');           
      
    norm = norm.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁽⁾ⁿˣʸ·ⁱ]+)/g, (match) => {
       return '^' + Array.from(match).map(c => normalMap[c] || c).join('');
    });
    return norm;
  }

  function gradeWorkspace(btn) {
    if (btn.disabled) return;
    const q = state.selectedQuestions[state.currentQuestionIndex];
    let combined = '';
    
    if (state.isEasyModeActive && q.easyTemplate) {
      const container = document.querySelector('.easy-template-container');
      let clone = container.cloneNode(true);
      let cloneInputs = clone.querySelectorAll('.easy-box');
      let realInputs = container.querySelectorAll('.easy-box');
      for (let i = 0; i < cloneInputs.length; i++) {
         let txt = document.createTextNode(realInputs[i].value);
         cloneInputs[i].parentNode.replaceChild(txt, cloneInputs[i]);
      }
      combined = normaliseText(clone.textContent);
    } else {
      const inputs = document.querySelectorAll('.workspace-input');
      inputs.forEach(inp => { combined += normaliseText(inp.value) + ' '; });
    }

    const totalMarks = q.markingCriteria.reduce((sum, c) => sum + c.marks, 0);
    let feedbackHTML = `<div class="marking-breakdown"><h4>Marks Breakdown</h4>`;
    let earned = 0;
    let finalCriterionIdx = q.markingCriteria.length - 1;
    let finalCriterionFound = false;

    q.markingCriteria.forEach((criterion, idx) => {
      let found = false;
      if (criterion.type === 'contains') {
        const expectedArr = Array.isArray(criterion.expected) ? criterion.expected : [criterion.expected];
        found = expectedArr.some(str => combined.includes(normaliseText(str)));
      } else if (criterion.type === 'value') {
        found = checkValueInText(combined, criterion.expected, criterion.tolerance || 0.1);
      } else if (criterion.type === 'anyValue') {
        const vals = criterion.expected;
        found = vals.some(v => checkValueInText(combined, v, criterion.tolerance || 0.5));
      }

      if (found) {
        earned += criterion.marks;
        if (idx === finalCriterionIdx) finalCriterionFound = true;
        feedbackHTML += `<div class="mark-item earned">${criterion.description} <span class="mark-status">✓ ${criterion.marks}</span></div>`;
      } else {
        feedbackHTML += `<div class="mark-item missed">Missed: ${criterion.description} <span class="mark-status">✗ 0/${criterion.marks}</span></div>`;
      }
    });
    feedbackHTML += `</div>`;

    if (state.usedEasyModeForCurrentQ) {
        state.totalMarksEarned += earned;
        state.totalMarksPossible += totalMarks;
        state.easyMarksEarned += earned;

        if (!state.topicStats[q.topic]) state.topicStats[q.topic] = { earned: 0, possible: 0 };
        state.topicStats[q.topic].earned += earned;
        state.topicStats[q.topic].possible += totalMarks;

        if (!state.isRetryMode && (earned / totalMarks) < 0.6) {
          state.weakQuestions.push(q);
        }
        state.results.push({ question: q, earned, total: totalMarks, breakdown: [] });

        const fbClass = earned === totalMarks ? 'full-marks' : earned > 0 ? 'partial-marks' : 'zero-marks';
        const scoreHeader = `<div class="feedback-header"><span class="feedback-title">${earned === totalMarks ? '🎉 Perfect!' : earned > 0 ? '🟡 Partial Marks' : '❌ No Marks'}</span><span class="marks-display">${earned} / ${totalMarks}</span></div>`;
        feedback.className = 'feedback ' + fbClass;
        feedback.innerHTML = scoreHeader + feedbackHTML + `<div class="memo-section"><h4>Memo</h4>${q.memo}</div>`;
        feedback.style.display = 'block';
        btnNext.innerHTML = 'Next Question →';
        btnNext.className = 'btn-next';
        btnNext.style.display = 'block';
        btnNext.onclick = nextQuestion;
        state.answered = true;
        $('btn-skip').style.display = 'none';
    } else {
        let hardAutoEarned = 0;
        let hardMemoHTML = q.memo.replace(/<span class="memo-mark"([^>]*)>✓\((\d+)\)<\/span>/g, (match, attrs, mMarks, offset, fullStr) => {
            let isLast = fullStr.indexOf('<span class="memo-mark"', offset + 1) === -1;
            if (isLast) {
                if (finalCriterionFound) {
                    hardAutoEarned = parseInt(mMarks);
                    let status = `<span style="color:var(--success); font-weight:700;">✓ Auto-Graded (${mMarks})</span>`;
                    return `<span class="memo-mark">${status}</span>`;
                } else {
                    let status = `<span style="color:var(--error); font-weight:700;">✗ Missed Final Answer</span>`;
                    return `<span class="memo-mark">${status}</span>`;
                }
            } else {
                return `<label class="memo-checkbox-wrapper" style="display:inline-flex; vertical-align:middle; margin-left: 10px; cursor:pointer;"><input type="checkbox" class="mark-checkbox hard-mode-cb" data-marks="${mMarks}"> <span style="font-size:0.8rem; color:var(--text-muted); padding-top:2px;">Check if calculated correctly (${mMarks})</span></label>`;
            }
        });

        document.getElementById('math-keypad').style.display = 'none';

        feedback.innerHTML = `<div class="memo-section" style="border: 2px solid var(--accent); border-radius: var(--radius); background: var(--bg-card);"><h4 style="color:var(--accent); margin-bottom: 15px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">Self-Assessment (Tick the computation steps you completed correctly on your scratch paper)</h4>${hardMemoHTML}</div>`;
        feedback.style.display = 'block';
        
        btnNext.innerHTML = 'Submit Memo Report & Next Question →';
        btnNext.className = 'btn-submit-memo';
        btnNext.style.display = 'block';
        
        btnNext.onclick = () => {
            let checkboxMarks = 0;
            document.querySelectorAll('.hard-mode-cb:checked').forEach(cb => {
                checkboxMarks += parseInt(cb.dataset.marks);
            });
            let finalEarned = hardAutoEarned + checkboxMarks;
            finalEarned = Math.min(finalEarned, totalMarks);

            state.totalMarksEarned += finalEarned;
            state.hardMarksEarned += finalEarned;
            state.totalMarksPossible += totalMarks;
            
            if (!state.topicStats[q.topic]) state.topicStats[q.topic] = { earned: 0, possible: 0 };
            state.topicStats[q.topic].earned += finalEarned;
            state.topicStats[q.topic].possible += totalMarks;

            if (!state.isRetryMode && (finalEarned / totalMarks) < 0.6) {
               state.weakQuestions.push(q);
            }
            state.results.push({ question: q, earned: finalEarned, total: totalMarks, breakdown: [] });
            
            nextQuestion();
        };
        state.answered = true;
        $('btn-skip').style.display = 'none';
    }
    renderKaTeX();
  }

  function checkValueInText(text, expected, tolerance) {
    const numPattern = /-?\d+\.?\d*/g;
    const matches = text.match(numPattern);
    if (!matches) return false;
    return matches.some(m => {
      const num = parseFloat(m);
      if (isNaN(num)) return false;
      return Math.abs(num - expected) <= tolerance;
    });
  }

  function nextQuestion() {
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex >= state.selectedQuestions.length) showSummary();
    else showQuestion();
  }

  function showSummary() {
    quizScreen.style.display = 'none';
    summaryScreen.style.display = 'block';

    let ratio = state.totalMarksPossible > 0 ? state.totalMarksEarned / state.totalMarksPossible : 0;
    const finalScoreEl = document.getElementById('final-score');
    document.getElementById('easy-hard-breakdown').innerHTML = `
      <span class="hard-marks">Hard Marks: ${state.hardMarksEarned}</span>
      <span class="easy-marks">Easy Marks: ${state.easyMarksEarned}</span>
    `;

    finalScoreEl.textContent = Math.round(ratio * 100) + '%';
    document.getElementById('final-label').textContent = `${state.totalMarksEarned} / ${state.totalMarksPossible} marks earned`;

    const ring = $('score-ring');
    if (ring) {
      const c = 2 * Math.PI * 54;
      ring.style.strokeDasharray = c;
      let svg = ring.closest('svg');
      if (!svg.querySelector('#scoreGrad')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        grad.id = 'scoreGrad';
        ['#06b6d4', '#818cf8'].forEach((col, i) => {
          const s = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
          s.setAttribute('offset', i ? '100%' : '0%');
          s.setAttribute('stop-color', col);
          grad.appendChild(s);
        });
        defs.appendChild(grad);
        svg.insertBefore(defs, svg.firstChild);
      }
      setTimeout(() => { ring.style.strokeDashoffset = c - (ratio) * c; }, 100);
    }

    // Topic breakdown
    const tb = $('topic-breakdown');
    tb.querySelectorAll('.topic-row').forEach(r => r.remove());

    Object.keys(state.topicStats).sort().forEach(topic => {
      const d = state.topicStats[topic];
      const p = d.possible > 0 ? Math.round((d.earned / d.possible) * 100) : 0;
      const cls = p >= 75 ? 'good' : p >= 50 ? 'ok' : 'bad';
      const col = cls === 'good' ? 'var(--success)' : cls === 'ok' ? 'var(--warning)' : 'var(--error)';
      const row = document.createElement('div');
      row.className = 'topic-row';
      row.innerHTML = `
        <span class="topic-name">${topic}</span>
        <div class="topic-bar-bg"><div class="topic-bar-fill" style="width:${p}%;background:${col}"></div></div>
        <span class="topic-score ${cls}">${d.earned}/${d.possible}</span>`;
      tb.appendChild(row);
    });

    $('btn-retry-wrong').style.display = state.weakQuestions.length > 0 ? 'inline-block' : 'none';
  }

  function goHome() {
    summaryScreen.style.display = 'none';
    quizScreen.style.display = 'none';
    startScreen.style.display = 'block';
  }

  // --- MATH KEYPAD ---
  function initKeypad() {
    mathKeypad.querySelectorAll('.key').forEach(key => {
      key.addEventListener('click', e => {
        e.preventDefault();
        const val = key.dataset.val;
        const action = key.dataset.action;
        if (!state.activeInput && action !== 'submit' && action !== 'newline') return;

        if (action === 'backspace') {
          state.activeInput.value = state.activeInput.value.slice(0, -1);
        } else if (action === 'clear') {
          state.activeInput.value = '';
        } else if (action === 'newline') {
          if (!state.isEasyModeActive) {
            state.lineCount++;
            renderWorkspace();
          }
        } else if (action === 'submit') {
          if (!state.answered) gradeWorkspace(key);
        } else if (val !== undefined) {
          state.activeInput.value += val;
        }

        if (state.activeInput) state.activeInput.focus();
      });
    });
  }

  // --- KaTeX ---
  function renderKaTeX() {
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    }
  }

  init();
})();
