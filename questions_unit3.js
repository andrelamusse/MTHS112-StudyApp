// ========== MTHS 112 — UNIT 3: Linear Programming ==========
// Sources: Newpdf4 (Week 4 classwork), MTHS112 Exam Q4
(function(){const Q=[

// ——— Q1: Conversion of constraints to inequalities ———
{id:1301,topic:'Unit 3: Linear Programming',
question:'A business sells iPhones ($x$) and Samsung phones ($y$). Write down inequalities for the following restrictions:<br>1.1 At least 50, but not more than 200 iPhones ($x$) can be sold. [1]<br>1.2 Less than 300, but more than 100 Samsungs can be sold. [1]<br>1.3 The total number of phones that can be sold is 400. [1]<br>1.4 The number of Samsungs ($y$) must at most be twice the number of iPhones ($x$). [1]<br>1.5 The manufacturer must produce at least three times as many iPhones ($x$) as Samsungs ($y$). [1]<br>1.6 The ratio of iPhones ($x$) to Samsungs ($y$) is not greater than 9:2. [1]',
markingCriteria:[
  {type:'contains',expected:['50','200','x'],description:'50 ≤ x ≤ 200',marks:1},
  {type:'contains',expected:['100','300','y'],description:'100 < y < 300',marks:1},
  {type:'contains',expected:['x + y','400'],description:'x + y ≤ 400',marks:1},
  {type:'contains',expected:['y ≤ 2x','y≤2x'],description:'y ≤ 2x',marks:1},
  {type:'contains',expected:['x ≥ 3y','x≥3y'],description:'x ≥ 3y',marks:1},
  {type:'contains',expected:['x/y','9','2'],description:'x/y ≤ 9/2 or 2x ≤ 9y',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>1.1:</strong> $@INPUT@ \\leq x \\leq @INPUT@$</div><div class="memo-line"><strong>1.2:</strong> $@INPUT@ < y < @INPUT@$</div><div class="memo-line"><strong>1.3:</strong> $x + y \\leq @INPUT@$</div><div class="memo-line"><strong>1.4:</strong> $y \\leq @INPUT@x$</div><div class="memo-line"><strong>1.5:</strong> $x \\geq @INPUT@y$</div><div class="memo-line"><strong>1.6:</strong> $\\frac{x}{y} \\leq \\frac{@INPUT@}{@INPUT@}$ or $@INPUT@x \\leq @INPUT@y$</div>',
hardTemplate:'1.1: @INPUT@<br>1.2: @INPUT@<br>1.3: @INPUT@<br>1.4: @INPUT@<br>1.5: @INPUT@<br>1.6: @INPUT@',
memo:'<div class="memo-line">1.1: $50 \\leq x \\leq 200$ <span class="memo-mark">✓</span></div><div class="memo-line">1.2: $100 < y < 300$ <span class="memo-mark">✓</span></div><div class="memo-line">1.3: $x + y \\leq 400$ <span class="memo-mark">✓</span></div><div class="memo-line">1.4: $y \\leq 2x$ <span class="memo-mark">✓</span></div><div class="memo-line">1.5: $x \\geq 3y$ <span class="memo-mark">✓</span></div><div class="memo-line">1.6: $2x \\leq 9y$ <span class="memo-mark">✓</span></div>'
},

// ——— Q5: LP application — maximize P ———
{id:1302,topic:'Unit 3: Linear Programming',
question:'The following information is applicable to the variables $x$ and $y$ with $x, y \\geq 0$:<br>• The sum of $x$ and $y$ has a minimum value of 2 and a maximum value of 8.<br>• The value of $y$ may not be more than 3 times the value of $x$.<br>• The ratio of $y$ to $x$ must not be smaller than 3:5.<br>(5.1) Represent the above constraints by a system of inequalities. [4]<br>(5.2) Represent these inequalities graphically and shade the feasible region. [3]<br>(5.3) If $P = 7x + 5y$, determine the values of $x$ and $y$ for which $P$ will have a maximum value. [3]',
markingCriteria:[
  {type:'contains',expected:['x + y ≥ 2','x+y≥2'],description:'x + y ≥ 2',marks:1},
  {type:'contains',expected:['x + y ≤ 8','x+y≤8'],description:'x + y ≤ 8',marks:1},
  {type:'contains',expected:['y ≤ 3x','y≤3x'],description:'y ≤ 3x',marks:1},
  {type:'contains',expected:['y/x','3/5','5y ≥ 3x','5y≥3x'],description:'y/x ≥ 3/5',marks:1},
  {type:'value',expected:6,tolerance:0.01,description:'x = 6',marks:2},
  {type:'value',expected:2,tolerance:0.01,description:'y = 2',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(5.1) Constraints:</strong></div><div class="memo-line">$x + y \\geq @INPUT@$ ... (1)</div><div class="memo-line">$x + y \\leq @INPUT@$ ... (2)</div><div class="memo-line">$y \\leq @INPUT@x$ ... (3)</div><div class="memo-line">$\\frac{y}{x} \\geq \\frac{@INPUT@}{@INPUT@}$ → $@INPUT@y \\geq @INPUT@x$ ... (4)</div><div class="memo-line">$x \\geq 0, y \\geq 0$</div><div class="memo-line"><strong>(5.3) Corner points of feasible region:</strong></div><div class="memo-line">Test $P = 7x + 5y$ at each corner:</div><div class="memo-line">Maximum P at $x = @INPUT@$, $y = @INPUT@$</div><div class="memo-line">$P_{max} = 7(@INPUT@) + 5(@INPUT@) = @INPUT@$</div>',
hardTemplate:'(5.1) Constraints: @INPUT@<br>(5.3) x = @INPUT@, y = @INPUT@, P_max = @INPUT@',
memo:'<div class="memo-line">$x+y \\geq 2$, $x+y \\leq 8$, $y \\leq 3x$, $5y \\geq 3x$, $x,y \\geq 0$ <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">Corner points: test P = 7x+5y. Max at x=6, y=2: P=52 <span class="memo-mark">✓✓✓</span></div>'
},

// ——— Q6: Radio manufacturing LP ———
{id:1303,topic:'Unit 3: Linear Programming',
question:'Two kinds of radios, electric ($x$) and battery ($y$), are manufactured in a certain week. At most 60 of $x$ and 100 of $y$ can be manufactured in a week. At least 80 radios must be manufactured in a week to cover the cost. It takes 40 minutes to assemble $x$ and 30 minutes to assemble $y$. The factory operates at most for 60 hours per week.<br>(6.1) Write down the constraints of this situation in terms of $x$ and $y$. [5]<br>(6.3) If the profit on $x$ is R40 and on $y$ R80, give the equation for the profit and draw the search line. [2]<br>(6.4) Use the graph to determine how many of $x$ and $y$ must be manufactured for maximum profit. [2]<br>(6.5) Calculate the maximum weekly profit. [1]',
markingCriteria:[
  {type:'contains',expected:['x ≤ 60'],description:'x ≤ 60',marks:1},
  {type:'contains',expected:['y ≤ 100'],description:'y ≤ 100',marks:1},
  {type:'contains',expected:['x + y ≥ 80'],description:'x + y ≥ 80',marks:1},
  {type:'contains',expected:['40x + 30y ≤ 3600'],description:'40x + 30y ≤ 3600',marks:1},
  {type:'contains',expected:['P = 40x + 80y'],description:'P = 40x + 80y',marks:2},
  {type:'value',expected:60,tolerance:1,description:'x = 60',marks:1},
  {type:'value',expected:40,tolerance:1,description:'y = 40',marks:1},
  {type:'value',expected:5600,tolerance:10,description:'Max profit = R5600',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(6.1) Constraints:</strong></div><div class="memo-line">$x \\leq @INPUT@$</div><div class="memo-line">$y \\leq @INPUT@$</div><div class="memo-line">$x + y \\geq @INPUT@$</div><div class="memo-line">$@INPUT@x + @INPUT@y \\leq @INPUT@$ (time in minutes: 60h = @INPUT@ min)</div><div class="memo-line">$x, y \\geq 0$</div><div class="memo-line"><strong>(6.3) Profit:</strong> $P = @INPUT@x + @INPUT@y$</div><div class="memo-line"><strong>(6.4) Optimal point:</strong> $x = @INPUT@$, $y = @INPUT@$</div><div class="memo-line"><strong>(6.5) Max profit:</strong> $P = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = R@INPUT@$</div>',
hardTemplate:'(6.1) Constraints: @INPUT@<br>(6.3) P = @INPUT@<br>(6.4) x = @INPUT@, y = @INPUT@<br>(6.5) Max profit = R@INPUT@',
memo:'<div class="memo-line">Constraints: $x \\leq 60$, $y \\leq 100$, $x+y \\geq 80$, $40x+30y \\leq 3600$ <span class="memo-mark">✓✓✓✓✓</span></div><div class="memo-line">P = 40x + 80y <span class="memo-mark">✓✓</span></div><div class="memo-line">Test corners: max at (60, 40) – intersection of x=60 and 40x+30y=3600 <span class="memo-mark">✓✓</span></div><div class="memo-line">P = 40(60)+80(40) = 2400+3200 = R5600 <span class="memo-mark">✓</span></div>'
},

// ——— Q7: Fertilizer LP ———
{id:1304,topic:'Unit 3: Linear Programming',
question:'A farmer is purchasing fertilizer containing three nutrients A, B and C. The minimum needs are 160 units of A, 200 units of B and 80 units of C. There are two popular brands of fertilizer on the market. Fast Grow ($x$), costing R800 a bag, contains 3 units of A, 5 units of B and 1 unit of C. Easy Grow ($y$), costing R600 a bag, contains 2 units of each nutrient.<br>(7.1) Write down the constraints of this situation in terms of $x$ and $y$. [4]<br>(7.3) If the farmer wants to minimize cost, how many bags of each brand should be bought? [3]<br>(7.4) The minimum cost is: [1]',
markingCriteria:[
  {type:'contains',expected:['3x + 2y ≥ 160'],description:'Nutrient A: 3x + 2y ≥ 160',marks:1},
  {type:'contains',expected:['5x + 2y ≥ 200'],description:'Nutrient B: 5x + 2y ≥ 200',marks:1},
  {type:'contains',expected:['x + 2y ≥ 80'],description:'Nutrient C: x + 2y ≥ 80',marks:1},
  {type:'value',expected:20,tolerance:1,description:'x = 20 bags',marks:2},
  {type:'value',expected:50,tolerance:1,description:'y = 50 bags',marks:1},
  {type:'value',expected:46000,tolerance:100,description:'Min cost = R46 000',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(7.1) Constraints:</strong></div><div class="memo-line">Nutrient A: $@INPUT@x + @INPUT@y \\geq @INPUT@$</div><div class="memo-line">Nutrient B: $@INPUT@x + @INPUT@y \\geq @INPUT@$</div><div class="memo-line">Nutrient C: $@INPUT@x + @INPUT@y \\geq @INPUT@$</div><div class="memo-line">$x, y \\geq 0$</div><div class="memo-line"><strong>Cost function:</strong> $C = @INPUT@x + @INPUT@y$</div><div class="memo-line"><strong>(7.3) Optimal:</strong> $x = @INPUT@$ bags, $y = @INPUT@$ bags</div><div class="memo-line"><strong>(7.4) Min cost:</strong> $C = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = R@INPUT@$</div>',
hardTemplate:'(7.1) Constraints: @INPUT@<br>(7.3) x = @INPUT@, y = @INPUT@<br>(7.4) Min cost = R@INPUT@',
memo:'<div class="memo-line">$3x+2y \\geq 160$, $5x+2y \\geq 200$, $x+2y \\geq 80$, $x,y \\geq 0$ <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">C = 800x + 600y. Test corners of feasible region. <span class="memo-mark">✓</span></div><div class="memo-line">Min at x=20, y=50: C=800(20)+600(50)=16000+30000=R46 000 <span class="memo-mark">✓✓✓</span></div>'
},

// ——— Q8: Computer factory LP ———
{id:1305,topic:'Unit 3: Linear Programming',
question:'A company has two factories to manufacture three different models of computers. Factory 1 can manufacture 60 of model A, 40 of model B and 60 of model C per day. Factory 2 can manufacture 60 of model A, 80 of model B and 40 of model C per day. The company needs to manufacture at least 2400 of model A, 2000 of model B and 1800 of model C.<br>(8.1) Assume $x$ is the number of days that Factory 1 is in use and $y$ is the number of days that Factory 2 is in use. Set up a system of inequalities to represent the constraints. [4]<br>(8.3) Write down the cost function if the daily operating cost for Factory 1 is R16 000 and for Factory 2 is R12 000. [1]<br>(8.4) Use the graph and determine the number of days each factory needs to operate to manufacture the required number of computers at the minimum cost. [3]<br>(8.5) The minimum cost is: [1]',
markingCriteria:[
  {type:'contains',expected:['60x + 60y ≥ 2400'],description:'Model A: 60x + 60y ≥ 2400',marks:1},
  {type:'contains',expected:['40x + 80y ≥ 2000'],description:'Model B: 40x + 80y ≥ 2000',marks:1},
  {type:'contains',expected:['60x + 40y ≥ 1800'],description:'Model C: 60x + 40y ≥ 1800',marks:1},
  {type:'contains',expected:['C = 16000x + 12000y'],description:'C = 16000x + 12000y',marks:1},
  {type:'value',expected:20,tolerance:1,description:'x = 20 days',marks:2},
  {type:'value',expected:20,tolerance:1,description:'y = 20 days',marks:1},
  {type:'value',expected:560000,tolerance:1000,description:'Min cost = R560 000',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(8.1) Constraints:</strong></div><div class="memo-line">Model A: $@INPUT@x + @INPUT@y \\geq @INPUT@$ → $x + y \\geq @INPUT@$</div><div class="memo-line">Model B: $@INPUT@x + @INPUT@y \\geq @INPUT@$ → $x + 2y \\geq @INPUT@$</div><div class="memo-line">Model C: $@INPUT@x + @INPUT@y \\geq @INPUT@$ → $3x + 2y \\geq @INPUT@$</div><div class="memo-line">$x, y \\geq 0$</div><div class="memo-line"><strong>(8.3) Cost function:</strong> $C = @INPUT@x + @INPUT@y$</div><div class="memo-line"><strong>(8.4) Optimal:</strong> $x = @INPUT@$ days, $y = @INPUT@$ days</div><div class="memo-line"><strong>(8.5) Min cost:</strong> $C = R@INPUT@$</div>',
hardTemplate:'(8.1) Constraints: @INPUT@<br>(8.3) C = @INPUT@<br>(8.4) x = @INPUT@, y = @INPUT@<br>(8.5) Min cost = R@INPUT@',
memo:'<div class="memo-line">$60x+60y \\geq 2400$, $40x+80y \\geq 2000$, $60x+40y \\geq 1800$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line">Simplified: $x+y \\geq 40$, $x+2y \\geq 50$, $3x+2y \\geq 90$ <span class="memo-mark">✓</span></div><div class="memo-line">$C = 16000x + 12000y$ <span class="memo-mark">✓</span></div><div class="memo-line">Test corners: min at (20,20) → C=320000+240000=R560 000 <span class="memo-mark">✓✓✓✓</span></div>'
},

// ——— MTHS112 Exam LP question ———
{id:1306,topic:'Unit 3: Linear Programming',
question:'A small business makes tables and chairs. Each table requires 3 hours of carpentry and 2 hours of finishing. Each chair requires 2 hours of carpentry and 1 hour of finishing. There are at most 36 hours available for carpentry and 20 hours for finishing per week. The profit is R50 per table and R30 per chair.<br>(a) Write down the constraints. [4]<br>(b) Determine the number of tables and chairs that should be produced for maximum profit. [4]<br>(c) Calculate the maximum weekly profit. [2]',
markingCriteria:[
  {type:'contains',expected:['3x + 2y ≤ 36'],description:'Carpentry: 3x + 2y ≤ 36',marks:1},
  {type:'contains',expected:['2x + y ≤ 20'],description:'Finishing: 2x + y ≤ 20',marks:1},
  {type:'value',expected:4,tolerance:1,description:'Tables = 4',marks:2},
  {type:'value',expected:12,tolerance:1,description:'Chairs = 12',marks:2},
  {type:'value',expected:560,tolerance:10,description:'Max profit = R560',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>(a) Constraints:</strong></div><div class="memo-line">Carpentry: $@INPUT@x + @INPUT@y \\leq @INPUT@$</div><div class="memo-line">Finishing: $@INPUT@x + @INPUT@y \\leq @INPUT@$</div><div class="memo-line">$x, y \\geq 0$</div><div class="memo-line"><strong>Profit:</strong> $P = @INPUT@x + @INPUT@y$</div><div class="memo-line"><strong>(b) Corner points:</strong></div><div class="memo-line">$(0,0)$: $P = 0$</div><div class="memo-line">$(@INPUT@, 0)$: $P = @INPUT@$</div><div class="memo-line">$(0, @INPUT@)$: $P = @INPUT@$</div><div class="memo-line">$(@INPUT@, @INPUT@)$: $P = @INPUT@(@INPUT@) + @INPUT@(@INPUT@) = @INPUT@$ ← Max</div><div class="memo-line"><strong>(c) Max profit:</strong> $P = R@INPUT@$</div>',
hardTemplate:'(a) Constraints: @INPUT@<br>(b) Tables = @INPUT@, Chairs = @INPUT@<br>(c) Max profit = R@INPUT@',
memo:'<div class="memo-line">$3x+2y \\leq 36$, $2x+y \\leq 20$, $x,y \\geq 0$ <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">P = 50x + 30y. Corners: (0,0), (10,0), (0,18), (4,12) <span class="memo-mark">✓✓</span></div><div class="memo-line">Max at (4,12): P=200+360=R560 <span class="memo-mark">✓✓✓✓</span></div>'
}

];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
