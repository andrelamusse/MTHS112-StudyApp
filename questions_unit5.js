// ========== MTHS 112 — UNIT 5: Linear Functions ==========
// Sources: Newpdf6 (Week 6 classwork), MTHS112 Exam demand/supply questions
(function(){const Q=[

// ——— Q2: Market equilibrium ———
{id:1501,topic:'Unit 5: Linear Functions',
question:'A market researcher established that the demand function for a product is given by $Q + 10P = 120$ and the supply function by $Q - 5P = -10$.<br>(2.1) Determine the market equilibrium point for the given supply and demand functions. [4]<br>(2.2) Draw sketch graphs of the demand and supply functions on the given system of axes for the region $Q \\geq 0, P \\geq 0$. Indicate the market equilibrium with an A. [4]',
markingCriteria:[
  {type:'value',expected:8.67,tolerance:0.1,description:'Equilibrium P ≈ 8.67',marks:2},
  {type:'value',expected:33.33,tolerance:1,description:'Equilibrium Q ≈ 33.33',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Demand:</strong> $Q = @INPUT@ - @INPUT@P$</div><div class="memo-line"><strong>Supply:</strong> $Q = @INPUT@P - @INPUT@$</div><div class="memo-line"><strong>Equilibrium:</strong> Set demand = supply:</div><div class="memo-line">$@INPUT@ - @INPUT@P = @INPUT@P - @INPUT@$</div><div class="memo-line">$@INPUT@ = @INPUT@P$</div><div class="memo-line">$P = \\frac{@INPUT@}{@INPUT@} \\approx @INPUT@$</div><div class="memo-line">$Q = 120 - 10(@INPUT@) = @INPUT@$</div><div class="memo-line">Equilibrium point: $(P, Q) \\approx (@INPUT@,\\; @INPUT@)$</div>',
hardTemplate:'Equilibrium: P = @INPUT@, Q = @INPUT@',
memo:'<div class="memo-line">$120-10P = 5P-10$ → $130 = 15P$ → $P = 130/15 \\approx 8.67$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$Q = 120 - 10(8.67) \\approx 33.3$ <span class="memo-mark">✓✓</span></div>'
},

// ——— Q3: Demand/supply from schedule ———
{id:1502,topic:'Unit 5: Linear Functions',
question:'Consider the supply and demand schedules:<br>Price: 10, 12, 14, 16, 18, 20<br>Demand: 10, 9, 8, 7, 6, 5<br>Supply: 3, 4, 5, 6, 7, 8<br>(3.2) Determine the demand and supply functions in the form $Q = aP + b$. [4]<br>(3.3) Determine the demand and supply equations in the form $P = aQ + b$. [2]<br>(3.4) Determine the coordinates of the market equilibrium. [3]',
markingCriteria:[
  {type:'contains',expected:['-0.5','15','Q = -0.5P + 15','Q=-0.5P+15'],description:'Demand: Q = -0.5P + 15',marks:2},
  {type:'contains',expected:['0.5','-2','Q = 0.5P - 2','Q=0.5P-2'],description:'Supply: Q = 0.5P - 2',marks:2},
  {type:'value',expected:17,tolerance:0.1,description:'Equilibrium P = 17',marks:2},
  {type:'value',expected:6.5,tolerance:0.1,description:'Equilibrium Q = 6.5',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(3.2) Demand function:</strong></div><div class="memo-line">Slope = $\\frac{@INPUT@ - @INPUT@}{@INPUT@ - @INPUT@} = @INPUT@$</div><div class="memo-line">$Q_d = @INPUT@P + @INPUT@$</div><div class="memo-line"><strong>Supply function:</strong></div><div class="memo-line">Slope = $\\frac{@INPUT@ - @INPUT@}{@INPUT@ - @INPUT@} = @INPUT@$</div><div class="memo-line">$Q_s = @INPUT@P + (@INPUT@)$</div><div class="memo-line"><strong>(3.4) Equilibrium:</strong> $@INPUT@P + @INPUT@ = @INPUT@P - @INPUT@$</div><div class="memo-line">$@INPUT@P = @INPUT@ \\Rightarrow P = @INPUT@$</div><div class="memo-line">$Q = -0.5(@INPUT@) + 15 = @INPUT@$</div>',
hardTemplate:'Demand: @INPUT@<br>Supply: @INPUT@<br>Equilibrium: P = @INPUT@, Q = @INPUT@',
memo:'<div class="memo-line">Demand: $m = (5-10)/(20-10) = -0.5$, $Q = -0.5P + 15$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Supply: $m = (8-3)/(20-10) = 0.5$, $Q = 0.5P - 2$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$-0.5P+15 = 0.5P-2$ → $P = 17$, $Q = 6.5$ <span class="memo-mark">✓✓✓</span></div>'
},

// ——— Q4: Income effect on demand ———
{id:1503,topic:'Unit 5: Linear Functions',
question:'The demand for a certain product is given by $Q_d = 350 - 5P + 0.025Y$, with $P$ the price per unit and $Y$ the average income of the consumer.<br>(4.1) Rewrite the demand function $Q$ in terms of $P$ if the average income of the consumer is fixed at R20 000. [2]<br>(4.3) Suppose there is a recession and the average income decreases to R16 000. Graph the new demand function and explain the change in the relationship between quantity demanded and price per unit. [3]',
markingCriteria:[
  {type:'contains',expected:['Q = 850 - 5P','Q=850-5P'],description:'Q = 850 - 5P (at Y=20000)',marks:2},
  {type:'contains',expected:['Q = 750 - 5P','Q=750-5P'],description:'Q = 750 - 5P (at Y=16000)',marks:2},
  {type:'contains',expected:['shift','left','decrease','lower'],description:'Demand curve shifts left/down',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(4.1)</strong> $Q_d = 350 - 5P + 0.025(@INPUT@)$</div><div class="memo-line">$= 350 - 5P + @INPUT@ = @INPUT@ - @INPUT@P$</div><div class="memo-line"><strong>(4.3)</strong> At $Y = 16000$:</div><div class="memo-line">$Q_d = 350 - 5P + 0.025(@INPUT@) = @INPUT@ - 5P$</div><div class="memo-line">The demand curve shifts @INPUT@ (to the left), meaning at any given price, fewer units are demanded.</div>',
hardTemplate:'Q(Y=20000) = @INPUT@<br>Q(Y=16000) = @INPUT@<br>Effect: @INPUT@',
memo:'<div class="memo-line">$Q = 350 - 5P + 0.025(20000) = 350 - 5P + 500 = 850 - 5P$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$Q = 350 - 5P + 0.025(16000) = 350 - 5P + 400 = 750 - 5P$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Curve shifts left/down — less demand at lower income <span class="memo-mark">✓</span></div>'
},

// ——— Q5: Market equilibrium with 25% demand increase ———
{id:1504,topic:'Unit 5: Linear Functions',
question:'A market researcher established that the demand function for a product is given by $Q_d = 120 - 10P$ and the supply function by $Q_s = 8P$.<br>(5.1) Determine coordinates of market equilibrium. [3]<br>(5.3) Assume the demand increases by 25% owing to an advertising campaign. Determine the coordinates of the new market equilibrium. Give an explanation for the change. [4]',
markingCriteria:[
  {type:'value',expected:6.67,tolerance:0.1,description:'Original P ≈ 6.67',marks:1},
  {type:'value',expected:53.33,tolerance:1,description:'Original Q ≈ 53.33',marks:2},
  {type:'value',expected:8.33,tolerance:0.1,description:'New P ≈ 8.33',marks:2},
  {type:'value',expected:66.67,tolerance:1,description:'New Q ≈ 66.67',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>(5.1)</strong> $120 - 10P = 8P$</div><div class="memo-line">$@INPUT@ = @INPUT@P \\Rightarrow P = @INPUT@$</div><div class="memo-line">$Q = 8(@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>(5.3)</strong> New demand: $Q_d = 1.25(120 - 10P) = @INPUT@ - @INPUT@P$</div><div class="memo-line">$@INPUT@ - @INPUT@P = 8P \\Rightarrow @INPUT@ = @INPUT@P$</div><div class="memo-line">$P = @INPUT@$, $Q = @INPUT@$</div><div class="memo-line">Both price and quantity @INPUT@ due to advertising-driven demand increase.</div>',
hardTemplate:'(5.1) P = @INPUT@, Q = @INPUT@<br>(5.3) New P = @INPUT@, New Q = @INPUT@',
memo:'<div class="memo-line">$120-10P = 8P$ → $18P = 120$ → $P ≈ 6.67$, $Q ≈ 53.3$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line">New: $150-12.5P = 8P$ → $20.5P = 150$ → $P ≈ 7.32$, $Q ≈ 58.5$ <span class="memo-mark">✓✓✓✓</span></div>'
},

// ——— Q6: Unit tax effect on equilibrium ———
{id:1505,topic:'Unit 5: Linear Functions',
question:'A market researcher found that the demand function for a product is given by $Q_d = 100 - 12P$ and the supply function by $Q_s = -12 + 8P$.<br>(6.1) Determine the values of the price and quantity at the market equilibrium. [3]<br>(6.3) Determine the effect of a unit tax of R5 on the supply function and sketch the new supply function on the set of axes as a dashed line. [2]<br>(6.4) Determine the values of the price and quantity at the new market equilibrium and explain the difference. [3]',
markingCriteria:[
  {type:'value',expected:5.6,tolerance:0.1,description:'Original P = 5.6',marks:1},
  {type:'value',expected:32.8,tolerance:1,description:'Original Q = 32.8',marks:2},
  {type:'contains',expected:['Q = -52 + 8P','Q=-52+8P','-12 + 8(P-5)'],description:'New supply: Q = -52 + 8P',marks:2},
  {type:'value',expected:7.6,tolerance:0.1,description:'New P ≈ 7.6',marks:2},
  {type:'value',expected:8.8,tolerance:1,description:'New Q ≈ 8.8',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(6.1)</strong> $100 - 12P = -12 + 8P$</div><div class="memo-line">$@INPUT@ = @INPUT@P \\Rightarrow P = @INPUT@$</div><div class="memo-line">$Q = 100 - 12(@INPUT@) = @INPUT@$</div><div class="memo-line"><strong>(6.3)</strong> Unit tax of R5 shifts supply: producers receive $P - @INPUT@$ per unit.</div><div class="memo-line">New supply: $Q_s = -12 + 8(P - @INPUT@) = -@INPUT@ + @INPUT@P$</div><div class="memo-line"><strong>(6.4)</strong> $100 - 12P = -@INPUT@ + 8P$</div><div class="memo-line">$@INPUT@ = @INPUT@P \\Rightarrow P = @INPUT@$, $Q = @INPUT@$</div><div class="memo-line">Price @INPUT@ and quantity @INPUT@ due to the tax.</div>',
hardTemplate:'(6.1) P = @INPUT@, Q = @INPUT@<br>(6.3) New supply: @INPUT@<br>(6.4) New P = @INPUT@, Q = @INPUT@',
memo:'<div class="memo-line">$100-12P = -12+8P$ → $112 = 20P$ → $P = 5.6$, $Q = 32.8$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line">New supply: $Q = -12+8(P-5) = -52+8P$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$100-12P = -52+8P$ → $152=20P$ → $P=7.6$, $Q=8.8$ <span class="memo-mark">✓✓✓</span></div>'
},

// ——— Q7: Revenue, cost, profit, break-even ———
{id:1506,topic:'Unit 5: Linear Functions',
question:'A firm has fixed cost of R450, variable costs of R5 per unit and a selling price of R10 per unit.<br>(7.1) Determine functions for the revenue, cost and profit in terms of the level of sales $q$. [3]<br>(7.2) At what sales level does the firm break even? [2]',
markingCriteria:[
  {type:'contains',expected:['R = 10q','R(q) = 10q'],description:'Revenue: R(q) = 10q',marks:1},
  {type:'contains',expected:['C = 450 + 5q','C(q) = 450+5q','C = 5q + 450'],description:'Cost: C(q) = 450 + 5q',marks:1},
  {type:'contains',expected:['P = 5q - 450','P(q) = 5q-450'],description:'Profit: P(q) = 5q - 450',marks:1},
  {type:'value',expected:90,tolerance:1,description:'Break-even at q = 90',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>(7.1)</strong></div><div class="memo-line">Revenue: $R(q) = @INPUT@q$</div><div class="memo-line">Cost: $C(q) = @INPUT@ + @INPUT@q$</div><div class="memo-line">Profit: $P(q) = R(q) - C(q) = @INPUT@q - (@INPUT@ + @INPUT@q) = @INPUT@q - @INPUT@$</div><div class="memo-line"><strong>(7.2) Break-even:</strong> $P(q) = 0$</div><div class="memo-line">$@INPUT@q - @INPUT@ = 0 \\Rightarrow q = @INPUT@$</div>',
hardTemplate:'R(q) = @INPUT@<br>C(q) = @INPUT@<br>P(q) = @INPUT@<br>Break-even: q = @INPUT@',
memo:'<div class="memo-line">$R = 10q$, $C = 450+5q$, $P = 5q-450$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line">Break-even: $5q = 450$ → $q = 90$ units <span class="memo-mark">✓✓</span></div>'
},

// ——— Q8: Budget function ———
{id:1507,topic:'Unit 5: Linear Functions',
question:'Assume a consumer has a budget $M$ to spend on two goods $X$ and $Y$ with prices of $P_x$ and $P_y$ respectively.<br>(8.1) What is the consumer\'s budget function? [1]<br>(8.2) Determine an equation for the slope of the budget function. [1]<br>(8.3) Determine the budget function for $M = R4000$, $P_x = R10$ and $P_y = R30$. [2]<br>(8.5) What will happen if the price of $Y$ decreases? [1]<br>(8.6) What will happen if the income increases? [1]',
markingCriteria:[
  {type:'contains',expected:['P_xX + P_yY = M','XP_x + YP_y = M','M = P_xX + P_yY'],description:'Budget: M = P_x·X + P_y·Y',marks:1},
  {type:'contains',expected:['-P_x/P_y','slope'],description:'Slope = -P_x/P_y',marks:1},
  {type:'contains',expected:['10X + 30Y = 4000'],description:'10X + 30Y = 4000',marks:2},
  {type:'contains',expected:['steeper','flatter','rotate','pivot'],description:'Budget line pivots outward on Y-axis',marks:1},
  {type:'contains',expected:['shift','outward','parallel'],description:'Budget line shifts outward (parallel)',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(8.1)</strong> Budget function: $@INPUT@X + @INPUT@Y = @INPUT@$</div><div class="memo-line">Or generally: $P_xX + P_yY = M$</div><div class="memo-line"><strong>(8.2)</strong> Slope: $\\frac{\\Delta Y}{\\Delta X} = -\\frac{P_x}{P_y} = -\\frac{@INPUT@}{@INPUT@} = @INPUT@$</div><div class="memo-line"><strong>(8.3)</strong> $@INPUT@X + @INPUT@Y = @INPUT@$</div><div class="memo-line">$Y = @INPUT@ - @INPUT@X$</div><div class="memo-line"><strong>(8.5)</strong> If $P_y$ decreases: budget line @INPUT@ outward on Y-axis</div><div class="memo-line"><strong>(8.6)</strong> If income increases: budget line shifts @INPUT@ (parallel)</div>',
hardTemplate:'(8.1) @INPUT@<br>(8.2) Slope = @INPUT@<br>(8.3) @INPUT@<br>(8.5) @INPUT@<br>(8.6) @INPUT@',
memo:'<div class="memo-line">$M = P_xX + P_yY$ <span class="memo-mark">✓</span></div><div class="memo-line">Slope = $-P_x/P_y = -10/30 = -1/3$ <span class="memo-mark">✓</span></div><div class="memo-line">$10X + 30Y = 4000$ or $Y = 133.3 - X/3$ <span class="memo-mark">✓✓</span></div><div class="memo-line">P_y↓ → rotates outward on Y-axis <span class="memo-mark">✓</span></div><div class="memo-line">M↑ → parallel shift outward <span class="memo-mark">✓</span></div>'
}

];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
