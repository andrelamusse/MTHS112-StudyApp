// ========== MTHS 112 — FINANCIAL MATHEMATICS (Workspace Format) ==========
(function(){
  const Q = [

{id:5001, topic:'Financial Mathematics',
  question:'R100 000 is invested at 5.1% p.a. compounded quarterly for 2 years. Calculate the future value.',
  markingCriteria: [
    {type:'contains', expected:['0.051','5.1%','5,1%'], description:'Identifies rate: 5.1%', marks:1},
    {type:'contains', expected:['÷ 4','0.01275'], description:'Divides rate by 4 (quarterly)', marks:1},
    {type:'value', expected:8, tolerance:0.1, description:'n = 4 × 2 = 8 periods', marks:1},
    {type:'value', expected:110667, tolerance:100, description:'Future value: R110 667', marks:2}
  ],
  easyTemplate: '<div class="memo-line">$A = @INPUT@\\left(1 + \\frac{@INPUT@}{@INPUT@}\\right)^{@INPUT@}$ </div><div class="memo-line">$= 100000(1.01275)^{8}$ </div><div class="memo-line">$= R@INPUT@$ </div>',
  hardTemplate: 'Future Value: R@INPUT@',
  memo: '<div class="memo-line">$A = 100000\\left(1 + \\frac{0.051}{4}\\right)^{4 \\times 2}$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$= 100000(1.01275)^{8}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R110\\,667$ <span class="memo-mark">✓(2)</span></div>'
},

{id:5002, topic:'Financial Mathematics',
  question:'If R1 000 is invested at 10% p.a. compounded continuously for 10 years, find the future value. Use $A = Pe^{rt}$.',
  markingCriteria: [
    {type:'contains', expected:['e^','e^1','e^(0.1'], description:'Uses continuous compounding formula', marks:1},
    {type:'contains', expected:['p=1000','p = 1000','p= 1000'], description:'Identifies P = R1 000', marks:1},
    {type:'value', expected:2718.28, tolerance:0.02, description:'Future value: R2 718.28', marks:2}
  ],
  easyTemplate: '<div class="memo-line">$A = @INPUT@ \\times e^{@INPUT@ \\times @INPUT@}$ </div><div class="memo-line">$= 1000 \\times e^{1} = 1000 \\times @INPUT@$ </div><div class="memo-line">$= R@INPUT@$ </div>',
  hardTemplate: 'Future Value: R@INPUT@',
  memo: '<div class="memo-line">$A = Pe^{rt} = 1000 \\times e^{0.10 \\times 10}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 1000 \\times e^{1} = 1000 \\times 2.71828$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R2\\,718.28$ <span class="memo-mark">✓(2)</span></div>'
},

{id:5003, topic:'Financial Mathematics',
  question:'How long (in years) does it take for money to double at 10% p.a. compounded continuously? The doubling formula is $t = \\frac{\\ln 2}{r}$.<br><br>8.1 Express $2P = Pe^{rt}$ in logarithmic form. <em>[3 marks]</em><br>8.2 Solve for $t$. <em>[2 marks]</em><br>8.3 Calculate for $r = 10\\%$. <em>[2 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['2 = e^','2p = pe','2=e^'], description:'Cancels P: 2 = e^(rt)', marks:1},
    {type:'contains', expected:['ln 2','ln2','ln(2)'], description:'Takes natural log: ln 2 = rt', marks:1},
    {type:'contains', expected:['t = ln','t=ln','ln 2 ÷ r','ln2÷r'], description:'Solves: t = ln 2 ÷ r', marks:1},
    {type:'value', expected:0.6931, tolerance:0.005, description:'Uses ln 2 ≈ 0.6931', marks:1},
    {type:'value', expected:6.93, tolerance:0.01, description:'Doubling time: 6.93 years', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>8.1</strong> $2P = Pe^{rt}$ → cancel $P$: $2 = e^{rt}$ </div><div class="memo-line">Log form: $\\ln @INPUT@ = rt$ </div><div class="memo-line"><strong>8.2</strong> $t = \\frac{\\ln 2}{r}$ </div><div class="memo-line"><strong>8.3</strong> $t = \\frac{@INPUT@}{@INPUT@} = @INPUT@$ years </div>',
  hardTemplate: '8.1 Form: @INPUT@<br>8.2 $t =$ @INPUT@<br>8.3 $t =$ @INPUT@ years',
  memo: '<div class="memo-line"><strong>8.1</strong> $2P = Pe^{rt}$ → cancel $P$: $2 = e^{rt}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Log form: $\\ln 2 = rt$ <span class="memo-mark">✓(2)</span></div><div class="memo-line"><strong>8.2</strong> $t = \\frac{\\ln 2}{r}$ <span class="memo-mark">✓(2)</span></div><div class="memo-line"><strong>8.3</strong> $t = \\frac{0.6931}{0.10} = 6.93$ years <span class="memo-mark">✓(2)</span></div>'
},

{id:5004, topic:'Financial Mathematics',
  question:'Find the effective annual interest rate equivalent to 8% p.a. compounded semi-annually.',
  markingCriteria: [
    {type:'contains', expected:['0.08','8%'], description:'Uses nominal rate 8%', marks:1},
    {type:'contains', expected:['÷ 2','0.04','1.04'], description:'Semi-annual rate: 0.08 ÷ 2 = 0.04', marks:1},
    {type:'value', expected:1.0816, tolerance:0.0005, description:'(1.04)² = 1.0816', marks:1},
    {type:'value', expected:8.16, tolerance:0.01, description:'Effective rate: 8.16%', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$r_e = \\left(1 + \\frac{@INPUT@}{@INPUT@}\\right)^2 - 1$ </div><div class="memo-line">$= (@INPUT@)^2 - 1 = @INPUT@ - 1$ </div><div class="memo-line">$= @INPUT@ = @INPUT@\\%$ </div>',
  hardTemplate: 'Effective Rate: @INPUT@%',
  memo: '<div class="memo-line">$r_e = \\left(1 + \\frac{0.08}{2}\\right)^2 - 1$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$= (1.04)^2 - 1 = 1.0816 - 1$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 0.0816 = 8.16\\%$ <span class="memo-mark">✓(1)</span></div>'
},

{id:5005, topic:'Financial Mathematics',
  question:'A couple takes out a mortgage of R500 000 at 9% p.a. compounded monthly, repaid over 20 years. Use $PMT = \\frac{PV \\cdot i}{1 - (1+i)^{-n}}$.<br><br>8.1 Calculate the monthly instalment. <em>[3 marks]</em><br>8.2 Calculate the total cost of the house. <em>[2 marks]</em>',
  markingCriteria: [
    {type:'value', expected:0.0075, tolerance:0.0001, description:'Monthly rate: 0.09 ÷ 12 = 0.0075', marks:1},
    {type:'value', expected:240, tolerance:0.1, description:'Periods: 20 × 12 = 240', marks:1},
    {type:'value', expected:3750, tolerance:0.5, description:'Numerator: 500000 × 0.0075 = 3750', marks:1},
    {type:'value', expected:4498.63, tolerance:0.02, description:'Monthly payment: R4 498.63', marks:2},
    {type:'value', expected:1079671.20, tolerance:1, description:'Total cost: 4498.63 × 240 = R1 079 671.20', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>8.1</strong> $i = \\frac{@INPUT@}{12} = @INPUT@$, $n = @INPUT@ \\times 12 = @INPUT@$ </div><div class="memo-line">$PMT = \\frac{@INPUT@ \\times @INPUT@}{1 - (@INPUT@)^{-@INPUT@}} = \\frac{@INPUT@}{0.83359}$ </div><div class="memo-line">$= R@INPUT@$ </div><div class="memo-line"><strong>8.2</strong> Total cost $= @INPUT@ \\times 240 = R@INPUT@$ </div>',
  hardTemplate: '8.1 PMT = R@INPUT@<br>8.2 Total Cost = R@INPUT@',
  memo: '<div class="memo-line"><strong>8.1</strong> $i = \\frac{0.09}{12} = 0.0075$, $n = 20 \\times 12 = 240$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$PMT = \\frac{500000 \\times 0.0075}{1 - (1.0075)^{-240}} = \\frac{3750}{0.83359}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R4\\,498.63$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>8.2</strong> Total cost $= 4498.63 \\times 240 = R1\\,079\\,671.20$ <span class="memo-mark">✓(2)</span></div>'
},

// ===== NEW: From 2024 Exam Q9 (Multi-period compound interest) =====
{id:5006, topic:'Financial Mathematics',
  question:'At the start of 2015, R100 000 is invested at 5.3% p.a. compounded monthly. At the start of 2018, the rate changes to 6.35% p.a. compounded quarterly. At the start of July 2018, R50 000 is deposited. Calculate the value at the start of 2025. <em>[10 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['0.053','5.3%'], description:'Identifies first rate: 5.3%', marks:1},
    {type:'value', expected:36, tolerance:0.5, description:'Period 1: 3 years × 12 = 36 months', marks:1},
    {type:'value', expected:117170, tolerance:200, description:'Value after period 1: ≈ R117 170', marks:2},
    {type:'contains', expected:['0.0635','6.35%'], description:'Identifies second rate: 6.35%', marks:1},
    {type:'value', expected:50000, tolerance:1, description:'Adds R50 000 deposit', marks:1},
    {type:'value', expected:242000, tolerance:5000, description:'Final value ≈ R242 000', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>Period 1 (2015–2018):</strong> $A_1 = 100000\\left(1 + \\frac{@INPUT@}{12}\\right)^{36}$ </div><div class="memo-line">$= R@INPUT@$ </div><div class="memo-line"><strong>Period 2 (Jan–Jun 2018):</strong> $A_2 = A_1\\left(1 + \\frac{@INPUT@}{4}\\right)^{2}$ </div><div class="memo-line"><strong>Add deposit:</strong> $A_2 + @INPUT@ = R@INPUT@$ </div><div class="memo-line"><strong>Period 3 (Jul 2018–2025):</strong> Final $= R@INPUT@$ </div>',
  hardTemplate: 'Final Value: R@INPUT@',
  memo: '<div class="memo-line"><strong>Period 1:</strong> $A_1 = 100000(1 + \\frac{0.053}{12})^{36} = R117\\,170$ <span class="memo-mark">✓(3)</span></div><div class="memo-line"><strong>Period 2:</strong> Rate changes to 6.35% quarterly <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>Deposit:</strong> Add R50 000 at start of July 2018 <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>Period 3:</strong> Continue compounding to 2025 <span class="memo-mark">✓(3)</span></div><div class="memo-line">Final value ≈ R242 000 <span class="memo-mark">✓(2)</span></div>'
},

// ===== NEW: From 2024 Exam Q10 (Annuity + lump sum) =====
{id:5007, topic:'Financial Mathematics',
  question:'A person invests R5 000 at the beginning of a year at 4.5% compounded annually. At the beginning of each subsequent year, an additional R1 000 is invested. How much will there be at the end of 10 years? <em>[12 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['1.045','4.5%','0.045'], description:'Identifies rate: 4.5%', marks:1},
    {type:'value', expected:10, tolerance:0.1, description:'n = 10 years', marks:1},
    {type:'value', expected:5000, tolerance:0.5, description:'Initial investment: R5 000', marks:1},
    {type:'value', expected:1000, tolerance:0.5, description:'Annual additional: R1 000', marks:1},
    {type:'value', expected:7765, tolerance:100, description:'Lump sum grows: 5000(1.045)^10 ≈ R7 765', marks:2},
    {type:'value', expected:12288, tolerance:200, description:'Annuity FV: 1000 × [(1.045^10 - 1)/0.045] ≈ R12 288', marks:2},
    {type:'anyValue', expected:[19500, 19600, 20053, 20100], tolerance:600, description:'Total ≈ R19 500–R20 100', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>Lump sum:</strong> $FV_1 = @INPUT@(1.045)^{10} = R@INPUT@$ </div><div class="memo-line"><strong>Annuity:</strong> $FV_2 = @INPUT@ \\times \\frac{(1.045)^{10} - 1}{0.045} = R@INPUT@$ </div><div class="memo-line"><strong>Total:</strong> $= R@INPUT@ + R@INPUT@ = R@INPUT@$ </div>',
  hardTemplate: 'Total after 10 years: R@INPUT@',
  memo: '<div class="memo-line"><strong>Lump sum:</strong> $FV_1 = 5000(1.045)^{10} = R7\\,765$ <span class="memo-mark">✓(3)</span></div><div class="memo-line"><strong>Annuity:</strong> $FV_2 = 1000 \\times \\frac{(1.045)^{10} - 1}{0.045} = R12\\,288$ <span class="memo-mark">✓(5)</span></div><div class="memo-line"><strong>Total:</strong> $≈ R20\\,053$ <span class="memo-mark">✓(4)</span></div>'
},

// ===== NEW: From 2022 Exam Q7 (Ali birthday savings multi-period) =====
{id:5008, topic:'Financial Mathematics',
  question:'On her 18th birthday, Ali invests R3 500 at 7.5% p.a. compounded monthly. After 6 months the rate changes to 7.75% p.a. compounded quarterly. On her 19th birthday she adds R3 900. Eight months later, the rate changes to 8.1% p.a. compounded monthly. What amount does she have on her 20th birthday? <em>[10 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['0.075','7.5%','7,5%'], description:'First rate: 7.5% monthly', marks:1},
    {type:'value', expected:3500, tolerance:0.5, description:'Initial: R3 500', marks:1},
    {type:'value', expected:3632, tolerance:20, description:'After 6 months: ≈ R3 632', marks:2},
    {type:'value', expected:3900, tolerance:0.5, description:'Adds R3 900 on 19th birthday', marks:1},
    {type:'value', expected:7716, tolerance:100, description:'Total at 19th birthday ≈ R7 716', marks:2},
    {type:'value', expected:8119, tolerance:200, description:'Final on 20th birthday ≈ R8 119', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>6 months at 7.5% monthly:</strong> $= 3500(1 + \\frac{@INPUT@}{12})^6 = R@INPUT@$ </div><div class="memo-line"><strong>6 months at 7.75% quarterly:</strong> $= @INPUT@(1 + \\frac{@INPUT@}{4})^2 = R@INPUT@$ </div><div class="memo-line"><strong>Add R3 900:</strong> $= R@INPUT@$ </div><div class="memo-line"><strong>4 months at 8.1% monthly:</strong> $= @INPUT@(1 + \\frac{@INPUT@}{12})^4 = R@INPUT@$ </div>',
  hardTemplate: 'Amount on 20th birthday: R@INPUT@',
  memo: '<div class="memo-line">$A_1 = 3500(1 + \\frac{0.075}{12})^6 = R3\\,632$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$A_2 = 3632(1 + \\frac{0.0775}{4})^2 = R3\\,775$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">Add R3 900: $A_3 = 3775 + 3900 = R7\\,675$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">8 months at 7.75% quarterly: $A_4 ≈ R8\\,078$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">4 months at 8.1% monthly: $A_5 ≈ R8\\,298$ <span class="memo-mark">✓(3)</span></div>'
},

// ===== NEW: Amortization loan payoff time =====
{id:5009, topic:'Financial Mathematics',
  question:'A loan of R100 000 is taken at 6% p.a. compounded annually. Using $PV = PMT \\times \\frac{1 - (1+i)^{-n}}{i}$:<br><br>10.1 Calculate the annual payment to repay over 10 years. <em>[4 marks]</em><br>10.2 Calculate the total interest paid. <em>[2 marks]</em>',
  markingCriteria: [
    {type:'value', expected:0.06, tolerance:0.001, description:'Rate: i = 0.06', marks:1},
    {type:'value', expected:10, tolerance:0.1, description:'n = 10 years', marks:1},
    {type:'value', expected:13586.80, tolerance:0.5, description:'Annual payment: R13 586.80', marks:2},
    {type:'value', expected:135868, tolerance:1, description:'Total paid: 10 × R13 586.80 = R135 868', marks:1},
    {type:'value', expected:35868, tolerance:1, description:'Total interest: R135 868 − R100 000 = R35 868', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>10.1</strong> $100000 = PMT \\times \\frac{1 - (1.06)^{-10}}{0.06}$ </div><div class="memo-line">$PMT = \\frac{100000 \\times @INPUT@}{1 - (1.06)^{-10}} = R@INPUT@$ </div><div class="memo-line"><strong>10.2</strong> Total paid $= @INPUT@ \\times 10 = R@INPUT@$ </div><div class="memo-line">Interest $= R@INPUT@ - R@INPUT@ = R@INPUT@$ </div>',
  hardTemplate: '10.1 PMT = R@INPUT@<br>10.2 Total interest = R@INPUT@',
  memo: '<div class="memo-line"><strong>10.1</strong> $100000 = PMT \\times \\frac{1 - (1.06)^{-10}}{0.06}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$PMT = R13\\,586.80$ <span class="memo-mark">✓(3)</span></div><div class="memo-line"><strong>10.2</strong> Total paid $= 13586.80 \\times 10 = R135\\,868$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Interest $= R135\\,868 - R100\\,000 = R35\\,868$ <span class="memo-mark">✓(1)</span></div>'
},

// ===== NEW: Effective rate compounded weekly =====
{id:5010, topic:'Financial Mathematics',
  question:'Find the effective annual interest rate equivalent to 6% p.a. compounded weekly (52 weeks per year). <em>[2 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['0.06','6%'], description:'Uses nominal rate 6%', marks:1},
    {type:'value', expected:6.18, tolerance:0.01, description:'Effective rate ≈ 6.18%', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$r_e = \\left(1 + \\frac{@INPUT@}{52}\\right)^{52} - 1$ </div><div class="memo-line">$= @INPUT@\\%$ </div>',
  hardTemplate: 'Effective Rate: @INPUT@%',
  memo: '<div class="memo-line">$r_e = \\left(1 + \\frac{0.06}{52}\\right)^{52} - 1$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 0.0618 = 6.18\\%$ <span class="memo-mark">✓(1)</span></div>'
},

  ];
  if(!window.QUESTIONS) window.QUESTIONS=[];
  window.QUESTIONS.push(...Q);
})();
