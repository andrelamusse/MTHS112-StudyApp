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

  ];
  if(!window.QUESTIONS) window.QUESTIONS=[];
  window.QUESTIONS.push(...Q);
})();
