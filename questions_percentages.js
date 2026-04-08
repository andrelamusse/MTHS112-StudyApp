// ========== MTHS 112 — PERCENTAGES & VAT (Workspace Format) ==========
window.QUESTIONS = [

{id:1001, topic:'Percentages & VAT',
  question:'In 2018 VAT changed from 14% to 15%. Determine the percentage change in VAT to two decimal places.',
  markingCriteria: [
    {type:'contains', expected:['15 - 14','15-14','1'], description:'Identifies the change (15 - 14 = 1)', marks:1},
    {type:'contains', expected:['÷ 14','÷14'], description:'Divides by the original value (14)', marks:1},
    {type:'anyValue', expected:[7.14, 0.0714], tolerance:0.01, description:'Correct final answer: 7.14% or 0.0714', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Change in VAT = @INPUT@% − @INPUT@% = 1% </div><div class="memo-line">% change = $\\frac{\\text{change}}{\\text{original}} \\times 100 = \\frac{1}{@INPUT@} \\times 100$ </div><div class="memo-line">$= \@INPUT@\\%$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Change in VAT = 15% − 14% = 1% <span class="memo-mark">✓(1)</span></div><div class="memo-line">% change = $\\frac{\\text{change}}{\\text{original}} \\times 100 = \\frac{1}{14} \\times 100$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 7.14\\%$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1002, topic:'Percentages & VAT',
  question:'In 2022 VAT changed from 15% to 16%. Determine the percentage change in VAT to two decimal places.',
  markingCriteria: [
    {type:'contains', expected:['16 - 15','16-15'], description:'Identifies the change (16 - 15 = 1)', marks:1},
    {type:'contains', expected:['÷ 15','÷15'], description:'Divides by the original value (15)', marks:1},
    {type:'anyValue', expected:[6.67, 0.0667], tolerance:0.01, description:'Correct final answer: 6.67% or 0.0667', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Change = @INPUT@% − @INPUT@% = 1% </div><div class="memo-line">% change = $\\frac{1}{@INPUT@} \\times 100$ </div><div class="memo-line">$= \@INPUT@\\%$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Change = 16% − 15% = 1% <span class="memo-mark">✓(1)</span></div><div class="memo-line">% change = $\\frac{1}{15} \\times 100$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 6.67\\%$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1003, topic:'Percentages & VAT',
  question:'An item is sold for R500 in 2022 with VAT of 16%. What was the price of the item before VAT was added?',
  markingCriteria: [
    {type:'contains', expected:['1.16','1 + 0.16'], description:'Identifies the VAT-inclusive factor (1.16)', marks:1},
    {type:'contains', expected:['500 ÷','÷ 1.16','÷1.16'], description:'Divides R500 by 1.16', marks:1},
    {type:'value', expected:431.03, tolerance:0.01, description:'Correct answer: R431.03', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Price before VAT $= \\frac{\\text{Selling price}}{1 + \\text{VAT rate}}$ </div><div class="memo-line">$= \\frac{@INPUT@}{@INPUT@}$ </div><div class="memo-line">$= R\@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Price before VAT $= \\frac{\\text{Selling price}}{1 + \\text{VAT rate}}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= \\frac{500}{1.16}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R431.03$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1004, topic:'Percentages & VAT',
  question:'A product costs R250 excluding VAT. If VAT is 15%, calculate the selling price including VAT.',
  markingCriteria: [
    {type:'contains', expected:['1.15','× 1.15','x 1.15'], description:'Uses correct VAT factor (1.15)', marks:1},
    {type:'value', expected:287.50, tolerance:0.01, description:'Correct answer: R287.50', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Selling price $= @INPUT@ \\times @INPUT@$ </div><div class="memo-line">$= R\@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Selling price $= 250 \\times 1.15$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R287.50$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1005, topic:'Percentages & VAT',
  question:'The price of petrol increased from R21.50 to R23.80 per litre. Calculate the percentage increase to two decimal places.',
  markingCriteria: [
    {type:'value', expected:2.30, tolerance:0.01, description:'Calculates the change: R23.80 - R21.50 = R2.30', marks:1},
    {type:'contains', expected:['÷ 21.50','÷21.50','÷ 21.5','÷21.5'], description:'Divides by original value (21.50)', marks:1},
    {type:'anyValue', expected:[10.70, 0.107], tolerance:0.01, description:'Correct answer: 10.70% or 0.107', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Change $= @INPUT@ - @INPUT@ = R@INPUT@$ </div><div class="memo-line">% increase $= \\frac{@INPUT@}{@INPUT@} \\times 100$ </div><div class="memo-line">$= \@INPUT@\\%$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Change $= 23.80 - 21.50 = R2.30$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">% increase $= \\frac{2.30}{21.50} \\times 100$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 10.70\\%$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1006, topic:'Percentages & VAT',
  question:'A laptop is advertised at R15 999 (VAT inclusive at 15%). Calculate the price excluding VAT.',
  markingCriteria: [
    {type:'contains', expected:['1.15','÷ 1.15','÷1.15'], description:'Divides by 1.15', marks:1},
    {type:'value', expected:13912.17, tolerance:0.01, description:'Correct answer: R13 912.17', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Price excl. VAT $= \\frac{@INPUT@}{@INPUT@}$ </div><div class="memo-line">$= R\@INPUT@\\,@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Price excl. VAT $= \\frac{15999}{1.15}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R13\\,912.17$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1007, topic:'Percentages & VAT',
  question:'A company\'s revenue decreased from R2 400 000 to R1 920 000. Calculate the percentage decrease.',
  markingCriteria: [
    {type:'value', expected:480000, tolerance:0.5, description:'Calculates the change: R480 000', marks:1},
    {type:'contains', expected:['2400000','2 400 000'], description:'Divides by original (R2 400 000)', marks:1},
    {type:'anyValue', expected:[20, 0.20], tolerance:0.01, description:'Correct answer: 20% or 0.20', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Change $= 2\\,@INPUT@\\,@INPUT@ - 1\\,@INPUT@\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line">% decrease $= \\frac{@INPUT@}{@INPUT@} \\times 100$ </div><div class="memo-line">$= \@INPUT@\\%$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Change $= 2\\,400\\,000 - 1\\,920\\,000 = R480\\,000$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">% decrease $= \\frac{480000}{2400000} \\times 100$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= 20\\%$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1008, topic:'Percentages & VAT',
  question:'A car was purchased for R320 000. After one year it is valued at R272 000. Calculate the percentage depreciation.',
  markingCriteria: [
    {type:'anyValue', expected:[48000, 0.85], tolerance:0.5, description:'Calculates depreciation (R48 000) or ratio (0.85)', marks:1},
    {type:'anyValue', expected:[15, 0.15], tolerance:0.01, description:'Correct answer: 15% or 0.15', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Depreciation $= @INPUT@\\,@INPUT@ - @INPUT@\\,@INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line">% depreciation $= \\frac{@INPUT@}{@INPUT@} \\times 100 = \@INPUT@\\%$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Depreciation $= 320\\,000 - 272\\,000 = R48\\,000$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">% depreciation $= \\frac{48000}{320000} \\times 100 = 15\\%$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1009, topic:'Percentages & VAT',
  question:'A shirt costs R450 including 15% VAT. Calculate the VAT amount included in the price.',
  markingCriteria: [
    {type:'value', expected:391.30, tolerance:0.01, description:'Calculates price excl VAT: R391.30', marks:1},
    {type:'value', expected:58.70, tolerance:0.01, description:'Correct VAT amount: R58.70', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Price excl. VAT $= \\frac{@INPUT@}{@INPUT@} = R@INPUT@$ </div><div class="memo-line">VAT amount $= @INPUT@ - @INPUT@ = R\@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Price excl. VAT $= \\frac{450}{1.15} = R391.30$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">VAT amount $= 450 - 391.30 = R58.70$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1010, topic:'Percentages & VAT',
  question:'A store marks up products by 40% on cost price. If the cost price is R600, what is the selling price excluding VAT?',
  markingCriteria: [
    {type:'contains', expected:['1.4','1.40','× 1.4'], description:'Uses mark-up factor (1.40)', marks:1},
    {type:'value', expected:840, tolerance:0.01, description:'Correct answer: R840', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Selling price $= @INPUT@ \\times @INPUT@$ </div><div class="memo-line">$= R\@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Selling price $= 600 \\times 1.40$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R840$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1011, topic:'Percentages & VAT',
  question:'A store marks up products by 40% on cost and then adds 15% VAT. If cost price is R600, calculate the final selling price including VAT.',
  markingCriteria: [
    {type:'value', expected:840, tolerance:0.01, description:'Mark-up price: R840', marks:1},
    {type:'contains', expected:['1.15','× 1.15'], description:'Applies VAT factor (1.15)', marks:1},
    {type:'value', expected:966, tolerance:0.01, description:'Final price: R966', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Selling price excl. VAT $= @INPUT@ \\times @INPUT@ = R@INPUT@$ </div><div class="memo-line">Including VAT $= @INPUT@ \\times @INPUT@$ </div><div class="memo-line">$= R\@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Selling price excl. VAT $= 600 \\times 1.40 = R840$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">Including VAT $= 840 \\times 1.15$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R966$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1012, topic:'Percentages & VAT',
  question:'An item\'s price increased by 12% to R560. What was the original price?',
  markingCriteria: [
    {type:'contains', expected:['1.12','÷ 1.12','÷1.12'], description:'Divides by 1.12', marks:1},
    {type:'value', expected:500, tolerance:0.01, description:'Correct answer: R500', marks:1}
  ],
  easyTemplate: '<div class="memo-line">Original price $= \\frac{@INPUT@}{@INPUT@}$ </div><div class="memo-line">$= R\@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Original price $= \\frac{560}{1.12}$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R500$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1013, topic:'Percentages & VAT',
  question:'House prices increased by 8% one year and then by 5% the next year. If a house initially cost R1 200 000, what is its value after both increases?',
  markingCriteria: [
    {type:'value', expected:1296000, tolerance:0.5, description:'After year 1: R1 296 000', marks:1},
    {type:'contains', expected:['1.05','× 1.05'], description:'Applies second increase (1.05)', marks:1},
    {type:'value', expected:1360800, tolerance:0.5, description:'Final value: R1 360 800', marks:1}
  ],
  easyTemplate: '<div class="memo-line">After year 1: $1\\,@INPUT@\\,@INPUT@ \\times @INPUT@ = R1\\,@INPUT@\\,@INPUT@$ </div><div class="memo-line">After year 2: $1\\,@INPUT@\\,@INPUT@ \\times @INPUT@$ </div><div class="memo-line">$= R\@INPUT@\\,@INPUT@\\,@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">After year 1: $1\\,200\\,000 \\times 1.08 = R1\\,296\\,000$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">After year 2: $1\\,296\\,000 \\times 1.05$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R1\\,360\\,800$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1014, topic:'Percentages & VAT',
  question:'An employee earns R18 500 per month. After a 6.5% salary increase, calculate the new monthly salary.',
  markingCriteria: [
    {type:'contains', expected:['1.065','× 1.065'], description:'Uses correct factor (1.065)', marks:1},
    {type:'value', expected:19702.50, tolerance:0.01, description:'Correct answer: R19 702.50', marks:1}
  ],
  easyTemplate: '<div class="memo-line">New salary $= @INPUT@\\,@INPUT@ \\times @INPUT@$ </div><div class="memo-line">$= R\@INPUT@\\,@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">New salary $= 18\\,500 \\times 1.065$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$= R19\\,702.50$ <span class="memo-mark">✓(1)</span></div>'
},

{id:1015, topic:'Percentages & VAT',
  question:'A phone originally cost R12 000. After a 10% discount and then adding 15% VAT, what is the final price?',
  markingCriteria: [
    {type:'value', expected:10800, tolerance:0.01, description:'After discount: R10 800', marks:1},
    {type:'value', expected:12420, tolerance:0.01, description:'After VAT: R12 420', marks:1}
  ],
  easyTemplate: '<div class="memo-line">After @INPUT@% discount: $@INPUT@\\,@INPUT@ \\times @INPUT@ = R@INPUT@\\,@INPUT@$ </div><div class="memo-line">After @INPUT@% VAT: $@INPUT@\\,@INPUT@ \\times @INPUT@ = R\@INPUT@\\,@INPUT@$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">After 10% discount: $12\\,000 \\times 0.90 = R10\\,800$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">After 15% VAT: $10\\,800 \\times 1.15 = R12\\,420$ <span class="memo-mark">✓(1)</span></div>'
},

];
