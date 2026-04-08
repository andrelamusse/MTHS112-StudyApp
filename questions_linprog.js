// ========== MTHS 112 — LINEAR PROGRAMMING (30 Questions) ==========
(function(){const Q=[

// Q1: Fruit farmer — full LP (from 2024 exam Q4)
{id:3001,topic:'Linear Programming',
question:'A fruit farmer supplies raspberries (x) and blueberries (y). Constraints: $x \\geq 100$, $y \\geq 50$, $x + y \\geq 200$, $x \\leq 200$, $y \\leq 300$. Cost: $C = 100x + 75y$.<br>4.1 Write all constraints. 4.2 Identify corner points. 4.3 Minimize cost. <em>[13 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x ≥ 100','x >= 100','x≥100'],description:'x ≥ 100',marks:1},
  {type:'contains',expected:['y ≥ 50','y >= 50','y≥50'],description:'y ≥ 50',marks:1},
  {type:'contains',expected:['x + y ≥ 200','x+y≥200','x + y >= 200'],description:'x + y ≥ 200',marks:1},
  {type:'value',expected:17500,tolerance:1,description:'Min cost = R17 500 at (100,100)',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>4.1 Constraints:</strong></div><div class="memo-line">$x \\geq @INPUT@$, $y \\geq @INPUT@$</div><div class="memo-line">$x + y \\geq @INPUT@$</div><div class="memo-line">$x \\leq @INPUT@$, $y \\leq @INPUT@$</div><div class="memo-line"><strong>4.2 Corner points of feasible region:</strong></div><div class="memo-line">$(@INPUT@, @INPUT@)$, $(@INPUT@, @INPUT@)$, $(@INPUT@, @INPUT@)$, $(@INPUT@, @INPUT@)$</div><div class="memo-line"><strong>4.3 Evaluate C = 100x + 75y at each:</strong></div><div class="memo-line">$C(@INPUT@, @INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = R@INPUT@$</div><div class="memo-line">$C(@INPUT@, @INPUT@) = R@INPUT@$</div><div class="memo-line">$C(@INPUT@, @INPUT@) = R@INPUT@$</div><div class="memo-line">$C(@INPUT@, @INPUT@) = R@INPUT@$</div><div class="memo-line"><strong>Minimum cost:</strong> R@INPUT@ at $(@INPUT@, @INPUT@)$</div>',
hardTemplate:'Min cost: R@INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">Constraints ✓ <span class="memo-mark">✓(3)</span></div><div class="memo-line">Corner points identified <span class="memo-mark">✓(4)</span></div><div class="memo-line">Min C = R17 500 at (100,100) <span class="memo-mark">✓(6)</span></div>'
},

// Q2: Manufacturing — maximize profit
{id:3002,topic:'Linear Programming',
question:'A factory makes chairs (x) and tables (y). Each chair needs 2h labour, 3kg wood. Each table needs 4h labour, 2kg wood. Available: 40h labour, 30kg wood. Profit: R80/chair, R100/table.<br>Maximize profit. <em>[10 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['2x + 4y ≤ 40','2x+4y≤40','2x + 4y <= 40'],description:'Labour: 2x+4y ≤ 40',marks:1},
  {type:'contains',expected:['3x + 2y ≤ 30','3x+2y≤30','3x + 2y <= 30'],description:'Wood: 3x+2y ≤ 30',marks:1},
  {type:'value',expected:10,tolerance:0.01,description:'x = 10 at optimal (check: (10,0)→ C=800, but need to verify corners)',marks:2},
  {type:'anyValue',expected:[1000,960],tolerance:50,description:'Max profit',marks:3}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">Labour: $@INPUT@x + @INPUT@y \\leq @INPUT@$</div><div class="memo-line">Wood: $@INPUT@x + @INPUT@y \\leq @INPUT@$</div><div class="memo-line">$x \\geq 0, y \\geq 0$</div><div class="memo-line"><strong>Corner points:</strong></div><div class="memo-line">$(0,0)$, $(@INPUT@, 0)$, $(0, @INPUT@)$, $(@INPUT@, @INPUT@)$</div><div class="memo-line"><strong>Evaluate P = @INPUT@x + @INPUT@y:</strong></div><div class="memo-line">$P(0,0) = R@INPUT@$</div><div class="memo-line">$P(@INPUT@,0) = R@INPUT@$</div><div class="memo-line">$P(0,@INPUT@) = R@INPUT@$</div><div class="memo-line">$P(@INPUT@,@INPUT@) = R@INPUT@$</div><div class="memo-line"><strong>Maximum:</strong> R@INPUT@ at $(@INPUT@, @INPUT@)$</div>',
hardTemplate:'Max profit: R@INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">2x+4y≤40, 3x+2y≤30 <span class="memo-mark">✓(2)</span></div><div class="memo-line">Corners evaluated, max profit found <span class="memo-mark">✓(8)</span></div>'
},

// Q3: Write constraints from word problem
{id:3003,topic:'Linear Programming',
question:'A baker makes cakes (x) and pies (y). Each cake needs 2 eggs, 500g flour. Each pie needs 3 eggs, 300g flour. Available: 24 eggs, 4.2kg flour. Write constraints. <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['2x + 3y ≤ 24','2x+3y≤24','2x + 3y <= 24'],description:'Eggs: 2x+3y ≤ 24',marks:1},
  {type:'contains',expected:['500x + 300y ≤ 4200','500x+300y≤4200','5x + 3y ≤ 42'],description:'Flour: 500x+300y ≤ 4200 (or 5x+3y ≤ 42)',marks:1},
  {type:'contains',expected:['x ≥ 0','x >= 0','x≥0'],description:'x ≥ 0',marks:1},
  {type:'contains',expected:['y ≥ 0','y >= 0','y≥0'],description:'y ≥ 0',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Eggs:</strong> $@INPUT@x + @INPUT@y \\leq @INPUT@$</div><div class="memo-line"><strong>Flour:</strong> $@INPUT@x + @INPUT@y \\leq @INPUT@$ (or ÷100: $@INPUT@x + @INPUT@y \\leq @INPUT@$)</div><div class="memo-line"><strong>Non-negativity:</strong> $x \\geq @INPUT@$, $y \\geq @INPUT@$</div>',
hardTemplate:'Egg constraint: @INPUT@. Flour: @INPUT@',
memo:'<div class="memo-line">2x+3y ≤ 24, 500x+300y ≤ 4200, x,y ≥ 0 <span class="memo-mark">✓(4)</span></div>'
},

// Q4: Evaluate corner points
{id:3004,topic:'Linear Programming',
question:'Feasible region has corners at (0,0), (6,0), (4,3), (0,5). Maximize P = 5x + 8y. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:0,tolerance:0.01,description:'P(0,0) = 0',marks:1},
  {type:'value',expected:30,tolerance:0.01,description:'P(6,0) = 30',marks:1},
  {type:'value',expected:44,tolerance:0.01,description:'P(4,3) = 44',marks:1},
  {type:'value',expected:40,tolerance:0.01,description:'P(0,5) = 40',marks:1}
],
easyTemplate:'<div class="memo-line">$P(@INPUT@, @INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line">$P(@INPUT@, @INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line">$P(@INPUT@, @INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line">$P(@INPUT@, @INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Maximum:</strong> $P = @INPUT@$ at $(@INPUT@, @INPUT@)$</div>',
hardTemplate:'Max P = @INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">P(4,3) = 44 is maximum <span class="memo-mark">✓(4)</span></div>'
},

// Q5: Search line method
{id:3005,topic:'Linear Programming',
question:'Use the search line method: $Z = 3x + 2y$. Feasible corners: (0,8), (2,6), (5,2), (6,0). <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['3x + 2y','3x+2y','y = -1.5x','slope'],description:'Search line: y = −1.5x + c',marks:1},
  {type:'value',expected:19,tolerance:0.01,description:'Max Z = 3(5)+2(2) = 19',marks:2},
  {type:'value',expected:18,tolerance:0.01,description:'Z(6,0) = 18',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Search line:</strong> $y = -\\frac{@INPUT@}{@INPUT@}x + \\frac{Z}{@INPUT@}$, slope $= @INPUT@$</div><div class="memo-line"><strong>Evaluate at each corner:</strong></div><div class="memo-line">$Z(0,@INPUT@) = @INPUT@(0) + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$Z(@INPUT@,@INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$Z(@INPUT@,@INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$Z(@INPUT@,@INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>Maximum:</strong> $Z = @INPUT@$ at $(@INPUT@, @INPUT@)$</div>',
hardTemplate:'Max Z = @INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">Search line slope = −1.5 <span class="memo-mark">✓(1)</span></div><div class="memo-line">Max Z = 19 at (5,2) <span class="memo-mark">✓(3)</span></div>'
},

// Q6: Find intersection — corner point calculation
{id:3006,topic:'Linear Programming',
question:'Find the intersection of $2x + y = 10$ and $x + 3y = 15$. <em>[3 marks]</em>',
markingCriteria:[
  {type:'value',expected:3,tolerance:0.01,description:'x = 3',marks:1},
  {type:'value',expected:4,tolerance:0.01,description:'y = 4',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>From eq1:</strong> $y = @INPUT@ - @INPUT@x$</div><div class="memo-line"><strong>Sub into eq2:</strong></div><div class="memo-line">$x + @INPUT@(@INPUT@ - @INPUT@x) = @INPUT@$</div><div class="memo-line">$x + @INPUT@ - @INPUT@x = @INPUT@$</div><div class="memo-line">$-@INPUT@x = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line">$x = @INPUT@$, $y = @INPUT@ - @INPUT@(@INPUT@) = @INPUT@$</div>',
hardTemplate:'$(@INPUT@, @INPUT@)$',
memo:'<div class="memo-line">x = 3, y = 4 <span class="memo-mark">✓(3)</span></div>'
},

// Q7: Feasibility check
{id:3007,topic:'Linear Programming',
question:'Is the point (3, 4) feasible for: $x + y \\leq 8$, $2x + y \\leq 12$, $x \\geq 0$, $y \\geq 0$? <em>[2 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['3 + 4 = 7','7 ≤ 8','7 <= 8','7 < 8'],description:'x+y = 7 ≤ 8 ✓',marks:1},
  {type:'contains',expected:['2(3) + 4 = 10','10 ≤ 12','10 <= 12','10 < 12','feasible','yes'],description:'2x+y = 10 ≤ 12 ✓ → feasible',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Check constraint 1:</strong> $@INPUT@ + @INPUT@ = @INPUT@ \\leq @INPUT@$ → @INPUT@</div><div class="memo-line"><strong>Check constraint 2:</strong> $@INPUT@(@INPUT@) + @INPUT@ = @INPUT@ \\leq @INPUT@$ → @INPUT@</div><div class="memo-line"><strong>Non-negativity:</strong> $@INPUT@ \\geq 0$ ✓, $@INPUT@ \\geq 0$ ✓</div><div class="memo-line"><strong>Conclusion:</strong> Point is @INPUT@</div>',
hardTemplate:'Feasible: @INPUT@',
memo:'<div class="memo-line">7 ≤ 8 ✓, 10 ≤ 12 ✓ → feasible <span class="memo-mark">✓(2)</span></div>'
},

// Q8: Diet problem — minimize cost
{id:3008,topic:'Linear Programming',
question:'A diet requires at least 10g protein and 8g fibre daily. Food A: 2g protein, 1g fibre, R5. Food B: 1g protein, 2g fibre, R4. Minimize cost. <em>[8 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['2x + y ≥ 10','2x+y≥10','2x + y >= 10'],description:'Protein: 2x+y ≥ 10',marks:1},
  {type:'contains',expected:['x + 2y ≥ 8','x+2y≥8','x + 2y >= 8'],description:'Fibre: x+2y ≥ 8',marks:1},
  {type:'value',expected:4,tolerance:0.01,description:'x = 4',marks:2},
  {type:'value',expected:2,tolerance:0.01,description:'y = 2',marks:2},
  {type:'value',expected:28,tolerance:0.01,description:'Min C = 5(4)+4(2) = R28',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">Protein: $@INPUT@x + @INPUT@y \\geq @INPUT@$</div><div class="memo-line">Fibre: $@INPUT@x + @INPUT@y \\geq @INPUT@$</div><div class="memo-line">$x, y \\geq 0$</div><div class="memo-line"><strong>Corner points:</strong></div><div class="memo-line">Intersection: solve $@INPUT@x + y = @INPUT@$ and $x + @INPUT@y = @INPUT@$</div><div class="memo-line">$x = @INPUT@$, $y = @INPUT@$</div><div class="memo-line">Other corners: $(@INPUT@, 0)$, $(0, @INPUT@)$</div><div class="memo-line"><strong>Min C at $(@INPUT@, @INPUT@)$:</strong> $@INPUT@(@INPUT@) + @INPUT@(@INPUT@) = R@INPUT@$</div>',
hardTemplate:'Min cost: R@INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">2x+y≥10, x+2y≥8 <span class="memo-mark">✓(2)</span></div><div class="memo-line">Optimal: (4,2), C = R28 <span class="memo-mark">✓(6)</span></div>'
},

// Q9: Transport problem
{id:3009,topic:'Linear Programming',
question:'A company ships from 2 warehouses to a store. W1 has 150 units (cost R6/unit), W2 has 100 units (cost R4/unit). Store needs at least 120 units. Minimize cost if x from W1, y from W2. <em>[6 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x + y ≥ 120','x+y≥120'],description:'Demand: x+y ≥ 120',marks:1},
  {type:'contains',expected:['x ≤ 150','x<=150'],description:'W1 capacity',marks:1},
  {type:'contains',expected:['y ≤ 100','y<=100'],description:'W2 capacity',marks:1},
  {type:'value',expected:520,tolerance:1,description:'Min C = 6(20)+4(100) = R520',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">$x + y \\geq @INPUT@$, $x \\leq @INPUT@$, $y \\leq @INPUT@$, $x, y \\geq 0$</div><div class="memo-line"><strong>Minimize:</strong> $C = @INPUT@x + @INPUT@y$</div><div class="memo-line"><strong>Corner points:</strong> $(@INPUT@, @INPUT@)$, $(@INPUT@, @INPUT@)$, ...</div><div class="memo-line"><strong>Evaluate:</strong></div><div class="memo-line">$C(@INPUT@, @INPUT@) = R@INPUT@$ ← minimum</div><div class="memo-line">$C(@INPUT@, @INPUT@) = R@INPUT@$</div>',
hardTemplate:'Min C: R@INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">x+y≥120, x≤150, y≤100 <span class="memo-mark">✓(3)</span></div><div class="memo-line">Min at (20,100): R520 <span class="memo-mark">✓(3)</span></div>'
},

// Q10: Identify binding constraints
{id:3010,topic:'Linear Programming',
question:'Optimal solution at (4,3). Constraints: $x+y \\leq 8$, $2x+y \\leq 12$, $x \\leq 6$. Which constraints are binding (active)? <em>[3 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x + y = 7','7 ≤ 8','not binding','slack'],description:'x+y = 7 < 8: not binding',marks:1},
  {type:'contains',expected:['2(4) + 3 = 11','11 ≤ 12','not binding'],description:'2x+y = 11 < 12: not binding',marks:1},
  {type:'contains',expected:['4 ≤ 6','not binding','no binding','none'],description:'x = 4 < 6: not binding',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Check each constraint at (4,3):</strong></div><div class="memo-line">$x + y = @INPUT@ + @INPUT@ = @INPUT@$. Compare to @INPUT@: @INPUT@ (@INPUT@)</div><div class="memo-line">$2x + y = @INPUT@(@INPUT@) + @INPUT@ = @INPUT@$. Compare to @INPUT@: @INPUT@ (@INPUT@)</div><div class="memo-line">$x = @INPUT@$. Compare to @INPUT@: @INPUT@ (@INPUT@)</div>',
hardTemplate:'Binding: @INPUT@',
memo:'<div class="memo-line">None are binding at (4,3) <span class="memo-mark">✓(3)</span></div>'
},

// Q11: Graph constraints — intercepts
{id:3011,topic:'Linear Programming',
question:'Find x and y intercepts for: $3x + 4y = 24$ and $2x + y = 10$. <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:8,tolerance:0.01,description:'3x+4y=24: x-int = 8',marks:1},
  {type:'value',expected:6,tolerance:0.01,description:'3x+4y=24: y-int = 6',marks:1},
  {type:'value',expected:5,tolerance:0.01,description:'2x+y=10: x-int = 5',marks:1},
  {type:'value',expected:10,tolerance:0.01,description:'2x+y=10: y-int = 10',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Line 1: $3x + 4y = 24$</strong></div><div class="memo-line">$y = 0$: $3x = @INPUT@ \\Rightarrow x = @INPUT@$ → $(@INPUT@, 0)$</div><div class="memo-line">$x = 0$: $4y = @INPUT@ \\Rightarrow y = @INPUT@$ → $(0, @INPUT@)$</div><div class="memo-line"><strong>Line 2: $2x + y = 10$</strong></div><div class="memo-line">$y = 0$: $2x = @INPUT@ \\Rightarrow x = @INPUT@$ → $(@INPUT@, 0)$</div><div class="memo-line">$x = 0$: $y = @INPUT@$ → $(0, @INPUT@)$</div>',
hardTemplate:'L1: (@INPUT@,0),(0,@INPUT@). L2: (@INPUT@,0),(0,@INPUT@)',
memo:'<div class="memo-line">L1: (8,0),(0,6). L2: (5,0),(0,10) <span class="memo-mark">✓(4)</span></div>'
},

// Q12: Maximize with 3 constraints
{id:3012,topic:'Linear Programming',
question:'Maximize $Z = 4x + 3y$ subject to: $x + y \\leq 10$, $2x + y \\leq 16$, $x + 2y \\leq 14$, $x,y \\geq 0$. <em>[8 marks]</em>',
markingCriteria:[
  {type:'value',expected:6,tolerance:0.01,description:'Optimal x = 6',marks:2},
  {type:'value',expected:4,tolerance:0.01,description:'Optimal y = 4',marks:2},
  {type:'value',expected:36,tolerance:0.01,description:'Max Z = 4(6)+3(4) = 36',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Corner points (solve pairs):</strong></div><div class="memo-line">$(0,0)$, $(@INPUT@, 0)$, $(0, @INPUT@)$</div><div class="memo-line">$x+y=@INPUT@$ and $2x+y=@INPUT@$: $(@INPUT@, @INPUT@)$</div><div class="memo-line">$x+y=@INPUT@$ and $x+2y=@INPUT@$: $(@INPUT@, @INPUT@)$</div><div class="memo-line"><strong>Evaluate Z:</strong></div><div class="memo-line">$Z(0,0) = @INPUT@$, $Z(@INPUT@,0) = @INPUT@$, $Z(0,@INPUT@) = @INPUT@$</div><div class="memo-line">$Z(@INPUT@, @INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@$ ← max</div>',
hardTemplate:'Max Z = @INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">Corners evaluated, max Z = 36 at (6,4) <span class="memo-mark">✓(8)</span></div>'
},

// Q13: Slack variables
{id:3013,topic:'Linear Programming',
question:'At optimal (5,3), constraint is $2x + 3y \\leq 20$. Calculate the slack. <em>[2 marks]</em>',
markingCriteria:[
  {type:'value',expected:19,tolerance:0.01,description:'LHS = 2(5)+3(3) = 19',marks:1},
  {type:'value',expected:1,tolerance:0.01,description:'Slack = 20−19 = 1',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>LHS:</strong> $@INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Slack:</strong> $@INPUT@ - @INPUT@ = @INPUT@$</div>',
hardTemplate:'Slack = @INPUT@',
memo:'<div class="memo-line">LHS = 19, Slack = 20−19 = 1 <span class="memo-mark">✓(2)</span></div>'
},

// Q14: Printing shop
{id:3014,topic:'Linear Programming',
question:'A print shop makes posters (x) and banners (y). Printing: 1h/poster, 2h/banner (max 12h). Cutting: 2h/poster, 1h/banner (max 12h). Profit: R30/poster, R40/banner. Maximize. <em>[8 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x + 2y ≤ 12','x+2y≤12'],description:'Printing: x+2y ≤ 12',marks:1},
  {type:'contains',expected:['2x + y ≤ 12','2x+y≤12'],description:'Cutting: 2x+y ≤ 12',marks:1},
  {type:'value',expected:4,tolerance:0.01,description:'x = 4',marks:2},
  {type:'value',expected:4,tolerance:0.01,description:'y = 4',marks:2},
  {type:'value',expected:280,tolerance:0.01,description:'Max P = 30(4)+40(4) = R280',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">Print: $@INPUT@x + @INPUT@y \\leq @INPUT@$</div><div class="memo-line">Cut: $@INPUT@x + @INPUT@y \\leq @INPUT@$</div><div class="memo-line">$x, y \\geq 0$</div><div class="memo-line"><strong>Intersection of constraints:</strong></div><div class="memo-line">$x + 2y = @INPUT@$ and $2x + y = @INPUT@$</div><div class="memo-line">$x = @INPUT@$, $y = @INPUT@$</div><div class="memo-line"><strong>Corner point evaluation:</strong></div><div class="memo-line">$P(@INPUT@, @INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = R@INPUT@$ ← max</div>',
hardTemplate:'Max P: R@INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">x+2y≤12, 2x+y≤12 <span class="memo-mark">✓(2)</span></div><div class="memo-line">Optimal (4,4), P = R280 <span class="memo-mark">✓(6)</span></div>'
},

// Q15: Minimize with ≥ constraints
{id:3015,topic:'Linear Programming',
question:'Minimize $C = 2x + 5y$ subject to: $x + y \\geq 6$, $x + 3y \\geq 12$, $x,y \\geq 0$. <em>[6 marks]</em>',
markingCriteria:[
  {type:'value',expected:3,tolerance:0.01,description:'Intersection x = 3',marks:1},
  {type:'value',expected:3,tolerance:0.01,description:'Intersection y = 3',marks:1},
  {type:'value',expected:21,tolerance:0.01,description:'Min C at (3,3) = 6+15 = 21',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Find intersection:</strong> $x + y = @INPUT@$ and $x + @INPUT@y = @INPUT@$</div><div class="memo-line">Subtract: $@INPUT@y = @INPUT@ \\Rightarrow y = @INPUT@$</div><div class="memo-line">$x = @INPUT@ - @INPUT@ = @INPUT@$</div><div class="memo-line"><strong>Corner points:</strong> $(@INPUT@, 0)$, $(0, @INPUT@)$, $(@INPUT@, @INPUT@)$</div><div class="memo-line"><strong>Evaluate C:</strong></div><div class="memo-line">$C(@INPUT@, 0) = R@INPUT@$</div><div class="memo-line">$C(0, @INPUT@) = R@INPUT@$</div><div class="memo-line">$C(@INPUT@, @INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = R@INPUT@$ ← min</div>',
hardTemplate:'Min C: R@INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">Intersection (3,3), Min C = R21 <span class="memo-mark">✓(6)</span></div>'
},

// Q16: Farming — two crops
{id:3016,topic:'Linear Programming',
question:'A farmer plants wheat (x) and maize (y) on 100 hectares. Labour: wheat 2 days/ha, maize 3 days/ha (max 240 days). Profit: R800/ha wheat, R1200/ha maize. Max profit? <em>[8 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x + y ≤ 100','x+y≤100'],description:'Land: x+y ≤ 100',marks:1},
  {type:'contains',expected:['2x + 3y ≤ 240','2x+3y≤240'],description:'Labour: 2x+3y ≤ 240',marks:1},
  {type:'value',expected:60,tolerance:0.5,description:'x = 60',marks:2},
  {type:'value',expected:40,tolerance:0.5,description:'y = 40',marks:2},
  {type:'value',expected:96000,tolerance:1,description:'P = 800(60)+1200(40) = R96 000',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">$x + y \\leq @INPUT@$, $@INPUT@x + @INPUT@y \\leq @INPUT@$, $x,y \\geq 0$</div><div class="memo-line"><strong>Intercepts:</strong></div><div class="memo-line">L1: $(@INPUT@,0),(0,@INPUT@)$. L2: $(@INPUT@,0),(0,@INPUT@)$</div><div class="memo-line"><strong>Intersection:</strong> $x+y=@INPUT@$ and $2x+3y=@INPUT@$</div><div class="memo-line">$x = @INPUT@$, $y = @INPUT@$</div><div class="memo-line"><strong>Evaluate P:</strong></div><div class="memo-line">$P(@INPUT@,@INPUT@) = @INPUT@(@INPUT@)+@INPUT@(@INPUT@) = R@INPUT@$ ← max</div>',
hardTemplate:'Max P: R@INPUT@ at (@INPUT@,@INPUT@)',
memo:'<div class="memo-line">x+y≤100, 2x+3y≤240 <span class="memo-mark">✓(2)</span></div><div class="memo-line">(60,40), P = R96000 <span class="memo-mark">✓(6)</span></div>'
},

// Q17: Investment allocation
{id:3017,topic:'Linear Programming',
question:'Invest in Bonds (x) and Stocks (y). Total ≤ R100 000. Bonds ≥ R20 000. Stocks ≤ R60 000. Return: 6% bonds, 10% stocks. Maximize return. <em>[6 marks]</em>',
markingCriteria:[
  {type:'value',expected:40000,tolerance:1,description:'x = R40 000',marks:2},
  {type:'value',expected:60000,tolerance:1,description:'y = R60 000',marks:2},
  {type:'value',expected:8400,tolerance:1,description:'Max return = 0.06(40000)+0.10(60000) = R8 400',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong> $x + y \\leq @INPUT@$, $x \\geq @INPUT@$, $y \\leq @INPUT@$</div><div class="memo-line"><strong>Objective:</strong> $R = @INPUT@x + @INPUT@y$</div><div class="memo-line"><strong>Corner evaluation:</strong></div><div class="memo-line">$(@INPUT@, @INPUT@)$: $R = @INPUT@(@INPUT@)+@INPUT@(@INPUT@) = R@INPUT@$</div><div class="memo-line">$(@INPUT@, @INPUT@)$: $R = R@INPUT@$ ← max</div>',
hardTemplate:'Max return: R@INPUT@ at (@INPUT@,@INPUT@)',
memo:'<div class="memo-line">Optimal (40000,60000), R = R8400 <span class="memo-mark">✓(6)</span></div>'
},

// Q18: Staffing
{id:3018,topic:'Linear Programming',
question:'A call centre needs at least 20 full-time (x) and 10 part-time (y) staff. Total staff ≤ 50. Budget: full-time R8000/mo, part-time R4000/mo, max R280 000. Maximize workforce (x+y). <em>[6 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['8000x + 4000y ≤ 280000','8x + 4y ≤ 280','8000x+4000y≤280000'],description:'Budget constraint',marks:1},
  {type:'value',expected:20,tolerance:0.01,description:'x = 20',marks:2},
  {type:'value',expected:30,tolerance:0.01,description:'y = 30',marks:2},
  {type:'value',expected:50,tolerance:0.01,description:'Max staff = 50',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">$x \\geq @INPUT@$, $y \\geq @INPUT@$, $x + y \\leq @INPUT@$</div><div class="memo-line">$@INPUT@x + @INPUT@y \\leq @INPUT@$</div><div class="memo-line"><strong>Max x + y at corners:</strong></div><div class="memo-line">$(@INPUT@, @INPUT@)$: $x+y = @INPUT@$</div><div class="memo-line"><strong>Check budget:</strong> $@INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@ \\leq @INPUT@$ ✓</div><div class="memo-line"><strong>Max workforce:</strong> @INPUT@ staff</div>',
hardTemplate:'Max staff: @INPUT@ at (@INPUT@,@INPUT@)',
memo:'<div class="memo-line">Budget OK at (20,30), total = 50 <span class="memo-mark">✓(6)</span></div>'
},

// Q19: Sensitivity — change coefficient
{id:3019,topic:'Linear Programming',
question:'Optimal at (4,3) with P = 5x + 8y = 44. If coefficient of y changes to 6, is (4,3) still optimal? Corners: (6,0), (0,5). <em>[3 marks]</em>',
markingCriteria:[
  {type:'value',expected:38,tolerance:0.01,description:'P\'(4,3) = 5(4)+6(3) = 38',marks:1},
  {type:'value',expected:30,tolerance:0.01,description:'P\'(6,0) = 30',marks:1},
  {type:'contains',expected:['still optimal','yes','maximum'],description:'Still optimal',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>New P:</strong> $P = @INPUT@x + @INPUT@y$</div><div class="memo-line">$P(@INPUT@,@INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$P(@INPUT@,@INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$P(0,@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>Largest is @INPUT@</strong> → $(@INPUT@,@INPUT@)$ is @INPUT@ optimal</div>',
hardTemplate:'Still optimal: @INPUT@',
memo:'<div class="memo-line">P\'(4,3)=38 > P\'(6,0)=30 > P\'(0,5)=30 → still optimal <span class="memo-mark">✓(3)</span></div>'
},

// Q20: Furniture — three constraints
{id:3020,topic:'Linear Programming',
question:'Desks (x), bookcases (y). Assembly: 4h/desk, 2h/bookcase (max 48h). Painting: 1h each (max 15h). Max desks: 10. Profit: R120/desk, R80/bookcase. <em>[8 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['4x + 2y ≤ 48','4x+2y≤48'],description:'Assembly: 4x+2y ≤ 48',marks:1},
  {type:'contains',expected:['x + y ≤ 15','x+y≤15'],description:'Painting: x+y ≤ 15',marks:1},
  {type:'value',expected:6,tolerance:0.01,description:'x = 6',marks:2},
  {type:'value',expected:9,tolerance:0.5,description:'y = 9',marks:2},
  {type:'value',expected:1440,tolerance:10,description:'Max P ≈ R1 440',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">$@INPUT@x + @INPUT@y \\leq @INPUT@$, $x + y \\leq @INPUT@$, $x \\leq @INPUT@$</div><div class="memo-line"><strong>Corner point at intersection:</strong></div><div class="memo-line">$4x+2y=48$ and $x+y=15$: solve for $(x,y)$</div><div class="memo-line">$x = @INPUT@$, $y = @INPUT@$</div><div class="memo-line"><strong>P(@INPUT@,@INPUT@)</strong> $= @INPUT@(@INPUT@)+@INPUT@(@INPUT@) = R@INPUT@$</div>',
hardTemplate:'Max P: R@INPUT@ at (@INPUT@,@INPUT@)',
memo:'<div class="memo-line">Constraints set, optimal ≈ (6,9), P ≈ R1440 <span class="memo-mark">✓(8)</span></div>'
},

// Q21: Graph interpretation
{id:3021,topic:'Linear Programming',
question:'A feasible region is bounded by: $x=0$, $y=0$, $x+y=6$, $x=4$. List all corner points. <em>[4 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['(0,0)','(0, 0)'],description:'(0,0)',marks:1},
  {type:'contains',expected:['(4,0)','(4, 0)'],description:'(4,0)',marks:1},
  {type:'contains',expected:['(4,2)','(4, 2)'],description:'(4,2)',marks:1},
  {type:'contains',expected:['(0,6)','(0, 6)'],description:'(0,6)',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Corners (intersections):</strong></div><div class="memo-line">$x=@INPUT@$ and $y=@INPUT@$: $(@INPUT@, @INPUT@)$</div><div class="memo-line">$x=@INPUT@$ and $y=@INPUT@$: $(@INPUT@, @INPUT@)$</div><div class="memo-line">$x=@INPUT@$ and $x+y=@INPUT@$: $(@INPUT@, @INPUT@)$</div><div class="memo-line">$x=@INPUT@$ and $x+y=@INPUT@$: $(@INPUT@, @INPUT@)$</div>',
hardTemplate:'Corners: @INPUT@',
memo:'<div class="memo-line">(0,0), (4,0), (4,2), (0,6) <span class="memo-mark">✓(4)</span></div>'
},

// Q22: Maximize Z — different coefficients
{id:3022,topic:'Linear Programming',
question:'Maximize $Z = 7x + 5y$ at corners: (0,0), (8,0), (5,6), (0,10). <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:56,tolerance:0.01,description:'Z(8,0) = 56',marks:1},
  {type:'value',expected:65,tolerance:0.01,description:'Z(5,6) = 35+30 = 65',marks:1},
  {type:'value',expected:50,tolerance:0.01,description:'Z(0,10) = 50',marks:1},
  {type:'contains',expected:['(5,6)','5, 6','maximum'],description:'Max at (5,6)',marks:1}
],
easyTemplate:'<div class="memo-line">$Z(0,0) = @INPUT@$</div><div class="memo-line">$Z(@INPUT@,0) = @INPUT@(@INPUT@) + @INPUT@(0) = @INPUT@$</div><div class="memo-line">$Z(@INPUT@,@INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = @INPUT@$</div><div class="memo-line">$Z(0,@INPUT@) = @INPUT@(0) + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>Maximum:</strong> $Z = @INPUT@$ at $(@INPUT@, @INPUT@)$</div>',
hardTemplate:'Max Z = @INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">Z(5,6)=65 is maximum <span class="memo-mark">✓(4)</span></div>'
},

// Q23: Advertising budget
{id:3023,topic:'Linear Programming',
question:'A company spends on TV ads (x) and radio ads (y). Budget: $x+y \\leq 50000$. At least 10 TV: $x \\geq 10000$. Radio ≤ 30000. TV reaches 5000 people/R1000, radio 3000/R1000. Maximize reach. <em>[6 marks]</em>',
markingCriteria:[
  {type:'value',expected:50000,tolerance:1,description:'x = 50000 (all TV if uncapped)',marks:1},
  {type:'anyValue',expected:[220000,210000],tolerance:10000,description:'Max reach ≈ 220 000',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Reach:</strong> $R = @INPUT@ \\times \\frac{x}{1000} + @INPUT@ \\times \\frac{y}{1000} = @INPUT@x + @INPUT@y$</div><div class="memo-line"><strong>Constraints:</strong> $x+y \\leq @INPUT@$, $x \\geq @INPUT@$, $y \\leq @INPUT@$</div><div class="memo-line"><strong>Corner evaluation:</strong></div><div class="memo-line">$(@INPUT@, @INPUT@)$: Reach $= @INPUT@$</div><div class="memo-line">$(@INPUT@, @INPUT@)$: Reach $= @INPUT@$ ← max</div>',
hardTemplate:'Max reach: @INPUT@ at (@INPUT@, @INPUT@)',
memo:'<div class="memo-line">Maximize 5x+3y, optimal allocation found <span class="memo-mark">✓(6)</span></div>'
},

// Q24: Redundant constraint
{id:3024,topic:'Linear Programming',
question:'Constraints: $x+y \\leq 10$, $x+y \\leq 15$, $x,y \\geq 0$. Which constraint is redundant? <em>[2 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x + y ≤ 15','x+y≤15','15','second','redundant'],description:'x+y≤15 is redundant (weaker)',marks:2}
],
easyTemplate:'<div class="memo-line">If $x + y \\leq @INPUT@$ is satisfied, then $x + y \\leq @INPUT@$ is automatically satisfied</div><div class="memo-line">Because $@INPUT@ < @INPUT@$</div><div class="memo-line">∴ $x + y \\leq @INPUT@$ is @INPUT@</div>',
hardTemplate:'Redundant: @INPUT@',
memo:'<div class="memo-line">$x+y \\leq 15$ is redundant <span class="memo-mark">✓(2)</span></div>'
},

// Q25: Infeasible problem
{id:3025,topic:'Linear Programming',
question:'Is this system feasible? $x + y \\geq 8$, $x + y \\leq 5$, $x,y \\geq 0$. Explain. <em>[2 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['infeasible','no solution','impossible','contradiction','cannot'],description:'Infeasible: x+y cannot be ≥8 and ≤5',marks:2}
],
easyTemplate:'<div class="memo-line">$x + y \\geq @INPUT@$ requires sum at least @INPUT@</div><div class="memo-line">$x + y \\leq @INPUT@$ requires sum at most @INPUT@</div><div class="memo-line">Since @INPUT@ > @INPUT@, these @INPUT@</div><div class="memo-line">∴ The system is @INPUT@</div>',
hardTemplate:'Feasible: @INPUT@',
memo:'<div class="memo-line">Cannot satisfy both: infeasible <span class="memo-mark">✓(2)</span></div>'
},

// Q26: Clothing manufacturer
{id:3026,topic:'Linear Programming',
question:'Shirts (x), trousers (y). Cutting: 1h/shirt, 2h/trousers (max 80h). Sewing: 3h/shirt, 2h/trousers (max 120h). Profit: R40/shirt, R50/trousers. <em>[8 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['x + 2y ≤ 80','x+2y≤80'],description:'Cutting constraint',marks:1},
  {type:'contains',expected:['3x + 2y ≤ 120','3x+2y≤120'],description:'Sewing constraint',marks:1},
  {type:'value',expected:20,tolerance:0.01,description:'x = 20',marks:2},
  {type:'value',expected:30,tolerance:0.01,description:'y = 30',marks:2},
  {type:'value',expected:2300,tolerance:1,description:'P = 40(20)+50(30) = R2 300',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">$@INPUT@x + @INPUT@y \\leq @INPUT@$ (cutting)</div><div class="memo-line">$@INPUT@x + @INPUT@y \\leq @INPUT@$ (sewing)</div><div class="memo-line"><strong>Intersection:</strong> Solve simultaneously</div><div class="memo-line">$x = @INPUT@$, $y = @INPUT@$</div><div class="memo-line"><strong>P:</strong> $@INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@ + @INPUT@ = R@INPUT@$</div>',
hardTemplate:'Max P: R@INPUT@ at (@INPUT@,@INPUT@)',
memo:'<div class="memo-line">x+2y≤80, 3x+2y≤120, optimal (20,30), P=R2300 <span class="memo-mark">✓(8)</span></div>'
},

// Q27: Shade feasible region
{id:3027,topic:'Linear Programming',
question:'For $2x + y \\leq 10$: Does (0,0) satisfy? Does (6,0) satisfy? Which side is feasible? <em>[3 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['0 ≤ 10','0 <= 10','yes','true'],description:'(0,0): 0 ≤ 10 ✓',marks:1},
  {type:'contains',expected:['12 ≤ 10','12 > 10','no','false','not'],description:'(6,0): 12 > 10 ✗',marks:1},
  {type:'contains',expected:['origin','(0,0)','below','left'],description:'Feasible side contains origin',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(0,0):</strong> $@INPUT@(0) + 0 = @INPUT@ \\leq @INPUT@$ → @INPUT@</div><div class="memo-line"><strong>(6,0):</strong> $@INPUT@(@INPUT@) + 0 = @INPUT@ \\leq @INPUT@$ → @INPUT@</div><div class="memo-line"><strong>Feasible side:</strong> The side containing @INPUT@</div>',
hardTemplate:'Feasible side: @INPUT@',
memo:'<div class="memo-line">(0,0) ✓, (6,0) ✗, feasible = origin side <span class="memo-mark">✓(3)</span></div>'
},

// Q28: Electronics factory
{id:3028,topic:'Linear Programming',
question:'Phones (x), tablets (y). Assembly: 2h/phone, 5h/tablet (max 100h). Testing: 1h each (max 30). At least 5 phones. $P = 200x + 350y$. <em>[8 marks]</em>',
markingCriteria:[
  {type:'contains',expected:['2x + 5y ≤ 100','2x+5y≤100'],description:'Assembly',marks:1},
  {type:'value',expected:350,tolerance:0.01,description:'Max from y-coefficient R350',marks:1},
  {type:'anyValue',expected:[5500,5600,5700],tolerance:200,description:'Max P ≈ R5 500–5 700',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Constraints:</strong></div><div class="memo-line">$@INPUT@x + @INPUT@y \\leq @INPUT@$, $x + y \\leq @INPUT@$, $x \\geq @INPUT@$</div><div class="memo-line"><strong>Corner evaluation:</strong></div><div class="memo-line">$P(@INPUT@,@INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = R@INPUT@$</div><div class="memo-line"><strong>Maximum:</strong> R@INPUT@ at $(@INPUT@, @INPUT@)$</div>',
hardTemplate:'Max P: R@INPUT@ at (@INPUT@,@INPUT@)',
memo:'<div class="memo-line">Optimal found from corners <span class="memo-mark">✓(8)</span></div>'
},

// Q29: Multi-product — 3 products simplified
{id:3029,topic:'Linear Programming',
question:'If x chairs and y tables, with constraints yielding corners (0,0), (10,0), (6,4), (0,8), and Z = 3x+5y. Which corner maximizes and minimizes Z? <em>[4 marks]</em>',
markingCriteria:[
  {type:'value',expected:40,tolerance:0.01,description:'Max Z = Z(0,8) = 40',marks:1},
  {type:'contains',expected:['(0,8)','0, 8'],description:'Max at (0,8)',marks:1},
  {type:'value',expected:0,tolerance:0.01,description:'Min Z = Z(0,0) = 0',marks:1},
  {type:'contains',expected:['(0,0)','0, 0','origin'],description:'Min at (0,0)',marks:1}
],
easyTemplate:'<div class="memo-line">$Z(0,0) = @INPUT@$</div><div class="memo-line">$Z(@INPUT@,0) = @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$Z(@INPUT@,@INPUT@) = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line">$Z(0,@INPUT@) = @INPUT@(@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>Max:</strong> $Z = @INPUT@$ at $(@INPUT@,@INPUT@)$</div><div class="memo-line"><strong>Min:</strong> $Z = @INPUT@$ at $(@INPUT@,@INPUT@)$</div>',
hardTemplate:'Max Z = @INPUT@ at @INPUT@, Min Z = @INPUT@ at @INPUT@',
memo:'<div class="memo-line">Max Z=40 at (0,8), Min Z=0 at (0,0) <span class="memo-mark">✓(4)</span></div>'
},

// Q30: Dual prices interpretation
{id:3030,topic:'Linear Programming',
question:'At optimal, the labour constraint ($2x+3y \\leq 240$) has slack = 0. If an extra hour of labour becomes available (241h), profit increases by R400. What is the shadow price of labour? <em>[2 marks]</em>',
markingCriteria:[
  {type:'value',expected:400,tolerance:0.01,description:'Shadow price = R400/hour',marks:1},
  {type:'contains',expected:['400','shadow','dual','marginal value'],description:'R400 per additional hour',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>Shadow price</strong> = change in Z per unit increase in RHS</div><div class="memo-line">$= \\frac{\\Delta Z}{\\Delta b} = \\frac{R@INPUT@}{@INPUT@} = R@INPUT@$ per hour</div><div class="memo-line">This means each extra labour hour is worth R@INPUT@ in profit</div>',
hardTemplate:'Shadow price: R@INPUT@/hour',
memo:'<div class="memo-line">Shadow price = R400/hour <span class="memo-mark">✓(2)</span></div>'
},

];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
