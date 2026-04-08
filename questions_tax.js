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
    {type:'anyValue', expected:[344720, 360920, 375040], tolerance:1, description:'Taxable income (depends on whether interest is part of salary)', marks:1},
    {type:'value', expected:73726, tolerance:1, description:'Uses base tax: R73 726', marks:1},
    {type:'contains', expected:['0.31','31%','× 0.31'], description:'Applies 31% rate', marks:1},
    {type:'value', expected:16425, tolerance:1, description:'Subtracts primary rebate: R16 425', marks:1}
  ],
  easyTemplate: '<div class="memo-line"><strong>@INPUT@ Taxable income:</strong></div><div class="memo-line">Annual interest $= @INPUT@ \\times @INPUT@ = R@INPUT@\\,@INPUT@ < R@INPUT@\\,@INPUT@$ ✓ </div><div class="memo-line">Annual pension $= @INPUT@ \\times @INPUT@ = R@INPUT@\\,@INPUT@ < R@INPUT@\\,@INPUT@$ ✓ </div><div class="memo-line">Gross income $= R@INPUT@\\,@INPUT@ + R@INPUT@\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line">Taxable income $= @INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line"><strong>@INPUT@ Tax:</strong></div><div class="memo-line">$T = @INPUT@\\,@INPUT@ + @INPUT@(@INPUT@\\,@INPUT@ - @INPUT@\\,100)$ </div><div class="memo-line">$= @INPUT@\\,@INPUT@ + @INPUT@(6\\,@INPUT@) = @INPUT@\\,@INPUT@ + 2\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line">After rebate: $@INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ = R\@INPUT@\\,@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line"><strong>4.1 Taxable income:</strong></div><div class="memo-line">Annual interest $= 1260 \\times 12 = R15\\,120 < R23\\,800$ ✓ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Annual pension $= 2580 \\times 12 = R30\\,960 < R350\\,000$ ✓ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Gross income $= R390\\,800 + R15\\,120 = R405\\,920$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Taxable income $= 405\\,920 - 30\\,960 - 15\\,120 = R359\\,840$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>4.2 Tax:</strong></div><div class="memo-line">$T = 73\\,726 + 0.31(359\\,840 - 353\\,100)$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 73\\,726 + 0.31(6\\,740) = 73\\,726 + 2\\,089.40 = R75\\,815.40$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">After rebate: $75\\,815.40 - 16\\,425 = R59\\,390.40$ <span class="memo-mark">✓(1)</span></div>'
},

  ];
  if(!window.QUESTIONS) window.QUESTIONS=[];
  window.QUESTIONS.push(...Q);
})();
