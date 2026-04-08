// ========== MTHS 112 — LINEAR PROGRAMMING (Workspace Format) ==========
(function(){
  const Q = [

{id:3001, topic:'Linear Programming',
  question:'A fruit farmer supplies raspberries ($x$) and blueberries ($y$) to a supermarket. She must supply at least 100 kg of raspberries and 50 kg of blueberries each week. The total weight must be at least 200 kg. Max: 200 kg raspberries, 300 kg blueberries. Cost: raspberries R100/kg, blueberries R75/kg.<br><br>4.1 Compile the system of inequalities (constraints). <em>[3 marks]</em><br>4.3 Write the objective function and determine the minimum cost at the optimal point $(100, 100)$. <em>[3 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['x >= 100','x ≥ 100','x≥100'], description:'Constraint: x ≥ 100', marks:1},
    {type:'contains', expected:['y >= 50','y ≥ 50','y≥50'], description:'Constraint: y ≥ 50', marks:1},
    {type:'contains', expected:['x + y >= 200','x+y >= 200','x + y ≥ 200'], description:'Constraint: x + y ≥ 200', marks:1},
    {type:'contains', expected:['100x + 75y','100x+75y','c = 100x'], description:'Objective function: C = 100x + 75y', marks:1},
    {type:'value', expected:17500, tolerance:100, description:'Minimum cost: C = 100(100) + 75(100) = R17 500', marks:2}
  ],
  easyTemplate: '<div class="memo-line">Constraints: </div><div class="memo-line">$x \\geq \@INPUT@$ (min raspberries)</div><div class="memo-line">$y \\geq \@INPUT@$ (min blueberries)</div><div class="memo-line">$x + y \\geq \@INPUT@$ (min total weight)</div><div class="memo-line">$x \\leq 200$, $y \\leq 300$</div><div class="memo-line">Objective function: $C = \@INPUT@x + \@INPUT@y$ </div><div class="memo-line">At $(100, 100)$: $C = 100(100) + 75(100) = R\@INPUT@\\,500$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Constraints: <span class="memo-mark">✓(3)</span></div><div class="memo-line">$x \\geq 100$ (min raspberries)</div><div class="memo-line">$y \\geq 50$ (min blueberries)</div><div class="memo-line">$x + y \\geq 200$ (min total weight)</div><div class="memo-line">$x \\leq 200$, $y \\leq 300$</div><div class="memo-line">Objective function: $C = 100x + 75y$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">At $(100, 100)$: $C = 100(100) + 75(100) = R17\\,500$ <span class="memo-mark">✓(2)</span></div>'
},

{id:3002, topic:'Linear Programming',
  question:'A farmer has 80 hectares. Peach orchards cost R12 000/ha, plum orchards cost R8 000/ha. Budget: R720 000. He must plant at least 10 ha of peaches, and peach hectares must not exceed twice plum hectares. Let $x=$ peaches, $y=$ plums. Profit: R6 000/ha (peaches), R5 000/ha (plums).<br><br>3.1 Compile the system of inequalities. <em>[4 marks]</em><br>3.3 Determine the maximum profit if the optimal point is $(40, 30)$. <em>[5 marks]</em>',
  markingCriteria: [
    {type:'contains', expected:['x + y <= 80','x+y<=80','x + y ≤ 80'], description:'Constraint: x + y ≤ 80 (land)', marks:1},
    {type:'contains', expected:['12000x + 8000y','12000x+8000y'], description:'Budget constraint: 12000x + 8000y ≤ 720000', marks:1},
    {type:'contains', expected:['x >= 10','x≥10','x ≥ 10'], description:'Constraint: x ≥ 10', marks:1},
    {type:'contains', expected:['x <= 2y','x≤2y','x ≤ 2y'], description:'Constraint: x ≤ 2y', marks:1},
    {type:'contains', expected:['6000x + 5000y','6000x+5000y','p = 6000x'], description:'Objective: P = 6000x + 5000y', marks:1},
    {type:'value', expected:240000, tolerance:1000, description:'6000 × 40 = 240 000', marks:1},
    {type:'value', expected:150000, tolerance:1000, description:'5000 × 30 = 150 000', marks:1},
    {type:'value', expected:390000, tolerance:1000, description:'Maximum profit: R390 000', marks:2}
  ],
  easyTemplate: '<div class="memo-line">Constraints: </div><div class="memo-line">$x + y \\leq \@INPUT@$ (land)</div><div class="memo-line">$\@INPUT@x + \@INPUT@y \\leq 720\\,000$ (budget)</div><div class="memo-line">$x \\geq \@INPUT@$ (minimum peaches)</div><div class="memo-line">$x \\leq 2y$ (demand)</div><div class="memo-line">Objective: $P = \@INPUT@x + \@INPUT@y$ </div><div class="memo-line">$P(40, 30) = 6000(40) + 5000(30) = 240\\,000 + 150\\,000$ </div><div class="memo-line">$= R\@INPUT@\\,000$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">Constraints: <span class="memo-mark">✓(4)</span></div><div class="memo-line">$x + y \\leq 80$ (land)</div><div class="memo-line">$12000x + 8000y \\leq 720\\,000$ (budget)</div><div class="memo-line">$x \\geq 10$ (minimum peaches)</div><div class="memo-line">$x \\leq 2y$ (demand)</div><div class="memo-line">Objective: $P = 6000x + 5000y$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$P(40, 30) = 6000(40) + 5000(30) = 240\\,000 + 150\\,000$ <span class="memo-mark">✓(2)</span></div><div class="memo-line">$= R390\\,000$ <span class="memo-mark">✓(2)</span></div>'
},

{id:3003, topic:'Linear Programming',
  question:'An objective function is $C = 140x + 168y$. The constraints lead to corner points at $(600, 200)$, $(750, 100)$, and $(800, 50)$. Evaluate the cost at each corner point and determine the minimum cost.',
  markingCriteria: [
    {type:'value', expected:117600, tolerance:200, description:'C(600,200) = 140(600) + 168(200) = 117 600', marks:1},
    {type:'value', expected:121800, tolerance:200, description:'C(750,100) = 140(750) + 168(100) = 121 800', marks:1},
    {type:'value', expected:120400, tolerance:200, description:'C(800,50) = 140(800) + 168(50) = 120 400', marks:1},
    {type:'contains', expected:['117600','117 600','minimum'], description:'Identifies minimum at (600, 200)', marks:1}
  ],
  easyTemplate: '<div class="memo-line">$C(600, 200) = 140(600) + 168(200) = 84000 + 33600 = R\@INPUT@\\,600$ </div><div class="memo-line">$C(750, 100) = 140(750) + 168(100) = 105000 + 16800 = R\@INPUT@\\,800$ </div><div class="memo-line">$C(800, 50) = 140(800) + 168(50) = 112000 + 8400 = R\@INPUT@\\,400$ </div><div class="memo-line"><strong>Minimum cost = R\@INPUT@</strong> at $(600, 200)$ </div>',
  hardTemplate: 'Final Answer: @INPUT@',
  memo: '<div class="memo-line">$C(600, 200) = 140(600) + 168(200) = 84000 + 33600 = R117\\,600$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$C(750, 100) = 140(750) + 168(100) = 105000 + 16800 = R121\\,800$ <span class="memo-mark">✓(1)</span></div><div class="memo-line">$C(800, 50) = 140(800) + 168(50) = 112000 + 8400 = R120\\,400$ <span class="memo-mark">✓(1)</span></div><div class="memo-line"><strong>Minimum cost = R117 600</strong> at $(600, 200)$ <span class="memo-mark">✓(1)</span></div>'
},

  ];
  if(!window.QUESTIONS) window.QUESTIONS=[];
  window.QUESTIONS.push(...Q);
})();
