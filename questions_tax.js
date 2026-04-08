// ========== MTHS 112 — INCOME TAX (Workspace Format) ==========
(function(){
  const Q = [

{id:4001, topic:'Income Tax Calculations',
  question:'A person of 55 years earns a taxable income of R860 000/year which includes R23 000 interest on investment. Monthly annuity payment: R4 000. Interest exemption: R23 800. Max annuity deduction: R350 000. Primary rebate: R17 235.<br><br>Tax table (relevant bracket): R673 001 – R857 900 → R179 147 + 39% of amount above R673 000.<br><br>5.1 Determine the taxable income. <em>[4 marks]</em><br>5.3 Determine the tax due. <em>[3 marks]</em><br>5.4 Determine the effective tax rate. <em>[1 mark]</em>',
  markingCriteria: [
    {type:'value', expected:48000, tolerance:1, description:'Annual annuity: R4 000 × 12 = R48 000', marks:1},
    {type:'contains', expected:['48000','48 000'], description:'Shows annuity < R350 000 ∴ deductible', marks:1},
    {type:'contains', expected:['23000','23 000'], description:'Shows interest < R23 800 ∴ deductible', marks:1},
    {type:'value', expected:789000, tolerance:1, description:'Taxable income: 860000 - 48000 - 23000 = R789 000', marks:1},
    {type:'value', expected:179147, tolerance:1, description:'Uses base tax: R179 147', marks:1},
    {type:'value', expected:116000, tolerance:1, description:'Amount above bracket: 789000 - 673000 = R116 000', marks:1},
    {type:'anyValue', expected:[224387.00, 224517.00], tolerance:1, description:'Tax before rebate (approx R224 387)', marks:1},
    {type:'value', expected:17235, tolerance:1, description:'Subtracts primary rebate: R17 235', marks:1},
    {type:'anyValue', expected:[207152.00, 207282.00], tolerance:1, description:'Tax due (approx R207 152)', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>@INPUT@ Taxable income:</strong></div><div class="memo-line">Annuity: $@INPUT@ \\times @INPUT@ = R@INPUT@\\,@INPUT@ < R@INPUT@\\,@INPUT@$ ✓ deductible </div><div class="memo-line">Interest: $R@INPUT@\\,@INPUT@ < R@INPUT@\\,@INPUT@$ ✓ fully deductible </div><div class="memo-line">Taxable income $= @INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line"><strong>@INPUT@ Tax due:</strong></div><div class="memo-line">$T = @INPUT@\\,@INPUT@ + @INPUT@(@INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@)$ </div><div class="memo-line">$= @INPUT@\\,@INPUT@ + @INPUT@(@INPUT@\\,@INPUT@) = @INPUT@\\,@INPUT@ + @INPUT@\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line">After rebate: $@INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ = R\@INPUT@\\,@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line"><strong>5.1 Taxable income:</strong></div><div class="memo-line">Annuity: $4000 \\times 12 = R48\\,000 < R350\\,000$ ✓ deductible <span class="memo-mark">✓(1)</span></div><div class="memo-line">Interest: $R23\\,000 < R23\\,800$ ✓ fully deductible <span class="memo-mark">✓(1)</span></div><div class="memo-line">Taxable income $= 860\\,000 - 48\\,000 - 23\\,000 = R789\\,000$ <span class="memo-mark">✓(2)</span></div><div class="memo-line"><strong>5.3 Tax due:</strong></div><div class="memo-line">$T = 179\\,147 + 0.39(789\\,000 - 673\\,000)$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 179\\,147 + 0.39(116\\,000) = 179\\,147 + 45\\,240 = R224\\,387$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">After rebate: $224\\,387 - 17\\,235 = R207\\,152$ <span class="memo-mark">✓(1)</span></div>'
},

{id:4002, topic:'Income Tax Calculations',
  question:'A 35-year-old earns R390 800/year salary, gets R1 260/month investment interest, contributes R2 580/month to pension fund. Interest exemption: R23 800. Max annuity deduction: R350 000. Primary rebate: R16 425.<br><br>Tax table: R353 101 – R488 700 → R73 726 + 31% of amount above R353 100.<br><br>4.1 Determine the taxable income. <em>[4 marks]</em><br>4.2 Determine the tax due. <em>[4 marks]</em>',
  markingCriteria: [
    {type:'value', expected:15120, tolerance:1, description:'Annual interest: 1260 × 12 = R15 120', marks:1},
    {type:'value', expected:30960, tolerance:1, description:'Annual pension: 2580 × 12 = R30 960', marks:1},
    {type:'contains', expected:['15120','15 120'], description:'Interest < R23 800 ∴ deductible', marks:1},
    {type:'anyValue', expected:[344720, 359840, 360920, 375040], tolerance:1, description:'Taxable income (depends on whether interest is part of salary)', marks:1},
    {type:'value', expected:73726, tolerance:1, description:'Uses base tax: R73 726', marks:1},
    {type:'contains', expected:['0.31','31%','× 0.31'], description:'Applies 31% rate', marks:1},
    {type:'value', expected:16425, tolerance:1, description:'Subtracts primary rebate: R16 425', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>@INPUT@ Taxable income:</strong></div><div class="memo-line">Annual interest $= @INPUT@ \\times @INPUT@ = R@INPUT@\\,@INPUT@ < R@INPUT@\\,@INPUT@$ ✓ </div><div class="memo-line">Annual pension $= @INPUT@ \\times @INPUT@ = R@INPUT@\\,@INPUT@ < R@INPUT@\\,@INPUT@$ ✓ </div><div class="memo-line">Gross income $= R@INPUT@\\,@INPUT@ + R@INPUT@\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line">Taxable income $= @INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line"><strong>@INPUT@ Tax:</strong></div><div class="memo-line">$T = @INPUT@\\,@INPUT@ + @INPUT@(@INPUT@\\,@INPUT@ - @INPUT@\\,100)$ </div><div class="memo-line">$= @INPUT@\\,@INPUT@ + @INPUT@(6\\,@INPUT@) = @INPUT@\\,@INPUT@ + 2\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line">After rebate: $@INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ = R\@INPUT@\\,@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line"><strong>4.1 Taxable income:</strong></div><div class="memo-line">Annual interest $= 1260 \\times 12 = R15\\,120 < R23\\,800$ ✓ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Annual pension $= 2580 \\times 12 = R30\\,960 < R350\\,000$ ✓ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Gross income $= R390\\,800 + R15\\,120 = R405\\,920$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Taxable income $= 405\\,920 - 30\\,960 - 15\\,120 = R359\\,840$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>4.2 Tax:</strong></div><div class="memo-line">$T = 73\\,726 + 0.31(359\\,840 - 353\\,100)$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 73\\,726 + 0.31(6\\,740) = 73\\,726 + 2\\,089.40 = R75\\,815.40$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">After rebate: $75\\,815.40 - 16\\,425 = R59\\,390.40$ <span class="memo-mark">✓(1)</span></div>'
},

// ===== NEW: From 2024 2nd Opp Q5 (R450,000 salary, different tax table) =====
{id:4003, topic:'Income Tax Calculations',
  question:'A person earns R450 000/year salary, has R5 000 interest on investment, and contributes R1 500/month to an annuity. Interest exemption: R23 800. Max annuity deduction: R350 000. Primary rebate: R17 235.<br><br>Tax table: R370 501 – R512 800 → R77 362 + 31% of amount above R370 500.<br><br>5.1 Determine the taxable income. <em>[4 marks]</em><br>5.2 Write the tax function T(x) for this bracket. <em>[1 mark]</em><br>5.3 Determine the tax due. <em>[3 marks]</em><br>5.4 Determine the effective tax rate. <em>[1 mark]</em>',
  markingCriteria: [
    {type:'value', expected:18000, tolerance:1, description:'Annual annuity: 1500 × 12 = R18 000', marks:1},
    {type:'contains', expected:['18000','18 000'], description:'Annuity < R350 000 ∴ deductible', marks:1},
    {type:'contains', expected:['5000','5 000'], description:'Interest < R23 800 ∴ deductible', marks:1},
    {type:'value', expected:427000, tolerance:1, description:'Taxable income: 450000 − 18000 − 5000 = R427 000', marks:1},
    {type:'value', expected:77362, tolerance:1, description:'Uses base tax: R77 362', marks:1},
    {type:'contains', expected:['0.31','31%'], description:'Applies 31% rate', marks:1},
    {type:'value', expected:94877, tolerance:2, description:'Tax before rebate: 77362 + 0.31(56500) = R94 877', marks:1},
    {type:'value', expected:77642, tolerance:2, description:'Tax after rebate: 94877 − 17235 = R77 642', marks:1},
    {type:'value', expected:18.18, tolerance:0.1, description:'Effective rate: 77642 ÷ 427000 × 100 = 18.18%', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>5.1</strong> Annuity: $@INPUT@ \\times 12 = R@INPUT@$ < R350 000 ✓ </div><div class="memo-line">Interest: $R@INPUT@ < R@INPUT@$ ✓ </div><div class="memo-line">Taxable income $= @INPUT@ - @INPUT@ - @INPUT@ = R@INPUT@$ </div><div class="memo-line"><strong>5.2</strong> $T(x) = R@INPUT@ + 0.31(x - R@INPUT@)$ </div><div class="memo-line"><strong>5.3</strong> $T = @INPUT@ + 0.31(@INPUT@ - @INPUT@) = @INPUT@ + @INPUT@ = R@INPUT@$ </div><div class="memo-line">After rebate: $@INPUT@ - @INPUT@ = R@INPUT@$ </div><div class="memo-line"><strong>5.4</strong> $\\frac{@INPUT@}{@INPUT@} \\times 100 = @INPUT@\\%$ </div>',
  hardTemplate: '5.1 Taxable income: R@INPUT@<br>5.3 Tax due: R@INPUT@<br>5.4 Effective rate: @INPUT@%',
  memo: '<div class="memo-line"><strong>5.1</strong> Annuity: $1500 \\times 12 = R18\\,000 < R350\\,000$ ✓ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Interest: $R5\\,000 < R23\\,800$ ✓ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Taxable income $= 450\\,000 - 18\\,000 - 5\\,000 = R427\\,000$ <span class="memo-mark">✓(2)</span></div><div class="memo-line"><strong>5.2</strong> $T(x) = R77\\,362 + 0.31(x - R370\\,500)$ for $370\\,500 < x \\leq 512\\,800$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>5.3</strong> $T = 77\\,362 + 0.31(427\\,000 - 370\\,500) = 77\\,362 + 17\\,515 = R94\\,877$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">After rebate: $94\\,877 - 17\\,235 = R77\\,642$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>5.4</strong> $\\frac{77\\,642}{427\\,000} \\times 100 = 18.18\\%$ <span class="memo-mark">✓(1)</span></div>'
},

// ===== NEW: Piecewise tax function =====
{id:4004, topic:'Income Tax Calculations',
  question:'Suppose a person with salary less than R60 000 is exempt from tax. From R60 000 to R160 000, tax = R30 000 + 15% of income. Above R160 000, tax = R40 000 + 20% of income above R160 000.<br><br>3.2.1 Write the income tax as a piecewise function $T(x)$. <em>[6 marks]</em><br>3.2.2 Determine the tax if income is R170 000. <em>[2 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['t(x) = 0','t = 0','no tax','exempt'], description:'T(x) = 0 for x < 60 000', marks:1},
    {type:'contains', expected:['30000 + 0.15','30 000 + 0.15x','30000+0.15'], description:'T(x) = 30000 + 0.15x for 60000 ≤ x ≤ 160000', marks:2},
    {type:'contains', expected:['40000 + 0.20','40 000 + 0.20','40000+0.2'], description:'T(x) = 40000 + 0.20(x − 160000) for x > 160000', marks:2},
    {type:'value', expected:42000, tolerance:1, description:'T(170000) = 40000 + 0.20(10000) = R42 000', marks:2}
  ],
  easyTemplate: '<div class="memo-line"><strong>3.2.1</strong> $T(x) = \\begin{cases} @INPUT@ & x < @INPUT@ \\\\ @INPUT@ + @INPUT@x & @INPUT@ \\leq x \\leq @INPUT@ \\\\ @INPUT@ + @INPUT@(x - @INPUT@) & x > @INPUT@ \\end{cases}$ </div><div class="memo-line"><strong>3.2.2</strong> $T(170000) = @INPUT@ + 0.20(@INPUT@ - @INPUT@) = @INPUT@ + @INPUT@ = R@INPUT@$ </div>',
  hardTemplate: 'T(170000) = R@INPUT@',
  memo: '<div class="memo-line"><strong>3.2.1</strong> $T(x) = 0$ for $x < 60\\,000$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$T(x) = 30\\,000 + 0.15x$ for $60\\,000 \\leq x \\leq 160\\,000$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$T(x) = 40\\,000 + 0.20(x - 160\\,000)$ for $x > 160\\,000$ <span class="memo-mark">✓(2)</span></div><div class="memo-line"><strong>3.2.2</strong> $T(170\\,000) = 40\\,000 + 0.20(170\\,000 - 160\\,000) = 40\\,000 + 2\\,000 = R42\\,000$ <span class="memo-mark">✓(2)</span></div>'
},

  ];
  if(!window.QUESTIONS) window.QUESTIONS=[];
  window.QUESTIONS.push(...Q);
})();
