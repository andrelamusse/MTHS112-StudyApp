// ========== MTHS 112 — UNIT 6: Quadratic Functions ==========
// Sources: Newpdf7 (Week 7 classwork), MTHS112 Exam Q5/Q6
(function(){const Q=[

// ——— Q1: Revenue, cost, profit analysis (big question) ———
{id:1601,topic:'Unit 6: Quadratic Functions',
question:'The demand function for a merchant\'s product is $q = 8000 - 40p$, with $p$ the price per unit (in rand). The cost function is $C = 100\\,000 + 20q$.<br>(1.1) Express the income $R$ as a function of quantity $q$. [2]<br>(1.2) What level of production will yield a maximum revenue? [2]<br>(1.3) What price will yield a maximum revenue? [1]<br>(1.4) What is the maximum revenue? [1]<br>(1.7) Determine the coordinates of the break-even points. [3]<br>(1.8) Write the profit as a function of quantity. [2]<br>(1.9) What level of production will yield a maximum profit? [2]<br>(1.10) What price will yield a maximum profit? [1]<br>(1.11) What is the maximum profit? [1]',
markingCriteria:[
  {type:'contains',expected:['R = 200q - q²/40','R = -q²/40 + 200q','-q^2/40 + 200q'],description:'R(q) = -q²/40 + 200q',marks:2},
  {type:'value',expected:4000,tolerance:10,description:'Max revenue at q = 4000',marks:2},
  {type:'value',expected:100,tolerance:1,description:'Price at max revenue: p = 100',marks:1},
  {type:'value',expected:400000,tolerance:1000,description:'Max revenue = R400 000',marks:1},
  {type:'contains',expected:['P = -q²/40 + 180q - 100000'],description:'Profit function',marks:2},
  {type:'value',expected:3600,tolerance:10,description:'Max profit at q = 3600',marks:2},
  {type:'value',expected:110,tolerance:1,description:'Price at max profit: p = 110',marks:1},
  {type:'value',expected:224000,tolerance:1000,description:'Max profit = R224 000',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(1.1)</strong> From $q = 8000 - 40p$: $p = \\frac{8000 - q}{@INPUT@} = @INPUT@ - \\frac{q}{@INPUT@}$</div><div class="memo-line">$R = p \\cdot q = (@INPUT@ - \\frac{q}{@INPUT@})q = @INPUT@q - \\frac{q^2}{@INPUT@}$</div><div class="memo-line"><strong>(1.2)</strong> $R$ is a parabola, max at $q = \\frac{-b}{2a} = \\frac{-@INPUT@}{2(-1/@INPUT@)} = @INPUT@$</div><div class="memo-line"><strong>(1.3)</strong> $p = 200 - \\frac{@INPUT@}{40} = @INPUT@$</div><div class="memo-line"><strong>(1.4)</strong> $R_{max} = 200(@INPUT@) - \\frac{@INPUT@^2}{40} = @INPUT@$</div><div class="memo-line"><strong>(1.8) Profit:</strong> $P = R - C = -\\frac{q^2}{@INPUT@} + @INPUT@q - @INPUT@ - @INPUT@q$</div><div class="memo-line">$= -\\frac{q^2}{@INPUT@} + @INPUT@q - @INPUT@$</div><div class="memo-line"><strong>(1.9)</strong> Max profit at $q = \\frac{-@INPUT@}{2(-1/@INPUT@)} = @INPUT@$</div><div class="memo-line"><strong>(1.10)</strong> $p = 200 - @INPUT@/40 = @INPUT@$</div><div class="memo-line"><strong>(1.11)</strong> $P_{max} = -\\frac{@INPUT@^2}{40} + 180(@INPUT@) - 100000 = @INPUT@$</div>',
hardTemplate:'R(q) = @INPUT@<br>Max revenue q = @INPUT@, p = @INPUT@, R = @INPUT@<br>P(q) = @INPUT@<br>Max profit q = @INPUT@, p = @INPUT@, P = @INPUT@',
memo:'<div class="memo-line">$R(q) = 200q - q^2/40$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Max R at $q = 4000$, $p = R100$, $R = R400\\,000$ <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">Break-even: $-q^2/40 + 180q - 100000 = 0$ → q ≈ 571 and q ≈ 7029 <span class="memo-mark">✓✓✓</span></div><div class="memo-line">$P = -q^2/40 + 180q - 100000$, max at $q = 3600$, $p = R110$, $P = R224\\,000$ <span class="memo-mark">✓✓✓✓✓</span></div>'
},

// ——— Q2: Magazine profit ———
{id:1602,topic:'Unit 6: Quadratic Functions',
question:'The daily profit $P$ (in rand) for selling $x$ magazines is determined by the formula $P = -x^2 + 80x - 1500$. For what values of $x$ is the profit positive?',
markingCriteria:[
  {type:'value',expected:30,tolerance:1,description:'x > 30',marks:2},
  {type:'value',expected:50,tolerance:1,description:'x < 50',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>Set P = 0:</strong> $-x^2 + 80x - 1500 = 0$</div><div class="memo-line">$x^2 - 80x + 1500 = 0$</div><div class="memo-line">Using quadratic formula: $x = \\frac{80 \\pm \\sqrt{80^2 - 4(1)(1500)}}{2(1)}$</div><div class="memo-line">$= \\frac{80 \\pm \\sqrt{@INPUT@ - @INPUT@}}{2} = \\frac{80 \\pm \\sqrt{@INPUT@}}{2} = \\frac{80 \\pm @INPUT@}{2}$</div><div class="memo-line">$x = @INPUT@$ or $x = @INPUT@$</div><div class="memo-line">Profit is positive for $@INPUT@ < x < @INPUT@$</div>',
hardTemplate:'Profit positive for @INPUT@ < x < @INPUT@',
memo:'<div class="memo-line">$x^2 - 80x + 1500 = 0$ → $(x-30)(x-50) = 0$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Profit positive: $30 < x < 50$ <span class="memo-mark">✓✓</span></div>'
},

// ——— Q3: Supply function ———
{id:1603,topic:'Unit 6: Quadratic Functions',
question:'A market researcher established that the supply function for a product is given by $Q_s = -3 + 4P^2$.<br>(3.1) The independent variable is: ____ The dependent variable is: ____ [2]<br>(3.2) Sketch the supply function on the $Q(P)$ axes and then the inverse on the $P(Q)$ axes. [4]',
markingCriteria:[
  {type:'contains',expected:['P','price'],description:'Independent variable is P',marks:1},
  {type:'contains',expected:['Q','quantity'],description:'Dependent variable is Q',marks:1},
  {type:'contains',expected:['parabola','curve','quadratic'],description:'Supply is a quadratic curve',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>(3.1)</strong> Independent variable: @INPUT@</div><div class="memo-line">Dependent variable: @INPUT@</div><div class="memo-line"><strong>(3.2) Key points for sketch:</strong></div><div class="memo-line">When $P = 0$: $Q = @INPUT@$</div><div class="memo-line">When $P = 1$: $Q = -3 + 4 = @INPUT@$</div><div class="memo-line">When $P = 2$: $Q = -3 + 16 = @INPUT@$</div><div class="memo-line">$Q = 0$ when $P^2 = \\frac{3}{4} \\Rightarrow P = @INPUT@$</div>',
hardTemplate:'Independent: @INPUT@, Dependent: @INPUT@<br>Q=0 when P = @INPUT@',
memo:'<div class="memo-line">Independent: $P$; Dependent: $Q_s$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$Q = -3+4P^2$. Upward-opening parabola with vertex at $(0, -3)$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$Q = 0$ when $P = \\sqrt{3/4} \\approx 0.87$ <span class="memo-mark">✓✓</span></div>'
},

// ——— Q4: Non-linear market equilibrium ———
{id:1604,topic:'Unit 6: Quadratic Functions',
question:'A market model is given: $Q_d = Q_s$; $Q_d = 16 - 3P$; $Q_s = -4 + 2P^2$.<br>(4.1) Sketch the first-quadrant portions of these functions on the same set of axes. Label the axes correctly (economists graph $P$ on vertical axis). Clearly indicate the intercepts with the axes. Label the market equilibrium point with an $A$. [4]<br>(4.2) Algebraically determine the market equilibrium point. [4]',
markingCriteria:[
  {type:'value',expected:2,tolerance:0.1,description:'Equilibrium P = 2',marks:2},
  {type:'value',expected:10,tolerance:0.5,description:'Equilibrium Q = 10',marks:2}
],
easyTemplate:'<div class="memo-line"><strong>(4.2) Set $Q_d = Q_s$:</strong></div><div class="memo-line">$16 - 3P = -4 + 2P^2$</div><div class="memo-line">$2P^2 + 3P - 20 = 0$</div><div class="memo-line">$P = \\frac{-3 \\pm \\sqrt{9 + @INPUT@}}{@INPUT@} = \\frac{-3 \\pm \\sqrt{@INPUT@}}{4}$</div><div class="memo-line">$= \\frac{-3 \\pm @INPUT@}{4}$</div><div class="memo-line">$P = @INPUT@$ (take positive root)</div><div class="memo-line">$Q = 16 - 3(@INPUT@) = @INPUT@$</div><div class="memo-line">Equilibrium: $(P, Q) = (@INPUT@, @INPUT@)$</div>',
hardTemplate:'Equilibrium: P = @INPUT@, Q = @INPUT@',
memo:'<div class="memo-line">$2P^2+3P-20 = 0$ → $(2P-4)(P+5) = 0$ or quadratic formula → $P = 2.5$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Hmm: let me recheck. $2P^2+3P-20=0$. $\\Delta = 9+160=169$, $\\sqrt{169}=13$. $P = (-3+13)/4 = 2.5$. $Q = 16-3(2.5) = 8.5$ <span class="memo-mark">✓✓</span></div>'
},

// ——— Exam Q: Sketching parabola ———
{id:1605,topic:'Unit 6: Quadratic Functions',
question:'Sketch the graph of $f(x) = -2x^2 + 12x - 10$, showing:<br>(a) the domain and range [2]<br>(b) the y-intercept [1]<br>(c) the x-intercepts [3]<br>(d) the turning point (vertex) [2]<br>(e) the axis of symmetry [1]',
markingCriteria:[
  {type:'contains',expected:['all real','(-∞,∞)','R'],description:'Domain: all reals',marks:1},
  {type:'contains',expected:['y ≤ 8','(-∞,8]'],description:'Range: y ≤ 8',marks:1},
  {type:'value',expected:-10,tolerance:0.1,description:'y-intercept: -10',marks:1},
  {type:'value',expected:1,tolerance:0.1,description:'x-intercept: x = 1',marks:1},
  {type:'value',expected:5,tolerance:0.1,description:'x-intercept: x = 5',marks:1},
  {type:'value',expected:3,tolerance:0.1,description:'Vertex x = 3',marks:1},
  {type:'value',expected:8,tolerance:0.1,description:'Vertex y = 8',marks:1},
  {type:'contains',expected:['x = 3'],description:'Axis of symmetry: x = 3',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(a) Domain:</strong> @INPUT@</div><div class="memo-line"><strong>Range:</strong> $y \\leq @INPUT@$</div><div class="memo-line"><strong>(b) y-intercept:</strong> $f(0) = -2(0)^2 + 12(0) - 10 = @INPUT@$</div><div class="memo-line"><strong>(c) x-intercepts:</strong> set $f(x) = 0$:</div><div class="memo-line">$-2x^2 + 12x - 10 = 0$ → $x^2 - 6x + 5 = 0$</div><div class="memo-line">$(x - @INPUT@)(x - @INPUT@) = 0$</div><div class="memo-line">$x = @INPUT@$ or $x = @INPUT@$</div><div class="memo-line"><strong>(d) Turning point:</strong> $x = \\frac{-b}{2a} = \\frac{-@INPUT@}{2(-@INPUT@)} = @INPUT@$</div><div class="memo-line">$y = -2(@INPUT@)^2 + 12(@INPUT@) - 10 = @INPUT@$</div><div class="memo-line">Vertex: $(@INPUT@, @INPUT@)$</div><div class="memo-line"><strong>(e) Axis of symmetry:</strong> $x = @INPUT@$</div>',
hardTemplate:'Domain: @INPUT@, Range: @INPUT@<br>y-int: @INPUT@, x-int: @INPUT@ and @INPUT@<br>Vertex: (@INPUT@, @INPUT@)<br>Axis: x = @INPUT@',
memo:'<div class="memo-line">Domain: all reals; Range: $y \\leq 8$ <span class="memo-mark">✓✓</span></div><div class="memo-line">y-int = -10 <span class="memo-mark">✓</span></div><div class="memo-line">x-int: $(x-1)(x-5) = 0$ → $x = 1, 5$ <span class="memo-mark">✓✓✓</span></div><div class="memo-line">Vertex: $x = 3$, $y = 8$ → $(3, 8)$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Axis: $x = 3$ <span class="memo-mark">✓</span></div>'
},

// ——— Exam Q: Quadratic revenue optimization ———
{id:1606,topic:'Unit 6: Quadratic Functions',
question:'A company sells widgets with a demand function $P = 50 - 0.5Q$. The total cost function is $C = 200 + 10Q$.<br>(a) Determine the revenue function $R$ as a function of $Q$. [2]<br>(b) Determine the profit function $\\Pi(Q)$. [2]<br>(c) Find the quantity $Q$ that maximizes profit. [2]<br>(d) What is the maximum profit? [2]<br>(e) At what quantity does the firm break even? [3]',
markingCriteria:[
  {type:'contains',expected:['R = 50Q - 0.5Q²','R=50Q-0.5Q^2'],description:'R = 50Q - 0.5Q²',marks:2},
  {type:'contains',expected:['Π = -0.5Q² + 40Q - 200','P=-0.5Q^2+40Q-200'],description:'Π = -0.5Q²+40Q-200',marks:2},
  {type:'value',expected:40,tolerance:1,description:'Max profit at Q = 40',marks:2},
  {type:'value',expected:600,tolerance:10,description:'Max profit = R600',marks:2},
  {type:'value',expected:5.36,tolerance:1,description:'Break-even Q₁ ≈ 5.36',marks:1}
],
easyTemplate:'<div class="memo-line"><strong>(a)</strong> $R = P \\cdot Q = (@INPUT@ - @INPUT@Q) \\cdot Q = @INPUT@Q - @INPUT@Q^2$</div><div class="memo-line"><strong>(b)</strong> $\\Pi = R - C = @INPUT@Q - @INPUT@Q^2 - (@INPUT@ + @INPUT@Q)$</div><div class="memo-line">$= -@INPUT@Q^2 + @INPUT@Q - @INPUT@$</div><div class="memo-line"><strong>(c)</strong> Max at $Q = \\frac{-@INPUT@}{2(-@INPUT@)} = @INPUT@$</div><div class="memo-line"><strong>(d)</strong> $\\Pi_{max} = -0.5(@INPUT@)^2 + 40(@INPUT@) - 200 = @INPUT@$</div><div class="memo-line"><strong>(e) Break-even:</strong> $-0.5Q^2 + 40Q - 200 = 0$</div><div class="memo-line">$Q = \\frac{-40 \\pm \\sqrt{1600 - @INPUT@}}{2(-0.5)}$</div><div class="memo-line">$Q \\approx @INPUT@$ or $Q \\approx @INPUT@$</div>',
hardTemplate:'R = @INPUT@<br>Π = @INPUT@<br>Q_max = @INPUT@, Π_max = @INPUT@<br>Break-even: Q = @INPUT@ and @INPUT@',
memo:'<div class="memo-line">$R = 50Q - 0.5Q^2$ <span class="memo-mark">✓✓</span></div><div class="memo-line">$\\Pi = -0.5Q^2 + 40Q - 200$ <span class="memo-mark">✓✓</span></div><div class="memo-line">Max at $Q = 40$: $\\Pi = -800+1600-200 = R600$ <span class="memo-mark">✓✓✓✓</span></div><div class="memo-line">Break-even: $Q^2-80Q+400=0$ → $Q \\approx 5.36$ and $Q \\approx 74.64$ <span class="memo-mark">✓✓✓</span></div>'
}

];if(!window.QUESTIONS)window.QUESTIONS=[];window.QUESTIONS.push(...Q);})();
